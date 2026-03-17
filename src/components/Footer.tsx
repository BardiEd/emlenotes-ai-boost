import logo from "@/assets/emle-logo.png";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
      <img src={logo} alt="EMLE Notes" className="h-8" />
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} EMLENotes. جميع الحقوق محفوظة.
      </p>
    </div>
  </footer>
);

export default Footer;
