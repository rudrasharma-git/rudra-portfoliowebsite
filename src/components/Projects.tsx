import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { projectsData } from "@/data/projectsData";


const Projects = () => {
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

  const nextImage = (projectId: number, imageCount: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount,
    }));
  };

  const prevImage = (projectId: number, imageCount: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount,
    }));
  };

  const handleReadMore = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-card text-card-foreground py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header with Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold animate-fade-in w-full sm:w-auto text-center sm:text-left">
            PROJECTS
          </h2>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-secondary/20 transition-all border-2 border-border shadow-strong"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-secondary/20 transition-all border-2 border-border shadow-strong"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>


        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project) => {
            const activeImage = activeImageIndices[project.id] || 0;
            return (
              <div
                key={project.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-strong border-2 border-border hover:border-secondary/50 transition-all h-full flex flex-col">
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold mb-4 min-h-[3rem] text-center">
                    {project.title}
                  </h3>

                  {/* Image Carousel */}
                  <div className="relative mb-4 aspect-video bg-muted rounded-xl overflow-hidden">
                    <img
                      src={project.images[activeImage]}
                      alt={`${project.title} - Image ${activeImage + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Navigation */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(project.id, project.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-1.5 rounded-full hover:bg-primary transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() => nextImage(project.id, project.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-1.5 rounded-full hover:bg-primary transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {project.images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeImage
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
                  <p className="text-sm leading-relaxed text-primary-foreground/80 mb-4 line-clamp-4 flex-grow text-justify">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                      TECHNOLOGIES & SKILLS
                    </h4>
                    <div className="flex flex-wrap gap-1.5 min-h-[4rem]">
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button
                    onClick={() => handleReadMore(project.id)}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
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

export default Projects;
