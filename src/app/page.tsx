"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Sneaker Stop"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      title="Your Next Favorite Pair Awaits"
      description="Discover curated, premium sneakers at Sneaker Stop. Elevate your style with the latest releases and timeless classics, delivered straight to your doorstep."
      testimonials={[
        {
          name: "Alex R.",
          handle: "@alex_sneaks",
          testimonial: "The best selection in the game. Fast shipping and authentic kicks every time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sporty-man-tying-his-shoelaces_53876-139586.jpg",
          imageAlt: "modern sneaker studio photography blue background",
        },
        {
          name: "Jordan P.",
          handle: "@jordy_kicks",
          testimonial: "Love the limited releases. My go-to spot for new drops.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-with-high-heels_23-2150225863.jpg",
          imageAlt: "modern sneaker studio photography blue background",
        },
        {
          name: "Sam T.",
          handle: "@sam_styles",
          testimonial: "Customer service is top-notch. Sneaker Stop never disappoints.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pastel-colors-3d-sneakers_23-2151853239.jpg",
          imageAlt: "modern sneaker studio photography blue background",
        },
        {
          name: "Taylor M.",
          handle: "@tay_sneaks",
          testimonial: "Everything arrived in perfect condition. Authentic products verified.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-model-jacket-posing-outside_1303-21590.jpg",
          imageAlt: "modern sneaker studio photography blue background",
        },
        {
          name: "Morgan D.",
          handle: "@morg_kicks",
          testimonial: "I trust no one else with my collection. Authenticity guaranteed.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-legs-exercising-sidewalk_23-2147755471.jpg",
          imageAlt: "modern sneaker studio photography blue background",
        },
      ]}
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sporty-man-tying-his-shoelaces_53876-139586.jpg"
      imageAlt="Premium Sneakers Display"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-visible-abs-doing-fitness_23-2150165197.jpg",
          alt: "Woman with visible abs doing fitness",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-perfectly-ordered-fitness-items_23-2150321783.jpg",
          alt: "Top view perfectly ordered fitness items",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sunglasses-flip-flops-arrangement_23-2148922400.jpg",
          alt: "Sunglasses and flip flops arrangement",
        },
        {
          src: "http://img.b2bpic.net/free-photo/boy-with-white-shoes-stepping-floor_58702-7873.jpg",
          alt: "Boy with white shoes stepping on the floor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-tying-her-shoelaces-outdoors-training-road_1268-17537.jpg",
          alt: "Young woman tying her shoelaces at outdoors training, road",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Authentic",
        },
        {
          type: "text",
          text: "Limited Edition",
        },
        {
          type: "text",
          text: "Premium Quality",
        },
        {
          type: "text",
          text: "Worldwide Shipping",
        },
        {
          type: "text",
          text: "Verified",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Minimalist White Classic",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-with-high-heels_23-2150225863.jpg",
        },
        {
          id: "p2",
          name: "Performance High-Top Blue",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/pastel-colors-3d-sneakers_23-2151853239.jpg",
        },
        {
          id: "p3",
          name: "Lifestyle Suede Casual",
          price: "$110",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-model-jacket-posing-outside_1303-21590.jpg",
        },
        {
          id: "p4",
          name: "Sleek Black Running",
          price: "$135",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-legs-exercising-sidewalk_23-2147755471.jpg",
        },
        {
          id: "p5",
          name: "Limited Designer Edition",
          price: "$299",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-wearing-futuristic-sneakers_23-2151005702.jpg",
        },
        {
          id: "p6",
          name: "Vintage Retro Trainer",
          price: "$99",
          imageSrc: "http://img.b2bpic.net/free-photo/view-skateboard-with-retro-memorabilia_23-2150583930.jpg",
        },
      ]}
      title="Latest Drops"
      description="Check out our newest collection of premium sneakers, hand-picked for style and comfort."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Authenticity in Every Step"
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Nike",
        "Adidas",
        "Puma",
        "New Balance",
        "Vans",
        "Converse",
        "Reebok",
      ]}
      title="Trusted Partners"
      description="Collaborating with the biggest names in fashion and sports."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-girl-posing_23-2148499572.jpg",
        },
        {
          id: "t2",
          name: "Marcus L.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-sitting-skateboard_23-2148950654.jpg",
        },
        {
          id: "t3",
          name: "Elena V.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-female-with-hair-bun-having-joyful-look-smiling-cheerfully-happy-with-some-positive-news_273609-9042.jpg",
        },
        {
          id: "t4",
          name: "David W.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-sporty-man-wearing-headband-wristband-crossing-hands-isolated-green-background_141793-72527.jpg",
        },
        {
          id: "t5",
          name: "Chloe B.",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-casual-african-american-girl-stylish-trench-coat-happily-looking-away-with-coffee-go-cafe-street_574295-2881.jpg",
        },
      ]}
      cardTitle="Customer Reviews"
      cardTag="Community"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Are all products authentic?",
          content: "Yes, every pair we sell is 100% authentic and verified.",
        },
        {
          id: "f2",
          title: "How long is shipping?",
          content: "Domestic shipping typically takes 3-5 business days.",
        },
        {
          id: "f3",
          title: "Can I return items?",
          content: "Yes, we accept unworn items within 30 days of purchase.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about our products and shipping."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Stay Updated"
      title="Join the Sneaker Drop List"
      description="Never miss a new release again. Sign up for early access."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Sneaker Stop"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
