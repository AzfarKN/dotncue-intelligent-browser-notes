import { motion } from "framer-motion";
import { Chrome } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cta-gradient rounded-3xl px-8 py-16 text-center md:px-16 md:py-24"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Upgrade Your Browser Productivity
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Join thousands using DOTNCUE to take smarter, context-aware notes.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground shadow-card transition-opacity hover:opacity-90"
          >
            <Chrome size={18} />
            Add to Chrome — It's Free
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
