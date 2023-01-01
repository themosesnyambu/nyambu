import * as React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const screenWidth = window.matchMedia('(max-width: 768px)');
  React.useEffect(() => {
    setIsMobile(screenWidth.matches);
  }, [screenWidth]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
