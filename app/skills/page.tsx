import { Skills } from "@/components/skills"
import { Navigation } from "@/components/navigation"
import { Experience } from "@/components/experience"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Experience />
        <Skills />
      </main>
    </div>
  )
}
