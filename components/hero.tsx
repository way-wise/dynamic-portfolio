import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Download,
} from "lucide-react";
import Image from "next/image";
import { TypingAnimation } from "@/components/typing-animation";

export function Hero() {
  return (
    <section
      className="relative min-h-screen pt-32 pb-6 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden z-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto relative z-10 lg:h-[85vh] flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/50 text-white text-sm font-medium"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-2 h-2 bg-gray-50 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>

              <h1
                className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Hi, I' Firoz Bari
              </h1>

              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FFCA0B]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <TypingAnimation
                  words={[
                    "Full-Stack Developer",
                    "JavaScript Developer",
                    "AI/ML Expert",
                    "React Specialist",
                    "Node.js Developer",
                    "Python Developer",
                    "Mobile App Developer",
                    "Cloud Architect",
                  ]}
                  className="bg-gradient-to-r from-[#FFCA0B] to-[#f1ce4c] bg-clip-text text-transparent"
                />
              </h2>

              <p
                className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Seasoned Full-Stack Developer and AI/ML Specialist with 12+
                years of experience delivering cutting-edge digital solutions
                across web, mobile, and AI-driven platforms.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-blue-900! border-none! text-white! hover:bg-blue-800!"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="flex lg:justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-200 rounded-full blur-3xl scale-110 animate-pulse"></div> */}
              <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                <Image
                  src="/firoz_bari.svg"
                  alt="Firoz Bari - Full-Stack Developer & AI/ML Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-600/50 animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-2xl">💻</div>
              </div>
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-purple-600/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-600/50 animate-bounce"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-xl">🚀</div>
              </div>
            </div>
          </div>
          {/* Learn More About Me Section - Highlighted Box */}
        </div>
        <div className="grow mt-auto grid grid-cols-1 lg:grid-cols-2 items-end gap-4">
          <div className="pt-8" data-aos="fade-up" data-aos-delay="700">
            <div className="relative p-6 bg-[#31f8b2] max-w-[555px] rounded-2xl">
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-[#1B3447]">
                    About Me
                  </h3>
                </div>

                <p className="text-lg text-[#1B3447] mb-3 text-center lg:text-left line-clamp-2">
                  With over 12 years of experience building scalable,
                  user-focused digital solutions. I enjoy turning complex
                  challenges into simple, elegant, and efficient products.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 text-[#1B3447] px-3 py-1.5 text-base font-medium  rounded-md border-none !bg-[#38e3fa]"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pt-8 flex lg:justify-end"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="relative p-4 rounded-2xl bg-[#FFCA0B] max-w-[555px]">
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-black">
                    My Experience & Skills
                  </h3>
                </div>

                <p className="text-lg text-black mb-3 text-center lg:text-left line-clamp-2">
                  With 12+ years in full-stack development, I’ve honed a diverse
                  set of skills and experiences that drive impactful digital
                  solutions. Explore the full journey and skillset below.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <a
                    href="/skills"
                    className="inline-flex items-center gap-2 text-black px-3 py-1.5 text-base font-medium  rounded-md border-none !bg-[#ABF5FF]"
                  >
                    Explore My Skills <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
