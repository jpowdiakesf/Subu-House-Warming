import Navbar from '@/components/housewarming/Navbar';
import Hero from '@/components/housewarming/Hero';
import HousePhoto from '@/components/housewarming/HousePhoto';
import EventDetails from '@/components/housewarming/EventDetails';
import Gallery from '@/components/housewarming/Gallery';
import RSVPSection from '@/components/housewarming/RSVPSection';

import Footer from '@/components/housewarming/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <HousePhoto />
      <EventDetails />
      <Gallery />
      <RSVPSection />
      <Footer />
    </div>
  );
}