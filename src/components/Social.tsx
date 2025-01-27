import { FaEnvelope, FaFacebook, FaLine, FaPhoneSquareAlt} from "react-icons/fa"; // ใช้ React Icons

export default function Social() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
      <ul className="text-gray-700 space-y-4">
        <li className="flex items-center">
          <FaEnvelope className="h-5 w-5 mr-2 text-blue-500" />
          <span>: info@core-med.org</span>
        </li>
        <li className="flex items-center">
          <FaFacebook className="h-5 w-5 mr-2 text-blue-700" />
          <span>: COREMed</span>
        </li>
        <li className="flex items-center">
          <FaLine className="h-5 w-5 mr-2 text-green-500" />
          <a
            href="https://line.me/R/ti/p/@807vdzks?oat_content=url&ts=01201915"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            : @COREMed
          </a>
        </li>
        <li className="flex items-center">
          <FaPhoneSquareAlt className="h-5 w-5 mr-2 text-gray-700" />
          <span>: 091-852-0295</span>
        </li>
      </ul>
    </div>
  );
}