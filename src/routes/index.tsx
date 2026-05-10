import { createFileRoute } from "@tanstack/react-router";
import {
  Shield, Mail, Phone, MapPin, Linkedin, FileDown, Award, Printer,
  GraduationCap, Briefcase, Wrench, FolderGit2, Users, Target,
  Compass, Rocket, BookOpen, MessageSquare, BadgeCheck, ExternalLink,
  ChevronRight, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

const CV_URL = "https://drive.google.com/file/d/1lGnwkanN9dvWakP4nNftgCPyoZSEa8LU/view";
const LINKEDIN_URL = "https://www.linkedin.com/in/binushi-dimandi-muhandiram-2a3204258/";
const CERT_1 = "https://drive.google.com/file/d/1QAXmKuxroJSFPOTUCkJ-IaeWAvQNAhFt/view";
const CERT_2 = "https://drive.google.com/file/d/13MTMlUY6zRXtud1P3XLW43fXRHfF32px/view";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journal", label: "Reflective Journal" },
  { id: "career", label: "Career Plan" },
  { id: "cv", label: "CV" },
  { id: "certs", label: "Certifications" },
];

function NavBar() {
  return (
    <header className="no-print sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-semibold">
          <Shield className="w-5 h-5 text-primary" />
          <span>Binushi<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium btn-glow transition-shadow"
        >
          <Printer className="w-4 h-4" /> Export PDF
        </button>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, icon: Icon }: { eyebrow: string; title: string; icon: any }) {
  return (
    <div className="mb-12">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
        <Icon className="w-4 h-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 cyber-grid no-print" aria-hidden />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl no-print" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" /> IT4070 — Preparing for Professional World
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Binushi <span className="gradient-text">Dimandi</span><br />Muhandiram
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary font-medium">Cyber Security Analyst</p>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            Cybersecurity undergraduate and SOC professional passionate about threat detection,
            incident response, and continuous professional development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 no-print">
            <a href={CV_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium btn-glow transition-shadow">
              <FileDown className="w-4 h-4" /> View CV
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-primary/50 transition-colors">
              <Linkedin className="w-4 h-4" /> View LinkedIn
            </a>
            <a href="#certs"
               className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-primary/50 transition-colors">
              <Award className="w-4 h-4" /> View Certifications
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> binutm126@gmail.com</span>
            <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +94 71 475 4271</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Pittugala, Malabe</span>
          </div>
        </div>

        {/* Decorative SOC panel */}
        <div className="relative no-print">
          <div className="glass rounded-2xl p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-muted-foreground">SOC // LIVE</span>
              </div>
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div className="space-y-3 font-mono text-xs">
              {[
                { l: "Threats Monitored", v: "24 / 7", c: "text-primary" },
                { l: "Incident Response", v: "Active", c: "text-emerald-400" },
                { l: "SIEM / EDR / XDR", v: "Engaged", c: "text-primary" },
                { l: "CTI Reporting", v: "Verified", c: "text-emerald-400" },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between border-b border-border/40 pb-2">
                  <span className="text-muted-foreground">{r.l}</span>
                  <span className={r.c}>{r.v}</span>
                </div>
              ))}
              <div className="pt-2 text-muted-foreground">
                <span className="text-primary">$</span> analyst@soc:~ defending_perimeter<span className="animate-pulse">▌</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="01 — Introduction" title="Introduction to Myself" icon={Compass} />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I am <span className="text-foreground font-semibold">Binushi Dimandi Muhandiram</span>, currently pursuing a
            <span className="text-foreground"> BSc (Hons) in Information Technology with a specialization in Cyber Security </span>
            at the Sri Lanka Institute of Information Technology (SLIIT).
          </p>
          <p>
            Alongside my studies, I have built more than a year of hands-on experience as a
            <span className="text-foreground"> Cyber Security Analyst in 24/7 SOC environments</span>, working with
            tools such as SIEM, EDR/XDR, Microsoft Defender, Microsoft Sentinel, Stella Cyber Open XDR, CrowdStrike,
            Darktrace, and Imperva Cloud WAF.
          </p>
          <p>
            My professional interests include <span className="text-foreground">threat monitoring, incident response,
            malware and phishing analysis, cyber threat intelligence (CTI) reporting, and security operations</span>.
            I enjoy solving real-world security problems, learning new attacker techniques, and contributing to teams
            that protect organisations from evolving cyber threats.
          </p>
        </div>
        <div className="space-y-3">
          {[
            { i: Shield, t: "SOC Operations" },
            { i: Target, t: "Threat Detection" },
            { i: BadgeCheck, t: "Incident Response" },
            { i: BookOpen, t: "Continuous Learning" },
          ].map((x) => (
            <div key={x.t} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
              <x.i className="w-5 h-5 text-primary" />
              <span className="font-medium">{x.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section id="journal" className="border-y border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="02 — Reflection" title="Reflective Journal — What I Learned in PPW" icon={BookOpen} />
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <aside className="space-y-3 md:sticky md:top-24 self-start">
            {[
              { i: MessageSquare, t: "Professional Communication" },
              { i: Briefcase, t: "CV & Personal Branding" },
              { i: Users, t: "Interview Preparation" },
              { i: Rocket, t: "Career Planning" },
              { i: BadgeCheck, t: "Confidence & Behaviour" },
              { i: BookOpen, t: "Continuous Learning" },
            ].map((x) => (
              <div key={x.t} className="glass rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                <x.i className="w-4 h-4 text-primary" /> {x.t}
              </div>
            ))}
          </aside>

          <article className="space-y-5 leading-relaxed text-muted-foreground text-[1.02rem]">
            <p>
              When I first entered the <span className="text-foreground">Preparing for Professional World (PPW)</span> module,
              I considered myself primarily a technical student — comfortable in front of a SIEM dashboard, but far less
              confident in front of an interview panel or a professional email thread. Looking back, this module reshaped
              the way I see myself as a future cybersecurity professional, and not just as an undergraduate completing
              another subject.
            </p>
            <p>
              One of the most valuable lessons I gained was around <span className="text-foreground">professional
              communication</span>. As a SOC analyst, I write incident escalations and CTI reports almost daily, but PPW
              made me realise how much tone, structure, and clarity matter when communicating with clients and senior
              stakeholders. I learned to write emails that are short, polite, and actionable — qualities that directly
              improved how I deliver investigation summaries at work.
            </p>
            <p>
              The sessions on <span className="text-foreground">CV preparation and personal branding</span> challenged me
              to articulate my SOC experience in a way that recruiters outside the security domain can understand. I
              re-wrote my CV using stronger action verbs, quantified my contributions, and aligned each experience with
              the kind of cybersecurity role I want to grow into. Building a stronger LinkedIn presence was a natural
              next step, and I now treat my profile as a living portfolio rather than a static résumé.
            </p>
            <p>
              <span className="text-foreground">Interview preparation and self-introduction</span> were also turning
              points. Practising the “tell me about yourself” response in a structured way helped me explain my journey
              — from a BioScience student in Rathnapura to a Cyber Security undergraduate at SLIIT and an Associate
              Engineer at Dialog Axiata — without sounding rehearsed. Mock interviews taught me to slow down, listen
              fully to the question, and answer using concrete examples from my SOC shifts.
            </p>
            <p>
              <span className="text-foreground">Presentation skills and confidence</span> are areas I underestimated
              before this module. Cybersecurity often demands that we explain complex incidents to non-technical
              audiences. PPW gave me the tools to structure those conversations: lead with the impact, then the cause,
              then the remediation. I now feel more comfortable presenting findings during shift handovers and team
              meetings.
            </p>
            <p>
              Most importantly, PPW pushed me to embrace <span className="text-foreground">continuous learning and
              certification</span> as a permanent habit. The cybersecurity field evolves weekly, and the module
              reinforced that staying relevant requires deliberate, ongoing investment in new skills, certifications,
              and professional networks.
            </p>
            <p>
              Overall, PPW helped me move from a <span className="text-foreground">student mindset</span> — focused on
              marks and deadlines — to a <span className="text-foreground">professional mindset</span> centred on value,
              accountability, and growth. I leave this module not only with sharper soft skills, but with a clearer
              vision of the cybersecurity professional I am becoming.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Career() {
  const phases = [
    {
      icon: Target,
      tag: "0 – 1 year",
      title: "Short-term Goals",
      items: [
        "Complete my BSc (Hons) in IT — Cyber Security at SLIIT successfully.",
        "Strengthen technical depth in SOC operations, SIEM, EDR/XDR, Microsoft Defender, and incident response.",
        "Refine professional communication and interview skills.",
        "Build a strong, recruiter-ready LinkedIn profile and CV.",
      ],
    },
    {
      icon: Compass,
      tag: "1 – 3 years",
      title: "Medium-term Goals",
      items: [
        "Grow into a stronger Cyber Security Analyst or SOC Level 2 role.",
        "Deepen skills in threat hunting, malware analysis, cloud security, vulnerability management, and CTI.",
        "Earn additional industry-recognised certifications.",
        "Gain broader practical experience in enterprise security operations.",
      ],
    },
    {
      icon: Rocket,
      tag: "3 – 5 years",
      title: "Long-term Goals",
      items: [
        "Become a senior cybersecurity professional in threat detection, incident response, or security engineering.",
        "Lead investigations and improve detection & response processes.",
        "Develop both technical depth and leadership capability.",
      ],
    },
  ];
  return (
    <section id="career" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="03 — Roadmap" title="Career Development Plan" icon={Rocket} />
      <div className="grid md:grid-cols-3 gap-6">
        {phases.map((p, i) => (
          <div key={p.title} className="glass rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl no-print" />
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <p.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-primary">{`PHASE 0${i + 1}`}</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{p.tag}</div>
            <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {p.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function CVSection() {
  const tools = [
    "Fortinet SIEM", "Microsoft Sentinel", "Microsoft Defender", "CrowdStrike EDR/XDR",
    "Stella Cyber Open XDR", "Trellix ESM", "Google Chronicle SOAR", "LogRhythm SIEM",
    "Darktrace", "Nessus", "Imperva Cloud WAF", "Azure", "CTM360", "Jira Software", "Python",
  ];
  const projects = [
    {
      t: "Bulk Hash Analyzer Tool",
      d: "Developed a bulk hash analyzer that automates validation of large sets of file hashes via API integration, improving malware detection efficiency and reporting accuracy.",
    },
    {
      t: "Cybersecurity Training Environment",
      d: "Created a TryHackMe-style room using CTF concepts, web exploitation, steganography, and VirtualBox.",
    },
    {
      t: "Wild Safari Management System",
      d: "Built using HTML, CSS, PHP, SQL, and JavaScript.",
    },
  ];
  return (
    <section id="cv" className="border-y border-border/50 bg-card/30 print-break">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="04 — Curriculum Vitae" title="Curriculum Vitae" icon={Briefcase} />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <p className="text-muted-foreground max-w-2xl">
            Dedicated Cybersecurity Analyst with 1+ year of hands-on experience as a SOC Analyst at a Managed Security
            Services Provider. Skilled in SIEM, EDR/XDR, Microsoft Defender & Sentinel, Stella Cyber, incident response,
            threat monitoring, and CTI reporting.
          </p>
          <a href={CV_URL} target="_blank" rel="noreferrer"
             className="no-print inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium btn-glow transition-shadow">
            <FileDown className="w-4 h-4" /> View / Download Full CV
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Education */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-5">
              <div>
                <div className="font-medium">Sri Lanka Institute of Information Technology (SLIIT)</div>
                <div className="text-sm text-muted-foreground">BSc (Hons) in IT — Specialization in Cyber Security</div>
                <div className="text-xs text-primary mt-1 font-mono">2022 – 2026 · Final Year</div>
              </div>
              <div className="border-t border-border/50 pt-5">
                <div className="font-medium">Sumana Balika Vidhyalaya, Rathnapura</div>
                <div className="text-sm text-muted-foreground">G.C.E. Advanced Level — BioScience Stream</div>
                <div className="text-xs text-primary mt-1 font-mono">August 2020</div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <Wrench className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Tools & Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground/90">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="glass rounded-2xl p-6 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg">Work Experience</h3>
          </div>
          <div className="space-y-8 relative md:pl-6 md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-px md:before:bg-border">
            {[
              {
                role: "Associate Engineer — Information Security (Contract)",
                org: "Dialog Axiata",
                date: "December 2025 – Present",
                items: [
                  "Monitor security events in real time to detect and respond to threats.",
                  "Conduct incident response, root cause analysis, and threat investigations.",
                  "Implement security measures and corrective actions to reduce risk.",
                  "Use Microsoft Defender, Azure, CTM360, Darktrace, Nessus, and Imperva Cloud WAF.",
                ],
              },
              {
                role: "Cyber Security Analyst (Contract)",
                org: "CryptoGen PVT LTD, Colombo 08",
                date: "September 2024 – December 2025",
                items: [
                  "Worked in a 24/7 SOC with rotational shift duties.",
                  "Monitored & analyzed security events using SIEM, EDR, and Microsoft Sentinel.",
                  "Investigated alerts and suspicious behaviour, escalating verified incidents under SLA.",
                  "Created CTI reports including Indicators of Compromise (IoCs).",
                  "Performed malware and phishing analysis.",
                  "Collaborated to improve detection rules and response processes; mentored junior analysts.",
                ],
              },
            ].map((j) => (
              <div key={j.role} className="relative">
                <div className="md:absolute md:-left-[26px] md:top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 mb-3 md:mb-0" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="font-semibold">{j.role}</div>
                    <div className="text-sm text-primary">{j.org}</div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">{j.date}</div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {j.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="glass rounded-2xl p-6 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <FolderGit2 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg">Projects</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div key={p.t} className="rounded-xl border border-border bg-secondary/40 p-5">
                <div className="font-medium mb-2">{p.t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg">References</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { n: "Uvin Ratnayake", r: "SOC Manager — CryptoGen" },
              { n: "Ayesha Wijesooriya", r: "Assistant Lecturer — Faculty of Computing, Cyber Security, SLIIT" },
            ].map((p) => (
              <div key={p.n} className="rounded-xl border border-border p-5">
                <div className="font-medium">{p.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{p.r}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Contact details available upon request.</p>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    {
      title: "Certification Evidence 01",
      issuer: "Industry-recognised cybersecurity training",
      desc: "Supports my technical skill development in cybersecurity fundamentals, security operations, and applied defensive practices relevant to my SOC analyst role.",
      url: CERT_1,
    },
    {
      title: "Certification Evidence 02",
      issuer: "Industry-recognised cybersecurity training",
      desc: "Supports my professional growth and applied knowledge in security tooling and incident handling, complementing my SOC and SIEM/EDR experience.",
      url: CERT_2,
    },
  ];
  return (
    <section id="certs" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="05 — Evidence" title="Evidence of Skill Improvement" icon={Award} />
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c) => (
          <div key={c.title} className="glass rounded-2xl p-7 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/10 blur-3xl no-print" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Verified</span>
            </div>
            <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
            <div className="text-sm text-primary mb-4">{c.issuer}</div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
            <a href={c.url} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium btn-glow transition-shadow">
              <ExternalLink className="w-4 h-4" /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg">
            <Shield className="w-5 h-5 text-primary" />
            Binushi Dimandi Muhandiram
          </div>
          <p className="text-sm text-muted-foreground mt-2">Cyber Security Analyst</p>
        </div>
        <div className="space-y-2 text-sm">
          <a href="mailto:binutm126@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Mail className="w-4 h-4 text-primary" /> binutm126@gmail.com
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Linkedin className="w-4 h-4 text-primary" /> LinkedIn Profile
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" /> Pittugala, Malabe
          </div>
        </div>
        <div className="md:text-right">
          <button onClick={() => window.print()}
                  className="no-print inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:border-primary/50 transition-colors">
            <Printer className="w-4 h-4" /> Export / Print Portfolio
          </button>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Prepared for IT4070 — Preparing for Professional World
          </p>
        </div>
      </div>
      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Binushi Dimandi Muhandiram. All rights reserved.
      </div>
    </footer>
  );
}

function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Journal />
      <Career />
      <CVSection />
      <Certifications />
      <Footer />
    </main>
  );
}
