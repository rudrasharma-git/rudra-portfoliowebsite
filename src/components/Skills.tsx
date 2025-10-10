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
      "ROS/ROS2",
      "Path Planning",
      "SLAM",
      "Kinematics & Dynamics",
      "Control Systems",
      "Soft Robotics",
      "Surgical Robotics",
      "AGV Systems",
      "Sensor Fusion",
    ],
    color: "secondary",
  },
  {
    title: "AI/ML",
    skills: [
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
      "REST APIs",
      "Database Design",
      "Responsive Design",
    ],
    color: "secondary",
  },
  {
    title: "SAP",
    skills: [
      "SAP ERP",
      "Module Configuration",
      "Business Process Integration",
      "System Administration",
      "Data Migration",
    ],
    color: "accent",
  },
  {
    title: "QA",
    skills: [
      "Test Automation",
      "Quality Assurance",
      "Testing Frameworks",
      "Bug Tracking",
      "Performance Testing",
      "Integration Testing",
    ],
    color: "secondary",
  },
  {
    title: "Misc",
    skills: [
      "PLC Programming",
      "HMI Development",
      "SCADA Systems",
      "CAD Design",
      "MATLAB/Simulink",
      "Git/GitHub",
      "Linux",
      "Embedded Systems",
      "IoT",
    ],
    color: "accent",
  },
];

const Skills = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
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
              className={`bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl animate-scale-in ${
                openCategory === index
                  ? category.color === "secondary"
                    ? "border-secondary"
                    : "border-accent"
                  : "border-transparent"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h3 className={`text-2xl font-bold ${
                  category.color === "secondary" ? "text-secondary" : "text-accent"
                }`}>
                  {category.title}
                </h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openCategory === index ? "rotate-180" : ""
                  } ${category.color === "secondary" ? "text-secondary" : "text-accent"}`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCategory === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                        category.color === "secondary"
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
              className={`bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                openCategory === index
                  ? category.color === "secondary"
                    ? "border-secondary"
                    : "border-accent"
                  : "border-transparent"
              }`}
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h3 className={`text-2xl font-bold ${
                  category.color === "secondary" ? "text-secondary" : "text-accent"
                }`}>
                  {category.title}
                </h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openCategory === index ? "rotate-180" : ""
                  } ${category.color === "secondary" ? "text-secondary" : "text-accent"}`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCategory === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                        category.color === "secondary"
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
