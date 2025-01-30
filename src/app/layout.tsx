import { Kanit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin', 'thai'], // เพิ่ม 'thai' 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: 'COREMed - Center for Outstanding Research and Excellence in Medicine',
  description: 'COREMed - ที่ปรึกษางานวิจัยทางการแพทย์และการตีพิมพ์ระดับมืออาชีพ.',
  openGraph: {
    title: 'COREMed - Center for Outstanding Research and Excellence in Medicine',
    description: 'COREMed - ที่ปรึกษางานวิจัยทางการแพทย์และการตีพิมพ์ระดับมืออาชีพ',
    url: 'https://core-med.org/', // ใส่ URL ของเว็บไซต์
    type: 'website',
    images: [
      {
        url: '/images/coremedicon.png', // รูปภาพที่ต้องการแสดง
        width: 1200,
        height: 630,
        alt: 'COREMed Logo',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kanit.className}>
    <head>
      {/* เปลี่ยน Favicon */}
      <link rel="icon" href="/images/coremedicon.png" type="image/png" />
    </head>
    <body className="flex flex-col">
      <main className="flex-grow">{children}</main>
    </body>
  </html>
  );
}