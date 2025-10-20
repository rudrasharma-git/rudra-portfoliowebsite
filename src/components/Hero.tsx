import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-card text-card-foreground px-6 pt-20 pb-10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mobile: Image First */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-[3/3.8]">
              {/* IMPORTANT: Replace this src with your actual image path */}
              <img
                src="/images/profile.png"
                alt="Rudra Sharma"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-secondary/0 to-transparent"></div>
            </div>
          </div>


          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6 animate-slide-in-left">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              RUDRA
              <br />
              SHARMA
            </h1>

            <h2 className="text-xl md:text-2xl font-medium tracking-wide text-foreground/70">
              ROBOTICS & AI ENGINEER
            </h2>

            <p className="text-sm md:text-base tracking-wide leading-relaxed text-foreground/80 max-w-xl uppercase text-justify font-semibold">
              {/* I am a Robotics and AI engineer, and I create intelligent systems
              that blend machine learning, robotic control, and automation. With
              multidisciplinary knowledge, I provide solutions with urgency,
              efficiency, and creativity. */}
              CRAFTING INTELLIGENT SYSTEMS
            </p>

            {/* CTA */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 group">
                {/* <span className="text-sm font-semibold tracking-wider">
                  AVAILABLE FOR WORK
                </span> */}
                {/* <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                /> */}
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-2 text-lg"
                >
                  <a
                    href="https://drive.google.com/file/d/1pGADlJ4PB5R54Pz1vrQFpRcGVJNUDeML/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
