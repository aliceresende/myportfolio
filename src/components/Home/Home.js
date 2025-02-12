import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypeWriter from "./TypeWriter";
import myFunImg from "../../Assets/myFunImg.jpg";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Alice_Resende_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="bounce" role="img" aria-label="wave">😄</span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">Alice Resende</strong>
              </h1>

              <p className="heading-description">
                A Software Engineer dedicated to crafting scalable and efficient applications. I'm eager to deepen my expertise in cloud computing to design innovative solutions that shape the future of technology.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
              <Row

                style={{
                  justifyContent: "left",
                  position: "relative",
                  marginLeft: "15px",
                  marginTop: "20px",
                }}
              >
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        
              </Row>
            </Col>

            <Col md={5}>
              <img
                src={myFunImg}
                className="profile-pic"
                alt="avatar"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
