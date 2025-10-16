const About = () => {
  return (
    <section
      id="about"
      className="section-bright min-h-screen bg-card text-card-foreground py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 animate-fade-in">
          ABOUT
        </h2>

        {/* About Me - Full Width */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-secondary">
            ABOUT ME
          </h3>
          <p className="text-lg leading-relaxed text-card-foreground max-w-6xl text-justify">
            Equipped with a multidisciplinary knowledge, combined with an understanding of business ethics and professional values. I take ownership of my work, deliver with urgency, and believe in improving not just the outcome, but also the environment it's built in. I'm adaptable, proactive, and ready to lead when needed, always striving to move teams and projects forward.
          </p>
        </div>

        {/* Education and Experience - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Education */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              EDUCATION
            </h3>

            <div className="space-y-6">
              {/* College */}
              <div className="border-l-2 border-secondary pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  University School of Automation & Robotics, GGSIPU EDC, Shahdara, Delhi
                </h4>
                <p className="text-base text-card-foreground/80 mb-2">
                  Automation and Robotics • 2021 - 2025
                </p>
                <p className="text-base text-card-foreground mb-3">
                  Key Curriculum:
                </p>
                <ul className="text-base text-card-foreground/80 space-y-1 list-disc list-inside">
                  <li>Robot Kinematics and Dynamics</li>
                  <li>Mechanical Design</li>
                  <li>PLC & SCADA</li>
                  <li>Vision Systems (ROS)</li>
                  <li>Computer Architecture</li>
                </ul>
              </div>

              {/* 12th Grade */}
              <div className="border-l-2 border-secondary/50 pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  CRPF Public School, Rohini - 12th
                </h4>
                <p className="text-base text-card-foreground/80">
                  CBSE • 2020 • 85%
                </p>
              </div>

              {/* 10th Grade */}
              <div className="border-l-2 border-secondary/50 pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  CRPF Public School, Rohini - 10th
                </h4>
                <p className="text-base text-card-foreground/80">
                  CBSE • 2018 • 91%
                </p>
              </div>
            </div>
          </div>

          {/* Right: Experience */}
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              EXPERIENCE
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  Robotic Process Automation Trainee
                </h4>
                <p className="text-base text-card-foreground/80 mb-3">
                  AARGEE Automation and Control, Mohali • 1 Month
                </p>
                <ul className="text-base text-card-foreground space-y-2 list-disc list-inside">
                  <li>PLC programming</li>
                  <li>Control panel assembly</li>
                  <li>Robot programming and simulation</li>
                  <li>Automating special-purpose machines</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-secondary">
              ACHIEVEMENTS
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  • BEST PAPER AWARD
                </h4>
                <p className="text-base text-card-foreground/80 mb-3">
                  8th International Conference on Advanced Production and Industrial Engineering (ICAPIE - 2024)
                </p>
                <h4 className="text-lg font-semibold mb-2">
                  • PRESIDENT - Perceptions, The Publication Club of USAR 
                </h4>
                <p className="text-base text-card-foreground/80 mb-3">
                    (2022-24)
                    </p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
