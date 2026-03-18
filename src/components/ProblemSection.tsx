import { motion } from "framer-motion";
import { CircleAlert } from "lucide-react";

const painPoints = [
  "نماذج تعليم تعتمد على المحتوى الثابت المحفوظ بدلاً من تقييم الأداء الطبي الحقيقي",
  "عدم وجود ربط رقمي بين التعلم النظري والتدريب السريري",
  "غياب أنظمة تحليل بيانات تقيس تطور أداء الأطباء والمتدربين",
  "ارتفاع تكلفة إنتاج المحتوى الطبي وصعوبة تطويره بسرعة",
  "صعوبة توسع البرامج التدريبية الطبية للمؤسسات التعليمية",
  "صعوبة مواكبة التطورات الطبية المتسارعة في المناهج التقليدية",
];

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-secondary/40">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          فجوة رقمية ضخمة في التعليم الطبي <span className="text-gradient">وفرصة استثمارية واضحة</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-3xl leading-relaxed">
          قطاع التعليم الطبي سوق بمليارات الدولارات لكنه ما زال يعتمد على نماذج تقليدية لا تستخدم بنية رقمية متكاملة. مما يخلق فجوة بين الدراسة والممارسة ويمنح سوقاً جاهزاً للتحول الرقمي.
        </p>
        <p className="mt-2 text-primary font-semibold text-lg">
          هذه الفجوة ليست تحديًا بل فرصة لبناء معيار جديد للتعليم الطبي.
        </p>
      </motion.div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 card-shadow flex items-start gap-4"
          >
            <CircleAlert className="text-primary mt-1 shrink-0" size={22} />
            <p className="text-foreground font-medium">{point}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
