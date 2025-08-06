'use client';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}