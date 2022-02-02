import React, { Component } from "react";
import { BModal, NavBar, Table, FormField, ButtonAdd } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import { options as data } from "../data";

/**
 * this was moved to the data folder
 */
// const data = [
//   {
//     id: 1,
//     label: "Male",
//   },
//   {
//     id: 2,
//     label: "Female",
//   },
//   {
//     id: 3,
//     label: "Others",
//   },
// ];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  handleModalOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <div>
          <Container>
            <NavBar />
            <section className="add my-3">
              <Row>
                <Col className="align-item-center text-end">
                  <ButtonAdd
                    title="Add"
                    icon="plus-circle"
                    onClick={this.handleModalOpen}
                    variant="dark"
                  />
                </Col>
              </Row>
            </section>
            <Table />
          </Container>
          <BModal
            showModal={isOpen}
            hideModal={this.handleClose}
            title="Biodata Entry"
          >
            <form>
              <FormField.BTextField placeholder="First Name" />
              <FormField.BTextField placeholder="Last Name" />
              <FormField.BTextField type="email" placeholder="Email" />
              <FormField.BRadioField data={data.gender} />
              <FormField.BSelectField data={data.stateOfOrigin} />
              <div class="d-grid">
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </BModal>
        </div>
      </>
    );
  }
}

export default Home;
