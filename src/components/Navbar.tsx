const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="w-full h-20 z-50 sticky top-0 px-8 flex items-center justify-between"
    >
      <div className="logo flex items-center gap-2">
        <img src="/logo.png" alt="" style={{ width: "32px" }} />
        <h4 className="text-white font-bold text-lg">videoCall</h4>
      </div>
      <div className="icon">
        <img src="/menu.png" alt="" style={{ width: "23px" }} />
      </div>
    </nav>
  );
};

export default Navbar;
