'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Target, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { News } from '../components/News';
import { Members } from '../components/Members';
import { Partners } from '../components/Partners';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900">
      <Navigation />
      <Hero />
      <About />
      <News />
      <Members />
      <Partners />
      <Footer />
    </div>
  );
}
