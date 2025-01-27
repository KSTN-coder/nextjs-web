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

      <div className="description-about mx-auto p-4 font-bold text-center my-8 max-w-5xl">
        <main className="container mx-auto p-4 mt-5">
          <p className="text-[#555] tracking-tight">
            ที่ COREMed
            เรารวมประสบการณ์หลายปีในด้านงานวิจัยและการปฏิบัติทางคลินิกเพื่อให้บริการที่สร้างสรรค์และมีหลักฐานเชิงประจักษ์สำหรับลูกค้าทั่วโลก
            โดยก่อตั้งโดย รศ.นพ.นิติพงศ์ เพิ่มพลัง และ นพ.ธีร์ธวัช ธนวิบูลย์ชัย
            ทีมงานของเรามีความเชี่ยวชาญหลากหลายในงานวิจัยและการปฏิบัติทางคลินิกเพื่อตอบสนองความต้องการที่หลากหลายของลูกค้า
          </p>
        </main>
        <section className="services-section p-4 my-8">
          {/* row */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-center about-img">
            {/* Group */}
            <div className="flex flex-col gap-5 items-center w-full md:w-[400px]">
              <article className="about-card flex flex-col w-full md:w-64 h-64 relative">
                <Image
                  src="/images/npermpalung.jpg"
                  alt="Service 2"
                  width={256}
                  height={256}
                  className="flex justify-center w-full h-full object-cover overflow-hidden rounded-xl"
                />
              </article>
              <p className="dr-name my-5 description text-[#555] text-center flex flex-col">
                รศ.นพ.นิติพงศ์ เพิ่มพลัง
              </p>
              <p className="text-[#555] text-justify flex flex-col tracking-tight leading-relaxed">
                อาจารย์นิติพงศ์จบการศึกษาจากคณะแพทยศาสตร์จุฬาลงกรณ์มหาวิทยาลัยและจบการศึกษาปริญญาโทเกี่ยวกับการสาธารณสุข
                (Master of Public Health) โดยเน้นทางด้านสถิติทางการแพทย์ จาก
                Harvard University
                อาจารย์นิติพงศ์เป็นอายุรแพทย์โรคติดเชื้อในโรงเรียนแพทย์ชั้นนำในประเทศสหรัฐอเมริกา
                มีความเชี่ยวชาญในด้านการทำ clinical research และ clinical trials
                และเป็นบรรณาธิการของวารสารทางเชื้อราในระดับนานาชาติ
                อาจารย์นิติพงศ์มีผลงานตีพิมพ์ในวารสารชั้นนำหลายฉบับ
                ได้รับรางวัลและทุนวิจัยจากองค์กรรัฐทั้งในประเทศไทยและระดับนานาชาติ
                อาจารย์นิติพงศ์มีความมุ่งมั่นที่จะขับเคลื่อนความก้าวหน้าทางวิทยาศาสตร์และการทำวิจัยทางการแพทย์ในประเทศไทย
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center w-full md:w-[400px]">
              <article className="about-card flex flex-col w-full md:w-64 h-64 relative">
                <Image
                  src="/images/closeupTheethawat.jpg"
                  alt="Service 2"
                  width={256}
                  height={256}
                  className="flex justify-center w-full h-full object-cover overflow-hidden rounded-xl"
                />
              </article>
              <p className="dr-name my-5 description text-[#555] text-center flex flex-col">
                นพ.ธีร์ธวัช ธนวิบูลย์ชัย
              </p>
              <p className="text-[#555] tracking-tight leading-relaxed ">
                อาจารย์ธีร์ธวัชจบการศึกษาจากวิทยาลัยแพทยศาสตร์
                มหาวิทยาลัยรังสิตและศึกษาต่อสาขาศัลยศาตร์ทั่วไปและศัลยศาตร์ผ่าตัดผ่านกล้อง
                ได้ศึกษาต่อหลักสูตรการฝึกอบรมด้านการวิจัยทางคลินิก (Science of
                Clinical Investigation (SOCI) Training Program) จาก Johns
                Hopkins University
                อาจารย์ธีร์ธวัชมีความเชี่ยวชาญพิเศษในงานวิจัยผลลัพธ์และการทบทวนวรรณกรรมเชิงระบบ
                มีผลงานการตีพิมพ์ในวารสารชั้นนำ
                นอกจากนี้ยังเป็นผู้ทรงคุณวุฒิในการประเมินบทความให้กับวารสารชั้นนำ
                พร้อมทั้งมีความมุ่งมั่นที่จะยกระดับผลงานวิจัยทางการแพทย์ของไทยให้เป็นที่ยอมรับในระดับนานาชาติ
              </p>
            </div>
          </div>
          <main className="container mx-auto p-4 mt-5">
            <h3 className="text-center mx-auto p-4 mt-5 text-[#2b5d9f]">Elevate Your Research with Our Expertise</h3>
            <p className="text-[#555] tracking-tight leading-relaxed">
              ทีมงานของเรามีผลงานตีพิมพ์คุณภาพสูงในวารสารชั้นนำระดับโลก
              ด้วยความเชี่ยวชาญที่หลากหลายและความมุ่งมั่นในมาตรฐานวิชาการและนวัตกรรม
              เราพร้อมสนับสนุนนักวิจัย องค์กร และสถาบันต่าง ๆ ในการบรรลุเป้าหมาย
              พร้อมสร้างผลกระทบเชิงบวกต่อวงการวิจัย
              มาร่วมเป็นพันธมิตรกับเราเพื่อยกระดับงานวิจัยของคุณด้วยคำแนะนำและความเชี่ยวชาญที่โดดเด่นไม่เหมือนใคร
            </p>
          </main>
        </section>
      </div>
    </div>
  );
}
