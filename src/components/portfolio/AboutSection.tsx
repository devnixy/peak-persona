import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable, tested, and well-documented solutions" },
  { icon: Palette, title: "Design-Driven", desc: "Pixel-perfect implementations with UX empathy" },
  { icon: Zap, title: "Performance", desc: "Optimized for speed, accessibility, and scale" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="space-y-10">
            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
                <img
                  src={profileImg}
                  alt="John Doe"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-primary/10 -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">About</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                Building the web,<br />
                <span className="text-muted-foreground">one pixel at a time.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer with 5+ years of experience building modern web applications. I specialize in React ecosystems, TypeScript, and cloud-native architectures.
                </p>
                <p>
                  My approach combines technical precision with design sensibility—every line of code serves the user experience. I've shipped products for startups and enterprises alike, always focused on clean architecture and measurable outcomes.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card-hover p-6 flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
