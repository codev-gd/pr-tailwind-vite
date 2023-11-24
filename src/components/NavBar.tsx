const NavBar = () => {
  return (
    <ul
      className={
        "bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center cursor-pointer"
      }
    >
      <li>
        <a href="#">Home</a>
      </li>

      <li>
        <a href="#">Popular</a>
      </li>
      <li>
        <a href="#">Trending</a>
      </li>
      <li>
        <a href="#">Trending2</a>
      </li>

      
    </ul>
  );
};

export default NavBar;
