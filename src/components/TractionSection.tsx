import { motion } from "framer-motion";
import { Users, Clock, Building2 } from "lucide-react";
import zagazigLogo from "@/assets/zagazig-medicine-logo.svg";
import sharkiaLogo from "@/assets/sharkia-medical-logo.png";
import sadatLogo from "@/assets/sadat-academy-logo.png";

const stats = [
  { icon: Users, value: "+30,000", label: "طبيب ومتدرب مسجل" },
  { icon: Clock, value: "+1,000,000", label: "ساعة تعلم سنويًا" },
];

const partners = [
  { name: "نقابة أطباء الشرقية", logo: sharkiaLogo, scale: "" },
  { name: "أكاديمية السادات للعلوم الإدارية", logo: sadatLogo, scale: "" },
  { name: "كلية الطب – جامعة الزقازيق", logo: zagazigLogo, scale: "scale-[1.8]" },
];

const TractionSection = () => (
  <section id="traction" className="py-24">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          نمو حقيقي مدفوع <span className="text-gradient">باحتياج السوق واعتماد مؤسسي</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-3xl leading-relaxed">
          نجحت إيملي نوتس في تحقيق نمو عضوي مدفوع باحتياج حقيقي في السوق الطبي، مدعوم بثقة مؤسسات أكاديمية ونقابية مرموقة.
        </p>
      </motion.div>
      <div className="mt-12 grid sm:grid-cols-2 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 card-shadow border border-border text-center"
          >
            <s.icon className="text-primary mx-auto mb-4" size={36} />
            <p className="text-4xl font-extrabold text-gradient">{s.value}</p>
            <p className="text-muted-foreground mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 bg-card rounded-2xl p-8 card-shadow border border-border" dir="rtl"
      >
        <div className="flex items-center gap-3 mb-4 flex-row-reverse justify-end">
          <Building2 className="text-primary" size={24} />
          <h3 className="text-xl font-bold text-foreground">الشراكات</h3>
        </div>
        <div className="flex flex-col gap-4 items-stretch">
          {partners.map((p, i) => (
            <div key={i} className="bg-secondary flex items-center gap-3 px-5 py-3 rounded-lg w-full">
              {p.logo ? (
                <div className="h-10 w-10 min-w-[2.5rem] rounded-full overflow-hidden">
                  <img src={p.logo} alt={p.name} className={`h-full w-full object-cover ${p.scale}`} />
                </div>
              ) : null}
              <span className="text-secondary-foreground text-sm font-medium">{p.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TractionSection;
