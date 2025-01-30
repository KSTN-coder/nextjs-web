// src/app/page.tsx
import Image from "next/image";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Social from "../components/Social";
import Introduce from "../components/Introduce";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* พื้นหลังรูปภาพ */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background-coremed.jpg"
            alt="COREMed Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Overlay เพื่อเพิ่มความทึบของพื้นหลัง */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* เนื้อหา Hero */}
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Center for Outstanding
            <br />
            Research and Excellence <br />
            in Medicine
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            COREMed <br />
            ที่ปรึกษางานวิจัยทางการแพทย์และการตีพิมพ์ระดับมืออาชีพ
          </p>
        </div>
      </section>
      <Introduce />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4  max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-6  text-[#2b5d9f]">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-lg">
            {/* Social Media Section */}
            <div className="space-y-4 ">
              <Social />
              <div className="mt-4">
                <h5 className="text-xl font-semibold  text-[#2b5d9f] mb-2">
                  ทำไมถึงเลือกเรา?
                </h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>สามารถปรับรูปแบบตามเป้าหมายงานวิจัยของคุณ</li>
                  <li>ที่ปรึกษาที่มีประสบการณ์และมีผลงานโดดเด่นในแวดวงวิชาการ</li>
                  <li>การส่งมอบงานตรงเวลาและยึดมั่นในมาตรฐานคุณภาพสูงสุด</li>
                  <li>ราคาที่สมเหตุสมผล พร้อมแพ็คเกจที่ยืดหยุ่น</li>
                </ul>
              </div>
              <div className="mt-4">
                <h6 className="text-xl font-semibold  text-[#2b5d9f] mb-2">
                  เริ่มงานกับเราด้วยขั้นตอนง่าย ๆ
                </h6>
                <div className="flex space-x-2 text-gray-700">
                  <span>1. นัดเวลา</span>
                  <span>2. พูดคุย</span>
                  <span>3. เสนอ Solution ที่เหมาะสม</span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="space-y-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
