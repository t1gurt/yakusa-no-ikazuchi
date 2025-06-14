import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { News } from '../components/News';
import { Members } from '../components/Members';
import { Partners } from '../components/Partners';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <News />
      <Members />
      <Partners />
      <Footer />
    </main>
  );
}
