"use client"; // ระบุว่าเป็น Client Component

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    organization: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newValue = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);
      setFormData({ ...formData, [name]: newValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // สามารถส่งข้อมูลไปยัง API ได้ที่นี่
  };

  return (
    <div className="">
    <div className="bg-black h-full"><Navbar /></div>
    
    
    <div className="container mx-auto p-4">
      
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        {/* Personal Information Section */}
        <section>
          <h2 className="text-xl font-semibold mb-2"></h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="first_name" className="block font-medium">
              First Name:
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block font-medium">
              Last Name:
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block font-medium">
                Institution/Organization:
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="position" className="block font-medium">
                Position:
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </section>

        {/* Additional Questions/Concerns Section */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
          Message
          </h2>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}