import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { researchData } from "@/data/researchData";
import { ArrowRight } from "lucide-react";

const ResearchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const research = researchData.find((r) => r.id === Number(id));

  if (!research) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Research Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % research.images.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + research.images.length) % research.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
        {/* Status Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/30">
            {research.status}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-12 animate-fade-in text-center">
          {research.title}
        </h1>

        {/* Image Carousel */}
        <div className="relative mb-12 aspect-video bg-muted rounded-xl overflow-hidden">
          <img
            src={research.images[activeImage]}
            alt={`${research.title} - Image ${activeImage + 1}`}
            className="w-full h-full object-cover"
          />

          {research.images.length > 1 && (
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
                {research.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
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

        {/* Research Areas */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold mb-4 text-muted-foreground tracking-wider">
            RESEARCH AREAS & SKILLS
          </h3>
          <div className="flex flex-wrap gap-2">
            {research.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full border border-secondary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-foreground/80 leading-relaxed text-justify">
            {research.fullDescription}
          </div>
        </div>

        {/* link to project */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-3 group">
            
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 mb-6 transition-transform duration-300"
            />
            <a
              href={research.link}
              className="text-lg mb-6 font-medium text-secondary hover:underline"
            >
              LINK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
