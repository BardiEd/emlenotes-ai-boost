import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const roadmap = [
  "التوسع إلى السعودية ودول الخليج",
  "إضافة تخصصات وبرامج جديدة",
  "إطلاق الجامعة الطبية الافتراضية",
  "اعتماد دولي",
  "دمج تقنيات VR والمحاكاة",
];

const VisionSection = () => (
  <section className="py-24">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          خارطة توسع واضحة نحو <span className="text-gradient">جامعة طبية رقمية إقليمية</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          نستهدف بناء أكبر بنية تحتية للتعليم الطبي الرقمي في المنطقة.
        </p>
      </motion.div>
      <div className="mt-12 relative max-w-xl">
        <div className="absolute top-0 bottom-0 right-4 w-0.5 bg-primary/20" />
        {roadmap.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-4 mb-6 relative"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 z-10">
              <Rocket className="text-primary-foreground" size={16} />
            </div>
            <span className="text-foreground font-medium bg-card rounded-xl px-5 py-3 card-shadow border border-border flex-1">
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
