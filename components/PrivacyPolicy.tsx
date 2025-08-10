import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-20 sm:py-28 text-text-secondary">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-8">Privacy Policy</h1>
        <p className="mb-4"><strong>Last updated: August 10, 2025</strong></p>

        <p className="mb-4">One Click GEO ("us", "we", or "our") operates the One Click GEO websites at https://oneclickgeo.netlify.app/ and https://oneclickgeo.com (the "Service").</p>

        <p className="mb-4">This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.</p>

        <p className="mb-4">We will not use or share your information with anyone except as described in this Privacy Policy. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms of Service.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Information We Collect</h2>
        <h3 className="text-2xl font-bold text-text-primary mt-6 mb-3">A) Personal Information</h3>
        <p className="mb-4">When provided voluntarily by individuals, we may collect personal information such as:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Telephone number</li>
        </ul>
        <p className="mb-4">This information is collected when you interact with our Service, such as through forms, surveys, calendars, order forms, or web chat.</p>

        <h3 className="text-2xl font-bold text-text-primary mt-6 mb-3">B) Non-Personal Information (Log Data)</h3>
        <p className="mb-4">We also collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-4">We may use the collected information for purposes, including but not limited to:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Providing and personalizing our services.</li>
          <li>Processing transactions and delivering products.</li>
          <li>Sending periodic emails related to your orders or inquiries.</li>
        </ul>
        <p className="mb-4">All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>

        <h3 className="text-2xl font-bold text-text-primary mt-6 mb-3">Communications Policy</h3>
        <p className="mb-4">No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.</p>
        <p className="mb-4">Information sharing to subcontractors in support services, such as customer service, is permitted.</p>
        <p className="mb-4">All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Cookies and Tracking Technologies</h2>
        <p className="mb-4">Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.</p>
        <p className="mb-4">We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Service Providers</h2>
        <p className="mb-4">We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Security</h2>
        <p className="mb-4">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Links to Other Sites</h2>
        <p className="mb-4">Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Children's Privacy</h2>
        <p className="mb-4">Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Compliance With Laws</h2>
        <p className="mb-4">We will disclose your Personal Information where required to do so by law or subpoena. We also aim to comply with various privacy laws, which may include, but are not limited to:</p>
        <h3 className="text-2xl font-bold text-text-primary mt-6 mb-3">United States:</h3>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Federal Trade Commission Act (FTC Act): Prohibits unfair and deceptive practices in commerce, including the unauthorized disclosure of personal information.</li>
          <li>Gramm-Leach-Bliley Act (GLBA): Applies to financial institutions and requires them to protect the privacy and security of consumer financial information.</li>
          <li>Health Insurance Portability and Accountability Act (HIPAA): Applies to protected health information.</li>
          <li>Children's Online Privacy Protection Act (COPPA): Regulates the online collection of personal information from children under 13.</li>
          <li>California Consumer Privacy Act (CCPA): State-level legislation granting consumers rights over their personal information.</li>
        </ul>
        <h3 className="text-2xl font-bold text-text-primary mt-6 mb-3">Canada:</h3>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Personal Information Protection and Electronic Documents Act (PIPEDA): Applies to private-sector organizations engaged in commercial activities, regulating the collection, use, and disclosure of personal information.</li>
        </ul>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Changes To This Privacy Policy</h2>
        <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us.</p>
        <p className="mb-4">Email: info@oneclick.agency</p>
        <p className="mb-4">Phone: 985-250-0787</p>

        <p className="text-sm text-text-muted mt-8">Disclaimer: This is not legal advice. This help article is for informational purposes only. Always consult with your own legal counsel.</p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
