import React from 'react';
import Link from 'next/link';
import { ArrowRightLong } from '@/svg';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderTwo style_2={true} />
      <section className="tp-privacy-area pt-125 pb-180">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="tp-privacy-wrapper pt-75">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">Privacy Policy</span>
                  <h3 className="tp-section-title-4 fz-50">Our Commitment to Your Privacy</h3>
                </div>
                <div className="tp-privacy-content">
                  <p>
                    At Zeenat Interiors, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
                  </p>
                  <h4>Information We Collect</h4>
                  <p>
                    We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                  </p>
                  <ul>
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                  </ul>
                  <h4>How We Use Your Information</h4>
                  <p>
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                  </p>
                  <ul>
                    <li>Create and manage your account.</li>
                    <li>Process your transactions and deliver products you have purchased.</li>
                    <li>Send you email notifications regarding your account or order.</li>
                    <li>Respond to your customer service requests.</li>
                    <li>Send you newsletters, promotional materials, and other communications.</li>
                  </ul>
                  <h4>Disclosure of Your Information</h4>
                  <p>
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                  </p>
                  <ul>
                    <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                    <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                  </ul>
                  <p>
                    For a comprehensive understanding of our privacy practices, please refer to our full Privacy Policy document.
                  </p>
                  <div className="tp-privacy-btn mt-30">
                    <Link href="/contact" className="tp-btn">
                      Contact Us <ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer primary_style={true} />
    </>
  );
};

export default PrivacyPolicy;
