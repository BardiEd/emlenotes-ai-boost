import { motion } from "framer-motion";
import { CheckCircle, Layout, GraduationCap, Stethoscope, Microscope, Activity } from "lucide-react";

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
          إيملي نوتس توحد التعلم والتقييم والتحليل الذكي داخل منصة واحدة مما يقلل التكلفة ويزيد الكفاءة ويدعم التوسع الإقليمي.
        </p>
      </motion.div>
      <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 order-2 lg:order-1">
          {[
            "منصة تعلم طبي رقمي تفاعلي",
            "بنك أسئلة تكيفي حسب المستوى واختبارات رقمية",
            "تحليل أداء مدعوم بالذكاء الاصطناعي",
            "بنية تقنية قابلة للتوسع الإقليمي"
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-card rounded-xl p-5 card-shadow border border-border"
            >
              <CheckCircle className="text-primary shrink-0" size={20} />
              <p className="text-foreground font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Premium Code Schematic Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative hidden lg:flex items-center justify-center order-1 lg:order-2 min-h-[450px]"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
          
          {/* Central Hub */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-8 border border-primary/10 rounded-full" />
            <div className="bg-card w-32 h-32 rounded-3xl card-shadow border border-border flex items-center justify-center z-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <Stethoscope className="text-primary w-16 h-16 drop-shadow-lg" strokeWidth={1.5} />
            </div>

            {/* Satellite Icons */}
            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card p-3 rounded-2xl card-shadow border border-border"
            >
              <GraduationCap className="text-primary w-8 h-8" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card p-3 rounded-2xl card-shadow border border-border"
            >
              <Microscope className="text-secondary w-8 h-8" />
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-card p-3 rounded-2xl card-shadow border border-border"
            >
              <Activity className="text-primary w-8 h-8 opacity-80" />
            </motion.div>

            {/* Connection Lines (Simulated SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <motion.circle
                cx="50%" cy="50%" r="120"
                fill="none" stroke="currentColor" strokeWidth="1"
                className="text-primary/10"
              />
              <motion.circle
                cx="50%" cy="50%" r="120"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeDasharray="10 500"
                className="text-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
