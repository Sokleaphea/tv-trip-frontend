const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 h-16 shadow-md relative bg-center p-5 md:m-10 m-5 rounded-full"
        // style={{ backgroundImage: `url(${kampot})`}}
    >
      <div className="text-xl font-bold text-blue-600">
        KT
      </div>
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-gray-700 font-medium">
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
