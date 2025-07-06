import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Greenera</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing free, quality online education in Hindi and Telugu for students from classes 6 to 10. Learn,
              practice, and excel with our comprehensive educational platform.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Classes</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Class 10
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Class 9
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Class 8
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Class 7
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Class 6
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Greenera. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
