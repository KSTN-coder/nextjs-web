import { Inter, Montserrat } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${montserrat.className}`}>
      <body className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}