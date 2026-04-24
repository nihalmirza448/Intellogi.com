import Image from "next/image";
import Link from "next/link";

type ClientImage =
  | { kind: "svg"; src: string; className?: string }
  | { kind: "raster"; src: string; width: number; height: number; className?: string };

const clients: {
  name: string;
  href: string;
  alt: string;
  image: ClientImage;
}[] = [
  {
    name: "UK FCDO",
    href: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office",
    alt: "UK Foreign, Commonwealth & Development Office",
    image: {
      kind: "raster",
      src: "/clients/fcdo.png",
      width: 800,
      height: 559,
      className:
        "max-h-[3.25rem] w-auto max-w-[min(100%,17.5rem)] object-contain object-center sm:max-h-16",
    },
  },
  {
    name: "Proximity2Humanity",
    href: "https://www.proximity2humanity.org",
    alt: "Proximity2Humanity International",
    image: {
      kind: "raster",
      src: "/clients/proximity2humanity.webp",
      width: 220,
      height: 102,
      className:
        "max-h-[3.35rem] w-auto max-w-[min(100%,15rem)] object-contain object-center sm:max-h-[3.65rem]",
    },
  },
  {
    name: "Mercy Corps Venture Lab",
    href: "https://www.mercycorpsventures.com/venture-lab",
    alt: "Mercy Corps Venture Lab",
    image: {
      kind: "raster",
      src: "/clients/mercy-corps.png",
      width: 176,
      height: 200,
    },
  },
  {
    name: "VTB Bank",
    href: "https://www.vtb.com",
    alt: "VTB Bank",
    image: { kind: "svg", src: "/clients/vtb.svg" },
  },
  {
    name: "Amazon",
    href: "https://www.amazon.com",
    alt: "Amazon.com",
    image: {
      kind: "svg",
      src: "/clients/amazon.svg",
      className:
        "max-h-[2.85rem] w-auto max-w-[min(100%,15.5rem)] object-contain object-center sm:max-h-[3.35rem]",
    },
  },
  {
    name: "Convexity Technologies Nigeria",
    href: "https://withconvexity.com",
    alt: "Convexity Technologies Nigeria",
    image: {
      kind: "raster",
      src: "/clients/convexity.png",
      width: 497,
      height: 142,
    },
  },
];

/** Shared cap; wide marks (FCDO, Amazon) need room — inner well is white for contrast on dark UI. */
const logoVisualClass =
  "max-h-12 w-auto max-w-full object-contain sm:max-h-[3.75rem]";

function ClientLogo({ image }: { image: ClientImage }) {
  const cls = image.className ?? logoVisualClass;
  if (image.kind === "svg") {
    return (
      // Local third-party SVG marks; next/image disallows remote/local SVG without extra config.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        alt=""
        className={cls}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <Image
      src={image.src}
      alt=""
      width={image.width}
      height={image.height}
      className={cls}
      loading="lazy"
    />
  );
}

export function ClientsSection() {
  return (
    <section
      id="clients"
      aria-label="Clients and partners"
      className="scroll-mt-24 border-t border-zinc-200/80 px-4 py-16 dark:border-zinc-800/80 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Clients &amp; partners
        </h2>
        <p className="mt-3 max-w-2xl text-lg font-medium tracking-tight text-zinc-700 dark:text-zinc-300">
          Organisations we have worked with or supported.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {clients.map((c) => (
            <li key={c.name} className="flex min-w-0 justify-center">
              <Link
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${c.alt} (opens in a new tab)`}
                className="group flex w-full max-w-60 flex-col items-center gap-2.5 text-center outline-offset-4"
              >
                <span
                  className="flex h-24 w-full shrink-0 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-100/90 px-3 py-2.5 shadow-sm transition group-hover:border-zinc-300 group-hover:bg-zinc-100 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-900"
                  aria-hidden
                >
                  {/* Solid light well so dark / transparent marks stay legible in dark mode */}
                  <span className="flex h-19 w-full max-w-56 items-center justify-center rounded-lg bg-white px-3 py-2 shadow-inner ring-1 ring-zinc-200/80 dark:ring-zinc-300/25">
                    <ClientLogo image={c.image} />
                  </span>
                </span>
                <span className="line-clamp-2 min-h-9 w-full text-balance text-xs leading-snug text-zinc-500 underline-offset-2 group-hover:underline dark:text-zinc-400">
                  {c.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
