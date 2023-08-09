import logo from "../../../public/logo.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image src={logo} className="h-8 mr-3" alt="Meu Guru Logo" />
        </a>
      </div>
    </nav>
  );
};
