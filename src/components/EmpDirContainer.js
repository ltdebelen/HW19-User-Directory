import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";

class EmpDirContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmpDirContainer;
