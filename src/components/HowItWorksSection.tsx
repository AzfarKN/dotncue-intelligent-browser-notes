import { motion } from "framer-motion";
import { Download, PenLine, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Install DOTNCUE",
    desc: "Add the extension to Chrome in one click. No account required.",
    icon: Download,
  },
  {
    num: "02",
    title: "Write notes anywhere",
    desc: "Take notes on any Google Workspace app. Context is captured automatically.",
    icon: PenLine,
  },
  {
    num: "03",
    title: "AI organizes & enhances",
    desc: "Get instant summaries, related suggestions, and smart organization.",
    icon: Sparkles,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps to smarter note-taking.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background shadow-soft">
                  <step.icon size={24} className="text-accent" />
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
