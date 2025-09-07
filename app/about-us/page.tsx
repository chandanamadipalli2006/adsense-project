import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>

        <div className="prose prose-emerald max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong className="text-emerald-600">Greenera</strong>, a comprehensive online learning platform
            dedicated to providing high-quality education for students in Hindi and Telugu languages from 6th to 10th
            classes. Our mission is to make learning engaging, accessible, and effective through a variety of resources,
            including YouTube videos, online tests, Google Forms, Wordwall games, and detailed lesson explanations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who We Are</h2>
          <p>
            At <strong className="text-emerald-600">greenera06</strong>, we are passionate about education and committed
            to empowering students with the knowledge and skills they need to succeed in their academic journey. Our
            team of experienced educators and content creators work tirelessly to deliver dynamic and interactive
            learning experiences tailored to the specific needs of students in grades 6 to 10.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. YouTube Videos</h3>
              <p>
                Dive into our curated collection of educational videos designed to make complex concepts easy to
                understand. Our engaging content covers a wide range of topics, ensuring a holistic learning experience.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Online Tests</h3>
              <p>
                Assess your understanding and track your progress with our interactive online tests. Receive instant
                feedback to identify areas of improvement and enhance your mastery of subjects.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Google Forms</h3>
              <p>
                Participate in quizzes and surveys using Google Forms to reinforce your learning. These interactive
                assessments are crafted to challenge and reinforce your understanding of key concepts.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Wordwall Games</h3>
              <p>
                Learning becomes a game with our interactive Wordwall games. Reinforce vocabulary, concepts, and
                problem-solving skills in a fun and engaging way.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Lesson Explanations in Hindi and Telugu</h3>
              <p>
                Our detailed lesson explanations in Hindi and Telugu aim to bridge the language gap and provide clarity
                on challenging topics. We break down complex subjects into digestible modules, making learning more
                accessible.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-emerald-600 mb-3">📚 Comprehensive Curriculum</h3>
              <p className="text-gray-700">
                Our curriculum is aligned with the academic standards for grades 6 to 10, ensuring a well-rounded
                education.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-emerald-600 mb-3">🎮 Interactive Learning</h3>
              <p className="text-gray-700">
                We believe in the power of interactive learning. Our platform encourages students to actively
                participate in their education, fostering a deeper understanding of the material.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-emerald-600 mb-3">🌐 Accessible Anytime, Anywhere</h3>
              <p className="text-gray-700">
                Learning should be flexible. Access our resources 24/7 from the comfort of your home, allowing you to
                study at your own pace.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-emerald-600 mb-3">👨‍🏫 Experienced Educators</h3>
              <p className="text-gray-700">
                Our team of experienced educators brings a wealth of knowledge and expertise to ensure that you receive
                quality education.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-lg mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Learning Community</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Embark on your educational journey with <strong className="text-emerald-600">Greenera</strong> and unlock
              the doors to a world of engaging, effective, and enjoyable learning experiences. Join us in shaping a
              brighter future through knowledge and education!
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h3>
            <p className="text-gray-700">
              Have questions or need support? We're here to help! Contact us at{" "}
              <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                greenera2003@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
