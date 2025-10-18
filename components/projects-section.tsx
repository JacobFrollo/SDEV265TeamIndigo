import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
{
  /*This section list the sample projects completed*/
}
//A list of projects that Team Indigo would like to present.
const projects = [
  {
    title: "E-Commerce Site",
    description:
      "Sample e-commerce site using Next.js, Stripe, and PostgreSQL.  Basic admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A User application with real-time updates drag-and-drop functionality included, ",
    image: "/task-management.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions with visualizations.",
    image: "/preview/project4.png",
    technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Analytics",
    description:
      "A sample Data analytic platform clients can use interactively.",
    image: "/social-media-analytics-dashboard.png",
    technologies: ["React", "D3.js", "Express", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Content Generator",
    description:
      "A content generation tool that enables Users to create  blog posts, and social media content.",
    image: "/interface.png",
    technologies: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "A  fitness tracking application that included: workout planning for fitness enthusiasts.",
    image: "/fitness-tracker.png",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
//Select the project to show on the portfolio.
export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">View source</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
