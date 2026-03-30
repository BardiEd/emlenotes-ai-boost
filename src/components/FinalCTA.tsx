import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

const FinalCTA = () => (
  <section className="py-24 relative z-10 block pointer-events-auto">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-hero-gradient rounded-3xl p-12 md:p-16 text-center relative z-20 pointer-events-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
          احجز جلسة استكشاف الاستثمار قبل الجولة القادمة في مستقبل التعليم الطبي
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-50 pointer-events-auto">
 
     <a
    href="https://wa.me/message/AORIBIAVKSD7A1"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      buttonVariants({ size: "lg", variant: "default" }),
      "inline-flex items-center justify-center text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer relative z-50 pointer-events-auto"
    )}
  >
    <Phone size={18} className="pointer-events-none" />
    احجز جلسة استشارية (20 دقيقة)
     </a>

     <a
    href="https://wa.me/message/AORIBIAVKSD7A1"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      buttonVariants({ size: "lg", variant: "secondary" }),
      "inline-flex items-center justify-center text-base gap-2 cursor-pointer relative z-50 pointer-events-auto"
    )}
      >
     <Mail size={18} className="pointer-events-none" />
    اطلب العرض الاستشاري
      </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
