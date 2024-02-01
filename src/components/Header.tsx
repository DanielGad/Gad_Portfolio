import "@/assets/header.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on the scroll position
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${isScrolled ? 'opaque' : 'transparent'} `}>
      <div style={{width: "60px"}}>
        <img src="/G.png" alt="Gad logo" width={"100%"}/>
      </div>

      <div className={`menus `}>
        <div className={activeMenu === 'home' ? 'active' : ''}>
          <Link to="home" spy={true} smooth={true} onClick={() => handleMenuClick('home')}>
            HOME
          </Link>
        </div>

        <div className={activeMenu === 'about' ? 'active' : ''}>
          <Link to="about" spy={true} smooth={true} onClick={() => handleMenuClick('about')}>
            ABOUT
          </Link>
        </div>

        <div className={activeMenu === 'contact' ? 'active' : ''}>
          <Link to="contact" spy={true} smooth={true} onClick={() => handleMenuClick('contact')}>
            CONTACT
          </Link>
        </div>

        <div className={activeMenu === 'skills' ? 'active' : ''}>
          <Link to="skills" spy={true} smooth={true} onClick={() => handleMenuClick('skills')}>
            SKILLS
          </Link>
        </div>

        <div className={activeMenu === 'blogs' ? 'active' : ''}>
          <Link to="blogs" spy={true} smooth={true} onClick={() => handleMenuClick('blogs')}>
            BLOGS
          </Link>
        </div>
    
      </div>
      <button className="call">Call To Action</button>
    </div>
  )
}

export default Header