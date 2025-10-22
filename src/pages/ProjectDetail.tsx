import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { projectsData } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

// Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-6 py-4">
          <Button
            onClick={() => {
              navigate("/"); // go home first
              setTimeout(() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
            className="gap-2"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-12 animate-fade-in text-center">
          {project.title}
        </h1>

        {/* Image Carousel */}
        <div className="relative mb-12 bg-muted rounded-xl overflow-hidden">
          <img
            src={project.images[activeImage]}
            alt={`${project.title} - Image ${activeImage + 1}`}
            className="w-full h-full object-cover"
          />

          {project.images.length > 1 && (
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

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === activeImage
                      ? "bg-primary w-6"
                      : "bg-secondary-foreground/100"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold mb-4 text-muted-foreground tracking-wider">
            TECHNOLOGIES & SKILLS
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full border border-secondary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* link to project */}
        {/* <div className="pt-4"> */}
          <div className="inline-flex items-center gap-3 group">

            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 mb-6 transition-transform duration-300"
            />
            <a
              href={project.link}
              className="text-lg mb-6 font-medium text-secondary hover:underline"
            >
              LINK
            </a>
          </div>
        {/* </div> */}

        {/* Full Description */}
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-foreground/80 leading-relaxed text-justify">
            {project.fullDescription}
          </div>
        </div>

        
      </div>
    </div>);
};

export default ProjectDetail;
