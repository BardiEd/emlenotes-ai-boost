import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, FileText } from "lucide-react";

const FinalCTA = () => (
  <section className="py-24">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-hero-gradient rounded-3xl p-12 md:p-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
          احجز جلسة استكشاف الاستثمار قبل الجولة القادمة في مستقبل التعليم الطبي
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://wa.me/message/AORIBIAVKSD7A1" target="_blank" rel="noopener noreferrer">
              <Phone size={18} />
              احجز جلسة استثمارية (20 دقيقة)
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-base gap-2">
            <a href="https://wa.me/message/AORIBIAVKSD7A1" target="_blank" rel="noopener noreferrer">
              <Mail size={18} />
              اطلب العرض الاستثماري
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
