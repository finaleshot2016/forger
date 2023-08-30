
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center text-dark">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                <h1>{`Magic Forg`}</h1>
                  <p>When frog becomes $FORG, you know you're in for a magical ride! Hold on to your wands, because $FORG is here to cast a spell of prosperity and amphibious fortune. Ribbit your way to financial wizardry! An adorable Pepe-like frog in wizard hat, holding a wand, with the letters rearranged to spell $FORG, surrounded by shimmering mystical auras and sparkling stars</p>
                  <div className="row pt-12">
                  <div className="col-6"><a href="https://app.uniswap.org/#/swap?outputCurrency=" type="button" class="btn btn-light btn-lg" onClick={() => console.log('connect')}>BUY NOW <ArrowRightCircle size={25} /></a></div>
                
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                  <img src={headerImg} alt="Header Img"/> 
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}