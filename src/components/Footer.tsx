const Footer = () => {
  return (
    <footer className="bg-background py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name/Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              RUDRA SHARMA
            </h3>
            <p className="text-sm text-muted-foreground mt-2 tracking-wider">
              BASED IN DELHI, INDIA
            </p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            Copyright © 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
