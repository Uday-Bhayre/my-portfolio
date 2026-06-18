import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  ExternalLink,
  Code2,
  Server,
  Cloud,
  Smartphone,
  Database,
  Wrench,
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  MapPin,
  ChevronDown,
  Star,
  GitFork,
  CheckCircle,
  Loader2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uday Bhayre — Backend Software Engineer" },
      {
        name: "description",
        content:
          "Backend Software Engineer & IIITM Gwalior CS graduate. Building scalable distributed systems, fintech infra, and high-performance backends.",
      },
      { property: "og:title", content: "Uday Bhayre — Backend Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend engineer. Mysa intern, LeetCode Knight, CodeChef 4-star. 1000+ DSA problems solved.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Quote />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass shadow-[var(--shadow-card)]" : ""}`}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <div
              className="relative h-9 w-9 rounded-full"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-primary-foreground">
                U
              </span>
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              Uday<span className="text-primary">.</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-full glass p-2.5"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <div
                className={`h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <div className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <div
                className={`h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
const TITLES = ["Software Engineer", "Backend Developer", "Flutter Developer", "Problem Solver"];

function useTyping(words: string[], speed = 70, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = w.slice(0, text.length + 1);
          setText(next);
          if (next === w) setTimeout(() => setDel(true), pause);
        } else {
          const next = w.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((i + 1) % words.length);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function Hero() {
  const typed = useTyping(TITLES);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      {/* grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: "var(--mint)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "var(--mint)" }}
              />
            </span>
            Open to opportunities
          </div>
          <p className="font-display text-xl mb-3" style={{ color: "var(--amber)" }}>
            Hi there, I am
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
            Uday <span className="text-gradient">Bhayre</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 min-h-[2rem]">
            <span className="cursor-blink">{typed}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
            CS graduate from <span className="text-foreground font-medium">IIITM Gwalior</span>{" "}
            building scalable backend systems, real-time applications. Experienced in fintech
            payment systems, event-driven architectures, and production-grade software development.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: "https://github.com/Uday-Bhayre", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/uday-bhayre/",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:udaybhayre@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-primary transition"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
            <div className="h-5 w-px bg-border" />
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              India
            </span>
          </div>
        </motion.div>

        {/* Right: profile + orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative h-[480px] sm:h-[560px] flex items-center justify-center"
        >
          <div
            className="orb animate-float-slow absolute top-4 left-8 h-44 w-44 sm:h-56 sm:w-56"
            style={{ background: "var(--gradient-orb-coral)" }}
          />
          <div
            className="orb animate-float-medium absolute top-20 right-2 h-16 w-16 sm:h-20 sm:w-20"
            style={{ background: "var(--gradient-orb-mint)" }}
          />
          <div
            className="orb animate-float-slow absolute bottom-12 right-10 h-24 w-24 sm:h-32 sm:w-32"
            style={{ background: "var(--gradient-orb-amber)" }}
          />
          <div
            className="relative z-10 h-[380px] w-[300px] sm:h-[440px] sm:w-[340px] rounded-2xl overflow-hidden glass"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <img
              src="https://i.postimg.cc/RFkQ7dhc/Uday.jpg"
              alt="Uday Bhayre"
              width={1024}
              height={1024}
              className="h-full w-full object-cover brightness-[0.85]"
            />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-3 flex items-center gap-3">
              <div className="rounded-xl p-2" style={{ background: "var(--gradient-primary)" }}>
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="text-xs">
                <div className="font-semibold">1000+ DSA Problems</div>
                <div className="text-muted-foreground">LeetCode Knight · CodeChef 4★</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

/* ---------------- QUOTE ---------------- */
function Quote() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Reveal>
          <p className="font-display text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-primary">"</span>I enjoy the process of solving problems with{" "}
            <span className="text-gradient">clean and scalable</span> solutions. I have a genuine
            passion for crafting backends that perform at scale.
            <span className="text-primary">"</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <Reveal>
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary mb-4">
          <span className="h-1 w-1 rounded-full bg-primary" /> {kicker}
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-3">{title}</h2>
        {desc && <p className="text-muted-foreground max-w-2xl mx-auto">{desc}</p>}
      </div>
    </Reveal>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const focus = [
    { k: "Backend", v: "Distributed systems, microservices, event-driven design." },
    { k: "Scale", v: "Throughput, latency budgets, idempotency, observability." },
    { k: "Cloud", v: "AWS-native infra — Step Functions, EventBridge, S3, SQS." },
    { k: "Mobile", v: "Cross-platform apps with Flutter, real-time sync, and polished UX." },
  ];
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader kicker="About" title="The story behind the code" />

        {/* Top: story + side info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Story — 2/3 */}
          <Reveal className="lg:col-span-2">
            <article className="glass rounded-3xl p-8 sm:p-10 h-full">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--mint)" }} />
                <span>~/uday — whoami</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-5">
                I build backends that <span className="text-gradient">scale quietly</span> — and
                break loudly only in tests.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CS graduate from IIITM Gwalior building scalable backend systems, real-time
                applications. Experienced in fintech payment systems, event-driven architectures,
                and production-grade software development.
              </p>
            </article>
          </Reveal>

          {/* Side: Education + Current */}
          <Reveal delay={0.1} className="lg:col-span-1">
            <div className="flex flex-col gap-6 h-full">
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="rounded-xl p-2.5"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Education
                  </span>
                </div>
                <p className="font-display font-semibold text-lg leading-tight">
                  B.Tech, Computer Science
                </p>
                <p className="text-sm text-muted-foreground mt-1">IIITM Gwalior · Class of 2026</p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-gradient font-display text-4xl font-bold leading-none">
                    8.58
                  </span>
                  <span className="text-sm text-muted-foreground mb-1">/ 10 CGPA</span>
                </div>
              </div>

              <div className="glass rounded-3xl p-6 flex-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Currently
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Open to exciting Software Engineering opportunities and available for immediate
                  joining.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Focus pillars */}
        <Reveal delay={0.15}>
          <div className="mt-6 glass rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {focus.map((f) => (
                <div key={f.k} className="border-l border-primary/40 pl-4">
                  <div className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">
                    {f.k}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{f.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
const EXP = [
  {
    role: "Backend Software Engineer Intern",
    company: "Mysa",
    tag: "Fintech",
    date: "Dec 2025 — Apr 2026",
    summary:
      "Scaled payment orchestration handling 2000+ RPS in production with idempotent, observable workflows.",
    points: [
      "Enhanced Narad orchestration service handling 2000+ RPS in production.",
      "Implemented automated abortion flows and polling-based idempotency.",
      "Reduced support overhead by 60% using AWS Bedrock-powered diagnostics.",
      "Cut database storage costs by 75% via Amazon S3 + Glacier tiering.",
      "Built UPI onboarding workflows using AWS Step Functions.",
    ],
    tech: ["AWS Step Functions", "EventBridge", "SQS", "Bedrock", "S3", "SQL"],
  },
  {
    role: "Software Engineer Intern",
    company: "Noblessetech",
    tag: "Product",
    date: "May 2025 — Jul 2025",
    summary: "Shipped a real-time mobile product end-to-end — auth, chat, and APIs.",
    points: [
      "Built Dreamy Date mobile app with REST APIs and real-time messaging.",
      "Implemented OAuth, OTP authentication, and JWT-based RBAC.",
      "Improved chat latency using WebSockets for live communication.",
      "Shipped features in fast Agile sprint cycles.",
    ],
    tech: ["Flutter", "Node.js", "MongoDB", "WebSockets", "Firebase"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader kicker="Experience" title="Where I've shipped" />

        <div className="space-y-6">
          {EXP.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.08}>
              <div className="group relative glass rounded-3xl overflow-hidden transition hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                <div className="relative grid lg:grid-cols-12">
                  {/* Left rail */}
                  <div className="lg:col-span-4 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-border relative">
                    <div className="absolute top-8 right-8 lg:hidden">
                      <span className="rounded-full bg-primary/10 text-primary text-xs px-3 py-1 font-medium">
                        {e.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>
                        0{i + 1} / 0{EXP.length}
                      </span>
                    </div>
                    <div
                      className={`font-display ${e.company === "Noblessetech" ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl"} font-bold leading-none mb-4 text-gradient`}
                      style={
                        e.company === "Noblessetech"
                          ? { fontSize: "clamp(2.125rem, 5vw, 2.75rem)" }
                          : undefined
                      }
                    >
                      {e.company}
                    </div>
                    <div className="hidden lg:inline-flex mb-4">
                      <span className="rounded-full bg-primary/10 text-primary text-xs px-3 py-1 font-medium">
                        {e.tag}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5" /> {e.date}
                    </div>
                  </div>

                  {/* Right: role + bullets */}
                  <div className="lg:col-span-8 p-8 sm:p-10">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight mb-3">
                      {e.role}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {e.summary}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                      {e.points.map((p) => (
                        <div key={p} className="flex gap-3 text-sm">
                          <ArrowRight className="h-3.5 w-3.5 text-primary mt-1 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{p}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                      {e.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 border border-border px-2.5 py-1 text-[11px] font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
const SKILLS = [
  {
    icon: Code2,
    title: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "Dart", "SQL"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "WebSockets", "Microservices"],
  },
  {
    icon: Cloud,
    title: "Cloud & Data",
    items: [
      "AWS",
      "S3",
      "Step Functions",
      "EventBridge",
      "SQS",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firestore",
    ],
  },
  { icon: Smartphone, title: "Mobile", items: ["Flutter", "Dart", "Getx", "BLoC", "Provider"] },
  {
    icon: Database,
    title: "Architecture",
    items: ["Distributed Systems", "System Design", "Event-Driven", "Idempotency", "Caching"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Firebase",
      "Postman",
      "Apidog",
      "DataDog",
      "Coralogix",
      "Confluence",
      "Agile",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          kicker="Skills"
          title="My toolkit"
          desc="Technologies I use to design, build, and ship reliable systems."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group glass rounded-3xl p-6 h-full hover:border-primary/40 transition relative overflow-hidden">
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-20 transition"
                  style={{ background: "var(--gradient-primary)", filter: "blur(40px)" }}
                />
                <div className="relative">
                  <div
                    className="inline-flex rounded-2xl p-3 mb-4"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-lg bg-white/5 border border-border px-2.5 py-1 text-xs text-muted-foreground group-hover:text-foreground transition"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  {
    icon: Server,
    title: "Backend Development",
    desc: "Production-grade REST APIs, microservices, and event-driven systems built for scale.",
    stack: "Node.js · Spring Boot · AWS",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "End-to-end product engineering from database schema to polished UI.",
    stack: "React · Node.js · MongoDB",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with real-time features and clean UX.",
    stack: "Flutter · Firebase · WebSockets",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Services" title="How I can help" />
        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="glass rounded-3xl p-7 h-full hover:border-primary/40 transition group">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-primary/10 group-hover:bg-primary/20 transition">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                    <p className="text-xs text-primary font-medium">{s.stack}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
const PROJECTS = [
  {
    name: "CakeWake",
    desc: "Multi-role real-time cake ordering platform connecting customers, vendors, and delivery partners with live tracking and event-driven communication.",
    features: [
      "Real-time order tracking",
      "Socket.IO event architecture",
      "JWT auth & RBAC",
      "Google Maps integration",
    ],
    tech: ["Flutter", "Node.js", "MongoDB", "Socket.IO", "Google Maps"],
    stars: 24,
    forks: 5,
    accent: "var(--gradient-orb-coral)",
    demo: false,
  },
  {
    name: "CompileX",
    desc: "Real-time code execution platform supporting multiple programming languages with live stdin/stdout interaction inside Docker sandboxes.",
    features: [
      "Interactive runtime input",
      "Docker sandboxing",
      "Secure execution",
      "Live WebSocket I/O",
    ],
    tech: ["Node.js", "Docker", "WebSockets", "React"],
    stars: 18,
    forks: 3,
    accent: "var(--gradient-orb-mint)",
    demo: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          kicker="Projects"
          title="Selected work"
          desc="A few projects I'm proud of. More on GitHub."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="glass rounded-3xl p-7 h-full group hover:border-primary/40 transition relative overflow-hidden">
                <div
                  className="absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-30 group-hover:opacity-50 transition"
                  style={{ background: p.accent, filter: "blur(40px)" }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        {p.stars}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        {p.forks}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-muted-foreground flex items-center gap-1.5"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Uday-Bhayre"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow"
                    >
                      <Github className="h-4 w-4" /> Source
                    </a>
                    {p.demo && (
                      <a
                        href="https://github.com/Uday-Bhayre"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Uday-Bhayre"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Github className="h-4 w-4" /> View all on GitHub <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const ACHIEVEMENTS = [
  { v: 1000, suf: "+", label: "DSA Problems Solved", sub: "Across LeetCode, CodeChef, Codeforces" },
  { v: 1944, suf: "", label: "LeetCode Peak Rating", sub: "Knight badge · Top 1.5% globally" },
  { v: 1810, suf: "", label: "CodeChef Peak Rating", sub: "4-Star competitive programmer" },
  { v: 379, suf: "", label: "LeetCode WC 451 Rank", sub: "Out of 25,738 globally" },
];

const PROFILES = [
  { label: "LeetCode", href: "https://leetcode.com/u/udaybhayre/" },
  { label: "CodeChef", href: "https://www.codechef.com/users/werewolf2004" },
  { label: "Codeforces", href: "https://codeforces.com/profile/udaybhayre" },
  { label: "Codolio", href: "https://codolio.com/profile/uday_102" },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Achievements" title="Numbers I'm proud of" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.05}>
              <div className="glass rounded-3xl p-6 h-full hover:border-primary/40 transition">
                <div className="rounded-xl bg-primary/10 inline-flex p-2.5 mb-4">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div className="text-gradient font-display text-4xl font-bold mb-1">
                  <Counter to={a.v} suffix={a.suf} />
                </div>
                <div className="font-medium text-sm mb-1">{a.label}</div>
                <div className="text-xs text-muted-foreground">{a.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="glass rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Find me on competitive programming platforms:
            </p>
            <div className="flex flex-wrap gap-2">
              {PROFILES.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary/10 text-primary text-xs px-3 py-1.5 font-medium hover:bg-primary/20 transition inline-flex items-center gap-1.5"
                >
                  {p.label} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [copied, setCopied] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        "service_9vmtjkw",
        "template_he1ta35",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey: "QNA5IcSAJvPNAusx8" },
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          kicker="Contact"
          title="Let's build something"
          desc="Open to backend and app development roles, freelance projects, and collaborations."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass rounded-3xl p-7 space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "udaybhayre@gmail.com",
                  href: "mailto:udaybhayre@gmail.com",
                },
                { icon: Phone, label: "Phone", value: "+91 9329958590", href: "tel:+919329958590" },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "uday-bhayre",
                  href: "https://www.linkedin.com/in/uday-bhayre/",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "Uday-Bhayre",
                  href: "https://github.com/Uday-Bhayre",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition group"
                >
                  <div className="rounded-xl bg-primary/10 p-3">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium truncate block hover:text-primary"
                    >
                      {c.value}
                    </a>
                  </div>
                  <button
                    onClick={() => copy(c.value, c.label)}
                    className="text-xs text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition"
                  >
                    {copied === c.label ? "Copied!" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full inline-flex justify-center items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="h-4 w-4" /> Sent!
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              {status === "success" && (
                <p className="text-xs text-center" style={{ color: "var(--mint)" }}>
                  Message sent successfully. I'll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-center text-red-400">
                  Something went wrong. Please try again or reach out directly via email.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: "https://github.com/Uday-Bhayre" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/uday-bhayre/" },
            { icon: Mail, href: "mailto:udaybhayre@gmail.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <div className="text-center text-xs text-muted-foreground">
          Built with <span className="text-primary">♥</span> by Uday Bhayre · ©{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
