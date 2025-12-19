import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Machine Learning Intern",
    organization: "Tech Company ABC",
    period: "Jun 2024 - Aug 2024",
    description: "Developed predictive models for customer behavior analysis. Improved model accuracy by 15% through feature engineering.",
    skills: ["Python", "TensorFlow", "AWS SageMaker"],
  },
  {
    type: "work",
    title: "Data Science Intern",
    organization: "Startup XYZ",
    period: "Jan 2024 - May 2024",
    description: "Built end-to-end data pipelines and created dashboards for business insights. Automated reporting processes.",
    skills: ["SQL", "Tableau", "Apache Airflow"],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "University Name",
    period: "2021 - 2025",
    description: "Specializing in Artificial Intelligence and Machine Learning. CGPA: 8.5/10. Active member of Data Science Club.",
    skills: ["Data Structures", "Algorithms", "Statistics"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.title}-${index}`}
                  className="relative flex gap-6 group"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full card-gradient border border-border group-hover:border-primary transition-colors">
                    {exp.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-accent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-primary font-display">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-display rounded-full bg-primary/10 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
