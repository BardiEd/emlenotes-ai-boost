import { motion } from "framer-motion";
import { TrendingUp, Shield, Globe, Cpu, Users } from "lucide-react";

const reasons = [
  { icon: Globe, text: "سوق طبي ضخم وغير مخدوم رقميًا" },
  { icon: TrendingUp, text: "نمو مثبت وشراكات رسمية" },
  { icon: Cpu, text: "بنية تقنية تقلل التكلفة وتزيد الهوامش" },
  { icon: Shield, text: "قابلية توسع إقليمية عالية" },
  { icon: Users, text: "فريق يجمع بين الخبرة الطبية والتكنولوجية" },
];

const WhyInvestSection = () => (
  <section id="invest" className="py-24 bg-secondary/40">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          لماذا تمثل إيملي نوتس <span className="text-gradient">فرصة استثمارية؟</span>
        </h2>
      </motion.div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow border border-border"
          >
            <r.icon className="text-primary mb-4" size={32} />
            <p className="text-foreground font-bold text-lg">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyInvestSection;
