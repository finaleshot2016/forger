
import 'react-multi-carousel/lib/styles.css';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">            

                    <div className="skill-bx wow zoomIn">       
                    <TrackVisibility>
              {({ isVisible }) =>
                        <h2 className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>FORGENOMICS</h2>}
                        </TrackVisibility>
                        <TrackVisibility>
              {({ isVisible }) =>
                        <p className={isVisible ? "animate__animated animate__lightSpeedInLeft" : ""}>CA: 0x.................................420 <br /> TOTAL SUPPLY: 100,000,000 $FORG
                       </p>}
                        </TrackVisibility>

                    </div>     
                </div>
            </div>
        </div>   
    </section>
  )
}
