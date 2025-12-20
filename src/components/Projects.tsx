import { Github, Folder } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Attendance using Face Recognition",
    description: "Browser-based Face Recognition app using StreamLit. Automatically records attendance with date/time when users are detected. Integrated with database for storing and analyzing records.",
    tags: ["StreamLit", "OpenCV", "TensorFlow", "Flask", "Python"],
    github: "https://github.com/sanskritiagr/Attendance-Face-Recognition",
  },
  {
    title: "RAG Chatbot",
    description: "Retrieval-Augmented Generation chatbot that combines document retrieval with LLM responses for accurate, context-aware conversations.",
    tags: ["RAG", "LLM", "NLP", "Python", "LangChain"],
    github: "https://github.com/sanskritiagr/rag_chatbot",
  },
  {
    title: "RNN Image Captioning from Scratch",
    description: "Built an image captioning model from scratch using RNNs. Generates natural language descriptions for images using encoder-decoder architecture.",
    tags: ["RNN", "Deep Learning", "Computer Vision", "Python"],
    github: "https://github.com/sanskritiagr/RNN-Image-Captioning-from-Scratch",
  },
  {
    title: "ShellyBot",
    description: "AI-powered conversational bot with natural language understanding capabilities for interactive user experiences.",
    tags: ["NLP", "Chatbot", "Python", "ML"],
    github: "https://github.com/sanskritiagr/ShellyBot",
  },
  {
    title: "SwasthAI",
    description: "Healthcare AI application leveraging machine learning for health-related predictions and recommendations.",
    tags: ["Healthcare", "ML", "Python", "AI"],
    github: "https://github.com/sanskritiagr/SwasthAI",
  },
  {
    title: "CNN Flower Prediction",
    description: "Convolutional Neural Network model for classifying flower species. Trained on image dataset with data augmentation techniques.",
    tags: ["CNN", "Image Classification", "TensorFlow", "Python"],
    github: "https://github.com/sanskritiagr/CNN_FlowerPred",
  },
  {
    title: "Real or AI Image Detection",
    description: "Deep learning model to distinguish between real photographs and AI-generated images using advanced classification techniques.",
    tags: ["Deep Learning", "CNN", "Python", "Image Analysis"],
    github: "https://github.com/sanskritiagr/RealOrAI",
  },
  {
    title: "Loan Prediction",
    description: "Machine learning model to predict loan approval status based on applicant features. Uses classification algorithms for accurate predictions.",
    tags: ["ML", "Classification", "Python", "Finance"],
    github: "https://github.com/sanskritiagr/Loan-Prediction",
  },
  {
    title: "Image Segmentation",
    description: "Implementation of image segmentation techniques to partition images into meaningful regions for computer vision applications.",
    tags: ["Computer Vision", "Segmentation", "Python", "Deep Learning"],
    github: "https://github.com/sanskritiagr/Image-Segmentation",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personal <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Machine learning and AI projects I've built to solve real-world problems
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
      </div>
    </section>
  );
};

export default Projects;