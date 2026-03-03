import { motion } from "framer-motion";
import { Chrome, ArrowRight } from "lucide-react";

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
            {/* Extension mockup */}
            <div className="relative mx-auto w-[340px]">
              <div className="absolute -inset-12 rounded-full bg-accent/10 blur-3xl" />
              <div className="shadow-card relative rounded-2xl border border-border bg-background p-5">
                <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
                  <div className="h-3 w-3 rounded-full bg-accent/60" />
                  <span className="text-xs font-semibold text-foreground tracking-wide">DOTNCUE</span>
                  <span className="ml-auto text-[10px] text-muted-foreground">Gmail</span>
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg bg-secondary p-3">
                    <p className="text-[11px] font-medium text-muted-foreground">Meeting follow-up</p>
                    <p className="mt-1 text-xs text-foreground leading-relaxed">
                      Discuss Q1 roadmap with team. Action items: finalize specs, update timeline.
                    </p>
                    <p className="mt-2 text-[10px] text-muted-foreground">2 min ago · Gmail</p>
                  </div>
                  <div className="rounded-lg bg-secondary p-3">
                    <p className="text-[11px] font-medium text-muted-foreground">Research notes</p>
                    <p className="mt-1 text-xs text-foreground leading-relaxed">
                      Key insights from competitive analysis video.
                    </p>
                    <p className="mt-2 text-[10px] text-muted-foreground">15 min ago · YouTube</p>
                  </div>
                  <div className="rounded-lg bg-secondary p-3 opacity-60">
                    <p className="text-[11px] font-medium text-muted-foreground">Doc annotations</p>
                    <p className="mt-1 text-xs text-foreground leading-relaxed">
                      Section 3 needs revision before review.
                    </p>
                    <p className="mt-2 text-[10px] text-muted-foreground">1 hr ago · Docs</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                  <span className="text-xs text-muted-foreground">Write a note...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
