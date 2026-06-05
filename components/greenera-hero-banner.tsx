import Image from "next/image"
import { BookOpen, Sparkles, GraduationCap } from "lucide-react"
export default function GreeneraHeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 sm:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-emerald-300/15 to-green-400/15 rounded-full blur-3xl motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-300/10 to-emerald-300/10 rounded-full blur-2xl motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:animate-pulse delay-500"></div>

        {/* Floating educational icons */}
        <div className="absolute top-20 left-20 opacity-10 motion-safe:animate-bounce delay-300">
          <BookOpen className="w-12 h-12 text-emerald-600" />
        </div>
        <div className="absolute top-32 right-32 opacity-10 motion-safe:animate-bounce delay-700">
          <GraduationCap className="w-16 h-16 text-teal-600" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-10 motion-safe:animate-bounce delay-1000">
          <Sparkles className="w-10 h-10 text-emerald-500" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Greenera Logo */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/greenera-logo.webp"
                  alt="Greenera06 Logo"
                  width={320}
                  height={320}
                  quality={80}
                  priority
                  sizes="(max-width: 640px) 160px,
         (max-width: 768px) 208px,
         (max-width: 1024px) 256px,
         320px"
                  className="
    w-40
    sm:w-52
    md:w-64
    lg:w-72
    xl:w-80
    h-auto
    object-contain
    drop-shadow-2xl
  "
                />
              </div>

              {/* Content */}
              <div className="text-center lg:text-left max-w-4xl">

                {/* Brand badge */}
                <div className="inline-flex items-center gap-2 bg-white/80  border border-emerald-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:motion-safe:animate-pulse"></div>
                  <span className="text-sm font-medium text-emerald-700">
                    Quality Education Platform
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 leading-tight mb-6 tracking-tight">
                  Greenera06
                </h1>

                {/* Subtitle */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mb-4">
                  Empowering Young Minds Through
                </p>

                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-8">
                  Digital Learning Excellence
                </p>

                {/* Description */}
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                  Join thousands of students in grades 6-10 who are transforming
                  their educational journey with our comprehensive, multilingual
                  learning platform designed for academic success.
                </p>

              </div>

            </div>
          </div>
          {/* Brand badge */}
          

          {/* Main heading with enhanced typography */}
          

          {/* Stats or features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60  rounded-2xl p-6 shadow-lg border border-emerald-100/50">
              <div className="text-3xl font-black text-emerald-600 mb-2">6-10</div>
              <div className="text-sm font-medium text-slate-600">Grade Levels</div>
            </div>
            <div className="bg-white/60  rounded-2xl p-6 shadow-lg border border-emerald-100/50">
              <div className="text-3xl font-black text-teal-600 mb-2">2+</div>
              <div className="text-sm font-medium text-slate-600">Languages</div>
            </div>
            <div className="bg-white/60  rounded-2xl p-6 shadow-lg border border-emerald-100/50">
              <div className="text-3xl font-black text-emerald-600 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600">Free Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

