/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import "../listProduct/listProduct.css";
// !product list
import { Productlist, Detailproduct, Testimonials } from "../dataProduct/dataProduct.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import Img from "../asset/box6.jpg";
import TestimonialBadge from "../Testimonial/testimoniBadge";



const ListProductHere = () => {
  // !useState
  // eslint-disable-next-line no-unused-vars
  const [Menudata, setMenudata] = useState(Productlist);
  const [showpopup, setshowpopup] = useState(false);
  const [Popup, setPopup] = useState("");
  const [dataProductQ] = useState(Detailproduct);
  const [detailProductIndex, setdetailProductIndex] = useState(0);
  //*this modal usestate
  const [showTestimonial, setshowTestimonial] = useState(false);
  const [detailTestimonial] = useState(Testimonials);
  const [Testimonial, setTestimonial] = useState("");
  const [IndexTestimonial, setIndexTestimonial] = useState(0);


  const PopupTrue = (Index) => {
    setshowpopup(true);
    setdetailProductIndex(Index);
    setPopup(Menudata[Index].HelloCus);

  };


  const handleTestimonial = (Index) => {
    setshowTestimonial(true);
    setIndexTestimonial(Index);
    setTestimonial(detailTestimonial[Index].Saycustomers);
  };

  return (
    <>
      <section id="listProduct">
        <div className="section_text">
          <h4>🌻List <span className='Product-text'>product🌻</span></h4>
          <div className="subtitle_text">berikut product kami bestie yang sudah terjual</div>
          <br />
          <br />
        </div>

                
        <Container>
       //!This is modal Detail
          <div className="popups">
            {showpopup && dataProductQ.map((t) => (
              <div className="popup" key={t}>
                <div className="popup-content">
                  <div className="close-butons">
                    <Button
                      variant="secondary"
                      className="close-button"
                      onClick={() => setshowpopup(false)}
                    >
                      <AiFillCloseCircle />
                    </Button>
                  </div>

                  <p>{Popup}</p>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={Img}
                      style={{ width: "18rem" }}
                      alt=""
                    />
                    <Card.Title>{dataProductQ[detailProductIndex].namaBarang}</Card.Title>
                    <Card.Text>{dataProductQ[detailProductIndex].bahan}</Card.Text>
                  </Card.Body>

                </div>
              </div>
            ))

            }

          </div>
          {/*  */}
          <div className="popups">
            {showTestimonial && detailTestimonial.map((p) => (
              <div className="popup" key={p}>
                <div className="popup-content">
                  <div className="close-butons">
                    <Button
                      variant="secondary"
                      className="close-button"
                      onClick={() => setshowTestimonial(false)}
                    >
                      <AiFillCloseCircle />
                    </Button>
                  </div>
                  <p>{Testimonial}</p>

                  <Card.Body>
                    <Card.Title>{detailTestimonial[IndexTestimonial].experienceCus}</Card.Title>
                    <Card.Text>{detailTestimonial[IndexTestimonial].ket}</Card.Text>
                    <Card.Img
                      variant="top"
                      src={detailTestimonial[IndexTestimonial].Img}
                      style={{ width: "18rem" }}
                      alt=""
                    />
                  </Card.Body>

                </div>
              </div>
            ))

            }

          </div>
          <Row xs={1} md={4} className="g-3 d-flex justify-content-md-center  py-3 h-100 shadow" >
            {
              Menudata.map((product, i) => (
                <Col xs={13} sm={6} md={4} lg={3} key={i}  >
                  <div className="card-plus py-3 h-100 "  >
                    <Card style={{}} >
                      {/* h-100 */}
                      <div className="card mt-2 " style={{ backgroundColor: "rgba(178, 8, 187, 0.716)" }} >
                        <Card.Img
                          variant="top"
                          src={product.img}
                          alt=""
                          className='card-img-top mx-auto'
                          style={{ width: "20vh", height: "24vh" }}
                        />
                        <Card.Body>
                          <Card.Title>{product.nama}</Card.Title>
                          <Card.Text>
                            {product.price}
                          </Card.Text>
                          <div className='d-flex justify-content-between align-items-center'>
                            <Button variant="primary m-2" size='sm'
                              className='text-box'
                              href="#"
                              onClick={() => {
                                PopupTrue(i);
                              }}
                            >detail product</Button>
                            <Button variant="primary " size='sm'
                              href='#'
                              onClick={() => handleTestimonial(i)} 
                            
                            >
                            Testimonial 
                              <TestimonialBadge testimonials={Testimonials} testimonialIndex={i} />
                            </Button>      
                          </div>
                        </Card.Body>
                      </div>
                    </Card>

                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ListProductHere;