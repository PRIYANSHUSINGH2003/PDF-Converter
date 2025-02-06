import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FileUpload from '@/components/FileUpload';
import ServiceSection from '@/components/ServiceSection';
import AdvantagesSection from '@/components/AdvantagesSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FileUpload />
      <ServiceSection/>
      <AdvantagesSection/>
      <Footer />
    </div>
  );
}
