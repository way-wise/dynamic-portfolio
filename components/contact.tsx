"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="hover:text-accent transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="What's this about?" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>

        <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Developer Portfolio. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
