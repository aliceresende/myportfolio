import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsCard from "./SkillsCard"; // Certifique-se de importar o componente correto

function Skills() {
  return (
    <div className="page-container">
      <Container fluid className="about-section">
        <Container className="content-container">
          <Row>
            <Col
              md={12}
              className="text-center" // Centraliza o texto horizontalmente
              style={{
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.3em",
                  marginBottom: "55px",
                  color: "#6c5ce7", // Cor personalizada para o título
                }}
              >
                <strong className="skills-title">Skills</strong>
              </h1>
              <SkillsCard />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Skills;