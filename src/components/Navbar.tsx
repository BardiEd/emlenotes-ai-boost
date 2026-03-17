import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/emle-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <img src={logo} alt="EMLE Notes" className="h-10 w-auto" />
        <div className="hidden md:flex items-center gap-6">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">المشكلة</a>
          <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">الحل</a>
          <a href="#ecosystem" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">المنظومة</a>
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">المنتجات</a>
          <a href="#traction" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">السوق</a>
          <a href="#invest" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">الاستثمار</a>
        </div>
        <div className="hidden md:block">
          <Button size="sm">احجز جلسة تعريفية</Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border pb-4">
          <div className="container mx-auto flex flex-col gap-3">
            <a href="#problem" className="text-muted-foreground text-sm py-1" onClick={() => setOpen(false)}>المشكلة</a>
            <a href="#solution" className="text-muted-foreground text-sm py-1" onClick={() => setOpen(false)}>الحل</a>
            <a href="#ecosystem" className="text-muted-foreground text-sm py-1" onClick={() => setOpen(false)}>المنظومة</a>
            <a href="#products" className="text-muted-foreground text-sm py-1" onClick={() => setOpen(false)}>المنتجات</a>
            <a href="#traction" className="text-muted-foreground text-sm py-1" onClick={() => setOpen(false)}>السوق</a>
            <a href="#invest" className="text-muted-foreground text-sm py-1" onClick={() => setOpen(false)}>الاستثمار</a>
            <Button size="sm" className="w-fit">احجز جلسة تعريفية</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
