import "./Home.css";
import introVideo from "../../assets/intro-video.mp4";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Marvorld!!</h1>
      <p>This website is made for educational purposes.</p>

      <video autoPlay loop width={800} height={400} muted>
        <source src={introVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Home;
