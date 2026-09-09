import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

type ClientImage =
  | { kind: "svg"; src: string; className?: string }
  | {
      kind: "raster";
      src: string;
      width: number;
      height: number;
      className?: string;
    };

const clients: {
  name: string;
  full: string;
  href: string;
  image: ClientImage;
}[] = [
  {
    name: "UK FCDO",
    full: "Foreign, Commonwealth & Development Office",
    href: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office",
    image: {
      kind: "raster",
      src: "/clients/fcdo.png",
      width: 800,
      height: 559,
      className: "max-h-[4.75rem] w-auto max-w-[92%] scale-110 object-contain",
    },
  },
  {
    name: "UN IOM",
    full: "International Organization for Migration",
    href: "https://www.iom.int",
    image: {
      kind: "raster",
      src: "/clients/iom.png",
      width: 360,
      height: 220,
      className: "max-h-14 w-auto max-w-[92%] scale-110 object-contain",
    },
  },
  {
    name: "GFFO",
    full: "German Federal Foreign Office",
    href: "https://www.auswaertiges-amt.de/en",
    image: {
      kind: "svg",
      src: "/clients/gffo.svg",
      className: "max-h-14 w-auto max-w-[92%] object-contain",
    },
  },
  {
    name: "DKH",
    full: "Diakonie Katastrophenhilfe",
    href: "https://www.diakonie-katastrophenhilfe.de/",
    image: {
      kind: "svg",
      src: "/clients/dkh.svg",
      className: "max-h-12 w-auto max-w-[92%] scale-110 object-contain",
    },
  },
  {
    name: "NIDAA",
    full: "Sudanese Development Call Organization",
    href: "https://nidaa.org",
    image: {
      kind: "raster",
      src: "/clients/nidaa.png",
      width: 556,
      height: 91,
      className: "max-h-10 w-auto max-w-[94%] scale-105 object-contain",
    },
  },
  {
    name: "Gisa Group",
    full: "Gisa Group",
    href: "https://gisa-group.org/",
    image: {
      kind: "raster",
      src: "/clients/gisa-group.png",
      width: 800,
      height: 533,
      className: "max-h-[4.75rem] w-auto max-w-[94%] scale-110 object-contain",
    },
  },
  {
    name: "MASC",
    full: "Mutual Aid Sudan Coalition",
    href: "https://www.mutualaidsudan.org/",
    image: {
      kind: "raster",
      src: "/clients/masc.png",
      width: 937,
      height: 827,
      className: "max-h-[4.85rem] w-auto max-w-[90%] scale-125 object-contain",
    },
  },
  {
    name: "LoHub",
    full: "Localization Hub",
    href: "https://localizationhub.org/",
    image: {
      kind: "raster",
      src: "/clients/localization-hub.png",
      width: 600,
      height: 650,
      className: "max-h-[4.85rem] w-auto max-w-[88%] scale-125 object-contain",
    },
  },
  {
    name: "P2H",
    full: "Proximity2Humanity International",
    href: "https://www.proximity2humanity.org",
    image: {
      kind: "raster",
      src: "/clients/proximity2humanity.webp",
      width: 220,
      height: 102,
      className: "max-h-12 w-auto max-w-[94%] scale-110 object-contain",
    },
  },
  {
    name: "MCV",
    full: "Mercy Corps Venture Lab",
    href: "https://www.mercycorpsventures.com/venture-lab",
    image: {
      kind: "raster",
      src: "/clients/mercy-corps-ventures.png",
      width: 1314,
      height: 251,
      className: "max-h-10 w-auto max-w-[96%] object-contain",
    },
  },
  {
    name: "CFG",
    full: "Collaborative Futures Group",
    href: "https://collaborative-futures.com/",
    image: {
      kind: "raster",
      src: "/clients/collaborative-futures.png",
      width: 2323,
      height: 190,
      className: "max-h-8 w-auto max-w-[96%] object-contain",
    },
  },
  {
    name: "VTB",
    full: "VTB Bank",
    href: "https://www.vtb.com",
    image: {
      kind: "svg",
      src: "/clients/vtb.svg",
      className: "max-h-12 w-auto max-w-[90%] scale-110 object-contain",
    },
  },
  {
    name: "Amazon",
    full: "Amazon.com",
    href: "https://www.amazon.com",
    image: {
      kind: "svg",
      src: "/clients/amazon.svg",
      className: "max-h-10 w-auto max-w-[88%] scale-110 object-contain",
    },
  },
  {
    name: "Convexity",
    full: "Convexity Technologies Nigeria",
    href: "https://withconvexity.com",
    image: {
      kind: "raster",
      src: "/clients/convexity.png",
      width: 497,
      height: 142,
      className: "max-h-12 w-auto max-w-[94%] scale-110 object-contain",
    },
  },
  {
    name: "SiriInfo",
    full: "Siri Info Solutions",
    href: "https://siriinfo.com/",
    image: {
      kind: "svg",
      src: "/clients/siriinfo.svg",
      className: "max-h-12 w-auto max-w-[92%] scale-110 object-contain",
    },
  },
];

const logoVisualClass = "max-h-12 w-auto max-w-[90%] object-contain";

function ClientLogo({
  image,
  alt,
}: {
  image: ClientImage;
  alt: string;
}) {
  const cls = image.className ?? logoVisualClass;
  if (image.kind === "svg") {
    return (
      // Local third-party SVG marks; next/image disallows SVG without extra config.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        alt={alt}
        className={cls}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <Image
      src={image.src}
      alt={alt}
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
      aria-label="Partners"
      className="px-[var(--site-gutter)] pb-8"
    >
      <Reveal className="site-shell">
        <p className="site-kicker">Selected partners</p>
        {/* NEEDS CONFIRM: prime vs subcontract for each mark. Line does not claim either. */}
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
          Institutions and programmes we have worked with on the technology
          estate.
        </p>
        <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {clients.map((client) => (
            <li key={client.name} className="min-w-0">
              <Link
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-link group block outline-offset-4"
              >
                <span className="site-logo-well">
                  <ClientLogo image={client.image} alt={client.full} />
                </span>
                <span className="mt-3 block text-sm font-semibold tracking-tight text-foreground group-hover:text-gold">
                  {client.name}
                </span>
                {client.full !== client.name ? (
                  <span className="mt-1 block text-xs leading-snug text-text-secondary">
                    {client.full}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
