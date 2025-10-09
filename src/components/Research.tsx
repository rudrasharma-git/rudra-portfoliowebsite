import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ResearchItem {
  id: number;
  title: string;
  images: string[];
  description: string;
  status: string;
  skills: string[];
}

const researchData: ResearchItem[] = [
  {
    id: 1,
    title: "Dynamic Analysis and Simulation of Double Parallelogram based MIS Robot",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Comprehensive dynamic modeling and simulation of minimally invasive surgical robot using double parallelogram mechanism. Analysis includes workspace characterization, force transmission, and optimization of kinematic parameters for enhanced surgical precision.",
    status: "Research",
    skills: ["Robotics", "Dynamic Analysis", "MATLAB", "Surgical Robotics", "Kinematics"],
  },
  {
    id: 2,
    title: "A novel RL based control strategy deployed for Soft Robots",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Developed innovative reinforcement learning control framework for soft robotic systems, addressing challenges of nonlinear dynamics and material compliance. Demonstrated superior adaptability compared to traditional control methods.",
    status: "Research",
    skills: ["Reinforcement Learning", "Soft Robotics", "Control Systems", "AI", "Python"],
  },
  {
    id: 3,
    title: "A comprehensive study on the RCM in MIS robots",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Extensive review of Remote Center of Motion (RCM) mechanisms in minimally invasive surgical robots. Comparative analysis of various RCM implementations, their advantages, limitations, and future research directions.",
    status: "Review",
    skills: ["Medical Robotics", "RCM Mechanisms", "Literature Review", "Surgical Systems"],
  },
  {
    id: 4,
    title: "Integration of 4D printing in Soft Robotics",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Investigates the potential of 4D printing technology in fabricating shape-morphing soft robotic components. Explores smart materials, stimuli-responsive designs, and applications in adaptive robotics.",
    status: "Under Review - Next Materials Journal",
    skills: ["4D Printing", "Soft Robotics", "Smart Materials", "Additive Manufacturing"],
  },
  {
    id: 5,
    title: "Design of Soft Robots - A Review",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Comprehensive survey of soft robot design methodologies, materials, fabrication techniques, and actuation mechanisms. Includes analysis of bio-inspired designs and emerging applications in healthcare and industry.",
    status: "Review",
    skills: ["Soft Robotics", "Design Principles", "Materials Science", "Bio-inspiration"],
  },
];

const Research = () => {
  const [activeImageIndices, setActiveImageIndices] = useState<{ [key: number]: number }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const nextImage = (researchId: number, imageCount: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [researchId]: ((prev[researchId] || 0) + 1) % imageCount,
    }));
  };

  const prevImage = (researchId: number, imageCount: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [researchId]: ((prev[researchId] || 0) - 1 + imageCount) % imageCount,
    }));
  };

  const handleReadMore = (id: number) => {
    navigate(`/research/${id}`);
  };

  return (
    <section
      id="research"
      className="min-h-screen bg-background text-foreground py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl md:text-7xl font-bold animate-fade-in">
            RESEARCH
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-card text-card-foreground rounded-full hover:bg-card/90 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-card text-card-foreground rounded-full hover:bg-card/90 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {researchData.map((research) => {
            const activeImage = activeImageIndices[research.id] || 0;
            return (
              <div
                key={research.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-lg h-full flex flex-col">
                  {/* Status Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/30">
                      {research.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 line-clamp-2">
                    {research.title}
                  </h3>

                  {/* Image Carousel */}
                  <div className="relative mb-4 aspect-video bg-muted rounded-xl overflow-hidden">
                    <img
                      src={research.images[activeImage]}
                      alt={`${research.title} - Image ${activeImage + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Navigation */}
                    {research.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(research.id, research.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-1.5 rounded-full hover:bg-primary transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() => nextImage(research.id, research.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-1.5 rounded-full hover:bg-primary transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {research.images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                idx === activeImage
                                  ? "bg-secondary w-6"
                                  : "bg-primary-foreground/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-card-foreground/80 mb-4 line-clamp-3 flex-grow">
                    {research.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                      RESEARCH AREAS & SKILLS
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {research.skills.slice(0, 4).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {research.skills.length > 4 && (
                        <span className="px-2.5 py-1 text-xs text-muted-foreground">
                          +{research.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button
                    onClick={() => handleReadMore(research.id)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                    size="sm"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Research;
