import { Code2, Brain, Wrench, Cloud, Terminal, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "C/C++", "Java", "SQL", "MATLAB", "Bash"],
  },
  {
    title: "ML & AI",
    icon: Brain,
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Multimodal LLM"],
  },
  {
    title: "Frameworks",
    icon: Wrench,
    items: ["PyTorch", "TensorFlow", "Flask", "OpenCV", "StreamLit"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    items: ["AWS", "GCP", "Pub/Sub", "Git", "Linux", "Docker"],
  },
];

const achievements = [
  "Amazon ML Summer School (85,000+ applicants)",
  "Uber She++ '24 (Top 100 nationwide)",
  "LinkedIn CoachIn Mentee '24 (Top 75 in India)",
  "500+ DSA problems solved",
  "Mentor at SIAM",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build intelligent data solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <skill.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg text-primary">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Achievements & <span className="text-gradient">Recognition</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm"
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;