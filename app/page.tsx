import Reveal from "./Reveal";

const PHONE = "(437) 331-8135";
const TEL = "tel:+14373318135";
const SMS = "sms:+14373318135";
const EMAIL = "lawnvikings@gmail.com";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Lawn%20Vikings&query_place_id=ChIJX6ywJV53UogRtSuYKRQirtM";
const FACEBOOK = "https://www.facebook.com/LawnVikingsLandscaping";

type IconProps = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };

function Phone({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>;
}
function Message({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
function Mail({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>;
}
function Star({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" /></svg>;
}
function Stars({ className = "h-5 w-5" }: IconProps) {
  return <span className="flex text-star" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className={className} />)}</span>;
}
function Check({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M20 6 9 17l-5-5" /></svg>;
}
function Clock({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
}
function Pin({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function Mower({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M3 15h14l2-5H7M7 10 4 4H2" /><circle cx="7" cy="18" r="2" /><circle cx="16" cy="18" r="2" /></svg>;
}
function Pencil({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>;
}
function Layers({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></svg>;
}
function Sprout({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M12 20v-9M12 11C12 7 9 4 4 4c0 4 3 7 8 7zM12 13c0-3.5 2.5-6 7-6 0 3.5-2.5 6-7 6z" /><path d="M7 20h10" /></svg>;
}
function Bed({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M2 18h20M4 18c0-3 2-5 4-5s3 1 4 1 2-1 4-1 4 2 4 5" /><path d="M8 13V9M16 13V8" /></svg>;
}
function Rake({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M19 3 9 13M5 11l8 8M3 13l2-2M7 17l-2 2M9 19l2-2M13 19l-2 2" /></svg>;
}
function Snow({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" /></svg>;
}
function Pot({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M5 12h14l-2 9H7z" /><path d="M12 12V7M12 7l-3-4M12 7l3-4M8 8l4 1 4-1" /></svg>;
}
function Tag({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" /><path d="M7 7h.01" /></svg>;
}
function Broom({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="m19 3-7 7M9 9l6 6M4 20c3 0 6-1 8-3l-6-6c-2 2-3 5-2 9z" /></svg>;
}
function Users({ className = "h-6 w-6" }: IconProps) {
  return <svg {...base} className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg>;
}
function Facebook({ className = "h-5 w-5" }: IconProps) {
  return <svg {...base} className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function Arrow({ className = "h-4 w-4" }: IconProps) {
  return <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

const services = [
  { icon: Mower, title: "Lawn Mowing & Maintenance", text: "Recurring cuts for properties of every size, from a town lot in Bolton to a nearly 3-acre property in Caledon. Clean lines, even height and trimmed edges every visit." },
  { icon: Pencil, title: "Landscape Design", text: "Planning and installing landscaping for new homes and existing yards. You get upfront pricing with no surprises, so you know exactly what you are getting and what you are paying for." },
  { icon: Layers, title: "Sod Installation", text: "New sod laid with care. When stone and materials have to cross your yard, we protect the existing grass so you are not left repairing ruts afterward." },
  { icon: Sprout, title: "Grass Seeding", text: "Overseeding and seeding to thicken thin or patchy lawns, timed for the best germination window in our area." },
  { icon: Bed, title: "Mulching", text: "Fresh mulch for garden beds and borders to hold moisture, keep weeds down and make the whole property look finished." },
  { icon: Rake, title: "Yard Work & Clean-ups", text: "General yard work and seasonal clean-ups, with the site tidied every day and materials stored neatly between work days." },
  { icon: Snow, title: "Winter Clean-up", text: "Getting backyards ready for winter, including pulling spent plant roots so beds are ready for spring planting." },
  { icon: Pot, title: "Seasonal Planters", text: "Custom decorative Christmas pots and seasonal planters built to your vision for the front step or porch." },
];

const reviews = [
  { name: "Irena T.", job: "Landscape design for a new home", text: "We used Lawn Vikings to design the landscaping at our new home. Professional, on time, and upfront pricing with no surprises. I knew exactly what I was getting and what I was paying for." },
  { name: "Evans Corp", job: "Lawn mowing, nearly 3 acres", text: "Eric and his team cut a property of almost 3 acres and did an exceptional job. Good communication and good value. We are using the service again." },
  { name: "Monika T.", job: "Winter clean-up and Christmas planter", text: "The crew did a thorough winter clean-up, even removing the old flower roots ahead of spring planting, and built a gorgeous decorative Christmas pot exactly the way I pictured it." },
];

const steps = [
  { title: "Call, text or email Eric", text: "Tell us what the yard needs: a weekly cut, a clean-up, sod, or a full design for a new home." },
  { title: "Clear, upfront price", text: "Eric walks the property and gives you a straightforward price before anything starts. No surprise add-ons later." },
  { title: "The crew does the work", text: "Polite, punctual and hard-working. We explain what we are doing as we go and protect the parts of your lawn we are not working on." },
  { title: "Tidy at the end of every day", text: "Materials stored neatly, debris cleared and the site left clean, every single day of the job." },
];

const faqs = [
  { q: "Where do you work?", a: "Lawn Vikings is based in Bolton and serves Bolton and the rest of Caledon. If you are nearby and not sure, give us a call and ask." },
  { q: "How does pricing work?", a: "You get a clear price upfront before the work starts. Customers mention it specifically: no surprises, and you know exactly what you are paying for." },
  { q: "Can you handle large properties?", a: "Yes. We regularly mow large lots, including a property of nearly 3 acres, and we size the crew and equipment to the job." },
  { q: "Will heavy work damage the rest of my lawn?", a: "We take care to protect your existing grass when moving stone and materials across the property, and we clean up and store materials neatly each evening." },
  { q: "Do you do fall and winter work?", a: "Yes. We do winter clean-ups that get your beds ready for spring, and we build custom decorative Christmas pots and seasonal planters." },
  { q: "How long have you been in business?", a: "Lawn Vikings has been owned and operated by Eric Polujanski since 2021, and it has a perfect 5.0 rating on Google." },
  { q: "What are your hours?", a: `We open at 8 a.m. The fastest way to reach us is to call or text ${PHONE}, or email ${EMAIL}.` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Lawn Vikings",
  telephone: "+1-437-331-8135",
  email: EMAIL,
  url: "https://lawn-vikings.growlocalvisibility.com",
  description: "Lawn mowing, landscape design, sod, seeding, mulching, clean-ups and seasonal planters in Bolton and Caledon, Ontario.",
  areaServed: ["Bolton, ON", "Caledon, ON"],
  address: { "@type": "PostalAddress", addressLocality: "Bolton", addressRegion: "ON", addressCountry: "CA" },
  founder: { "@type": "Person", name: "Eric Polujanski" },
  foundingDate: "2021",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "6" },
  sameAs: [FACEBOOK],
};

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href={TEL} className={`ring-on-hover btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 font-bold text-ink shadow-sm hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta ${className}`}>
      <span className="ring-icon inline-flex"><Phone /></span> Call {PHONE}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="bg-brand-deep text-sm text-white/90">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2 text-center md:justify-between md:px-6">
          <span className="flex items-center gap-2"><Snow className="h-4 w-4" /> Now booking fall and winter clean-ups and Christmas planters</span>
          <span className="hidden items-center gap-2 md:flex"><Pin className="h-4 w-4" /> Bolton &amp; Caledon &middot; Opens 8 a.m.</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Lawn Vikings home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-cta"><Mower className="h-5 w-5" /></span>
            <span className="font-head text-xl font-bold tracking-tight text-brand-deep">Lawn Vikings</span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Eric</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-brand-deep hover:text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn-press hidden min-h-12 items-center rounded-full bg-cta px-5 font-bold text-ink hover:bg-cta-hover md:inline-flex">Get a Free Quote</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn-press grid h-11 w-11 place-items-center rounded-full bg-cta text-ink md:hidden"><Phone /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-bg">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] leading-[1.05] text-brand-deep">
                Lawn Care &amp; Landscaping in Bolton and Caledon
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg text-muted md:text-xl">
                Weekly mowing, sod, seeding, mulching, clean-ups and landscape design, with a clear price before we start. Owner Eric Polujanski and his crew show up on time, explain what they are doing and leave your yard tidy every day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand px-6 py-3 font-bold text-brand-deep hover:bg-brand-soft">
                  <Message /> Text us
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-ink">
                <span className="flex items-center gap-2"><Stars className="h-4 w-4" /><strong>5.0</strong></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-line underline-offset-4 hover:text-brand">6 Google reviews</a>
                <span aria-hidden className="text-line">|</span>
                <span>Owner-operated since 2021</span>
                <span aria-hidden className="text-line">|</span>
                <span>Upfront pricing</span>
              </div>
            </div>

            <Reveal>
              <div className="rounded-3xl bg-brand-deep p-7 text-white shadow-[0_24px_50px_-30px_oklch(0.3_0.065_162/0.7)]">
                <p className="font-head text-lg font-semibold text-cta">Quick facts</p>
                <ul className="mt-5 space-y-4">
                  {[
                    { icon: Star, t: "5.0 stars on Google", d: "Every review is five stars" },
                    { icon: Users, t: "Owner on the job", d: "Eric Polujanski, since 2021" },
                    { icon: Tag, t: "Upfront pricing", d: "Know the cost before we start" },
                    { icon: Pin, t: "Bolton & Caledon", d: "Town lots to multi-acre properties" },
                    { icon: Clock, t: "Opens 8 a.m.", d: "Call, text or email" },
                  ].map(({ icon: I, t, d }) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-cta"><I className="h-5 w-5" /></span>
                      <span><strong className="block">{t}</strong><span className="text-sm text-white/75">{d}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why choose Lawn Vikings" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-7 md:grid-cols-4 md:px-6">
            {[
              { icon: Star, t: "5.0 Google rating" },
              { icon: Tag, t: "No-surprise pricing" },
              { icon: Broom, t: "Tidy site every day" },
              { icon: Check, t: "Free quotes" },
            ].map(({ icon: I, t }) => (
              <li key={t} className="flex items-center gap-3 font-semibold"><I className="h-6 w-6 text-cta" />{t}</li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <p className="font-semibold text-brand">What we do</p>
            <h2 className="mt-2 max-w-[24ch] text-3xl text-brand-deep md:text-[2.6rem]">Lawn and landscape services for every season</h2>
            <p className="mt-4 max-w-[64ch] text-muted">From the first spring cut to the Christmas planter on your front step, one local crew handles the whole year. Every job starts with a straight answer on price.</p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: I, title, text }) => (
                <Reveal key={title}>
                  <article className="group flex h-full flex-col rounded-2xl border border-line bg-bg p-6 transition-shadow duration-200 hover:shadow-[0_14px_30px_-22px_oklch(0.3_0.065_162/0.55)]">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand"><I /></span>
                    <h3 className="mt-4 text-lg text-brand-deep">{title}</h3>
                    <p className="mt-2 flex-1 text-[0.98rem] text-muted">{text}</p>
                    <a href={TEL} className="mt-4 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-deep">
                      Ask Eric about this <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-brand">Reviews</p>
                <h2 className="mt-2 text-3xl text-brand-deep md:text-[2.6rem]">Rated 5.0 from 6 Google reviews</h2>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full border-2 border-brand-deep bg-white px-5 font-bold text-brand-deep hover:bg-brand-soft">
                Read all reviews on Google <Arrow />
              </a>
            </div>

            <Reveal>
              <figure className="mt-12 rounded-3xl border border-line bg-white p-8 md:p-10">
                <Stars />
                <blockquote className="mt-5 max-w-[70ch] font-head text-xl font-medium leading-relaxed text-ink md:text-2xl">
                  &ldquo;An extremely professional crew that worked hard every day and explained exactly what they were doing. They protected my grass while moving stone from the front yard to the back, and cleaned up and stored materials neatly every evening. I will use them again.&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm"><strong className="text-ink">Peter W.</strong> <span className="text-muted">&middot; Google Local Guide &middot; Sod, mulching and yard work</span></figcaption>
              </figure>
            </Reveal>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name}>
                  <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                    <Stars className="h-4 w-4" />
                    <blockquote className="mt-4 flex-1 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4 text-sm"><strong className="text-ink">{r.name}</strong><span className="block text-muted">{r.job}</span></figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-brand">About Lawn Vikings</p>
              <h2 className="mt-2 text-3xl text-brand-deep md:text-[2.6rem]">A Bolton crew that treats your yard like its own</h2>
              <div className="mt-6 space-y-4 text-ink/90">
                <p>Lawn Vikings is a landscaping and lawn maintenance company based in Bolton, owned and operated by Eric Polujanski since 2021. The idea is simple: turn up when promised and give a fair price upfront.</p>
                <p>The crew handles everything from weekly mowing on large acreage to full landscape design for new homes, plus sod, seeding, mulching and seasonal clean-ups. Customers describe the team as polite, punctual and transparent, and they notice the small things, like stone being moved without wrecking the lawn and tools put away neatly at the end of the day.</p>
                <p>When you call, you are talking to the owner. That is how we like it.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <a href={`mailto:${EMAIL}`} className="btn-press inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-line px-5 font-bold text-ink hover:border-brand"><Mail /> Email Eric</a>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, t: "Punctual", d: "We show up when we say we will." },
                { icon: Message, t: "We explain the work", d: "You always know what is happening and why." },
                { icon: Layers, t: "Your lawn protected", d: "Existing grass is guarded during heavy work." },
                { icon: Broom, t: "Clean every day", d: "Materials stored neatly, debris gone." },
              ].map(({ icon: I, t, d }) => (
                <li key={t} className="rounded-2xl bg-tint p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand"><I className="h-5 w-5" /></span>
                  <strong className="mt-4 block text-lg text-brand-deep">{t}</strong>
                  <span className="text-muted">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-semibold text-brand">How it works</p>
              <h2 className="mt-2 text-3xl text-brand-deep md:text-[2.6rem]">Simple from the first call</h2>
              <p className="mt-4 text-muted">No long forms and no runaround. Four steps and your yard is looked after.</p>
            </div>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5 rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cta font-head text-lg font-bold text-ink">{i + 1}</span>
                  <span><strong className="block text-lg text-brand-deep">{s.title}</strong><span className="text-muted">{s.text}</span></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2 lg:items-center">
            <div className="order-2 overflow-hidden rounded-3xl border border-line lg:order-1">
              <iframe title="Map of Bolton and Caledon, Ontario" src="https://maps.google.com/maps?q=Bolton%2C%20Caledon%2C%20Ontario&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-semibold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl text-brand-deep md:text-[2.6rem]">Proudly serving Bolton and Caledon</h2>
              <p className="mt-4 text-muted">We are based in Bolton and work throughout the Town of Caledon, on everything from family lots to properties of several acres.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Bolton", "Caledon"].map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full bg-brand-soft px-4 py-2 font-semibold text-brand-deep"><Pin className="h-4 w-4" />{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <p className="font-semibold text-brand">FAQ</p>
            <h2 className="mt-2 text-3xl text-brand-deep md:text-[2.6rem]">Good questions to ask a lawn care company</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-white px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold text-brand-deep">
                    {f.q}
                    <svg {...base} className="faq-icon h-5 w-5 shrink-0 text-brand"><path d="M12 5v14M5 12h14" /></svg>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="text-3xl md:text-4xl">Ready for a yard you don&apos;t have to think about?</h2>
              <p className="mt-3 max-w-[56ch] text-white/85">Call or text Eric at {PHONE} for a free, upfront quote. We open at 8 a.m.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton className="text-lg" />
              <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 font-bold text-white hover:bg-white/10"><Message /> Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-head text-xl font-bold text-brand-deep">Lawn Vikings</p>
            <p className="mt-3 max-w-[48ch] text-muted">Lawn care and landscaping in Bolton and Caledon, Ontario. Owned and operated by Eric Polujanski since 2021.</p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Lawn Vikings on Facebook" className="mt-5 inline-grid h-11 w-11 place-items-center rounded-full border border-line text-ink hover:border-brand hover:text-brand"><Facebook /></a>
          </div>
          <div>
            <p className="font-bold text-ink">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="flex items-center gap-2 hover:text-brand"><Phone className="h-4 w-4" />{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all hover:text-brand"><Mail className="h-4 w-4 shrink-0" />{EMAIL}</a></li>
              <li className="flex items-center gap-2"><Pin className="h-4 w-4" />Bolton, ON</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" />Opens 8 a.m.</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl px-5 text-sm text-muted md:px-6">&copy; {new Date().getFullYear()} Lawn Vikings. Serving Bolton and Caledon.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-full bg-cta font-bold text-ink"><Phone /> Call</a>
        <a href={SMS} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand font-bold text-brand-deep"><Message /> Text</a>
      </div>
    </>
  );
}
