import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    description: "Leading frontend architecture for a SaaS platform serving 50K+ users. Reduced bundle size by 40% and improved Core Web Vitals across all pages.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    description: "Built the MVP from scratch using React and Node.js. Implemented real-time collaboration features and integrated third-party APIs for payments and analytics.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2019 — 2020",
    description: "Developed responsive web applications for diverse clients across e-commerce, healthcare, and fintech. Established component libraries and coding standards.",
  },
  {
    role: "Junior Developer",
    company: "WebStudio",
    period: "2018 — 2019",
    description: "Started my career building WordPress themes and custom plugins, then transitioned to React-based projects. Mentored by senior engineers on best practices.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Career</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Experience</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="font-sans font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
