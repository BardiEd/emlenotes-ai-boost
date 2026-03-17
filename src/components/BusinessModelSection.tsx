import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

const streams = [
  "اشتراكات فردية (B2C)",
  "تراخيص للمؤسسات التعليمية والنقابات (B2B)",
  "برامج CPD معتمدة",
  "حلول تعليمية White Label",
  "لوحات تحكم وتحليلات للمؤسسات",
];

const BusinessModelSection = () => (
  <section className="py-24 bg-secondary/40">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          نموذج إيرادات مرن <span className="text-gradient">ومتكرر وقابل للتوسع</span>
        </h2>
      </motion.div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {streams.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 card-shadow flex items-center gap-4 border border-border"
          >
            <DollarSign className="text-primary shrink-0" size={22} />
            <p className="text-foreground font-medium">{s}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessModelSection;
