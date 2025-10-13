import { Card } from "@/components/ui/card"
import { Code2, Heart, Lightbulb, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <p>
              Currently, I'm a Senior Full-Stack Engineer specializing in modern web technologies. I contribute to the
              creation and maintenance of scalable applications, ensuring our platform meets web accessibility standards
              and best practices to deliver an inclusive user experience.
            </p>
            <p>
              In the past, I've had the opportunity to develop software across a variety of settings — from advertising
              agencies and large corporations to start-ups and small digital product studios. Additionally, I also
              released a comprehensive video course a few years ago, guiding learners through building a web app with
              modern frameworks.
            </p>
            <p>
              In my spare time, I'm usually reading, exploring new technologies, or working on side projects that push my
              skills forward.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, scalable code that follows best practices
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">User-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Building experiences that users love and find intuitive
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Always exploring new technologies and creative solutions
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Results-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Focused on delivering value and achieving project goals
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
