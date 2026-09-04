"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type MutableRefObject,
  type ReactNode,
} from "react";

type FieldApi = {
  setEnergy: (value: number) => void;
  setMode: (value: number) => void;
};

const FieldContext = createContext<FieldApi | null>(null);

export function useField() {
  return useContext(FieldContext);
}

export function useFieldHover(mode = 1) {
  const field = useField();
  return {
    onPointerEnter: () => {
      field?.setEnergy(1);
      field?.setMode(mode);
    },
    onPointerLeave: () => {
      field?.setEnergy(0);
      field?.setMode(0);
    },
  };
}

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_pointer;
uniform float u_scroll;
uniform float u_energy;
uniform float u_mode;

float gridLine(vec2 p, float cells, float width) {
  vec2 g = abs(fract(p * cells) - 0.5);
  return max(
    1.0 - smoothstep(0.0, width, g.x),
    1.0 - smoothstep(0.0, width, g.y)
  );
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  vec2 mp = (u_pointer - 0.5) * vec2(aspect, 1.0);

  vec3 bg = vec3(0.035, 0.032, 0.026);
  vec3 gold = vec3(0.62, 0.50, 0.22);
  vec3 col = bg;

  float horizon = smoothstep(0.16, -0.04, p.y);
  col += gold * 0.04 * horizon * (0.5 + 0.5 * uv.x);

  vec3 ro = vec3(0.0, 1.28, -u_time * 0.05 - u_scroll * 1.1);
  vec3 rd = normalize(vec3(p.x * 0.92, p.y - 0.18, 1.35));
  float t = abs(rd.y) > 0.001 ? -ro.y / rd.y : -1.0;

  if (t > 0.12 && t < 26.0) {
    vec3 hit = ro + rd * t;
    vec2 gp = hit.xz;
    gp.x += mp.x * 0.18;

    float width = 0.018 + t * 0.0045;
    float line = gridLine(gp, 0.52, width) * 0.7 + gridLine(gp, 2.08, width * 0.7) * 0.18;

    float fog = 1.0 - exp(-t * 0.12);
    float floorMask = (1.0 - fog) * smoothstep(0.12, 0.6, t);

    float pool = exp(-length(vec2(hit.x - mp.x * 1.5, hit.z + 3.4)) * 0.4);
    float lift = 0.06 + u_energy * 0.045 + u_mode * 0.012;

    col += gold * line * floorMask * (0.2 + lift);
    col += gold * pool * floorMask * (0.07 + u_energy * 0.05);
  }

  float reading = smoothstep(0.82, 0.12, length((uv - vec2(0.32, 0.42)) * vec2(1.05, 0.95)));
  col = mix(col, bg, 0.82 * reading);

  float vig = smoothstep(1.12, 0.32, length(p * vec2(0.85, 1.05)));
  col *= 0.58 + 0.42 * vig;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function FieldRoot({ children }: { children: ReactNode }) {
  const energy = useRef(0);
  const energyTarget = useRef(0);
  const mode = useRef(0);
  const modeTarget = useRef(0);

  const setEnergy = useCallback((value: number) => {
    energyTarget.current = value;
  }, []);

  const setMode = useCallback((value: number) => {
    modeTarget.current = value;
  }, []);

  return (
    <FieldContext.Provider value={{ setEnergy, setMode }}>
      <SpatialCanvas
        energy={energy}
        energyTarget={energyTarget}
        mode={mode}
        modeTarget={modeTarget}
      />
      {children}
    </FieldContext.Provider>
  );
}

function SpatialCanvas({
  energy,
  energyTarget,
  mode,
  modeTarget,
}: {
  energy: MutableRefObject<number>;
  energyTarget: MutableRefObject<number>;
  mode: MutableRefObject<number>;
  modeTarget: MutableRefObject<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uPointer = gl.getUniformLocation(program, "u_pointer");
    const uScroll = gl.getUniformLocation(program, "u_scroll");
    const uEnergy = gl.getUniformLocation(program, "u_energy");
    const uMode = gl.getUniformLocation(program, "u_mode");

    const pointer = { x: 0.72, y: 0.28 };
    const pointerTarget = { x: 0.72, y: 0.28 };
    let scroll = 0;
    let frame = 0;
    let running = true;
    const start = performance.now();

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const maxDpr = coarse ? 1.1 : 1.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const onPointer = (event: PointerEvent) => {
      pointerTarget.x = event.clientX / window.innerWidth;
      pointerTarget.y = 1 - event.clientY / window.innerHeight;
    };

    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scroll = window.scrollY / max;
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (running && frame === 0) {
        frame = requestAnimationFrame(draw);
      }
    };

    const draw = (now: number) => {
      if (!running) return;
      if (document.hidden) {
        frame = 0;
        return;
      }

      pointer.x += (pointerTarget.x - pointer.x) * 0.08;
      pointer.y += (pointerTarget.y - pointer.y) * 0.08;
      energy.current += (energyTarget.current - energy.current) * 0.06;
      mode.current += (modeTarget.current - mode.current) * 0.05;

      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.uniform1f(uScroll, scroll);
      gl.uniform1f(uEnergy, energy.current);
      gl.uniform1f(uMode, mode.current);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      frame = requestAnimationFrame(draw);
    };

    resize();
    onScroll();
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [energy, energyTarget, mode, modeTarget]);

  return (
    <div className="site-field" aria-hidden>
      <canvas ref={canvasRef} className="site-field-canvas" />
      <div className="site-field-veil" />
    </div>
  );
}
