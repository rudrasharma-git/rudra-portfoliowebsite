import { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
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
    status: "Research Paper",
    skills: ["Robotics", "Dynamic Analysis", "MATLAB", "Surgical Robotics", "Kinematics"],
  },
  {
    id: 2,
    title: "A novel RL based control strategy deployed for Soft Robots",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Developed innovative reinforcement learning control framework for soft robotic systems, addressing challenges of nonlinear dynamics and material compliance. Demonstrated superior adaptability compared to traditional control methods.",
    status: "Research Paper",
    skills: ["Reinforcement Learning", "Soft Robotics", "Control Systems", "AI", "Python"],
  },
  {
    id: 3,
    title: "A comprehensive study on the RCM in MIS robots",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Extensive review of Remote Center of Motion (RCM) mechanisms in minimally invasive surgical robots. Comparative analysis of various RCM implementations, their advantages, limitations, and future research directions.",
    status: "Review Paper",
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
    status: "Review Paper",
    skills: ["Soft Robotics", "Design Principles", "Materials Science", "Bio-inspiration"],
  },
];

const Research = () => {
  const [activeResearch, setActiveResearch] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();

  const nextResearch = () => {
    setActiveResearch((prev) => (prev + 1) % researchData.length);
    setActiveImage(0);
  };

  const prevResearch = () => {
    setActiveResearch((prev) => (prev - 1 + researchData.length) % researchData.length);
    setActiveImage(0);
  };

  const nextImage = () => {
    setActiveImage(
      (prev) => (prev + 1) % researchData[activeResearch].images.length
    );
  };

  const prevImage = () => {
    setActiveImage(
      (prev) =>
        (prev - 1 + researchData[activeResearch].images.length) %
        researchData[activeResearch].images.length
    );
  };

  const handleReadMore = (id: number) => {
    navigate(`/research/${id}`);
  };

  const currentResearch = researchData[activeResearch];

  return (
    <section
      id="research"
      className="min-h-screen bg-primary text-primary-foreground py-24 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 animate-fade-in">
          RESEARCH
        </h2>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Research Card */}
          <div className="bg-card text-card-foreground rounded-2xl p-8 md:p-12 shadow-lg animate-scale-in">
            {/* Status Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/30">
                {currentResearch.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              {currentResearch.title}
            </h3>

            {/* Image Carousel */}
            <div className="relative mb-8 aspect-video bg-muted rounded-xl overflow-hidden">
              <img
                src={currentResearch.images[activeImage]}
                alt={`${currentResearch.title} - Image ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {currentResearch.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {currentResearch.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === activeImage
                            ? "bg-secondary w-8"
                            : "bg-primary-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
              {currentResearch.description}
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                RESEARCH AREAS & SKILLS
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentResearch.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full border border-secondary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Read More Button */}
            <Button
              onClick={() => handleReadMore(currentResearch.id)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
            >
              READ MORE
            </Button>
          </div>

          {/* Research Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevResearch}
              className="p-3 bg-card text-card-foreground rounded-full hover:bg-card/90 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="flex gap-2">
              {researchData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveResearch(idx);
                    setActiveImage(0);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeResearch
                      ? "bg-secondary w-12"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextResearch}
              className="p-3 bg-card text-card-foreground rounded-full hover:bg-card/90 transition-colors animate-bounce"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-8 text-sm text-primary-foreground/70 flex items-center justify-center gap-2">
            <span>Scroll to see more research</span>
            <ArrowRight className="animate-pulse" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
