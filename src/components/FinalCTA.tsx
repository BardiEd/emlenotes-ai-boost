import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, FileText } from "lucide-react";

const FinalCTA = () => (
  <section className="py-24 relative z-10">
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
        <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-30">
          <Button 
            size="lg" 
            className="text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90 relative z-50 cursor-pointer pointer-events-auto"
            onClick={() => window.open('https://wa.me/message/AORIBIAVKSD7A1', '_blank', 'noopener,noreferrer')}
          >
            <Phone size={18} className="pointer-events-none" />
            احجز جلسة استثمارية (20 دقيقة)
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-base gap-2 relative z-50 cursor-pointer pointer-events-auto"
            onClick={() => window.open('https://wa.me/message/AORIBIAVKSD7A1', '_blank', 'noopener,noreferrer')}
          >
            <Mail size={18} className="pointer-events-none" />
            اطلب العرض الاستثماري
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
