import { motion } from "framer-motion";
import { ShieldCheck, Lock, HardDrive } from "lucide-react";

const PrivacySection = () => {
  return (
    <section id="privacy" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary">
            <ShieldCheck size={28} className="text-accent" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Your data stays in your browser.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            DOTNCUE uses a privacy-first architecture. All notes and settings are stored locally
            using Chrome's built-in storage — nothing ever leaves your device.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          <div className="shadow-soft rounded-2xl border border-border p-6">
            <Lock size={20} className="mb-3 text-accent" />
            <h3 className="text-sm font-bold text-foreground">No cloud sync</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Your notes never leave your browser. No servers, no tracking, no accounts needed.
            </p>
          </div>
          <div className="shadow-soft rounded-2xl border border-border p-6">
            <HardDrive size={20} className="mb-3 text-accent" />
            <h3 className="text-sm font-bold text-foreground">Local storage only</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Everything is persisted in Chrome's local storage API — fast, reliable, and private.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;
