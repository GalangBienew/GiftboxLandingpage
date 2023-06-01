/* eslint-disable react/react-in-jsx-scope */
import  { useRef  } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";





const ContactUs = () => {
  const form = useRef();

  const Sendemail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_kvkgpsm", "template_qwg69e8", form.current , "kapSLdNURdx0S19IY" )
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });

  };

  return (
    <div>
      <h3 className='text-center'>Contact</h3>
      <Container className="d-flex justify-content-center align-items-center mt-5 login-container shadow-lg" id="From">
        <Form ref={form} onSubmit={Sendemail}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label column sm={5}>Your name</Form.Label>
            <Col sm={12}>
              <Form.Control type="text"
                placeholder="text"
                name='user_name'
                required
              />
            </Col>
            <Form.Text className="text-muted">
               never share your name with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label column sm={5}>Email address</Form.Label>
            <Col sm={12}>
              <Form.Control type="email"
                placeholder="email"
                name='user_email'
                required
              />
            </Col>
            <Form.Text className="text-muted">
              never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} 
              type='text'
              placeholder='message'
              name='message'
            />
          </Form.Group>
          <Button variant="primary" className='mb-2' type="submit">
            submit
          </Button>
        </Form>
      </Container>

    </div>
  );
};

export default ContactUs;