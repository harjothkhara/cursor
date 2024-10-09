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

      <section className="bg-gray-100 py-16 mt-40"> {/* Added mt-32 for more top margin */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Are Saying</h2>
          <TestimonialCarousel />
        </div>
      </section>

      <section>
        <div>
          <PartnersScrollWithStyles />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;