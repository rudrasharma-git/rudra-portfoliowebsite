const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-background text-foreground py-24 px-6"
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
          <p className="text-base leading-relaxed text-foreground/90 max-w-4xl">
            {/* TODO: Add your personal description here */}
            [Add a few compelling lines about yourself, your passion for robotics and AI, and what drives you in this field.]
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
                  {/* TODO: Add your college name */}
                  [College Name]
                </h4>
                <p className="text-sm text-foreground/70 mb-2">
                  {/* TODO: Add degree and year */}
                  [Degree] • [Year - Year]
                </p>
                <p className="text-sm text-foreground/80 mb-3">
                  {/* TODO: Add relevant curriculum */}
                  Key Curriculum:
                </p>
                <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
                  <li>[Course 1]</li>
                  <li>[Course 2]</li>
                  <li>[Course 3]</li>
                  <li>[Course 4]</li>
                </ul>
              </div>

              {/* 12th Grade */}
              <div className="border-l-2 border-secondary/50 pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  {/* TODO: Add school name */}
                  [School Name - 12th]
                </h4>
                <p className="text-sm text-foreground/70">
                  {/* TODO: Add details */}
                  [Board] • [Year] • [Percentage/Grade]
                </p>
              </div>

              {/* 10th Grade */}
              <div className="border-l-2 border-secondary/50 pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  {/* TODO: Add school name */}
                  [School Name - 10th]
                </h4>
                <p className="text-sm text-foreground/70">
                  {/* TODO: Add details */}
                  [Board] • [Year] • [Percentage/Grade]
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
              {/* TODO: Add your experiences */}
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  [Job Title/Position]
                </h4>
                <p className="text-sm text-foreground/70 mb-3">
                  [Company Name] • [Duration]
                </p>
                <ul className="text-sm text-foreground/80 space-y-2 list-disc list-inside">
                  <li>[Key responsibility or achievement 1]</li>
                  <li>[Key responsibility or achievement 2]</li>
                  <li>[Key responsibility or achievement 3]</li>
                </ul>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-semibold mb-2">
                  [Job Title/Position]
                </h4>
                <p className="text-sm text-foreground/70 mb-3">
                  [Company Name] • [Duration]
                </p>
                <ul className="text-sm text-foreground/80 space-y-2 list-disc list-inside">
                  <li>[Key responsibility or achievement 1]</li>
                  <li>[Key responsibility or achievement 2]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
