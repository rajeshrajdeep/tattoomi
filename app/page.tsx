import Image from "next/image";
import Link from "next/link";

const tattooStyles = [
  {
    title: "Fine Line",
    description:
      "Delicate, precise and detailed tattoos built around refined linework.",
    image: "/images/style-fine-line.jpg",
    href: "/tattoo-styles/fine-line-tattoos",
  },
  {
    title: "Realism",
    description:
      "Highly detailed artwork inspired by portraits, objects and photography.",
    image: "/images/style-realism.jpg",
    href: "/tattoo-styles/realism-tattoos",
  },
  {
    title: "Blackwork",
    description:
      "Bold compositions, deep blacks and powerful visual contrast.",
    image: "/images/style-blackwork.jpg",
    href: "/tattoo-styles/blackwork-tattoos",
  },
  {
    title: "Minimal",
    description:
      "Clean, understated tattoos designed around simplicity and meaning.",
    image: "/images/style-minimal.jpg",
    href: "/tattoo-styles/minimalist-tattoos",
  },
];

const portfolio = [
  {
    image: "/images/portfolio-1.jpg",
    title: "Fine Line",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    image: "/images/portfolio-2.jpg",
    title: "Realism",
    className: "md:col-span-8",
  },
  {
    image: "/images/portfolio-3.jpg",
    title: "Blackwork",
    className: "md:col-span-4",
  },
  {
    image: "/images/portfolio-4.jpg",
    title: "Custom",
    className: "md:col-span-4",
  },
];

const faqs = [
  {
    question: "How much does a tattoo cost in Delhi?",
    answer:
      "Tattoo pricing depends on the size, placement, complexity, style and artist time required. Share your idea with us and we can provide a more accurate estimate.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended, particularly for custom work and larger tattoos. Walk-ins may be possible depending on artist availability.",
  },
  {
    question: "Can you design a completely custom tattoo?",
    answer:
      "Yes. Custom tattooing is a core part of Tattoomi. We can develop an original design using your idea, references, story and preferred visual style.",
  },
  {
    question: "Where is Tattoomi located?",
    answer:
      "Tattoomi is located in Greater Kailash 2 (GK2), New Delhi. Exact directions and contact details can be found on our contact page.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8H20M4 16H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#090909] text-white">
      {/* HEADER */}
      <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-375 items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="text-xl font-semibold uppercase tracking-[0.25em]"
          >
            Tattoomi
          </Link>

          <nav
            className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-white/75 lg:flex"
            aria-label="Primary navigation"
          >
            <Link className="transition hover:text-white" href="/portfolio">
              Work
            </Link>

            <Link className="transition hover:text-white" href="/artists">
              Artists
            </Link>

            <Link
              className="transition hover:text-white"
              href="/tattoo-styles"
            >
              Styles
            </Link>

            <Link className="transition hover:text-white" href="/about">
              Studio
            </Link>

            <Link className="transition hover:text-white" href="/contact">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden border border-white bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-transparent hover:text-white sm:inline-flex"
            >
              Book a Tattoo
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center border border-white/15 lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[92vh] lg:min-h-screen">
        <Image
          src="/images/hero-tattoo.jpg"
          alt="Tattoo artist creating a custom tattoo at Tattoomi in Greater Kailash 2, New Delhi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-[#090909]" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/15 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-375 items-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:min-h-screen lg:px-12 lg:pb-20">
          <div className="w-full">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white/70" />
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/75 sm:text-xs">
                Tattoo Studio • GK2, New Delhi
              </p>
            </div>

            <h1 className="max-w-300 text-[15vw] font-medium uppercase leading-[0.78] tracking-[-0.075em] sm:text-[12vw] lg:text-[9.4vw]">
              Wear Your
              <br />
              Story.
            </h1>

            <div className="mt-8 flex flex-col gap-7 border-t border-white/20 pt-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Custom tattoos created with intention, precision and
                individuality at Tattoomi — a professional tattoo studio in
                Greater Kailash 2, New Delhi.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-5 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
                >
                  Book Consultation
                  <ArrowIcon />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-5 border border-white/30 px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] transition hover:border-white hover:bg-white hover:text-black"
                >
                  Explore Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 py-5">
        <div className="flex min-w-max items-center gap-10 text-xs uppercase tracking-[0.3em] text-white/55">
          {[
            "Fine Line",
            "Custom Tattoos",
            "Realism",
            "Blackwork",
            "Minimal",
            "Portraits",
            "Cover Ups",
            "Original Art",
            "Fine Line",
            "Custom Tattoos",
            "Realism",
          ].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-10">
              <span>{item}</span>
              <span className="text-white/25">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-375 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-white/45">
              01 — The Studio
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-tighter sm:text-5xl lg:text-7xl xl:text-[82px]">
              Tattoos should feel
              <span className="text-white/35"> personal, not generic.</span>
            </h2>

            <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
              <p className="text-base leading-8 text-white/55">
                At Tattoomi, every piece begins with a conversation. We take
                your idea, references and story and turn them into artwork made
                specifically for your body.
              </p>

              <p className="text-base leading-8 text-white/55">
                From subtle fine-line tattoos to large-scale realism and bold
                blackwork, our approach combines design, craftsmanship,
                hygiene and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[65vh] max-w-375 overflow-hidden lg:min-h-[85vh]">
          <Image
            src="/images/studio-feature.jpg"
            alt="Tattoo artist working inside Tattoomi tattoo studio in New Delhi"
            fill
            sizes="(max-width: 768px) 100vw, 95vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-10 lg:p-14">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">
              Made for you
            </p>

            <h2 className="text-4xl font-medium uppercase leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
              Original
              <br />
              by design.
            </h2>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-375">
          <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/45">
                02 — Tattoo Styles
              </p>

              <h2 className="text-5xl font-medium uppercase tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Find your
                <br />
                language.
              </h2>
            </div>

            <Link
              href="/tattoo-styles"
              className="inline-flex w-fit items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/65 transition hover:text-white"
            >
              View all styles
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {tattooStyles.map((style, index) => (
              <Link
                href={style.href}
                key={style.title}
                className="group relative min-h-140 overflow-hidden bg-[#0d0d0d]"
              >
                <Image
                  src={style.image}
                  alt={`${style.title} tattoo work by Tattoomi`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-white/50">
                      0{index + 1}
                    </span>

                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition group-hover:bg-white group-hover:text-black">
                      <ArrowIcon />
                    </span>
                  </div>

                  <h3 className="mb-3 text-3xl font-medium uppercase tracking-[-0.04em]">
                    {style.title}
                  </h3>

                  <p className="max-w-xs text-sm leading-6 text-white/60">
                    {style.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-[#efede8] px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-375">
          <div className="mb-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.25em] text-black/50">
                03 — Selected Work
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-5xl font-medium uppercase leading-[0.87] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Ink speaks
                <br />
                louder.
              </h2>
            </div>
          </div>

          <div className="grid auto-rows-85 gap-3 md:grid-cols-12">
            {portfolio.map((item) => (
              <Link
                href="/portfolio"
                key={item.image}
                className={`group relative overflow-hidden bg-black ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} tattoo from Tattoomi tattoo portfolio`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/20" />

                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <span className="text-xs uppercase tracking-[0.2em]">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-5 border-b border-black pb-2 text-xs font-medium uppercase tracking-[0.18em]"
            >
              See full portfolio
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* CUSTOM */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-375 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/custom-tattoo.jpg"
                alt="Custom tattoo design created at Tattoomi"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="mb-7 text-xs uppercase tracking-[0.25em] text-white/45">
              04 — Custom Work
            </p>

            <h2 className="text-5xl font-medium uppercase leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Your idea.
              <br />
              <span className="text-white/30">Our craft.</span>
            </h2>

            <p className="mt-9 max-w-xl text-base leading-8 text-white/55">
              Bring us a thought, memory, reference, sketch or even just a
              feeling. We&apos;ll work with you to develop it into an original
              tattoo designed around you.
            </p>

            <Link
              href="/custom-tattoos"
              className="mt-10 inline-flex items-center gap-6 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white/80"
            >
              Start a custom tattoo
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-375 divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div className="px-7 py-12 lg:px-10 lg:py-16">
            <span className="mb-14 block text-xs tracking-[0.2em] text-white/35">
              01
            </span>
            <h3 className="mb-4 text-2xl uppercase tracking-[-0.03em]">
              Designed for you
            </h3>
            <p className="text-sm leading-7 text-white/45">
              Thoughtful concepts developed around your idea, body placement
              and personal aesthetic.
            </p>
          </div>

          <div className="px-7 py-12 lg:px-10 lg:py-16">
            <span className="mb-14 block text-xs tracking-[0.2em] text-white/35">
              02
            </span>
            <h3 className="mb-4 text-2xl uppercase tracking-[-0.03em]">
              Professional hygiene
            </h3>
            <p className="text-sm leading-7 text-white/45">
              A clean, professional tattooing environment with careful hygiene
              practices throughout your session.
            </p>
          </div>

          <div className="px-7 py-12 lg:px-10 lg:py-16">
            <span className="mb-14 block text-xs tracking-[0.2em] text-white/35">
              03
            </span>
            <h3 className="mb-4 text-2xl uppercase tracking-[-0.03em]">
              Artist-led process
            </h3>
            <p className="text-sm leading-7 text-white/45">
              From consultation to aftercare, work directly with tattoo artists
              who care about the final result.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-375 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-7 text-xs uppercase tracking-[0.25em] text-white/45">
              05 — Visit Tattoomi
            </p>

            <h2 className="text-5xl font-medium uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Tattoo studio
              <br />
              in GK2.
            </h2>

            <div className="mt-10 max-w-lg border-t border-white/10 pt-8">
              <address className="not-italic">
                <p className="text-xl">Tattoomi</p>
                <p className="mt-3 leading-7 text-white/50">
                  Greater Kailash 2
                  <br />
                  New Delhi, Delhi, India
                </p>
              </address>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-black"
                >
                  Get Directions
                  <ArrowIcon />
                </Link>

                <Link
                  href="/book"
                  className="border border-white/20 px-6 py-4 text-xs font-medium uppercase tracking-[0.15em]"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/studio-interior.jpg"
                alt="Tattoomi tattoo studio interior in Greater Kailash 2 New Delhi"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#efede8] px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-375 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-black/45">
              06 — FAQ
            </p>

            <h2 className="text-5xl font-medium uppercase leading-[0.9] tracking-[-0.06em] lg:text-7xl">
              Before
              <br />
              you book.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-black/20">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-black/20"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 text-lg font-medium">
                    {faq.question}

                    <span className="text-2xl font-light transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="max-w-2xl pb-7 pr-8 text-sm leading-7 text-black/60">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[75vh]">
        <Image
          src="/images/cta-tattoo.jpg"
          alt="Professional tattoo artwork by Tattoomi"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-375 flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
          <p className="mb-7 text-xs uppercase tracking-[0.3em] text-white/55">
            Your next tattoo starts here
          </p>

          <h2 className="max-w-5xl text-6xl font-medium uppercase leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[120px]">
            Make it
            <br />
            permanent.
          </h2>

          <Link
            href="/book"
            className="mt-10 inline-flex items-center gap-6 bg-white px-8 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
          >
            Book Your Tattoo
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#090909] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-375">
          <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link
                href="/"
                className="text-xl font-semibold uppercase tracking-[0.25em]"
              >
                Tattoomi
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/45">
                Custom tattoo studio in Greater Kailash 2, New Delhi.
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">
                Explore
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/65">
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/artists">Artists</Link>
                <Link href="/tattoo-styles">Tattoo Styles</Link>
                <Link href="/about">About Tattoomi</Link>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">
                Visit
              </p>

              <p className="text-sm leading-7 text-white/60">
                Greater Kailash 2
                <br />
                New Delhi, India
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">
                Social
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 text-sm text-white/65"
                aria-label="Tattoomi on Instagram"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7">
            <div className="flex flex-col justify-between gap-5 text-[11px] uppercase tracking-[0.15em] text-white/30 md:flex-row">
              <p>© 2026 Tattoomi. All rights reserved.</p>

              <div className="flex gap-6">
                <Link href="/privacy-policy">Privacy</Link>
                <Link href="/terms">Terms</Link>
              </div>
            </div>

            <div className="mt-12 overflow-hidden">
              <p className="translate-y-[0.18em] text-center text-[20vw] font-semibold uppercase leading-[0.65] tracking-[-0.08em] text-white/4">
                Tattoomi
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
