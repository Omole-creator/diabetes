import {
  Check,
  ShieldCheck,
  Lock,
  Gift,
  Clock,
  HeartHandshake,
  Stethoscope,
  Download,
  MapPin,
} from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import CTAButton from "@/components/CTAButton";
import CountdownTimer from "@/components/CountdownTimer";
import FAQ from "@/components/FAQ";
import TestimonialGroup from "@/components/Testimonials";
import ReviewsBadge from "@/components/ui/reviews-badge";
import {
  REVIEWS,
  VALUE_STACK,
  PRICE_TODAY,
  PRICE_ANCHOR,
  CTA_PRIMARY,
  CTA_SECONDARY,
  AUTHOR,
  WHO_ITS_FOR,
  WHO_ITS_NOT_FOR,
} from "@/lib/constants";
import { X } from "lucide-react";

const MAIN_BULLETS = [
  "A two minute trick that makes your favourite rice far kinder to your sugar, without touching the rice itself. Almost no Nigerian has heard this one.",
  "Why one small change at the table can matter more than the food itself, and how it keeps your sugar flat long after you eat.",
  "The everyday Nigerian food, sold on every street, that fills you up for hours while your sugar barely moves. You are probably ignoring it right now.",
  "The kind of soup that quietly works for your sugar while you enjoy it. You may have cooked it this week without knowing.",
  "A ten minute habit after meals that turns your food into steady energy instead of a spike, and you can do it without leaving your house.",
  "The free drink already in your house that steadies your sugar all day, and the sweet ones quietly pushing it up.",
  "How to know, in two simple checks, exactly which of your favourite meals love your body and which ones betray you.",
  "Your first seven days laid out one small step at a time, so you are never confused about what to do next.",
];

const BONUS1_BULLETS = [
  "A bedtime step that cools the burning so you can finally sleep through the night. Many people feel it work the very first night.",
  "The common diabetes drug that can quietly drain a vitamin your nerves need, and the one question to ask your doctor that can bring relief.",
  "Gentle moves you can do sitting in your chair that send fresh blood into numb, tingling feet.",
  "The one minute habit that catches a small foot wound you cannot even feel, before it ever becomes a big problem.",
];

const BONUS2_BULLETS = [
  "A hidden muscle you can train quietly, even sitting in traffic, that helps you hold a firmer erection in weeks.",
  "Why strength in the bedroom is mostly about blood flow, and the simple daily habit that brings it back.",
  "Why the manpower drugs sold on the road can be dangerous for a man with diabetes, and the safe way to get your strength back instead.",
  "The honest words to say to your wife that take away half the pressure overnight.",
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-who-blue/10">
        <Check className="h-4 w-4 text-who-blue" strokeWidth={3} />
      </span>
      <span className="text-[1.08rem] leading-relaxed text-ink/90">{children}</span>
    </li>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-[1.15rem] leading-[1.7] text-ink/90">{children}</p>;
}

export default function Page() {
  return (
    <main>
      <StickyHeader />

      {/* ───────────────────────── 1. HERO (centered, no CTA, no cover) ───────────────────────── */}
      <section className="hero relative overflow-hidden bg-who-blue text-white">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
          <div className="mb-12 flex justify-center animate-fade-up sm:mb-16">
            <ReviewsBadge />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white ring-1 ring-white/25 animate-fade-up">
            Please Read This Before You Buy
          </span>

          <h1 className="mt-6 animate-fade-up font-serif font-bold leading-[1.08]">
            <span className="block text-2xl font-medium text-white/85 sm:text-[1.7rem]">
              If you have Type 1 diabetes, please do not buy this.
            </span>
            <span className="mt-4 block text-3xl sm:text-[2.6rem]">
              But if you are on tablets like metformin or Daonil, or on any herbal product, you can
              enjoy your eba, rice, and pounded yam again.
            </span>
            <span className="mt-3 block text-xl font-medium italic text-white sm:text-2xl">
              without your sugar spiking, and without waiting for the day they hand you the injection.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl animate-fade-up text-[1.2rem] leading-relaxed text-white/90">
            A Nigerian doctor reveals the slow way to keep your sugar calm, using the same food
            already in your kitchen. No special diabetic food. No new drugs. No starving on plain
            oats.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
            <span className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" /> Doctor reviewed
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5" /> Made for Nigerian food
            </span>
            <span className="flex items-center gap-2">
              <Download className="h-5 w-5" /> Instant access
            </span>
          </div>
        </div>
        <div className="relative h-3 bg-cta-green" aria-hidden />
      </section>

      {/* ───────────────────────── 2. PAIN (Dear Friend lead) ───────────────────────── */}
      <section className="bg-white">
        <div className="section">
          <P>
            <span className="font-serif text-2xl font-bold text-ink">Dear Friend,</span>
          </P>
          <P>
            If you have Type 1 diabetes, I want you to close this page. I say it with respect. This
            was not written for you, and I will not take your money for it.
          </P>
          <P>But if a doctor told you it is Type 2, then please stay with me.</P>
          <P>
            It does not matter if you take a tablet like metformin or Daonil, lean on herbal
            products, or only manage it with your food.
          </P>
          <P>This was written for you, line by line.</P>
          <P>Do you remember the day they told you?</P>
          <P>
            “You have diabetes.” Then someone said the words that broke your heart. Stop the eba.
            Stop the rice. Stop the pounded yam.
          </P>
          <P>Just like that, the food that means home became the thing you fear.</P>

          <img
            src="/images/dia.jpg"
            alt="A Nigerian man sitting alone, worried about his diabetes"
            width={700}
            height={430}
            loading="lazy"
            className="my-8 h-auto w-full rounded-2xl object-cover shadow-md ring-1 ring-who-blue/10"
          />

          <P>
            So now you watch your family enjoy hot amala and ewedu, while you sit in the corner with
            your boiled unripe plantain. Again.
          </P>
          <P>You are tired all the time. You are always thirsty.</P>
          <P>You get up two, even three times in the night to urinate.</P>
          <P>And in the back of your mind, one fear will not leave you alone.</P>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-who-blue/15 bg-who-blue-tint p-5">
              <img
                src="/images/dia2.jpg"
                alt="A swollen foot, a common sign of diabetic nerve and foot trouble"
                width={300}
                height={180}
                loading="lazy"
                className="mb-4 h-44 w-full rounded-xl object-cover"
              />
              <p className="text-[1.05rem] leading-relaxed text-ink/85">
                At night your feet start. The pins and needles. The burning that even the weight of a
                bedsheet makes worse.
              </p>
            </div>
            <div className="rounded-2xl border border-who-blue/15 bg-who-blue-tint p-5">
              <img
                src="/images/dia4.jpg"
                alt="A man lying in a hospital bed connected to monitors"
                width={300}
                height={180}
                loading="lazy"
                className="mb-4 h-44 w-full rounded-xl object-cover"
              />
              <p className="text-[1.05rem] leading-relaxed text-ink/85">
                And the bigger fear. The day the tablets stop being enough, and they put you on the
                daily injection. You have watched it happen to people you know.
              </p>
            </div>
          </div>

          <P>
            Here is the part nobody told you. Right now, while you are still on tablets, you are in
            the window. Your body is still listening to you.
          </P>
          <P>
            <span className="font-semibold text-ink">
              You did not do anything wrong. Nobody ever showed you another way.
            </span>
          </P>
          <P>Today I will. And it starts with one thing nobody told you about your own food.</P>
        </div>
      </section>

      {/* ───────────────────────── 2b. WHO THIS IS FOR / NOT FOR ───────────────────────── */}
      <section className="bg-cream">
        <div className="section">
          <div className="text-center">
            <span className="eyebrow mx-auto block w-fit">Let Us Be Honest First</span>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-[2rem]">
              This guide is not for everybody.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[1.08rem] leading-relaxed text-ink/75">
              I would rather you keep your money than buy the wrong thing. So read these two lists
              before you go further.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-serif text-xl font-bold text-ink">Please do not buy this if:</h3>
              <ul className="mt-5 space-y-4">
                {WHO_ITS_NOT_FOR.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-4 w-4 text-red-500" strokeWidth={3} />
                    </span>
                    <span className="text-[1.05rem] leading-relaxed text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-who-blue/25 bg-who-blue-tint p-6">
              <h3 className="font-serif text-xl font-bold text-ink">This is for you if:</h3>
              <ul className="mt-5 space-y-4">
                {WHO_ITS_FOR.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-who-blue/10">
                      <Check className="h-4 w-4 text-who-blue" strokeWidth={3} />
                    </span>
                    <span className="text-[1.05rem] leading-relaxed text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews group 1 (3 states) ── */}
      <section className="bg-cream">
        <div className="section-wide">
          <TestimonialGroup heading="People across Nigeria are enjoying their food again" reviews={REVIEWS.slice(0, 3)} />
        </div>
      </section>

      {/* ───────────────────────── 3. EDUCATIONAL LEAD + UNIQUE MECHANISM ───────────────────────── */}
      <section className="bg-white">
        <div className="section">
          <span className="eyebrow">Why Nothing Has Worked Yet</span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-[2rem]">
            Here is what nobody ever told you.
          </h2>

          <img
            src="/images/dia1.jpg"
            alt="A Nigerian woman holding an insulin syringe, worried about her treatment"
            width={700}
            height={430}
            loading="lazy"
            className="my-8 h-auto w-full rounded-2xl object-cover shadow-md ring-1 ring-who-blue/10"
          />

          <P>
            Almost every diabetes advice you have heard was not built for Nigerian food. It was
            built for bread, pasta, and potato. For people who have never touched eba.
          </P>
          <P>
            It is easier to copy oyibo advice than to write one for our own food. So nobody did.
            You were handed a map drawn for a different country, then blamed for getting lost.
          </P>
          <P>So the advice says one thing: drop your food. No human being can keep that for long.</P>
          <P>
            You try. You suffer on plain oats. Then one evening hunger wins, you eat your swallow,
            and your sugar climbs again.
          </P>
          <P>
            You blame yourself. You should not.{" "}
            <span className="font-semibold text-ink">It was never your fault.</span>
          </P>

          <div className="mt-8 rounded-2xl border-l-4 border-who-blue bg-who-blue-tint p-6">
            <P>
              <span className="marker-blue">It was never the swallow itself.</span>
            </P>
            <P>
              The same eba can turn to sugar inside your body two different ways. One way is fast,
              and your meter screams. The other way is slow, and your sugar barely moves.
            </P>
            <P>Same food. Same eba. Two different endings.</P>
            <P>
              And the difference is not how much you eat. It is how fast that food turns to sugar,
              and a few quiet things you do around the meal decide it.
            </P>
          </div>

          <P>
            These are not punishments. Not plain oats. Not measuring tiny portions on a weighing
            scale.
          </P>
          <P>
            They are simple moves you make before, during, and even after you eat your favourite
            food, that decide whether your sugar jumps or stays calm.
          </P>
          <P>
            Put together, they are called{" "}
            <span className="marker">The Slow Sugar Method.</span>
          </P>
          <P>And the whole thing fits in one short guide you can finish tonight.</P>
        </div>
      </section>

      {/* ───────────────────────── 4. SOLUTION REVEAL (name first, then cover) ───────────────────────── */}
      <section className="bg-who-blue-tint">
        <div className="section">
          <p className="text-center text-lg font-semibold text-who-blue">
            That method is the heart of one short guide.
          </p>
          <h2 className="mt-3 text-center font-serif text-2xl font-bold text-ink sm:text-[2rem]">
            Eat Your Swallow Again: How Nigerians With Diabetes Can Enjoy Eba, Rice, and Pounded Yam
            Without Spiking Their Blood Sugar
          </h2>

          {/* Cover appears only AFTER the name is revealed in the copy */}
          <img
            src="/images/main.png"
            alt="The Eat Your Swallow Again blueprint cover"
            width={1500}
            height={1174}
            loading="lazy"
            className="mx-auto my-9 h-auto w-full max-w-md drop-shadow-2xl"
          />

          <P>
            It is not a diet. It is not punishment. It is a short blueprint you can finish in one
            evening and start using the same night.
          </P>
          <P>Same garri. Same rice. Same market.</P>
          <P>
            You only learn the Nigerian way to enjoy them, so your sugar stays calm and you still get
            up from the table full and satisfied.
          </P>

          <div className="mt-8 rounded-2xl border-l-4 border-cta-green bg-white/70 p-6">
            <P>
              Picture the next family Sunday. The amala and ewedu come out, and this time you are at
              the table with everybody, not in the corner.
            </P>
            <P>You eat. You enjoy it.</P>
            <P>And two hours later, your meter still reads calm. That is the whole point of this.</P>
          </div>

          {/* Author authority */}
          <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-who-blue/20 bg-white p-6 sm:flex-row sm:items-start">
            <img
              src="/images/docc.png"
              alt={`${AUTHOR.name}, the doctor behind the blueprint`}
              width={280}
              height={350}
              loading="lazy"
              className="h-44 w-44 flex-shrink-0 rounded-2xl object-cover ring-2 ring-who-blue/20"
            />
            <div>
              <h3 className="font-serif text-xl font-bold text-ink">From the desk of {AUTHOR.name}</h3>
              <p className="mt-2 text-[1.08rem] leading-relaxed text-ink/85">
                “I was tired of watching my own people lose their food, their feet, and their joy to
                advice that was never made for them. I watched too many move from one small tablet to
                a daily needle, when there was still time to turn it around. So I put everything that
                works, simple and safe, into one small guide a busy person can finish in one evening.”
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-wide text-who-blue">
                {AUTHOR.title}
              </p>
              <p className="mt-4 text-[1.05rem] font-semibold leading-relaxed text-ink">
                Over 900 Nigerians have now used this slow sugar method to enjoy their own food again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 5. BENEFIT STACK ───────────────────────── */}
      <section className="bg-white">
        <div className="section">
          <span className="eyebrow">What Is Inside</span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-[2rem]">
            Inside the blueprint, you will find:
          </h2>

          <img
            src="/images/dia3.jpg"
            alt="A Nigerian man checking his blood sugar with a glucometer at home"
            width={700}
            height={430}
            loading="lazy"
            className="my-8 h-auto w-full rounded-2xl object-cover shadow-md ring-1 ring-who-blue/10"
          />

          <ul className="space-y-5">
            {MAIN_BULLETS.map((b, i) => (
              <Bullet key={i}>{b}</Bullet>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border-l-4 border-cta-green bg-cream p-6">
            <p className="text-[1.1rem] font-semibold leading-relaxed text-ink">
              And you buy not one single special food. No diabetic products. No new drug. Only the
              food already in your house, enjoyed the smart way.
            </p>
          </div>

          <div className="mt-9 text-center">
            <a
              href="#order"
              className="mx-auto flex w-full max-w-xl flex-col items-center justify-center rounded-2xl bg-cta-green px-6 py-5 text-center text-white no-underline shadow-lg shadow-cta-green/40 transition hover:bg-cta-green-dark animate-pulse-cta"
            >
              <span className="text-xl font-extrabold leading-tight sm:text-2xl">{CTA_PRIMARY}</span>
              <span className="mt-1 text-sm font-medium text-white/90">See the price and get instant access</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Reviews group 2 (3 new states) ── */}
      <section className="bg-cream">
        <div className="section-wide">
          <TestimonialGroup heading="Quiet wins from quiet people" reviews={REVIEWS.slice(3, 6)} />
        </div>
      </section>

      {/* ───────────────────────── 6. SCREENSHOT SOCIAL PROOF (own location) ───────────────────────── */}
      <section className="bg-white">
        <div className="section text-center">
          <span className="eyebrow">Straight From A Reader’s Phone</span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-[2rem]">
            Messages like this keep coming in.
          </h2>
          <img
            src="/images/screen.jpg"
            alt="A WhatsApp message from a reader saying buying this was one of the best decisions of the year"
            width={810}
            height={980}
            loading="lazy"
            className="mx-auto mt-8 h-auto w-full max-w-sm rounded-2xl border border-ink/10 shadow-xl"
          />
        </div>
      </section>

      {/* ───────────────────────── 7. BONUSES (bigger images) ───────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="section-wide relative">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta-green px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
              <Gift className="h-4 w-4" /> 2 Free Bonuses Today
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-[2rem]">
              Order today and two private toolkits come free.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[1.1rem] leading-relaxed text-white/80">
              Many readers say they would have paid for these two on their own.
            </p>
          </div>

          {/* Bonus 1 */}
          <div className="mt-10 grid items-center gap-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-[340px_1fr] md:p-8">
            <img
              src="/images/bonus1.png"
              alt="Free bonus toolkit cover: How to Quickly Stop the Numbness, Tingling, and Burning Feet That Diabetes Leaves Behind"
              width={1500}
              height={1174}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-[340px] drop-shadow-2xl"
            />
            <div>
              <span className="text-sm font-bold uppercase tracking-wide text-cta-green">
                Free Bonus Toolkit 1 · Worth ₦6,000
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-white">
                How to Quickly Stop the Numbness, Tingling, and Burning Feet That Diabetes Leaves
                Behind
              </h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-white/80">
                For the nights the burning will not let you sleep. Simple, safe steps to calm the
                fire and protect your feet for life.
              </p>
              <ul className="mt-5 space-y-3">
                {BONUS1_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-cta-green" strokeWidth={3} />
                    <span className="text-[1.02rem] leading-relaxed text-white/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="mt-7 grid items-center gap-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-[340px_1fr] md:p-8">
            <img
              src="/images/bonus2.png"
              alt="Free bonus toolkit cover: Strong Again, Get Back the Strong Erection and Bedroom Strength That Diabetes Quietly Took Away"
              width={1500}
              height={1174}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-[340px] drop-shadow-2xl md:order-2"
            />
            <div className="md:order-1">
              <span className="text-sm font-bold uppercase tracking-wide text-cta-green">
                Free Bonus Toolkit 2 · Worth ₦5,000
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-white">
                Strong Again: Get Back the Strong Erection and Bedroom Strength That Diabetes Quietly
                Took Away
              </h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-white/80">
                The strength diabetes quietly took can quietly come back. Private, safe steps a man
                can start today, at home. No shame, no costly drug.
              </p>
              <ul className="mt-5 space-y-3">
                {BONUS2_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-cta-green" strokeWidth={3} />
                    <span className="text-[1.02rem] leading-relaxed text-white/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 8. OFFER RECAP + PRICE + FIRST CTA ───────────────────────── */}
      <section id="order" className="bg-cream">
        <div className="section">
          <h2 className="text-center text-2xl font-bold text-ink sm:text-[2rem]">
            Here is everything you get today
          </h2>

          <div className="mx-auto mt-8 max-w-2xl divide-y divide-ink/10 overflow-hidden rounded-2xl border border-who-blue/25 bg-white">
            {VALUE_STACK.map((item) => (
              <div key={item.name} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-who-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-who-blue">
                    {item.tag}
                  </span>
                  <span className="whitespace-nowrap font-bold text-ink/50 line-through">{item.value}</span>
                </div>
                <p className="mt-2 font-serif font-bold leading-snug text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-ink/70">{item.blurb}</p>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 bg-who-blue/5 p-5">
              <span className="font-serif text-lg font-bold text-ink">Total Value</span>
              <span className="font-serif text-lg font-bold text-ink/50 line-through">{PRICE_ANCHOR}</span>
            </div>
          </div>

          {/* Bundle render AFTER the recap */}
          <img
            src="/images/bundle_final.png"
            alt="The complete bundle: the main blueprint plus both free bonus toolkits"
            width={2560}
            height={1600}
            loading="lazy"
            className="mx-auto mt-9 h-auto w-full max-w-2xl rounded-2xl shadow-2xl ring-1 ring-who-blue/10"
          />

          {/* Price reveal */}
          <div className="mx-auto mt-9 max-w-2xl rounded-3xl border-2 border-cta-green bg-white p-7 text-center shadow-xl">
            <p className="text-lg font-semibold text-ink/70">
              You will not pay {PRICE_ANCHOR} today.
            </p>
            <p className="mt-2 text-ink/70">
              Not {PRICE_ANCHOR}. Not ₦15,000. Not even ₦10,000.
            </p>
            <p className="mt-3 text-ink/70">Get all three guides right now for just:</p>
            <p className="mt-1 font-serif text-6xl font-bold text-cta-green">{PRICE_TODAY}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink/60">
              One time payment · Instant download to your phone
            </p>
            <p className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink/75">
              That is less than one good meal at a nice spot, paid once and yours to keep for life.
            </p>
            <p className="mx-auto mt-2 max-w-md text-[1.02rem] leading-relaxed text-ink/75">
              And far less than what diabetes costs you once it pushes you onto the daily needle.
            </p>

            <div className="mt-7">
              <CTAButton label={CTA_PRIMARY} sub={`Yes, Send Me Everything For ${PRICE_TODAY}`} testId="cta-primary" />
            </div>

            <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink/70">
              Tap the green button, land on a secure Selar page, pay once, and all three guides
              download to your phone in minutes.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ink/70">
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-who-blue" /> Secure payment on Selar
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-who-blue" /> 90 day guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 9. URGENCY + GUARANTEE (Hormozi style, 90 day) ───────────────────────── */}
      <section className="bg-white">
        <div className="section">
          <div className="mx-auto mb-9 max-w-2xl rounded-2xl border-l-4 border-who-blue bg-who-blue-tint p-6">
            <p className="text-[1.12rem] font-semibold leading-relaxed text-ink">
              Here is the hard part. Diabetes does not wait for you to decide.
            </p>
            <p className="mt-3 text-[1.08rem] leading-relaxed text-ink/85">
              Every day you wait, the tiredness stays. The night thirst stays. The burning feet keep
              you awake.
            </p>
            <p className="mt-3 text-[1.08rem] leading-relaxed text-ink/85">
              And quietly, in the background, the window closes a little more. The window where
              tablets are still enough, before the daily needle takes their place.
            </p>
            <p className="mt-3 text-[1.08rem] leading-relaxed text-ink/85">
              One quiet evening with this blueprint can start to turn that around tonight.
            </p>
          </div>

          <div className="rounded-2xl bg-who-blue p-7 text-center text-white">
            <p className="flex items-center justify-center gap-2 text-lg font-bold">
              <Clock className="h-5 w-5" /> This {PRICE_TODAY} price ends soon
            </p>
            <p className="mx-auto mt-2 max-w-xl text-white/85">
              When this timer hits zero, the price goes back up to {PRICE_ANCHOR}.
            </p>
            <div className="mt-6 rounded-2xl bg-white/10 p-5">
              <CountdownTimer />
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center gap-4 rounded-3xl border-2 border-cta-green/50 bg-white p-8 text-center shadow-lg">
            <HeartHandshake className="h-12 w-12 text-cta-green" />
            <h3 className="font-serif text-2xl font-bold text-ink sm:text-[1.7rem]">
              The 90 Day, Keep Everything Guarantee
            </h3>
            <p className="mx-auto max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              Take a full 90 days. Read the blueprint and do the simple steps.
            </p>
            <p className="mx-auto max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              If your sugar is not calmer and you are not enjoying your own food again, just show me
              you did the steps. I will send back every naira.
            </p>
            <p className="mx-auto max-w-2xl text-[1.12rem] font-semibold leading-relaxed text-ink">
              You even keep all three guides as my gift for trying. The only way to lose here is to
              do nothing at all.
            </p>
          </div>
        </div>
      </section>

      {/* ── Reviews group 3 (3 final states) ── */}
      <section className="bg-cream">
        <div className="section-wide">
          <TestimonialGroup heading="More people enjoying their food again" reviews={REVIEWS.slice(6, 9)} />
        </div>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section className="bg-white">
        <div className="section">
          <span className="eyebrow mx-auto block w-fit">Before You Decide</span>
          <h2 className="mb-8 mt-3 text-center text-2xl font-bold text-ink sm:text-[2rem]">
            Questions people always ask
          </h2>
          <FAQ />
        </div>
      </section>

      {/* ───────────────────────── FINAL CTA ───────────────────────── */}
      <section className="relative overflow-hidden bg-who-blue text-white">
        <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="section relative text-center">
          <h2 className="text-2xl font-bold sm:text-[2rem]">
            Your food is waiting. So is your peace of mind.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1.15rem] leading-relaxed text-white/90">
            For {PRICE_TODAY}, you can stop eating in fear and start enjoying your own food again.
            Calm, steady, and satisfied. Both free toolkits land on your phone in minutes.
          </p>

          {/* Two paths */}
          <div className="mx-auto mt-9 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
              <p className="text-sm font-bold uppercase tracking-wide text-white/70">Option one</p>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-white/90">
                Change nothing. Keep eating in fear, keep sitting in the corner with your boiled
                plantain, and let the window keep closing until the day they hand you the needle.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-2 ring-cta-green">
              <p className="text-sm font-bold uppercase tracking-wide text-cta-green">Option two</p>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-ink/85">
                For {PRICE_TODAY}, learn the slow way tonight and enjoy your eba, rice, and pounded
                yam again. Calm sugar, full belly, and your strength coming back with it.
              </p>
            </div>
          </div>

          <div className="mt-9">
            <CTAButton label={CTA_SECONDARY} sub={`All three guides · ${PRICE_TODAY} today`} testId="cta-final" />
          </div>
          <p className="mt-5 text-sm text-white/85">
            Instant download · Secure checkout on Selar · 90 day guarantee
          </p>
        </div>
      </section>

      {/* ───────────────────────── PS ───────────────────────── */}
      <section className="bg-cream">
        <div className="section">
          <div className="mx-auto max-w-2xl space-y-5">
            <p className="text-[1.1rem] leading-relaxed text-ink/90">
              <span className="font-serif font-bold text-ink">P.S.</span> Remember, it was never the
              swallow. The food was never your enemy, only how fast nobody taught you to slow it
              down. The Slow Sugar Method changes that, and at {PRICE_TODAY} it is the easiest yes you
              will make this year. When the timer hits zero, the price goes back to {PRICE_ANCHOR}.
            </p>
            <p className="text-[1.1rem] leading-relaxed text-ink/90">
              <span className="font-serif font-bold text-ink">P.P.S.</span> You risk nothing. Take
              a full 90 days, do the simple steps, and if your sugar is not calmer you get back every
              naira and still keep all three guides. The risk is all mine, not yours.
            </p>
            <p className="text-[1.1rem] leading-relaxed text-ink/90">
              <span className="font-serif font-bold text-ink">P.P.P.S.</span> While you are still on
              tablets, the window is still open. Start tonight, and you give yourself the best chance
              to stay far away from the daily needle. That alone is worth more than {PRICE_TODAY}.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── FOOTER (minimal) ───────────────────────── */}
      <footer className="bg-ink py-8 text-center text-white/60">
        <p className="text-xs">
          © {new Date().getFullYear()} Diabetes Health. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
