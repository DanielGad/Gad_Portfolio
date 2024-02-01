import "@/assets/header.css";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className="header-container">
      <div style={{width: "60px"}}>
        <img src="/G.png" alt="Gad logo" width={"100%"}/>
      </div>

      <div className="menus">
        <span className={activeMenu === 'home' ? 'active' : ''}>
          <Link to="home" spy={true} smooth={true} onClick={() => handleMenuClick('home')}>
            HOME
          </Link>
        </span>

        <span className={activeMenu === 'about' ? 'active' : ''}>
          <Link to="about" spy={true} smooth={true} onClick={() => handleMenuClick('about')}>
            ABOUT
          </Link>
        </span>

        <span className={activeMenu === 'contact' ? 'active' : ''}>
          <Link to="contact" spy={true} smooth={true} onClick={() => handleMenuClick('contact')}>
            CONTACT
          </Link>
        </span>

        <span className={activeMenu === 'skills' ? 'active' : ''}>
          <Link to="skills" spy={true} smooth={true} onClick={() => handleMenuClick('skills')}>
            SKILLS
          </Link>
        </span>

        <span className={activeMenu === 'blogs' ? 'active' : ''}>
          <Link to="blogs" spy={true} smooth={true} onClick={() => handleMenuClick('blogs')}>
            BLOGS
          </Link>
        </span>
    
      </div>
      <button className="call">Call To Action</button>
    </div>
  )
}

export default Header