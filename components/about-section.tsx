import { Card, CardContent } from "@/components/ui/card";
{
  /*This Displays the about section*/
}
//Creates the display page
//Information related to team indigo
export function AboutSection() {
    return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            About Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <img
                  src="/Businessmeeting.png"
                  alt="Portfolio template"
                  className="w-58 h-58 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are a passionate Software developer Team . We have experience
                building scalable Web applications. Our specialiaties include
                React, Node.js, Cloud technologies, Java, Python, CSS, and
                others
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When we are not coding, you can find us exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🎓 Software Developer Degree</li>
                    <li>💼 2+ Years Experience</li>
                    <li>🌍 Based in the USA</li>
                    <li> Remote Ready Employee's</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
