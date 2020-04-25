import React, { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import EmpTable from "./EmpTable";
import SearchBox from "./SearchBox";

class EmpDirContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);

    this.state = {
      search: "",
      results: [],
      sort: "desc",
    };
  }

  componentDidMount() {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });

    this.setState({ search: value });
    this.handleFilter(this.state.search);
  };

  handleFilter = (search) => {
    const filtered = this.state.results.filter(
      (emp) => emp.name.first.indexOf(search) !== -1
    );
    this.setState({ results: filtered });
  };

  handleSort() {
    if (this.state.sort === "desc") {
      const sorted = this.state.results.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({ results: sorted, sort: "asc" });
    } else if (this.state.sort === "asc") {
      const sorted = this.state.results.sort((a, b) =>
        b.name.first > a.name.first ? 1 : -1
      );
      this.setState({ results: sorted, sort: "desc" });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col size="md-4 offset-md-4">
            <SearchBox handleInputChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmpTable
              employees={this.state.results}
              handleSort={this.handleSort}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmpDirContainer;
