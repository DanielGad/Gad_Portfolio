import "@/assets/home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-left">
        <h1 className="text-1">Hello There!</h1>
        <h2 className="text-2">I'm</h2>
        <h2 className="text-3">Adeyemi Oluwagbenga Daniel</h2>
        <h3 className="text-4">Frontend Developer | Graphics Designer</h3>
      </div>
      <div className="home-right">
        <div className="image-border">
          
        </div>
        <div className="imggg">
          <img src="/ggg.png" alt="Gad image" className="gad"/>
        </div>
      </div>
    </div>
  )
}

export default Home