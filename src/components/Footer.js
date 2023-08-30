import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/forg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer pt-4">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <a href="/"><img src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://twitter.com/MagicForgETH" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://t.me/magicforg_eth
"><img src={navIcon2} alt="" /></a>

            </div>
            <p>Copyright 2023. FORG <br /> magicforg2023@proton.me </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
