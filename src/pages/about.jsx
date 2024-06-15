import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import about_img from '@assets/img/about/about-1.jpg';
// import about_thumb from '@assets/img/about/about-2.jpg';
import HeaderTwo from '@/layout/headers/header-2';
import { ArrowRightLong } from '@/svg';
import Footer from '@/layout/footers/footer';

const About = () => {
  return (
    <>
      <HeaderTwo style_2={true} />
      <section className="tp-about-area pt-125 pb-180">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-about-thumb-wrapper p-relative mr-35">
                <div className="tp-about-thumb m-img">
                  <Image src={about_img} alt="About Zeenat Interiors" />
                </div>
                {/* <div className="tp-about-thumb-2">
                  <Image src={about_thumb} alt="Additional about image" />
                </div> */}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-about-wrapper pl-60 pt-75 pr-60">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">About Us</span>
                  <h3 className="tp-section-title-4 fz-50">Welcome to Zeenat Interiors</h3>
                </div>
                <div className="tp-about-content pl-20">
                  <p>
                    Welcome to Zeenat Interiors, your premier destination for exquisite and stylish furniture that transforms your living spaces into elegant and functional environments. At Zeenat Interiors, we believe that your home is a reflection of your personality, and our mission is to provide you with furniture that is not only beautiful but also enhances the comfort and functionality of your space.
                  </p>
                  <p>
                    Founded with a passion for design and a commitment to quality, Zeenat Interiors has been at the forefront of the furniture industry, delivering innovative and timeless pieces that cater to diverse tastes and preferences. Our journey began with a simple idea: to create furniture that combines craftsmanship with modern aesthetics. Over the years, we have grown into a trusted brand, known for our attention to detail, superior materials, and exceptional customer service.
                  </p>
                  <p>
                    We offer a wide range of furniture for every room in your home, including:
                  </p>
                  <ul>
                    <li>Living Room: Sofas, coffee tables, TV units, and more.</li>
                    <li>Bedroom: Beds, wardrobes, nightstands, and dressers.</li>
                    <li>Dining Room: Dining tables, chairs, and sideboards.</li>
                    <li>Home Office: Desks, chairs, and storage solutions.</li>
                    <li>Outdoor: Patio furniture, loungers, and garden accessories.</li>
                  </ul>
                  <p>
                    Each piece is crafted with precision and care, using the finest materials to ensure longevity and style.
                  </p>
                  <div className="tp-about-btn mt-30">
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

export default About;
