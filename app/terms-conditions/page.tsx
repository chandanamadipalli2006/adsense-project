import Link from "next/link"

export default function TermsConditions() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-6">Last updated: February 16, 2024</p>

        <div className="prose prose-emerald max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to greenera06 ("Company", "we", "our", "us")!</p>
          <p>
            These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at
            greenera06.com (together or individually "Service") operated by greenera06.
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose
            information that results from your use of our web pages.
          </p>
          <p>
            Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you
            have read and understood Agreements, and agree to be bound of them.
          </p>
          <p>
            If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please
            let us know by emailing at{" "}
            <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              greenera2003@gmail.com
            </a>{" "}
            so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or
            use Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Communications</h2>
          <p>
            By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other
            information we may send. However, you may opt out of receiving any, or all, of these communications from us
            by following the unsubscribe link or by emailing at{" "}
            <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              greenera2003@gmail.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Contests, Sweepstakes and Promotions</h2>
          <p>
            Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through Service
            may be governed by rules that are separate from these Terms of Service. If you participate in any
            Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion
            conflict with these Terms of Service, Promotion rules will apply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Content</h2>
          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text,
            graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through
            Service, including its legality, reliability, and appropriateness.
          </p>
          <p>
            By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it)
            and/or you have the right to use it and the right to grant us the rights and license as provided in these
            Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights,
            publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the
            right to terminate the account of anyone found to be infringing on a copyright.
          </p>
          <p>
            You retain any and all of your rights to any Content you submit, post or display on or through Service and
            you are responsible for protecting those rights. We take no responsibility and assume no liability for
            Content you or any third party posts on or through Service. However, by posting Content using Service you
            grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute
            such Content on and through Service. You agree that this license includes the right for us to make your
            Content available to other users of Service, who may also use your Content subject to these Terms.
          </p>
          <p>greenera06 has the right but not the obligation to monitor and edit all Content provided by users.</p>
          <p>
            In addition, Content found on or through this Service are the property of greenera06 or used with
            permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content,
            whether in whole or in part, for commercial purposes or for personal gain, without express advance written
            permission from us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Prohibited Uses</h2>
          <p>
            You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>
              For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing
              them to inappropriate content or otherwise.
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or promotional material, including any "junk
              mail", "chain letter," "spam," or any other similar solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or
              entity.
            </li>
            <li>
              In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or
              harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of Service, or which,
              as determined by us, may harm or offend Company or users of Service or expose them to liability.
            </li>
          </ul>

          <p className="mt-4">Additionally, you agree not to:</p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any
              other party's use of Service, including their ability to engage in real time activities through Service.
            </li>
            <li>
              Use any robot, spider, or other automatic device, process, or means to access Service for any purpose,
              including monitoring or copying any of the material on Service.
            </li>
            <li>
              Use any manual process to monitor or copy any of the material on Service or for any other unauthorized
              purpose without our prior written consent.
            </li>
            <li>Use any device, software, or routine that interferes with the proper working of Service.</li>
            <li>
              Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or
              technologically harmful.
            </li>
            <li>
              Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the
              server on which Service is stored, or any server, computer, or database connected to Service.
            </li>
            <li>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
            <li>Take any action that may damage or falsify Company rating.</li>
            <li>Otherwise attempt to interfere with the proper working of Service.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Analytics</h2>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Anyone Can Use</h2>
          <p>All the content provided in this website can be used and accessed by all age group people.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
          <p>
            Service and its original content (excluding Content provided by users), features and functionality are and
            will remain the exclusive property of greenera06 and its licensors. Service is protected by copyright,
            trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any
            product or service without the prior written consent of greenera06.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Copyright Policy</h2>
          <p>
            We respect the intellectual property rights of others. It is our policy to respond to any claim that Content
            posted on Service infringes on the copyright or other intellectual property rights ("Infringement") of any
            person or entity.
          </p>
          <p>
            If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has
            been copied in a way that constitutes copyright infringement, please submit your claim via email to{" "}
            <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              greenera2003@gmail.com
            </a>
            , with the subject line: "Copyright Infringement" and include in your claim a detailed description of the
            alleged Infringement as detailed below, under "DMCA Notice and Procedure for Copyright Infringement Claims"
          </p>
          <p>
            You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or
            bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. DMCA Notice and Procedure for Copyright Infringement Claims
          </h2>
          <p>
            You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our
            Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              an electronic or physical signature of the person authorized to act on behalf of the owner of the
              copyright's interest;
            </li>
            <li>
              a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page
              address) of the location where the copyrighted work exists or a copy of the copyrighted work;
            </li>
            <li>
              identification of the URL or other specific location on Service where the material that you claim is
              infringing is located;
            </li>
            <li>your address, telephone number, and email address;</li>
            <li>
              a statement by you that you have a good faith belief that the disputed use is not authorized by the
              copyright owner, its agent, or the law;
            </li>
            <li>
              a statement by you, made under penalty of perjury, that the above information in your notice is accurate
              and that you are the copyright owner or authorized to act on the copyright owner's behalf.
            </li>
          </ul>

          <p className="mt-4">
            You can contact our Copyright Agent via email at{" "}
            <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              greenera2003@gmail.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Error Reporting and Feedback</h2>
          <p>
            You may provide us either directly at{" "}
            <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              greenera2003@gmail.com
            </a>{" "}
            or via third party sites and tools with information and feedback concerning errors, suggestions for
            improvements, ideas, problems, complaints, and other matters related to our Service ("Feedback"). You
            acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or
            other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the
            Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or
            any third party; and (iv) Company is not under any obligation of confidentiality with respect to the
            Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable
            mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable,
            free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create
            derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third party web sites or services that are not owned or controlled by
            greenera06.
          </p>
          <p>
            greenera06 has no control over, and assumes no responsibility for the content, privacy policies, or
            practices of any third party web sites or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
          </p>
          <p>
            For example, the outlined Terms of Use have been created using PolicyMaker.io, a free web application for
            generating high-quality legal documents. PolicyMaker's Terms and Conditions generator is an easy-to-use free
            tool for creating an excellent standard Terms of Service template for a website, blog, e-commerce store or
            app.
          </p>
          <p className="font-semibold text-gray-900 mt-4">
            YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY
            DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH
            CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.
          </p>
          <p className="font-semibold text-gray-900">
            WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR
            SERVICES THAT YOU VISIT.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Disclaimer Of Warranty</h2>
          <p className="font-semibold text-gray-900">
            THESE SERVICES ARE PROVIDED BY COMPANY ON AN "AS IS" AND "AS AVAILABLE" BASIS. COMPANY MAKES NO
            REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE
            INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES,
            THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
          </p>
          <p className="font-semibold text-gray-900 mt-4">
            NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO
            THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT
            LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE
            SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE,
            ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT
            AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS
            OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </p>
          <p className="font-semibold text-gray-900 mt-4">
            COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE,
            INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR
            PURPOSE.
          </p>
          <p className="font-semibold text-gray-900 mt-4">
            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Limitation Of Liability</h2>
          <p className="font-semibold text-gray-900">
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS
            FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING
            ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
            IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT,
            NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING
            WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY
            VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS
            BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS
            LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR
            SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT
            ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION
            OR EXCLUSION MAY NOT APPLY TO YOU.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to Service immediately, without prior notice or
            liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
            limited to a breach of Terms.
          </p>
          <p>If you wish to terminate your account, you may simply discontinue using Service.</p>
          <p>
            All provisions of Terms which by their nature should survive termination shall survive termination,
            including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
            liability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, which governing law
            applies to agreement without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
            regarding our Service and supersede and replace any prior agreements we might have had between us regarding
            Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Changes To Service</h2>
          <p>
            We reserve the right to withdraw or amend our Service, and any service or material we provide via Service,
            in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is
            unavailable at any time or for any period. From time to time, we may restrict access to some parts of
            Service, or the entire Service, to users, including registered users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">18. Amendments To Terms</h2>
          <p>
            We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to
            review these Terms periodically.
          </p>
          <p>
            Your continued use of the Platform following the posting of revised Terms means that you accept and agree to
            the changes. You are expected to check this page frequently so you are aware of any changes, as they are
            binding on you.
          </p>
          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">19. Waiver And Severability</h2>
          <p>
            No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing
            waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to
            assert a right or provision under Terms shall not constitute a waiver of such right or provision.
          </p>
          <p>
            If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid,
            illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent
            such that the remaining provisions of Terms will continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">20. Acknowledgement</h2>
          <p className="font-semibold text-gray-900">
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE
            AND AGREE TO BE BOUND BY THEM.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">21. Contact Us</h2>
          <p>
            Please send your feedback, comments, requests for technical support by email:{" "}
            <a href="mailto:greenera2003@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              greenera2003@gmail.com
            </a>
            .
          </p>
          <p className="text-sm text-gray-500 mt-6">
            These Terms of Service were created for greenera06.com by PolicyMaker.io on 2024-02-16.
          </p>
        </div>
      </div>
    </div>
  )
}
