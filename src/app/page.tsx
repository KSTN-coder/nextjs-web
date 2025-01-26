// src/app/page.tsx
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Social from "../components/Social";

export default function Home() {
  return (
    
    <div className="font-sans ">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* พื้นหลังรูปภาพ */}
        <div className="absolute inset-0 bg-[url('/images/heroback.jpg')] bg-cover bg-center"></div>

        {/* Overlay เพื่อเพิ่มความทึบของพื้นหลัง (ถ้าต้องการ) */}
        <div className="overlay absolute inset-0 bg-black bg-opacity-30 "></div>

        {/* เนื้อหาที่แสดงทับบนพื้นหลัง */}
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 fade-in">
          <div className="text-center hero-content flex flex-col items-center justify-center">
            <h1 className="hero-content h1">
              Center for Outstanding
              <br />
              Research and Excellence <br />
              in Medicine
            </h1>
            <p className="text-lg">
              ยินดีต้อนรับสู่
              <br /> COREMed: Center for Outstanding Research and Excellence in
              Medicine <br />
              ที่ปรึกษางานวิจัยทางการแพทย์และการตีพิมพ์ระดับมืออาชีพ
            </p>
            
          </div>
          
        </div>
      </div>
      
      <About />
      <Services />
      <div>
        <main className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Social />
            <div>
            <ContactForm />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
