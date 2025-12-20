import { Github, Folder } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Open Source Contributor – GSSoC '24",
    description: "Optimized real-world ML projects. Applied time-series modeling (ARIMA/LSTM) reducing prediction error by 70%. Built NLP pipelines with retrieval-style preprocessing achieving 85% accuracy.",
    tags: ["ARIMA", "LSTM", "NLP", "Python"],
    github: "https://github.com/sanskritiagr",
  },
  {
    title: "Attendance using Face Recognition",
    description: "Browser-based Face Recognition app. Automatically records attendance with date/time when users are detected. Integrated with database for storing and analyzing records.",
    tags: ["StreamLit", "OpenCV", "TensorFlow", "Flask"],
    github: "https://github.com/sanskritiagr",
  },
  {
    title: "Data Ingestion Pipeline @ Google",
    description: "Designed scalable data ingestion pipelines for GCP. Improved packet sampling reliability using Pub/Sub, reducing drop rates from 9% to 0.01%. Standardized telemetry data formats.",
    tags: ["GCP", "Pub/Sub", "Python", "Data Engineering"],
  },
  {
    title: "Embedding-based Ad Retrieval @ Microsoft",
    description: "Designed embedding-based retrieval for MSN Ads diversity. Generated user-ad embeddings using Diverse DiskANN achieving 22% diversity uplift and 10% increase in Auction ISI.",
    tags: ["Embeddings", "ML", "DiskANN", "Ads"],
  },
  {
    title: "CV Pipeline @ Cornerstone",
    description: "Engineered Computer Vision pipelines leveraging CNNs for real-time detection. Optimized Video Analytics for precise anomaly detection and behavioral pattern recognition.",
    tags: ["CNN", "OpenCV", "Computer Vision", "Python"],
  },
  {
    title: "Time Series Forecasting",
    description: "Applied ARIMA and LSTM models for time-series forecasting and analysis as part of GSSoC contributions, reducing prediction error by 70% on benchmark datasets.",
    tags: ["ARIMA", "LSTM", "Time Series", "Python"],
    github: "https://github.com/sanskritiagr",
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
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