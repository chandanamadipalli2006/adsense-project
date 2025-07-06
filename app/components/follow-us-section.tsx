import { Facebook, Twitter, Instagram, MessageCircle, Linkedin } from "lucide-react"

export default function FollowUsSection() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/greenera_24/status/1746047447124844673?t=UE2OU2JRChg_zdCKiyLcJw&s=19",
      icon: Twitter,
      color: "hover:bg-blue-500 hover:text-white",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/greenera_24?igsh=amVwZHJteWlqMnQx",
      icon: Instagram,
      color: "hover:bg-pink-500 hover:text-white",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61555421707610&mibextid=kFxxJD",
      icon: Facebook,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Telegram",
      url: "https://t.me/+w0MB3PQxmOw1NDRl",
      icon: MessageCircle,
      color: "hover:bg-blue-400 hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/green-era-3b61922a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Linkedin,
      color: "hover:bg-blue-700 hover:text-white",
    },
    {
      name: "WhatsApp",
      url: "https://chat.whatsapp.com/Fv5DOmBa7J45cm4vBE2sPQ",
      icon: MessageCircle,
      color: "hover:bg-green-500 hover:text-white",
    },
  ]

  return (
    <section id="followUsSection" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Follow Us</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay connected with us on social media for the latest updates, educational content, and learning resources.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-2 border-gray-200 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <IconComponent className="h-8 w-8 text-gray-600 group-hover:text-current transition-colors duration-300" />
                </a>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Join our community of learners and educators for daily inspiration and educational content!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
