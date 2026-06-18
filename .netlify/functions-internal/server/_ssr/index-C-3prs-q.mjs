import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { m as motion, u as useInView } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, M as Mail, D as Download, G as Github, L as Linkedin, a as MapPin, S as Sparkles, C as ChevronDown, b as GraduationCap, B as Briefcase, c as CodeXml, d as Server, e as Cloud, f as Smartphone, g as Database, W as Wrench, h as Star, i as GitFork, E as ExternalLink, T as Trophy, P as Phone, j as LoaderCircle, k as CircleCheckBig } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "about",
  label: "About"
}, {
  id: "experience",
  label: "Experience"
}, {
  id: "skills",
  label: "Skills"
}, {
  id: "projects",
  label: "Projects"
}, {
  id: "achievements",
  label: "Achievements"
}, {
  id: "contact",
  label: "Contact"
}];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mx-auto max-w-7xl px-4 sm:px-6`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass shadow-[var(--shadow-card)]" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-9 w-9 rounded-full", style: {
          background: "var(--gradient-primary)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center font-display font-bold text-primary-foreground", children: "U" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold tracking-tight", children: [
          "Uday",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${n.id}`, className: "rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition", children: n.label }, n.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90", style: {
        background: "var(--gradient-primary)",
        boxShadow: "var(--shadow-glow)"
      }, children: "Let's Talk" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "md:hidden rounded-full glass p-2.5", "aria-label": "Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}` })
      ] }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${n.id}`, onClick: () => setOpen(false), className: "rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5", children: n.label }, n.id)) })
  ] }) });
}
const TITLES = ["Software Engineer", "Backend Developer", "Flutter Developer", "Problem Solver"];
function useTyping(words, speed = 70, pause = 1400) {
  const [i, setI] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
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
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}
function Hero() {
  const typed = useTyping(TITLES);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center pt-28 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-[0.07]", style: {
      backgroundImage: "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", style: {
              background: "var(--mint)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full", style: {
              background: "var(--mint)"
            } })
          ] }),
          "Open to opportunities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl mb-3", style: {
          color: "var(--amber)"
        }, children: "Hi there, I am" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5", children: [
          "Uday ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Bhayre" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl text-muted-foreground font-medium mb-6 min-h-[2rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-blink", children: typed }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-muted-foreground max-w-xl leading-relaxed mb-8", children: [
          "CS graduate from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "IIITM Gwalior" }),
          " building scalable backend systems, real-time applications. Experienced in fintech payment systems, event-driven architectures, and production-grade software development."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#projects", className: "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]", style: {
            background: "var(--gradient-primary)",
            boxShadow: "var(--shadow-glow)"
          }, children: [
            "View Projects ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            " Contact Me"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            " Resume"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          [{
            icon: Github,
            href: "https://github.com/Uday-Bhayre",
            label: "GitHub"
          }, {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/uday-bhayre/",
            label: "LinkedIn"
          }, {
            icon: Mail,
            href: "mailto:udaybhayre@gmail.com",
            label: "Email"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.href, target: "_blank", rel: "noreferrer", "aria-label": s.label, className: "text-muted-foreground hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }, s.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            "India"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.92
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.9,
        delay: 0.15
      }, className: "relative h-[480px] sm:h-[560px] flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb animate-float-slow absolute top-4 left-8 h-44 w-44 sm:h-56 sm:w-56", style: {
          background: "var(--gradient-orb-coral)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb animate-float-medium absolute top-20 right-2 h-16 w-16 sm:h-20 sm:w-20", style: {
          background: "var(--gradient-orb-mint)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb animate-float-slow absolute bottom-12 right-10 h-24 w-24 sm:h-32 sm:w-32", style: {
          background: "var(--gradient-orb-amber)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-[380px] w-[300px] sm:h-[440px] sm:w-[340px] rounded-2xl overflow-hidden glass", style: {
          boxShadow: "var(--shadow-glow)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://i.postimg.cc/RFkQ7dhc/Uday.jpg", alt: "Uday Bhayre", width: 1024, height: 1024, className: "h-full w-full object-cover brightness-[0.85]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 glass rounded-2xl p-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl p-2", style: {
              background: "var(--gradient-primary)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "1000+ DSA Problems" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "LeetCode Knight · CodeChef 4★" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition", "aria-label": "Scroll down", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-6 w-6 animate-bounce" }) })
  ] });
}
function Quote() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: '"' }),
    "I enjoy the process of solving problems with",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "clean and scalable" }),
    " solutions. I have a genuine passion for crafting backends that perform at scale.",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: '"' })
  ] }) }) }) });
}
function Reveal({
  children,
  delay = 0,
  className
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, className, initial: {
    opacity: 0,
    y: 24
  }, animate: inView ? {
    opacity: 1,
    y: 0
  } : {}, transition: {
    duration: 0.6,
    delay
  }, children });
}
function SectionHeader({
  kicker,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
      " ",
      kicker
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl font-bold mb-3", children: title }),
    desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: desc })
  ] }) });
}
function About() {
  const focus = [{
    k: "Backend",
    v: "Distributed systems, microservices, event-driven design."
  }, {
    k: "Scale",
    v: "Throughput, latency budgets, idempotency, observability."
  }, {
    k: "Cloud",
    v: "AWS-native infra — Step Functions, EventBridge, S3, SQS."
  }, {
    k: "Mobile",
    v: "Cross-platform apps with Flutter, real-time sync, and polished UX."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 sm:py-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "About", title: "The story behind the code" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass rounded-3xl p-8 sm:p-10 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
            background: "var(--mint)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "~/uday — whoami" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-5", children: [
          "I build backends that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "scale quietly" }),
          " — and break loudly only in tests."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "CS graduate from IIITM Gwalior building scalable backend systems, real-time applications. Experienced in fintech payment systems, event-driven architectures, and production-grade software development." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl p-2.5", style: {
              background: "var(--gradient-primary)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Education" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg leading-tight", children: "B.Tech, Computer Science" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "IIITM Gwalior · Class of 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-display text-4xl font-bold leading-none", children: "8.58" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground mb-1", children: "/ 10 CGPA" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
            "Currently"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: "Open to exciting Software Engineering opportunities and available for immediate joining." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 glass rounded-3xl p-8 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8", children: focus.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-primary/40 pl-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider", children: f.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground leading-relaxed", children: f.v })
    ] }, f.k)) }) }) })
  ] }) });
}
const EXP = [{
  role: "Backend Software Engineer Intern",
  company: "Mysa",
  tag: "Fintech",
  date: "Dec 2025 — Apr 2026",
  summary: "Scaled payment orchestration handling 2000+ RPS in production with idempotent, observable workflows.",
  points: ["Enhanced Narad orchestration service handling 2000+ RPS in production.", "Implemented automated abortion flows and polling-based idempotency.", "Reduced support overhead by 60% using AWS Bedrock-powered diagnostics.", "Cut database storage costs by 75% via Amazon S3 + Glacier tiering.", "Built UPI onboarding workflows using AWS Step Functions."],
  tech: ["AWS Step Functions", "EventBridge", "SQS", "Bedrock", "S3", "SQL"]
}, {
  role: "Software Engineer Intern",
  company: "Noblessetech",
  tag: "Product",
  date: "May 2025 — Jul 2025",
  summary: "Shipped a real-time mobile product end-to-end — auth, chat, and APIs.",
  points: ["Built Dreamy Date mobile app with REST APIs and real-time messaging.", "Implemented OAuth, OTP authentication, and JWT-based RBAC.", "Improved chat latency using WebSockets for live communication.", "Shipped features in fast Agile sprint cycles."],
  tech: ["Flutter", "Node.js", "MongoDB", "WebSockets", "Firebase"]
}];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "py-24 sm:py-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Experience", title: "Where I've shipped" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: EXP.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group relative glass rounded-3xl overflow-hidden transition hover:border-primary/40 hover:shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-border relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 right-8 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 text-primary text-xs px-3 py-1 font-medium", children: e.tag }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "0",
            i + 1,
            " / 0",
            EXP.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl sm:text-6xl font-bold leading-none mb-4 text-gradient", children: e.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:inline-flex mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 text-primary text-xs px-3 py-1 font-medium", children: e.tag }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5" }),
          " ",
          e.date
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 p-8 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl font-semibold leading-tight mb-3", children: e.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6 max-w-2xl", children: e.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6", children: e.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-primary mt-1 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground leading-relaxed", children: p })
        ] }, p)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-4 border-t border-border", children: e.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/5 border border-border px-2.5 py-1 text-[11px] font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition", children: t }, t)) })
      ] })
    ] }) }) }, e.company)) })
  ] }) });
}
const SKILLS = [{
  icon: CodeXml,
  title: "Languages",
  items: ["C++", "Java", "Python", "JavaScript", "Dart", "SQL"]
}, {
  icon: Server,
  title: "Backend",
  items: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "WebSockets", "Microservices"]
}, {
  icon: Cloud,
  title: "Cloud & Data",
  items: ["AWS", "S3", "Step Functions", "EventBridge", "SQS", "MySQL", "MongoDB", "Redis", "Firestore"]
}, {
  icon: Smartphone,
  title: "Mobile",
  items: ["Flutter", "Dart", "Getx", "BLoC", "Provider"]
}, {
  icon: Database,
  title: "Architecture",
  items: ["Distributed Systems", "System Design", "Event-Driven", "Idempotency", "Caching"]
}, {
  icon: Wrench,
  title: "Tools",
  items: ["Docker", "Git", "GitHub", "CI/CD", "Firebase", "Postman", "Apidog", "DataDog", "Coralogix", "Confluence", "Agile"]
}];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Skills", title: "My toolkit", desc: "Technologies I use to design, build, and ship reliable systems." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SKILLS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass rounded-3xl p-6 h-full hover:border-primary/40 transition relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-20 transition", style: {
        background: "var(--gradient-primary)",
        filter: "blur(40px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-2xl p-3 mb-4", style: {
          background: "var(--gradient-primary)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-3", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-lg bg-white/5 border border-border px-2.5 py-1 text-xs text-muted-foreground group-hover:text-foreground transition", children: it }, it)) })
      ] })
    ] }) }, s.title)) })
  ] }) });
}
const SERVICES = [{
  icon: Server,
  title: "Backend Development",
  desc: "Production-grade REST APIs, microservices, and event-driven systems built for scale.",
  stack: "Node.js · Spring Boot · AWS"
}, {
  icon: CodeXml,
  title: "Full Stack Development",
  desc: "End-to-end product engineering from database schema to polished UI.",
  stack: "React · Node.js · MongoDB"
}, {
  icon: Smartphone,
  title: "Mobile App Development",
  desc: "Cross-platform mobile apps with real-time features and clean UX.",
  stack: "Flutter · Firebase · WebSockets"
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Services", title: "How I can help" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-7 h-full hover:border-primary/40 transition group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl p-3 bg-primary/10 group-hover:bg-primary/20 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium", children: s.stack })
      ] })
    ] }) }) }, s.title)) })
  ] }) });
}
const PROJECTS = [{
  name: "CakeWake",
  desc: "Multi-role real-time cake ordering platform connecting customers, vendors, and delivery partners with live tracking and event-driven communication.",
  features: ["Real-time order tracking", "Socket.IO event architecture", "JWT auth & RBAC", "Google Maps integration"],
  tech: ["Flutter", "Node.js", "MongoDB", "Socket.IO", "Google Maps"],
  stars: 24,
  forks: 5,
  accent: "var(--gradient-orb-coral)",
  demo: false
}, {
  name: "CompileX",
  desc: "Real-time code execution platform supporting multiple programming languages with live stdin/stdout interaction inside Docker sandboxes.",
  features: ["Interactive runtime input", "Docker sandboxing", "Secure execution", "Live WebSocket I/O"],
  tech: ["Node.js", "Docker", "WebSockets", "React"],
  stars: 18,
  forks: 3,
  accent: "var(--gradient-orb-mint)",
  demo: false
}];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Projects", title: "Selected work", desc: "A few projects I'm proud of. More on GitHub." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-2 gap-6", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-7 h-full group hover:border-primary/40 transition relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-30 group-hover:opacity-50 transition", style: {
        background: p.accent,
        filter: "blur(40px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5" }),
              p.stars
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitFork, { className: "h-3.5 w-3.5" }),
              p.forks
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5 leading-relaxed", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2 mb-5", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-5", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] text-muted-foreground", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/Uday-Bhayre", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
            " Source"
          ] }),
          p.demo && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/Uday-Bhayre", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
            " Live demo"
          ] })
        ] })
      ] })
    ] }) }, p.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/Uday-Bhayre", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
      " View all on GitHub ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) }) })
  ] }) });
}
function Counter({
  to,
  suffix = ""
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n.toLocaleString(),
    suffix
  ] });
}
const ACHIEVEMENTS = [{
  v: 1e3,
  suf: "+",
  label: "DSA Problems Solved",
  sub: "Across LeetCode, CodeChef, Codeforces"
}, {
  v: 1944,
  suf: "",
  label: "LeetCode Peak Rating",
  sub: "Knight badge · Top 1.5% globally"
}, {
  v: 1810,
  suf: "",
  label: "CodeChef Peak Rating",
  sub: "4-Star competitive programmer"
}, {
  v: 379,
  suf: "",
  label: "LeetCode WC 451 Rank",
  sub: "Out of 25,738 globally"
}];
const PROFILES = [{
  label: "LeetCode",
  href: "https://leetcode.com/u/udaybhayre/"
}, {
  label: "CodeChef",
  href: "https://www.codechef.com/users/werewolf2004"
}, {
  label: "Codeforces",
  href: "https://codeforces.com/profile/udaybhayre"
}, {
  label: "Codolio",
  href: "https://codolio.com/profile/uday_102"
}];
function Achievements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "achievements", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Achievements", title: "Numbers I'm proud of" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8", children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 h-full hover:border-primary/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-primary/10 inline-flex p-2.5 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gradient font-display text-4xl font-bold mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: a.v, suffix: a.suf }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm mb-1", children: a.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.sub })
    ] }) }, a.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Find me on competitive programming platforms:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: PROFILES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.href, target: "_blank", rel: "noreferrer", className: "rounded-full bg-primary/10 text-primary text-xs px-3 py-1.5 font-medium hover:bg-primary/20 transition inline-flex items-center gap-1.5", children: [
        p.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
      ] }, p.label)) })
    ] }) })
  ] }) });
}
function Contact() {
  const [copied, setCopied] = reactExports.useState("");
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = reactExports.useState("idle");
  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send("service_9vmtjkw", "template_he1ta35", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, {
        publicKey: "QNA5IcSAJvPNAusx8"
      });
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setTimeout(() => setStatus("idle"), 4e3);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4e3);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Contact", title: "Let's build something", desc: "Open to backend and app development roles, freelance projects, and collaborations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-7 space-y-4", children: [{
        icon: Mail,
        label: "Email",
        value: "udaybhayre@gmail.com",
        href: "mailto:udaybhayre@gmail.com"
      }, {
        icon: Phone,
        label: "Phone",
        value: "+91 9329958590",
        href: "tel:+919329958590"
      }, {
        icon: Linkedin,
        label: "LinkedIn",
        value: "uday-bhayre",
        href: "https://www.linkedin.com/in/uday-bhayre/"
      }, {
        icon: Github,
        label: "GitHub",
        value: "Uday-Bhayre",
        href: "https://github.com/Uday-Bhayre"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-primary/10 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: "_blank", rel: "noreferrer", className: "font-medium truncate block hover:text-primary", children: c.value })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => copy(c.value, c.label), className: "text-xs text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition", children: copied === c.label ? "Copied!" : "Copy" })
      ] }, c.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "glass rounded-3xl p-7 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", value: formData.name, onChange: handleChange, required: true, className: "mt-1 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition", placeholder: "Your name" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "email", type: "email", value: formData.email, onChange: handleChange, required: true, className: "mt-1 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition", placeholder: "you@example.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", value: formData.message, onChange: handleChange, required: true, rows: 4, className: "mt-1 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none", placeholder: "Tell me about your project..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: status === "loading" || status === "success", className: "w-full inline-flex justify-center items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100", style: {
          background: "var(--gradient-primary)",
          boxShadow: "var(--shadow-glow)"
        }, children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Sending..."
        ] }) : status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
          " Sent!"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Send Message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center", style: {
          color: "var(--mint)"
        }, children: "Message sent successfully. I'll get back to you soon!" }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-red-400", children: "Something went wrong. Please try again or reach out directly via email." })
      ] }) })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10 mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 flex flex-col items-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-5", children: [{
      icon: Github,
      href: "https://github.com/Uday-Bhayre"
    }, {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/uday-bhayre/"
    }, {
      icon: Mail,
      href: "mailto:udaybhayre@gmail.com"
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.href, target: "_blank", rel: "noreferrer", className: "text-muted-foreground hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-muted-foreground", children: [
      "Built with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "♥" }),
      " by Uday Bhayre · © ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] })
  ] }) });
}
export {
  Portfolio as component
};
