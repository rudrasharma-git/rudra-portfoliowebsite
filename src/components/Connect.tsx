import { Github, Linkedin } from "lucide-react";

const Connect = () => {
  return (
    <section
      id="connect"
      className="min-h-screen bg-primary text-primary-foreground py-24 px-6 flex items-center"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 animate-fade-in">
          CONNECT
        </h2>

        <div className="space-y-12 animate-slide-in-left">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn Profile"
            >
              <div className="flex items-center gap-3 text-secondary hover:text-secondary/80 transition-colors">
                <Linkedin size={32} />
                <span className="text-lg font-medium group-hover:underline">
                  LinkedIn
                </span>
              </div>
            </a>

            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub Profile"
            >
              <div className="flex items-center gap-3 text-secondary hover:text-secondary/80 transition-colors">
                <Github size={32} />
                <span className="text-lg font-medium group-hover:underline">
                  GitHub
                </span>
              </div>
            </a>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <p className="text-sm text-primary-foreground/70 tracking-wide">
              PHONE
            </p>
            <a
              href="tel:+919990049238"
              className="text-4xl md:text-6xl font-bold hover:text-secondary transition-colors"
            >
              +91 99900 49238
            </a>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <p className="text-sm text-primary-foreground/70 tracking-wide">
              EMAIL
            </p>
            <a
              href="mailto:rudrasharma1759@gmail.com"
              className="text-2xl md:text-3xl font-medium hover:text-secondary transition-colors break-all"
            >
              rudrasharma1759@gmail.com
            </a>
          </div>

          {/* Quote */}
          <div className="pt-12">
            <p className="text-xl md:text-2xl font-light italic text-primary-foreground/80 tracking-wide uppercase">
              "Every great story has a beginning."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
