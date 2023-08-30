import { Container} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/lore.png";

export const Projects = () => {

  return (
    <section className="project">
      <Container>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInBottomRight" : ""}>
                                <img src={headerImg} alt="Header Img"/> 
              </div>}
        </TrackVisibility>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="/"></img>
      <Container>
              <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInBottomLeft" : ""}>
                <h2 className="pt-44" id="projects">Chart</h2>
              </div>}
        </TrackVisibility>

      <div className="ratio ratio-16x9">
                  <iframe src="https://dexscreener.com/ethereum/" title="dexscreener" allowfullscreen></iframe>
              </div>          <br /><br />


      </Container>
    </section>
    
  )
}


