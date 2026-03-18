import { motion } from "framer-motion";
import { BookOpen, Brain, Users, ClipboardCheck } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "الركيزة الأولى: المنصة التعليمية الرقمية",
    desc: "مكتبة محتوى طبي رقمي تشمل فيديوهات طبية عالية الجودة، كتب متكاملة، محاضرات مباشرة، وبيئة تعلم افتراضية تفاعلية.",
  },
  {
    icon: ClipboardCheck,
    title: "الركيزة الثانية: التقييم الذكي وبنوك الأسئلة",
    desc: "بنوك أسئلة ذكية تغطي البكالوريوس، والزمالة، مع تحليل أداء ذكي يعزز التفاعل ويخلق استخدامًا متكررًا للمنصة.",
  },
  {
    icon: Brain,
    title: "الركيزة الثالثة: الذكاء الاصطناعي",
    desc: "تلخيص ذكي للمحتوى المرئي، مساعد نقاش طبي، ومحاكاة مريض افتراضي للتدريب السريري الآمن.",
  },
  {
    icon: Users,
    title: "الركيزة الرابعة: المجتمع الطبي المهني",
    desc: "شبكة مهنية تربط الأطباء والمؤسسات التعليمية وتدعم برامج التطوير المهني.",
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-24 bg-secondary/40">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          منظومة متكاملة تبني <span className="text-gradient">حاجزًا تنافسيًا يصعب نسخه</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          كل ركيزة تعزز الأخرى مما يزيد قيمة المنصة مع كل مستخدم جديد.
        </p>
      </motion.div>
      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
