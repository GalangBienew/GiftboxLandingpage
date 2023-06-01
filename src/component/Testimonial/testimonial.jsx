/* eslint-disable react/react-in-jsx-scope */
import { Card, Carousel } from "react-bootstrap";
import Img from "../asset/box6.jpg";



const Testimonial = () => {
  return (
    <>
      <div>
        <Carousel className='mt-5'>
          <Carousel.Item>
            <Card xs={12} sm={6} md={4} lg={3}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={Img}
                  style={{ width: "18rem",  }}
                  alt=""
                />
                <Card.Img
                  variant="top"
                  src={Img}
                  style={{ width: "18rem" }}
                  alt=""
                />
                <Card.Text>
                                Saya sangat puas dengan layanan ini! Sangat mudah digunakan dan
                                hasilnya sangat memuaskan. Terima kasih!
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                                - John Doe
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    
    
    </>
  );
};

export default Testimonial;