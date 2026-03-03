import { motion } from "framer-motion";
import {
  Scan,
  FileText,
  FolderOpen,
  Sparkles,
  Settings,
  Zap,
  BarChart3,
  Mail,
  Video,
  FileEdit,
  Calendar,
  Play,
  StickyNote,
  Eye,
  Trash2,
  TextCursorInput,
  Lightbulb,
  Layers,
  Filter,
  ArrowUpDown,
  Globe,
  MessageSquare,
  Cpu,
  PanelLeft,
  Minimize2,
  HardDrive,
  Sliders,
  MonitorSmartphone,
  Layout,
  Link,
  Database,
  Hash,
  PieChart,
  Activity,
} from "lucide-react";

const featureGroups = [
  {
    title: "Context-Aware Note Taking",
    icon: Scan,
    features: [
      { icon: Zap, text: "Automatically detects current context" },
      { icon: Mail, text: "Supports Gmail, Meet, Docs, Calendar, YouTube" },
      { icon: FileText, text: "Smart context detection via threads, titles, documents" },
    ],
  },
  {
    title: "Note Management",
    icon: StickyNote,
    features: [
      { icon: Link, text: "Quick notes linked to current page" },
      { icon: Eye, text: "View context notes instantly" },
      { icon: Trash2, text: "One-click delete" },
      { icon: TextCursorInput, text: "Auto-expanding text input" },
    ],
  },
  {
    title: "Intelligent Organization",
    icon: FolderOpen,
    features: [
      { icon: Lightbulb, text: "Related note suggestions" },
      { icon: Layers, text: "All Notes unified view" },
      { icon: Filter, text: "Filter by App" },
      { icon: ArrowUpDown, text: "Sort by newest/oldest" },
    ],
  },
  {
    title: "AI-Powered Analysis",
    icon: Sparkles,
    features: [
      { icon: Globe, text: "Webpage analysis via Groq API" },
      { icon: FileEdit, text: "Instant summaries of emails, videos, documents" },
      { icon: MessageSquare, text: "Custom AI prompts" },
      { icon: Cpu, text: "Multiple AI model options (Llama 3.3 70B, etc.)" },
    ],
  },
  {
    title: "Customization",
    icon: Settings,
    features: [
      { icon: PanelLeft, text: "Sidebar left/right toggle" },
      { icon: Minimize2, text: "Collapsible sidebar" },
      { icon: HardDrive, text: "Persistent local settings" },
      { icon: Sliders, text: "AI preference configuration" },
    ],
  },
  {
    title: "Smart Behavior",
    icon: Zap,
    features: [
      { icon: MonitorSmartphone, text: "Auto-opens when notes exist" },
      { icon: Layout, text: "Works with single-page apps" },
      { icon: Link, text: "Seamless Google Workspace integration" },
      { icon: Database, text: "All data stored locally" },
    ],
  },
  {
    title: "Statistics & Insights",
    icon: BarChart3,
    features: [
      { icon: Hash, text: "Total note count" },
      { icon: PieChart, text: "Notes per app/service" },
      { icon: Activity, text: "Activity tracking overview" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Everything you need,
            <br />
            <span className="text-gradient">nothing you don't.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed with simplicity at the core.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featureGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              className="shadow-soft rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-card"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <group.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5">
                    <f.icon size={15} className="mt-0.5 shrink-0 text-muted-foreground" />
                    <span className="text-sm leading-snug text-muted-foreground">{f.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
