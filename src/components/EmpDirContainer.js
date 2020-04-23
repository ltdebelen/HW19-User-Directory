import React, { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import EmpTable from "./EmpTable";

class EmpDirContainer extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.results);
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmpTable employees={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmpDirContainer;
