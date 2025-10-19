import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    title: "Robotics",
    skills: [
      "Robot Kinematics",
      "Dynamic Modeling",
      "Surgical Robotics",
      "Soft/Continuum Robots",
      "ROS/ROS2",
      "Path Planning",
      "Biomechanics",
      "Gazebo",
      "RViz",
      "SLAM",
      "MATLAB",
      "Robot Programming",
    ],
    color: "secondary",
  },
  {
    title: "AI/ML",
    skills: [
      "LLM/VLM",
      "Deep Learning",
      "Reinforcement Learning",
      "Computer Vision",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Transformers",
      "Neural Networks",
    ],
    color: "accent",
  },
  {
    title: "Web Dev",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML/CSS",
      "JavaScript",
      "Database Design",
      "Responsive Design",
    ],
    color: "secondary",
  },
  {
    title: "Mechanical",
    skills: [
      "Operations Management",
      "SAP ERP",
      "Thermodynamics",
      "Fluid Mechanics",
      "Agile and Scrum",
      "Supply Chain Management",
      "Precision Design",
      "Machine Theory",
      "Automation Systems",
      "FEA",
      "Microcontrollers",
      "CNC Machining and Programming",

    ],
    color: "accent",
  },
  {
    title: "Misc",
    skills: [
      "SEO",
      "Git/GitHub",
      "Linux",
      "Embedded Systems",
      "Microsoft Excel (Advanced)",
      "Power BI & Data Visualization",
      "Six Sigma (DMAIC, DMADV)",
      "Statistical Process Control (SPC)",
      "Root Cause Analysis (RCA)",
      "Bug Tracking",
      "Performance Testing",
      "Integration Testing",
      "PLC Programming",
      "HMI Development",

    ],
    color: "secondary",
  },
  {
    title: "Soft Skills",
    skills: [
      "Public Speaking",
      "Buisness Communication",
      "Team Collaboration",
      "Problem-Solving",
      "Time Management",
      "Event Planning",
      "Leadership",
    ],
    color: "accent",
  },
];

const Skills = () => {
  const [openCategories, setOpenCategories] = useState<number[]>([]);

  const toggleCategory = (index: number) => {
    setOpenCategories(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-card text-card-foreground py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 animate-fade-in">
          SKILLS
        </h2>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`bg-primary text-primary-foreground rounded-2xl p-6 shadow-strong border-2 transition-all duration-300 hover:shadow-glow animate-scale-in ${openCategories.includes(index)
                  ? category.color === "secondary"
                    ? "border-secondary shadow-glow"
                    : "border-accent shadow-glow"
                  : "border-border hover:border-secondary/30"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h3 className={`text-2xl font-bold ${category.color === "secondary" ? "text-secondary" : "text-accent"
                  }`}>
                  {category.title}
                </h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${openCategories.includes(index) ? "rotate-180" : ""
                    } ${category.color === "secondary" ? "text-secondary" : "text-accent"}`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openCategories.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full ${category.color === "secondary"
                          ? "bg-secondary/10 text-secondary border border-secondary/30"
                          : "bg-accent/10 text-accent border border-accent/30"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-4">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`bg-primary text-primary-foreground rounded-2xl p-6 shadow-strong border-2 transition-all duration-300 ${openCategories.includes(index)
                  ? category.color === "secondary"
                    ? "border-secondary shadow-glow"
                    : "border-accent shadow-glow"
                  : "border-border hover:border-secondary/30"
                }`}
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h3 className={`text-2xl font-bold ${category.color === "secondary" ? "text-secondary" : "text-accent"
                  }`}>
                  {category.title}
                </h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${openCategories.includes(index) ? "rotate-180" : ""
                    } ${category.color === "secondary" ? "text-secondary" : "text-accent"}`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openCategories.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full ${category.color === "secondary"
                          ? "bg-secondary/10 text-secondary border border-secondary/30"
                          : "bg-accent/10 text-accent border border-accent/30"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
