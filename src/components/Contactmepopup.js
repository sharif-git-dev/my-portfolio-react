import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./Style.css";

const Contactmepopup = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(`Message: ${message}\n\nContact Email: ${email}`);
    window.location.href = `mailto:sharefjammoo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Let’s Talk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="p-lg-3">
            <Col>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  What are you looking for?
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Describe your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button onClick={handleSendEmail} className="btn btn-dark w-100">
                Send Email
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Contactmepopup;




