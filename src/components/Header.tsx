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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`header-container ${isScrolled ? 'opaque' : 'transparent'} `} onClick={scrollToTop}>
      <div style={{width: "60px"}}>
        <img src="/G.png" alt="Gad logo" width={"100%"} className={`${isScrolled ? 'gggb' : 'bgg'}`}/>
      </div>

      <div className={`menus `}>
        <div>
          <Link to="home" spy={true} smooth={true} onClick={() => handleMenuClick('home')}>
          <div className={`link ${isScrolled ? 'dark-text' : 'light-text'} ${activeMenu === 'home' ? 'active' : ''}`}>HOME</div>
          </Link>
        </div>

        
          <div>
          <Link to="about" spy={true} smooth={true} onClick={() => handleMenuClick('about')}>
          <div className={`link ${isScrolled ? 'dark-text' : 'light-text'} ${activeMenu === 'about' ? 'active' : ''}`}>ABOUT</div>
          </Link>
          </div>
        
        

        <div>
          <Link to="contact" spy={true} smooth={true} onClick={() => handleMenuClick('contact')}>
          <div className={`link ${isScrolled ? 'dark-text' : 'light-text'} ${activeMenu === 'contact' ? 'active' : ''}`}>
            CONTACT </div>
          </Link>
        </div>

        <div>
          <Link to="skills" spy={true} smooth={true} onClick={() => handleMenuClick('skills')}>
          <div className={`link ${isScrolled ? 'dark-text' : 'light-text'} ${activeMenu === 'skills' ? 'active' : ''}`}>
            SKILLS</div>
          </Link>
        </div>

        <div>
          <Link to="blogs" spy={true} smooth={true} onClick={() => handleMenuClick('blogs')}>
          <div className={`link ${isScrolled ? 'dark-text' : 'light-text'} ${activeMenu === 'blogs' ? 'active' : ''}`}>
            BLOGS</div>
          </Link>
        </div>
    
      </div>
      <button className="call">Call To Action</button>
    </div>
  )
}

export default Header