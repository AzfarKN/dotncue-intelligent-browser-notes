import { motion } from "framer-motion";
import { Chrome, ArrowRight } from "lucide-react";
import extensionScreenshot from "@/assets/extension-screenshot.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Browser Extension · Privacy First
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Context-Aware Notes
              <br />
              <span className="text-gradient">for Your Browser</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Automatically organized notes across Gmail, Meet, Docs, Calendar,
              and YouTube — enhanced with AI.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                <Chrome size={18} />
                Add to Chrome
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                See How It Works
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Extension screenshot */}
            <div className="relative mx-auto w-[380px]">
              <div className="absolute -inset-12 rounded-full bg-accent/10 blur-3xl" />
              <img
                src={extensionScreenshot}
                alt="DOTNCUE browser extension showing context-aware notes"
                className="relative rounded-2xl border border-border shadow-card"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
