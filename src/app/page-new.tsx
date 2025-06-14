import { Navigation } from '../components/Navigation-new';
import { Hero } from '../components/Hero-new';
import { About } from '../components/About-new';
import { News } from '../components/News-new';
import { Members } from '../components/Members-new';
import { Partners } from '../components/Partners-new';
import { Footer } from '../components/Footer-new';

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
