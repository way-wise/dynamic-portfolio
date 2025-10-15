import { About } from "@/components/about"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <About />
      </main>
    </div>
  )
}
