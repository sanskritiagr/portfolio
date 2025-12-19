const skills = [
  { category: "Languages", items: ["Python", "R", "SQL", "JavaScript"] },
  { category: "ML/DL Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"] },
  { category: "Data Tools", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { category: "Cloud & MLOps", items: ["AWS", "Docker", "MLflow", "Git"] },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-lg text-primary mb-4">{skill.category}</h3>
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
      </div>
    </section>
  );
};

export default Skills;
