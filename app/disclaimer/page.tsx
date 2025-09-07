import Link from "next/link"

export default function Disclaimer() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer for Greenera06</h1>

        <div className="prose prose-emerald max-w-none">
          <p>
            If you require any more information or have any questions about our site's disclaimer, please feel free to
            contact us by email at{" "}
            <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              greenera2003@gmail.com
            </a>
            . Our Disclaimer was generated with the help of the{" "}
            <a
              href="https://www.disclaimergenerator.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700"
            >
              Free Disclaimer Generator
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimers for greenera06.com</h2>

          <p>
            All the information on this website - greenera06.com - is published in good faith and for general
            information purpose only. greenera06.com does not make any warranties about the completeness, reliability
            and accuracy of this information. Any action you take upon the information you find on this website
            (greenera06.com), is strictly at your own risk. greenera06.com will not be liable for any losses and/or
            damages in connection with the use of our website.
          </p>

          <p>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we
            strive to provide only quality links to useful and ethical websites, we have no control over the content and
            nature of these sites. These links to other websites do not imply a recommendation for all the content found
            on these sites. Site owners and content may change without notice and may occur before we have the
            opportunity to remove a link which may have gone 'bad'.
          </p>

          <p>
            Please be also aware that when you leave our website, other sites may have different privacy policies and
            terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as
            their "Terms of Service" before engaging in any business or uploading any information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Consent</h2>
          <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update</h2>
          <p>
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
          </p>
        </div>
      </div>
    </div>
  )
}
