import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-40 bg-white shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo name.png"
            alt="Logo"
            width={70}
            height={70}
            className="w-auto h-12 md:h-16 rounded"
          />
        </div>

        {/* Right: Mobile Hamburger */}
        <div className="md:hidden relative">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />

          <label htmlFor="menu-toggle" className="cursor-pointer">
            <svg
              className="h-8 w-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Mobile menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white flex-col items-center hidden peer-checked:flex rounded shadow-lg">
            <Link href="#banner" className="block w-full text-center py-2 text-[#1f2b6c] hover:bg-gray-200">Banner</Link>
            <Link href="#user" className="block w-full text-center py-2 text-[#1f2b6c] hover:bg-gray-200">User</Link>
            <Link href="#user_app" className="block w-full text-center py-2 text-[#1f2b6c] hover:bg-gray-200">User App</Link>
            <Link href="#manager" className="block w-full text-center py-2 text-[#1f2b6c] hover:bg-gray-200">Manager</Link>
            <Link href="#manager_app" className="block w-full text-center py-2 text-[#1f2b6c] hover:bg-gray-200">Manager App</Link>
            <Link href="#footer" className="block w-full text-center py-2 text-[#1f2b6c] hover:bg-gray-200">Footer</Link>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-4 mx-auto">
          <Link href="#banner" className="text-[#1f2b6c] hover:text-orange-500">Banner</Link>
          <Link href="#user" className="text-[#1f2b6c] hover:text-orange-500">User</Link>
          <Link href="#user_app" className="text-[#1f2b6c] hover:text-orange-500">User App</Link>
          <Link href="#manager" className="text-[#1f2b6c] hover:text-orange-500">Manager</Link>
          <Link href="#manager_app" className="text-[#1f2b6c] hover:text-orange-500">Manager App</Link>
          <Link href="#footer" className="text-[#1f2b6c] hover:text-orange-500">Footer</Link>
        </nav>
      </div>
    </header>
  );
}
