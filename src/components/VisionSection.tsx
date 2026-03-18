import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import roadmapIllustration from "@/assets/roadmap-illustration.png";

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
      <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative hidden lg:flex items-center justify-center order-1 lg:order-2 min-h-[400px]"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-primary/20 border-dashed rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border border-primary/10 rounded-full" />
            <Rocket className="text-primary w-32 h-32 drop-shadow-2xl filter brightness-110" strokeWidth={1.5} />
            
            {/* Dynamic floating elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 card-shadow flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 card-shadow flex items-center justify-center"
            >
              <div className="w-3 h-3 bg-secondary rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default VisionSection;
