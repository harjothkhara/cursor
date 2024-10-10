import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Footer from '../components/Footer';
import PartnersScrollWithStyles from '../components/PartnersScroll';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Offside',sans-serif]">
      <Head>
        <title>Augment Code</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Offside&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">See Augment Code in Action</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://fast.wistia.net/embed/iframe/a0j57y938y" 
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none' }} 
                allow="autoplay; fullscreen" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="mt-4 text-lg">
            <a href="https://www.augmentcode.com?wvideo=a0j57y938y" className="text-blue-600 hover:underline">
              Learn more about Augment Code
            </a>
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 mt-15">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Are Saying</h2>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="bg-gray-50 pt-15 pb-20">
        <div>
          <PartnersScrollWithStyles />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;