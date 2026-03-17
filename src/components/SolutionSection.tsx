import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SolutionSection = () => (
  <section id="solution" className="py-24">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          حل رقمي متكامل يعيد تعريف <span className="text-gradient">التعليم الطبي القابل للتوسع</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-3xl leading-relaxed">
          إيملي نوتس توحد التعلم والتقييم والتحليل الذكي داخل منصة واحدة — تقلل التكلفة وتزيد الكفاءة وتدعم التوسع الإقليمي.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 bg-card rounded-2xl p-10 card-shadow border border-border max-w-2xl"
      >
        <div className="flex items-center gap-4 mb-4">
          <CheckCircle className="text-primary" size={32} />
          <span className="text-xl font-bold text-foreground">منصة تقنية شاملة موحدة للتعليم الطبي</span>
        </div>
        <ul className="space-y-3 text-muted-foreground">
          <li>✅ منصة تعلم طبي رقمي تفاعلي</li>
          <li>✅ بنك أسئلة تكيفي حسب المستوى واختبارات رقمية</li>
          <li>✅ تحليل أداء مدعوم بالذكاء الاصطناعي</li>
          <li>✅ بنية تقنية قابلة للتوسع الإقليمي</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
