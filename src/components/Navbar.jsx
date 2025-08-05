 export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 px-20 py-5 bg-[hsl(274,68%,15%)] shadow-md font-mono text-white">
        <ul className="flex space-x-16 items-center list-none m-0 p-0">
          <li>
            <a
              href="#home"
              className="hover:text-purple-400 text-white transition-colors duration-300 text-lg text-shadow-neon no-underline tracking-wide uppercase"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors duration-300 text-lg no-underline tracking-wide uppercase"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-purple-400 transition-colors duration-300 text-lg no-underline tracking-wide uppercase"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact" 
              className="hover:text-purple-400 transition-colors duration-300 text-lg no-underline tracking-wide uppercase"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
