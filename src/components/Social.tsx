import { FaEnvelope, FaFacebook, FaLine, FaPhoneSquareAlt} from "react-icons/fa"; // ใช้ React Icons

export default function Social() {
  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-[#2b5d9f]">Social Media</h2>
      <ul className=" text-[#2b5d9f] space-y-4">
        <li className="flex items-center">
          <FaEnvelope className="h-5 w-5 mr-2 text-blue-500" />
          <a
            href="mailto:info@core-med.org"
            target="_blank"
          >: info@core-med.org</a>
        </li>
        <li className="flex items-center">
          <FaFacebook className="h-5 w-5 mr-2 text-blue-700" />
          <a
            href="https://www.facebook.com/profile.php?id=61571849480592"
            target="_blank"
          >
            : COREMed
          </a>
        </li>
        <li className="flex items-center">
          <FaLine className="h-5 w-5 mr-2 text-green-500" />
          <a
            href="https://line.me/R/ti/p/@807vdzks?oat_content=url&ts=01201915"
            target="_blank"
            rel="noopener noreferrer"
          >
            : @COREMed
          </a>
        </li>
        <li className="flex items-center">
          <FaPhoneSquareAlt className="h-5 w-5 mr-2 text-gray-700" />
          <a
            href="tel:08-8851-2552"
            target="_blank"
          >: 088-851-2552</a>
        </li>
      </ul>
    </div>
  );
}