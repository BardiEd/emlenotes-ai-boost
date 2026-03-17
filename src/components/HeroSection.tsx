import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative pt-28 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-hero-gradient opacity-[0.04]" />
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-right"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] md:leading-[1.2] lg:leading-[1.2] text-foreground">
          منصة التعليم الطبي الأكثر استقرارًا في المنطقة –{" "}
          <span className="text-gradient">تخدم +30,000 طبيب</span>{" "}
          في سوق جاهز للتحول الرقمي
        </h1>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
          منصة تقنية تبني نظام تشغيل موحد للتعليم الطبي يجمع التعلم والتقييم والتدريب السريري والتطوير المهني في سوق يتجاوز ٥٠ مليون دولار في الشرق الأوسط.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
          نظام رقمي متكامل يمكّن المؤسسات الطبية والأطباء من التعلم والتقييم والتدريب ضمن منصة واحدة قابلة للتوسع إقليمياً.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-start">
          <Button size="lg" className="text-base px-8">
            تحميل Investor Brief
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <img src={heroImg} alt="Medical Education" className="w-full max-w-md" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
