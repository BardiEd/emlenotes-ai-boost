import { motion } from "framer-motion";
import { Smartphone, Video, BookOpen, HelpCircle, Bot, Sparkles } from "lucide-react";

const products = [
  { icon: Smartphone, name: "تطبيق إيملي", desc: "تجربة تعلم وتقييم موحدة" },
  { icon: Video, name: "الدورات الطبية المصورة", desc: "محتوى مرئي عالي الجودة" },
  { icon: BookOpen, name: "الكتب الطبية المتكاملة", desc: "مراجع رقمية شاملة" },
  { icon: HelpCircle, name: "بنك الأسئلة الذكي", desc: "تقييم ذكي ومتكيف" },
  { icon: Bot, name: "المريض الافتراضي", desc: "قيد التطوير" },
  { icon: Sparkles, name: "المنتج القادم", desc: "ترقبوا المزيد من الحلول قريباً" },
];

const ProductsSection = () => (
  <section id="products" className="py-24 bg-secondary/40">
    <div className="container mx-auto text-right">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          منتجات تعليمية جاهزة للنمو <span className="text-gradient">مبنية على بنية واحدة</span>
        </h2>
      </motion.div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow border border-border text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <p.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
