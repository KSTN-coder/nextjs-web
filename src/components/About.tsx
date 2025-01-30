import Image from "next/image";

export default function About() {
  return (
    <div
      className="mx-auto p-4 font-bold text-center my-8 flex flex-col justify-between overflow-x-hidden"
      id="AboutUs"
    >
      <h1 className="text-4xl font-bold text-center my-8 text-[#2b5d9f]">
        About Us
      </h1>
      <div className="description-about mx-auto p-4 font-bold text-center my-3 max-w-7xl">
        <section className="services-section p-4 my-8">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-center about-img my-10">
            {/* รูปภาพ */}
            <div className="flex-shrink-0">
              <Image
                src="/images/npermpalung.jpg"
                alt="Service 1"
                width={256}
                height={256}
                className="w-[256px] h-[256px] object-cover rounded-xl shadow-lg"
              />
            </div>
            {/* ข้อความ */}
            <div className="flex flex-col justify-start items-start text-left md:w-[60%]">
              <p className="dr-name text-xl font-bold mb-4 text-[#555]">
                รศ.นพ.นิติพงศ์ เพิ่มพลัง
              </p>
              <p className="text-[#555] tracking-tight leading-relaxed">
                <li>
                  อาจารย์นิติพงศ์จบการศึกษาจากคณะแพทยศาสตร์จุฬาลงกรณ์มหาวิทยาลัยและจบการศึกษาปริญญาโทเกี่ยวกับการสาธารณสุข
                  (Master of Public Health) โดยเน้นทางด้านสถิติทางการแพทย์จาก
                  Harvard University
                </li>
                <li>
                  อาจารย์นิติพงศ์เป็นอายุรแพทย์โรคติดเชื้อในโรงเรียนแพทย์ชั้นนำในประเทศสหรัฐอเมริกา
                  มีความเชี่ยวชาญในด้านการทำ clinical research และ clinical
                  trials และเป็นบรรณาธิการของวารสารทางเชื้อราในระดับนานาชาติ
                </li>
                <li>
                  อาจารย์นิติพงศ์มีผลงานตีพิมพ์ในวารสารชั้นนำหลายฉบับ
                  ได้รับรางวัลและทุนวิจัยจากองค์กรรัฐทั้งในประเทศไทยและระดับนานาชาติ
                </li>
                <li>
                  อาจารย์นิติพงศ์มีความมุ่งมั่นที่จะขับเคลื่อนความก้าวหน้าทางวิทยาศาสตร์และการทำวิจัยทางการแพทย์ในประเทศไทย
                </li>
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-center about-img my-10">
            {/* รูปภาพ */}
            <div className="flex-shrink-0">
              <Image
                src="/images/closeupTheethawat.jpg"
                alt="Service 2"
                width={256}
                height={256}
                className="w-[256px] h-[256px] object-cover rounded-xl shadow-lg"
              />
            </div>
            {/* ข้อความ */}
            <div className="flex flex-col justify-start items-start text-left md:w-[60%]">
              <p className="dr-name text-xl font-bold mb-4 text-[#555]">
                นพ.ธีร์ธวัช ธนวิบูลย์ชัย
              </p>
              <p className="text-[#555] tracking-tight leading-relaxed">
                <li>
                  อาจารย์ธีร์ธวัชจบการศึกษาจากวิทยาลัยแพทยศาสตร์
                  มหาวิทยาลัยรังสิตและศึกษาต่อสาขาศัลยศาตร์ทั่วไปและศัลยศาตร์ผ่าตัดผ่านกล้อง
                  ได้ศึกษาต่อหลักสูตรการฝึกอบรมด้านการวิจัยทางคลินิก (Science of
                  Clinical Investigation (SOCI) Training Program) จาก Johns
                  Hopkins University
                </li>
                <li>
                  อาจารย์ธีร์ธวัชมีความเชี่ยวชาญพิเศษในงานวิจัยผลลัพธ์และการทบทวนวรรณกรรมเชิงระบบ
                  มีผลงานการตีพิมพ์ในวารสารชั้นนำ
                </li>
                <li>
                  นอกจากนี้ยังเป็นผู้ทรงคุณวุฒิในการประเมินบทความให้กับวารสารชั้นนำ
                  พร้อมทั้งมีความมุ่งมั่นที่จะยกระดับผลงานวิจัยทางการแพทย์ของไทยให้เป็นที่ยอมรับในระดับนานาชาติ
                </li>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
