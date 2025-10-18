import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
{
  /*This section List the constant variables*/
}
//Shows the list of skills that the user would like to share with the viewer.
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "Html/Css", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 82 },
      { name: "AWS", level: 78 },
      { name: "Java/Javascript", level: 70 },
    ],
  },
];
//Adds and removes skills
export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
