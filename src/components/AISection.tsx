import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const capabilities = [
  "توليد تلقائي للأسئلة من المراجع الطبية المعتمدة",
  "تحليل وتلخيص المحاضرات المرئية وإنشاء اختبارات فورية",
  "مساعد طبي ذكي يدعم اللهجات المحلية",
  "تطوير مريض افتراضي مدعوم بالذكاء الاصطناعي",
  "خفض تكاليف الإنتاج والتشغيل بنسبة تصل إلى 70%",
];

const AISection = () => (
  <section className="py-24">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          محرك ذكاء اصطناعي <span className="text-gradient">يخفض التكاليف ويضاعف قابلية التوسع</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-3xl leading-relaxed">
          الذكاء الاصطناعي هو محرك تشغيلي يقلل تكلفة الإنتاج بنسبة 70% ويخصص التعلم — مما يحسن الهوامش ويسرّع النمو.
        </p>
      </motion.div>
      <div className="mt-12 space-y-4 max-w-2xl">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 bg-card rounded-xl p-5 card-shadow border border-border"
          >
            <Zap className="text-primary shrink-0" size={20} />
            <p className="text-foreground font-medium">{cap}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AISection;
