import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
{
  /*this is the first landing section of the ui it contains the navigation and togglable features*/
}
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-pretty">
            Team Indigo's Portfolio Template{" "}
            <span className="text-primary">TI</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Custom Portfolio For Easy Deployment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              View our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
