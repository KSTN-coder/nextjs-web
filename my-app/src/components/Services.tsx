"use client";

import { useState } from "react";
import ArrowIcon from "@/components/ArrowIcon";

export default function Services() {
  const [expandedTopics, setExpandedTopics] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (topicKey: string) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicKey]: !prev[topicKey],
    }));
  };

  return (
    <div className="inset-0 mx-auto p-4 font-bold text-center my-8 flex flex-col justify-between">
      <h1 className="text-4xl font-bold text-center my-8 text-[#2b5d9f]">Our Services</h1>
      <div className="description-about mx-auto p-4 font-bold text-center max-w-5xl">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Topic 1 */}
            <div className="topic">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription("topic1")}
              >
                <h2 className=" services-card font-semibold">
                  การออกแบบงานวิจัยและระเบียบวิธีวิจัย
                  <br /> (Research Design & Methodology)
                </h2>
                <ArrowIcon expanded={expandedTopics["topic1"]} />
              </div>
              {expandedTopics["topic1"] && (
                <p className="text-gray-700 service-description">
                  - ช่วยพัฒนาแผนการวิจัยที่แข็งแกร่งตามความต้องการของลูกค้า
                </p>
              )}
            </div>

            {/* Topic 2 */}
            <div className="topic">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription("topic2")}
              >
                <h2 className=" services-card font-semibold">
                  การวิเคราะห์ข้อมูลและการแปลผล
                  <br />
                  (Data Analysis & Interpretation)
                </h2>
                <ArrowIcon expanded={expandedTopics["topic2"]} />
              </div>
              {expandedTopics["topic2"] && (
                <p className="text-gray-700 service-description">
                  - ความเชี่ยวชาญในการวิเคราะห์เชิงสถิติ
                  การวิเคราะห์เชิงคุณภาพและการแปลผล
                </p>
              )}
            </div>

            {/* Topic 3 */}
            <div className="topic">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription("topic3")}
              >
                <h2 className=" services-card font-semibold">
                  การทบทวนวรรณกรรมเชิงระบบและการวิเคราะห์อภิมาน
                  <br /> (Systematic Reviews & Meta-Analysis)
                </h2>
                <ArrowIcon expanded={expandedTopics["topic3"]} />
              </div>
              {expandedTopics["topic3"] && (
                <p className="text-gray-700 service-description">
                  - การทบทวนวรรณกรรมอย่างครอบคลุมและเทคนิคการวิเคราะห์อภิมานขั้นสูง
                </p>
              )}
            </div>

            {/* Topic 4 */}
            <div className="topic">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription("topic4")}
              >
                <h2 className=" services-card font-semibold">
                  การเขียนและพัฒนาข้อเสนอโครงการวิจัย
                  <br /> (Grant Writing & Proposal Development)
                </h2>
                <ArrowIcon expanded={expandedTopics["topic4"]} />
              </div>
              {expandedTopics["topic4"] && (
                <p className="text-gray-700 service-description">
                  - คำแนะนำในการเขียนใบสมัครทุนและข้อเสนอโครงการวิจัยที่น่าสนใจ
                </p>
              )}
            </div>

            {/* Topic 5 */}
            <div className="topic">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription("topic5")}
              >
                <h2 className=" services-card font-semibold">
                  ให้คำปรึกษาเรื่องการตีพิมพ์
                  <br /> (Publication Support)
                </h2>
                <ArrowIcon expanded={expandedTopics["topic5"]} />
              </div>
              {expandedTopics["topic5"] && (
                <p className="text-gray-700 service-description">
                  - ให้คำแนะนำในการส่งตีพิมพ์ การปรับปรุงต้นฉบับ
                  และการตอบกลับผู้ตรวจสอบ
                </p>
              )}
            </div>

            {/* Topic 6 */}
            <div className="topic">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription("topic6")}
              >
                <h2 className=" services-card font-semibold">
                  ให้คำปรึกษาเรื่องเอกสารและแนวทางสำหรับการขอทดลองในมนุษย์
                  <br /> (IRB Submission Support)
                </h2>
                <ArrowIcon expanded={expandedTopics["topic6"]} />
              </div>
              {expandedTopics["topic6"] && (
                <div className="max-h-48 overflow-y-auto">
                  <p className="text-gray-700 service-description">
                    ให้คำปรึกษาและแนวทางจัดเตรียมเอกสารที่เกี่ยวข้องกับการขออนุมัติการทดลองในมนุษย์
                    (IRB) 
                    <br/>- การให้คำปรึกษาการพัฒนาโปรโตคอลการวิจัย (Research
                    Protocol): แนะแนวทางจัดทำโครงร่างการวิจัยที่ครอบคลุมและปฏิบัติได้จริง
                    <br/>- การให้คำปรึกษาแบบฟอร์มยินยอม (Informed Consent Form):
                    แนะนำการออกแบบเอกสารให้สอดคล้องกับหลักจริยธรรมและข้อกำหนดของ IRB  
                    <br/>- การให้คำปรึกษาเอกสารสนับสนุน (Supporting Documents): เช่น
                    แนะนำแบบสอบถาม ข้อมูลเบื้องต้นเกี่ยวกับผู้เข้าร่วมการทดลอง
                    และแผนการจัดการความเสี่ยง  
                    <br/>- ช่วยเหลือติดตามสถานะ (Follow-Up):
                    ช่วยประสานงานและติดตามสถานะของเอกสารการอนุมัติ
                  </p>
                </div>
              )}
            </div>

            {/* Topic 7 - จุดเด่น (Highlight) */}
            <div className="topic col-span-full p-6 rounded-lg shadow-lg relative">
              {/* Ping Animation */}
              <div className="absolute -top-2 -right-2">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </div>

              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDescription("topic7")}
              >
                <h2 className=" services-card font-semibold">
                  ให้คำปรึกษาสำหรับแพทย์ชำนาญการและชำนาญการพิเศษ
                </h2>
                <ArrowIcon expanded={expandedTopics["topic7"]} />
              </div>
              {expandedTopics["topic7"] && (
                <p className="text-gray-700 service-description">
                  - บริการให้คำปรึกษาเฉพาะทางสำหรับการขอตำแหน่งแพทย์ชำนาญการและชำนาญการพิเศษ
                  ครอบคลุมหัวข้อที่สำคัญสำหรับการพัฒนาวิชาชีพและงานวิจัย
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}