export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-start" style ={{ gap: '5rem', marginLeft: '5rem' }}>
        <a class="flex-none w-24" href="#home" className="hover:text-gray-300">Home</a>
        <a class="flex-none w-24" href="#about" className="hover:text-gray-300">About</a>
        <a class="flex-none w-24" href="#projects" className="hover:text-gray-300">Projects</a>
        <a class="flex-none w-24" href="#contact" className="hover:text-gray-300">Contact</a>
    </nav>
  );
}
