export default function Navbar() {
  return (
    <nav
    //   className="text-white p-4 flex justify-start absolute top-0 left-0 font-bold w-full z-10 bg-transparent"
    className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-md flex gap-8 justify-start pl-20"
      style={{ gap: '5rem', marginLeft: '5rem', fontFamily: "monospace", position: 'fixed' }}
    >
      <a href="#home" className="flex-none w-24 hover:text-gray-300 text-[20px] no-underline">Home</a>
      <a href="#about" className="flex-none w-24 hover:text-gray-300 text-[20px] no-underline">About</a>
      <a href="#projects" className="flex-none w-24 hover:text-gray-300 text-[20px] no-underline">Projects</a>
      <a href="#contact" className="flex-none w-24 hover:text-gray-300 text-[20px] no-underline">Contact</a>
    </nav>
  );
}
