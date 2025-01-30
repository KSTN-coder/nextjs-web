import React from "react";
import {FaThumbsUp, FaHandshake } from "react-icons/fa"; // react-icons
import { PiCertificateFill } from "react-icons/pi";

const Introduce = () => {
  const features = [
    {
      icon: <PiCertificateFill size={48} className="text-[#2b5d9f]" />, // ไอคอน Certificate
      title: "CERTIFICATE",
      description:
        "ที่ COREMed เรารวมประสบการณ์หลายปีในด้านงานวิจัยและการปฏิบัติทางคลินิกเพื่อให้บริการที่สร้างสรรค์และมีหลักฐานเชิงประจักษ์สำหรับลูกค้าทั่วโลก โดยก่อตั้งโดย รศ.นพ.นิติพงศ์ เพิ่มพลัง และ นพ.ธีร์ธวัช ธนวิบูลย์ชัย",
    },
    {
      icon: <FaThumbsUp size={48} className="text-[#2b5d9f]" />, // ไอคอน Standard Quality
      title: "STANDARD QUALITY",
      description:
        "ทีมงานของเรามีความเชี่ยวชาญหลากหลายในงานวิจัยและการปฏิบัติทางคลินิกเพื่อตอบสนองความต้องการที่หลากหลายของลูกค้า ด้วยการมุ่งเน้นคุณภาพและมาตรฐานที่ดีที่สุด",
    },
    {
      icon: <FaHandshake size={48} className="text-[#2b5d9f]" />, // ไอคอน Distribution
      title: "ELEVATE RESEARCH",
      description:
        "เราร่วมกันนำเสนอความเชี่ยวชาญและคำแนะนำที่ไม่มีใครเทียบได้ เพื่อช่วยให้ลูกค้าของเราประสบความสำเร็จในเป้าหมายงานวิจัย",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md"
        >
          <div className="mb-4 text-[#2b5d9f]">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2 text-[#2b5d9f]">{feature.title}</h3>
          <p className="text-[#555]">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Introduce;