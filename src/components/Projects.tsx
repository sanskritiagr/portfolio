import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built an ML model to predict customer churn with 92% accuracy using ensemble methods. Deployed as a REST API with Flask.",
    tags: ["Python", "XGBoost", "Flask", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Sentiment Analysis Engine",
    description: "Deep learning-based sentiment analyzer for social media data using BERT transformers. Processes 10K+ tweets per minute.",
    tags: ["PyTorch", "Transformers", "NLP", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Image Classification API",
    description: "CNN-based image classifier trained on custom dataset. Achieved 95% accuracy with data augmentation techniques.",
    tags: ["TensorFlow", "Keras", "FastAPI", "Redis"],
    github: "https://github.com",
  },
  {
    title: "Time Series Forecasting",
    description: "Sales forecasting model using LSTM networks and Prophet. Reduced prediction error by 35% compared to baseline.",
    tags: ["Python", "LSTM", "Prophet", "Tableau"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Recommendation System",
    description: "Collaborative filtering recommendation engine for e-commerce platform. Increased user engagement by 28%.",
    tags: ["Python", "Spark", "ALS", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "Fraud Detection System",
    description: "Real-time fraud detection using anomaly detection algorithms. Processes transactions with < 50ms latency.",
    tags: ["Scikit-learn", "Kafka", "PostgreSQL", "Grafana"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my machine learning and data science projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-display bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
