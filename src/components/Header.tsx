import "@/assets/header.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import useMediaQuery from "./useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 959px)");

  const [Visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!Visible);
  }
  
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
    <>
    <div className={`header-container ${isScrolled ? 'opaque' : 'transparent'} `}>
      
      <div style={{width: "60px"}}>
        <Link to={"/Blogs/"}>
        <img src="/G.png" alt="Gad logo" width={"100%"} className={`${isScrolled ? 'gggb' : 'bgg'}`} onClick={scrollToTop}/>
        </Link>
      </div>
      

      <div className={`menus `}>
        {isAboveMediumScreens ? (
          <>
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

        <div>
          <Link to="contact" spy={true} smooth={true} onClick={() => handleMenuClick('contact')}>
          <div className={`link ${isScrolled ? 'dark-text' : 'light-text'} ${activeMenu === 'contact' ? 'active' : ''}`}>
            CONTACT </div>
          </Link>
        </div>
    
      <button className="call">Call To Action</button>
      </>
        ) : (
          <div className="hamburger">
            <div className={`menu-icon ${isScrolled ? 'dark-text' : 'light-text'}`}
            onClick={toggleMenu}>
              {!Visible ? ( 
                <Bars3Icon className="bar-icon" onClick={() => setIsMenuToggled(!isMenuToggled)}/>
              ) : (
                  <XMarkIcon className="x-icon" onClick={() => setIsMenuToggled(!isMenuToggled)}/>
              )}
          </div>
          </div>
        )}
      </div>

    </div>
    {isMenuToggled && !isAboveMediumScreens ? (
          <div className="ham">
            <div className="hamburger-link">
              <Link to="home" spy={true} smooth={true} onClick={() => handleMenuClick('home')}>
              <div className={`link-ham ${isScrolled ? 'dark-text' : 'dark-text'}`}>HOME</div>
              </Link>
            </div>

            <div className="hamburger-link">
              <Link to="about" spy={true} smooth={true} onClick={() => handleMenuClick('about')}>
              <div className={`link-ham ${isScrolled ? 'dark-text' : 'dark-text'}`}>ABOUT</div>
              </Link>
            </div>

            <div className="hamburger-link">
              <Link to="skills" spy={true} smooth={true} onClick={() => handleMenuClick('skills')}>
              <div className={`link-ham ${isScrolled ? 'dark-text' : 'dark-text'}`}>SKILLS</div>
              </Link>
            </div>

            <div className="hamburger-link">
              <Link to="blogs" spy={true} smooth={true} onClick={() => handleMenuClick('blogs')}>
              <div className={`link-ham ${isScrolled ? 'dark-text' : 'dark-text'}`}>BLOGS</div>
              </Link>
            </div>

            <div className="hamburger-link">
              <Link to="contact" spy={true} smooth={true} onClick={() => handleMenuClick('contact')}>
              <div className={`link-ham ${isScrolled ? 'dark-text' : 'dark-text'}`}>CONTACT</div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
    </>
  )
}

export default Header