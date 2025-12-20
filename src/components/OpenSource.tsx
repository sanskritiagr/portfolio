import { Github, ExternalLink, GitFork, Star } from "lucide-react";
import { Badge } from "./ui/badge";

const contributions = [
  {
    title: "ML-CaPsule",
    description: "Contributed to ML learning repository for beginners. Added time-series modeling with ARIMA/LSTM reducing prediction error by 70%.",
    tags: ["Machine Learning", "ARIMA", "LSTM", "Python"],
    github: "https://github.com/sanskritiagr/ML-CaPsule",
    forked: true,
    program: "GSSoC '24",
  },
  {
    title: "Hedging of Financial Derivatives",
    description: "Contributed hedging strategies and financial modeling algorithms that work for every market condition.",
    tags: ["Finance", "Python", "ML", "Trading"],
    github: "https://github.com/sanskritiagr/Hedging-of-Financial-Derivatives",
    forked: true,
    program: "GSSoC '24",
  },
  {
    title: "Stackoverflow Analysis",
    description: "Analyzed 3 years of developer surveys. Built visualizations and salary prediction models for Data Scientists.",
    tags: ["Data Analysis", "Visualization", "ML", "Python"],
    github: "https://github.com/sanskritiagr/Stackoverflow-Analysis",
    forked: true,
    program: "GSSoC '24",
  },
  {
    title: "ThereForYou",
    description: "Mental health platform with AI assistant Kai. Features mood tracking, community support, and crisis resources.",
    tags: ["NLP", "Sentiment Analysis", "Python", "AI"],
    github: "https://github.com/sanskritiagr/ThereForYou",
    forked: true,
    program: "Open Source",
  },
  {
    title: "Threat Detection in Retail",
    description: "Computer vision pipeline for real-time threat detection in retail environments using deep learning.",
    tags: ["Computer Vision", "CNN", "Python", "Security"],
    github: "https://github.com/sanskritiagr/threat_in_retail",
    forked: true,
    program: "Open Source",
  },
  {
    title: "Elderly Emotion Detection",
    description: "Emotion detection system for elderly care using facial recognition and deep learning models.",
    tags: ["Deep Learning", "OpenCV", "Python", "Healthcare"],
    github: "https://github.com/sanskritiagr/elderly_emotion_detection",
    forked: true,
    program: "Open Source",
  },
];

const OpenSource = () => {
  return (
    <section id="opensource" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open Source <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contributing to the community through GirlScript Summer of Code and other open source projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contributions.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {project.forked && (
                    <GitFork className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-display">
                    {project.program}
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
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

        <div className="text-center mt-12">
          <a
            href="https://github.com/sanskritiagr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-display"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;