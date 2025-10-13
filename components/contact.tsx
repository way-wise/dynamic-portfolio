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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Let's work together</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out! I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-blue-200 border-blue-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Email</p>
                    <a href="mailto:hello@example.com" className="text-lg font-semibold text-black hover:text-blue-500 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-purple-200 border-purple-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-lg font-semibold text-black hover:text-purple-500 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-violet-200 border-violet-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Location</p>
                    <p className="text-lg font-semibold text-black">San Francisco, CA</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

           <Card className="p-8 shadow-xl bg-white border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  className="h-12 !bg-gray-100 !border-gray-300 !text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  className="h-12 !bg-gray-100 !border-gray-300 !text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="What's this about?" 
                  required 
                  className="h-12 !bg-gray-100 !border-gray-300 !text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message..." 
                  rows={6} 
                  required 
                  className="resize-none !bg-gray-100 !border-gray-300 !text-gray-900"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>

        <footer className="mt-24 pt-12 border-t border-gray-300">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-6">
              <a href="https://github.com/way-wise" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+1 (310) 528-6170" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} Firoz Bari's Portfolio. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}
