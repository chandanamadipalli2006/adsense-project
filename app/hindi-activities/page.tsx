import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HindiActivities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">

      {/* Hero */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-blue-500/20 to-emerald-400/20 blur-3xl"></div>

        <div className="relative">
          <h1 className="text-5xl sm:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400 text-transparent bg-clip-text">
              Hindi Activities
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-xl">
            Learn • Practice • Improve Skills
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Vowels Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col justify-between animate-glowBlink">

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="text-orange-400" />
                  <span className="text-orange-300">Vowels & Consonants</span>
                </h2>

                <p className="text-gray-300 mb-6">
                  Practice Hindi स्वर (Vowels) and व्यंजन (Consonants).
                </p>
              </div>

              <Link href="/hindi-vowels-consonants-activities">
                <Button className="w-full bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold animate-glowBlink">
                  View Activities 🚀
                </Button>
              </Link>
            </div>

            {/* Class Activities */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8">

              <h2 className="text-3xl font-bold text-center mb-8 text-blue-300">
                Class-wise Activities
              </h2>

              <div className="flex flex-col space-y-4">

                {[
                  { label: "6th Class", link: "/6th-hindi-activities", color: "from-sky-300 to-blue-500" },
                  { label: "7th Class", link: "/7th-hindi-activities", color: "from-green-300 to-emerald-500" },
                  { label: "8th Class", link: "/8th-hindi-activities", color: "from-blue-300 to-indigo-500" },
                  { label: "9th Class", link: "/9th-hindi-activities", color: "from-teal-300 to-green-500" },
                  { label: "10th Class", link: "/10th-hindi-activities", color: "from-purple-300 to-pink-500" },
                ].map((item, index) => (
                  <Link key={index} href={item.link}>
                    <Button
                      className={`w-full bg-gradient-to-r ${item.color}
                      text-black font-bold animate-glowBlink`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}

              </div>
            </div>

          </div>

          {/* Back */}
          <div className="text-center mt-16">
            <Link href="/">
              <Button className="bg-gradient-to-r from-emerald-400 to-blue-500 text-black font-bold animate-glowBlink px-8 py-3">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}