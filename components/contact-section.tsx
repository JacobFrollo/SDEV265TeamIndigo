import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
{
  /*this displays the contact section*/
}
//Allows the viewer to contact the user.
export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Connect with us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Let's work together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are always interested in new opportunities for exciting
                  projects, Whether you have a question or just want to say hi,
                  feel free to reach out to us!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>TeamIndigo@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Anywhere, USA</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Please complete the form, our staff will contact you shortly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Future" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Client" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Weworkforyou@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
