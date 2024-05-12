import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderThree from '@/layout/headers/header-3';
import FurnitureBanner from '@/components/banner/furniture-banner';
import FurnitureCategory from '@/components/categories/furniture-category';
import FurnitureFeatured from '@/components/features/furniture-featured';
import ProductArea from '@/components/products/beauty/product-area';
import FurnitureOfferBanner from '@/components/offer-banner/furniture-offer-banner';
import ProductAreaTwo from '@/components/products/beauty/product-area-2';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import FurnitureTestimonial from '@/components/testimonial/furniture-testimonial';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import InstagramAreaThree from '@/components/instagram/instagram-area-3';
import Footer from '@/layout/footers/footer';

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle='Home'/>
      <HeaderThree/>
      <FurnitureBanner/>
      <FurnitureCategory/>
      <FurnitureFeatured/>
      <ProductArea/>
      <FurnitureOfferBanner/>
      <ProductAreaTwo/>
      <TrendingSpecialPrd/>
      <FurnitureTestimonial/>
      <FeatureAreaTwo/>
      <InstagramAreaThree/>
      <Footer style_3={true} />
    </Wrapper>
  )
}
