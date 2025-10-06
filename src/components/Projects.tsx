import { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  skills: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Creating a LLM from scratch",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Developed a custom Large Language Model from the ground up, implementing transformer architecture, attention mechanisms, and tokenization strategies for natural language processing tasks.",
    skills: ["Python", "PyTorch", "NLP", "Transformers", "Deep Learning"],
  },
  {
    id: 2,
    title: "Deploying various algorithms of path planning of mobile robot using ROS",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Implemented and compared multiple path planning algorithms including A*, RRT, and Dijkstra for autonomous mobile robot navigation in complex environments using ROS framework.",
    skills: ["ROS", "C++", "Path Planning", "Algorithms", "Robotics"],
  },
  {
    id: 3,
    title: "SPM Design, Wiring, PLC programming and HMI deployment for a Automated Iron Testing Machine",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Designed and implemented complete automation solution for industrial iron testing equipment, including electrical design, PLC programming, and intuitive HMI interface for operators.",
    skills: ["PLC Programming", "HMI", "Industrial Automation", "Electrical Design", "SCADA"],
  },
  {
    id: 4,
    title: "AGV Control and Comparison of performance of LiDAR vs Camera using ROS and its Libraries",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Conducted comprehensive analysis comparing LiDAR and camera-based navigation systems for Automated Guided Vehicles, evaluating accuracy, reliability, and computational efficiency.",
    skills: ["ROS", "LiDAR", "Computer Vision", "AGV", "Sensor Fusion"],
  },
  {
    id: 5,
    title: "Robot Vision algorithm to detect and create the map of the entire floor",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Developed advanced vision algorithms for SLAM (Simultaneous Localization and Mapping) enabling robots to autonomously map and navigate indoor environments.",
    skills: ["SLAM", "Computer Vision", "OpenCV", "Point Cloud Processing", "Mapping"],
  },
  {
    id: 6,
    title: "Factory Automation Simulation using FactoryIO",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Created detailed simulation of automated factory processes using FactoryIO, optimizing production workflows and validating control strategies before physical implementation.",
    skills: ["FactoryIO", "Automation", "Simulation", "Process Control", "Industry 4.0"],
  },
  {
    id: 7,
    title: "Soft Robot Design and Workspace Analysis",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Designed novel soft robotic manipulator with compliant actuators, performed kinematic analysis, and characterized workspace capabilities for delicate manipulation tasks.",
    skills: ["Soft Robotics", "CAD Design", "Kinematics", "FEA", "MATLAB"],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length);
    setActiveImage(0);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setActiveImage(0);
  };

  const nextImage = () => {
    setActiveImage(
      (prev) => (prev + 1) % projectsData[activeProject].images.length
    );
  };

  const prevImage = () => {
    setActiveImage(
      (prev) =>
        (prev - 1 + projectsData[activeProject].images.length) %
        projectsData[activeProject].images.length
    );
  };

  const handleReadMore = (id: number) => {
    navigate(`/project/${id}`);
  };

  const currentProject = projectsData[activeProject];

  return (
    <section
      id="projects"
      className="min-h-screen bg-background py-24 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 animate-fade-in">
          PROJECTS
        </h2>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Project Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg animate-scale-in">
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              {currentProject.title}
            </h3>

            {/* Image Carousel */}
            <div className="relative mb-8 aspect-video bg-muted rounded-xl overflow-hidden">
              <img
                src={currentProject.images[activeImage]}
                alt={`${currentProject.title} - Image ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {currentProject.images.length > 1 && (
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
                    {currentProject.images.map((_, idx) => (
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
              {currentProject.description}
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                TECHNOLOGIES & SKILLS
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.skills.map((skill, idx) => (
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
              onClick={() => handleReadMore(currentProject.id)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
            >
              READ MORE
            </Button>
          </div>

          {/* Project Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevProject}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="flex gap-2">
              {projectsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveProject(idx);
                    setActiveImage(0);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeProject
                      ? "bg-secondary w-12"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors animate-bounce"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span>Scroll to see more projects</span>
            <ArrowRight className="animate-pulse" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
