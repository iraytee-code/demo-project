// import React, { Component } from "react";
// import { BModal, NavBar, Table, FormField, ButtonAdd } from "../components";
// import { Container, Row, Col } from "react-bootstrap";
// import { options as data } from "../data";

// let initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phoneNumber: "",
//   gender: "",
//   stateOfOrigin: "",
// };
// class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOpen: false,
//       ...initialValues,
//       // FormData: initialValues,
//       tableData: [],
//     };

//     // this.handleClose = this.handleClose.bind(this);
//   }

//   //open modal
//   handleModalOpen = () => {
//     this.setState({
//       isOpen: true,
//     });
//   };
//   //close the modal
//   handleClose = () => {
//     this.setState({
//       isOpen: false,
//     });
//   };
//   //watch for changes in state
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   //submit form data to the table
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState((prevState) => {
//       //   console.log(prevState);
//       return {
//         ...prevState,
//         tableData: [
//           ...this.state.tableData,
//           {
//             firstName: this.state.firstName,
//             lastName: this.state.lastName,
//             email: this.state.email,
//             phoneNumber: this.state.phoneNumber,
//             gender: this.state.gender,
//             stateOfOrigin: this.state.stateOfOrigin,
//           },
//         ],
//         // to close the modal when the submission is successful
//         isOpen: false,
//       };
//     });
//   };
//   //handling reset
//   // handleReset = (e) => {
//   //   e.preventDefault();
//   //   this.setState({
//   //     //using javascript spread operator to input initialvalues into setstate of handlereset
//   //     ...initialValues,
//   //   });
//   // };

//   render() {
//     const { isOpen, tableData } = this.state;
//     return (
//       <>
//         <Container>
//           <NavBar />
//           <section className="add my-3">
//             <Row>
//               <Col className="align-item-center text-end">
//                 <ButtonAdd
//                   title="Add"
//                   icon="plus-circle"
//                   onClick={this.handleModalOpen}
//                   variant="dark"
//                 />
//               </Col>
//             </Row>
//           </section>
//           <Table data={tableData} />
//         </Container>
//         <BModal
//           showModal={isOpen}
//           hideModal={this.handleClose}
//           title="Biodata Entry"
//         >
//           <form>
//             {/*
//             *show state on modal
//              <pre>{JSON.stringify(this.state, null, 2)}</pre>

//             */}
//             <FormField.BTextField
//               placeholder="First Name"
//               name={"firstName"}
//               value={this.state.firstName}
//               onChange={this.handleChange}
//             />
//             <FormField.BTextField
//               placeholder="Last Name"
//               value={this.state.lastName}
//               name={"lastName"}
//               onChange={this.handleChange}
//             />
//             <FormField.BTextField
//               type="email"
//               placeholder="Email"
//               name={"email"}
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//             <FormField.BTextField
//               type="number"
//               placeholder="Phone Number"
//               name={"phoneNumber"}
//               value={this.state.phoneNumber}
//               onChange={this.handleChange}
//             />
//             <FormField.BRadioField
//               data={data.gender}
//               name={"gender"}
//               onChange={this.handleChange}
//             />
//             <FormField.BSelectField
//               data={data.stateOfOrigin}
//               name={"stateOfOrigin"}
//               value={this.state.state}
//               onChange={this.handleChange}
//             />
//             <div class="d-grid">
//               <button
//                 type="submit"
//                 className="btn btn-dark mb-2"
//                 onClick={this.handleSubmit}
//               >
//                 Submit
//               </button>
//               {/* <button className="btn btn-dark mb-2" onClick={this.handleReset}>
//                 Reset
//               </button> */}
//             </div>
//           </form>
//         </BModal>
//       </>
//     );
//   }
// }

// export default Home;
