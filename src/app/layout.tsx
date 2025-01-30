import { Kanit } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

// ตั้งค่า Kanit Font
const kanit = Kanit({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// ตั้งค่า Metadata สำหรับ SEO
export const metadata: Metadata = {
  title: 'COREMed - Center for Outstanding Research and Excellence in Medicine',
  description: 'COREMed - ที่ปรึกษางานวิจัยทางการแพทย์และการตีพิมพ์ระดับมืออาชีพ.',
  metadataBase: new URL('https://core-med.org'), // ใส่ URL ของเว็บไซต์หลัก
  openGraph: {
    title: 'COREMed - Center for Outstanding Research and Excellence in Medicine',
    description: 'COREMed - ที่ปรึกษางานวิจัยทางการแพทย์และการตีพิมพ์ระดับมืออาชีพ',
    url: 'https://core-med.org',
    type: 'website',
    images: [
      {
        url: '/images/coremedicon.png',
        width: 1200,
        height: 630,
        alt: 'COREMed Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COREMed - Center for Outstanding Research and Excellence in Medicine',
    description: 'COREMed - ที่ปรึกษางานวิจัยทางการแพทย์และการตีพิมพ์ระดับมืออาชีพ',
    images: ['/images/coremedicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kanit.className}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/coremedicon.png" type="image/png" />
      </head>
      <body className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}