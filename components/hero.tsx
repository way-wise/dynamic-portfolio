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
      className="relative min-h-screen pt-32 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden z-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Elegant Background Shapes */}
      {/* <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500/25 to-teal-500/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-32 right-1/3 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-6 h-6 bg-purple-400/30 rotate-12 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-3 h-3 bg-pink-400/30 rotate-45 animate-bounce"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div> */}

      <div className="container mx-auto relative z-10">
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
                className="w-full sm:w-auto"
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
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                <Image
                  src="/firoz_bari.svg"
                  alt="Firoz Bari - Full-Stack Developer & AI/ML Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* <div
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
              </div> */}
            </div>
          </div>
          {/* Learn More About Me Section - Highlighted Box */}
          <div className="pt-8" data-aos="fade-up" data-aos-delay="700">
            <div className="relative p-6 bg-[#3BE0A6] max-w-[555px] rounded-2xl">
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                  <h3 className="text-2xl font-semibold text-[#1B3447]">
                    Learn More About Me
                  </h3>
                </div>

                <p className="text-lg text-[#1B3447] mb-6 text-center lg:text-left">
                  With over 12 years of experience building scalable,
                  user-focused digital solutions. I enjoy turning complex
                  challenges into simple, elegant, and efficient products.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 text-[#1B3447] px-5 py-4 text-xl font-medium  rounded-md border-none !bg-[#ABF5FF]"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex lg:justify-end" data-aos="fade-up" data-aos-delay="700">
            <div className="relative p-6 rounded-2xl bg-[#FFCA0B] max-w-[555px]">
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                  <h3 className="text-2xl font-semibold text-black">
                    My Experience & Skills
                  </h3>
                </div>

                <p className="text-lg text-black mb-6 text-center lg:text-left">
                  With 12+ years in full-stack development, I’ve honed a
                  diverse set of skills and experiences that drive impactful
                  digital solutions. Explore the full journey and skillset
                  below.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <a href="/skills" className="inline-flex items-center gap-2 text-black px-5 py-4 text-xl font-medium  rounded-md border-none !bg-[#ABF5FF]">Explore My Skills <ArrowRight className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
