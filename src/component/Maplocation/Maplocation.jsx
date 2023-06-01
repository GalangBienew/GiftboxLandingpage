/* eslint-disable react/react-in-jsx-scope */
import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../Maplocation/Maplocation.css";

const Maplocation = () => {
  return (
    <>
      <Container id="Maplocation">
        <h3 className='text-center'>Location</h3>
        <Row >
          <Col  >
            <div className='d-flex justify-content-md-center align-items-center mt-4'>
              <Ratio aspectRatio="16x9" style={{ width: "100%" }}>
                <iframe
                  // eslint-disable-next-line react/no-unknown-property
                  src="https://maps.google.com/maps?q=sukarame bandar lampung&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                  style={{ border: "1px " }}
                >
                </iframe>
              </Ratio>
            </div>
          </Col>
        </Row>
      </Container>


    </>
  );
};
export default Maplocation;