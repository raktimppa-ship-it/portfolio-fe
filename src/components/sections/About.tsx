import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import johnDoeHeadshot from "@/assets/john-doe-headshot.jpg";

const About = () => {
  const skills = [
    "Adobe Photoshop", "Illustrator", "InDesign", "After Effects", 
    "Figma", "Sketch", "UI/UX Design", "Brand Development",
    "Motion Graphics", "Typography", "Print Design", "Digital Marketing"
  ];

  const experience = [
    {
      role: "Senior Graphic Designer",
      company: "Creative Agency XYZ",
      period: "Jan 2021 – Present",
      achievements: [
        "Lead designer for 40+ client accounts",
        "Directed a team of 4 junior designers",
        "60% increase in brand recognition for tech startup"
      ]
    },
    {
      role: "Graphic Designer",
      company: "ABC Studio",
      period: "Jul 2018 – Dec 2020",
      achievements: [
        "Designed print materials for national campaigns",
        "35% increase in video engagement rates",
        "Successful rebranding project for fashion retailer"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creative professional with a passion for bringing brands to life through innovative design solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={johnDoeHeadshot} 
                    alt="John Doe - Graphic Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 gradient-primary rounded-2xl opacity-20 blur-xl"></div>
              </div>

              {/* Quick Info */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span>New York, NY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span>7+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span>BFA, School of Visual Arts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization:</span>
                    <span>Brand & UI/UX Design</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Professional Profile</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creative and versatile Graphic Designer with over 7 years of professional experience 
                  in branding, advertising, and digital design. Proven ability to conceptualize, develop, 
                  and execute design solutions that communicate brand identity and engage audiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Skilled in balancing creativity with business goals to deliver impactful visuals 
                  across print, digital, and motion graphics. Adept at collaborating with cross-functional 
                  teams, mentoring junior designers, and managing multiple projects simultaneously.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="px-3 py-1 gradient-secondary text-white hover:shadow-glow transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold">{exp.role}</h4>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;