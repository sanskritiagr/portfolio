import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Google",
    period: "May 2025 – Aug 2025",
    description: "Designed and optimized scalable data ingestion pipelines for GCP. Improved packet sampling reliability using Pub/Sub, reducing drop rates from 9% to 0.01%.",
    skills: ["GCP", "Pub/Sub", "Python", "Data Pipelines"],
  },
  {
    type: "work",
    title: "Data Scientist Intern",
    organization: "Microsoft",
    period: "Aug 2025 – Dec 2025",
    description: "Designed embedding-based retrieval for MSN Ads diversity. Achieved 22% diversity uplift using Diverse DiskANN and 10% increase in Auction ISI.",
    skills: ["Embeddings", "DiskANN", "ML", "Ads"],
  },
  {
    type: "work",
    title: "Data Scientist Intern - AI Researcher",
    organization: "Cornerstone Solutions",
    period: "Jan 2025 – Mar 2025",
    description: "Engineered Computer Vision pipelines leveraging CNNs for real-time detection. Optimized Video Analytics for anomaly detection and pattern recognition.",
    skills: ["CNN", "OpenCV", "Computer Vision", "Python"],
  },
  {
    type: "education",
    title: "Integrated M.Tech in Mathematics & Computing",
    organization: "IIT Dhanbad",
    period: "2021 – 2026",
    description: "GPA: 8.82/10. Coursework: Software Engineering, DSA, OS, DBMS, OOPS, Discrete Math, Probability & Statistics, Number Theory & Cryptography.",
    skills: ["DSA", "DBMS", "Statistics", "Algorithms"],
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