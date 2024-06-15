import React from 'react';
import Link from 'next/link';
import { ArrowRightLong } from '@/svg';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';

const TermsConditions = () => {
  return (
    <>
      <HeaderTwo style_2={true} />
      <section className="tp-terms-area pt-125 pb-180">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="tp-terms-wrapper pt-75">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">Terms and Conditions</span>
                  <h3 className="tp-section-title-4 fz-50">Our Terms and Conditions</h3>
                </div>
                <div className="tp-terms-content">
                  <p>
                    Welcome to Zeenat Interiors. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Zeenat Interiors' website if you do not accept all of the terms and conditions stated on this page.
                  </p>
                  <h4>Intellectual Property Rights</h4>
                  <p>
                    Unless otherwise stated, Zeenat Interiors and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from http://zeenatinteriors.com for your own personal use subject to restrictions set in these terms and conditions.
                  </p>
                  <h4>User Comments</h4>
                  <p>
                    Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments') in areas of the website. Zeenat Interiors does not screen, edit, publish, or review Comments prior to their appearance on the website, and Comments do not reflect the views or opinions of Zeenat Interiors, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws, Zeenat Interiors shall not be responsible or liable for the Comments or for any loss, cost, liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                  </p>
                  <h4>Hyperlinking to our Content</h4>
                  <p>
                    The following organizations may link to our website without prior written approval:
                  </p>
                  <ul>
                    <li>Government agencies;</li>
                    <li>Search engines;</li>
                    <li>News organizations;</li>
                    <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses;</li>
                    <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our website.</li>
                  </ul>
                  <h4>Content Liability</h4>
                  <p>
                    We shall have no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against all claims arising out of or based upon your website. No link(s) may appear on any page on your website or within any context containing content or materials that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.
                  </p>
                  <div className="tp-terms-btn mt-30">
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

export default TermsConditions;
