"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link จาก next/link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollY / maxScroll) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgOpacity = Math.min((scrollPercentage - 1) / 14, 1);
  const textColor = `rgb(${Math.round(255 * (1 - bgOpacity))}, ${Math.round(
    255 * (1 - bgOpacity)
  )}, ${Math.round(255 * (1 - bgOpacity))})`;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav
      className={`navbar fixed top-0 w-full z-50 p-4 transition-all duration-300 ${
        bgOpacity > 0 ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" style={{ color: textColor }} className="coremed text-xl font-bold">
          COREMed
        </Link>

        <div className="hidden md:flex space-x-4 textnavbar">
          <Link href="#Services" style={{ color: textColor }} className="hover:text-gray-600">
            Services
          </Link>
          <Link href="#AboutUs" style={{ color: textColor }} className="hover:text-gray-600">
            About Me
          </Link>
          <Link href="#ContactForm" style={{ color: textColor }} className="hover:text-gray-600">
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className="fixed top-0 right-0 bg-black text-gray-800 z-50 bg-opacity-90 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="w-10 h-10 align-text-center text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="text-center content-center flex flex-col flex-wrap">
              <div className="p-4 text-white font-bold flex flex-col w-50">
                <Link
                  href="#Services"
                  className="block py-10 hover:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#AboutUs"
                  className="block py-10 hover:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </Link>
                <Link
                  href="#ContactForm"
                  className="block py-10 hover:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}