import React, { useState, useEffect } from "react";

import { BModal, NavBar, Table, FormField, ButtonAdd } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import { options as data } from "../data";
import axios from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  stateOfOrigin: "",
  phoneNumber: "",
};

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      stateOfOrigin: "",
      phoneNumber: "",
    },
  ]);
  // const [formData, setFormData] = useState([
  //   {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     gender: "",
  //     stateOfOrigin: "",
  //     phoneNumber: "",
  //   },
  // ]);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFormData([initialValues]);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));

  //   //another method (short method)
  //   // setFormData({
  //   //   ...formData,
  //   //   [name]: value,
  //   // });
  // };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const result = [...formData];
    result[index][name] = value;
    setFormData(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevState) => [...prevState, ...formData]);
    setFormData(initialValues);
    // setTableData(formData);

    //another method (short method)
    // setTableData([...tableData, formData]);

    //close modal after submitting
    // setIsOpen(false)

    // ======================//

    // =================
    handleClose();
  };

  const handleFormData = (e) => {
    e.preventDefault();
    // setFormData((prevState) => {
    //   return [
    // ...prevState, ...initialValues
    // ];
    // });
    setFormData((prevState) => [
      ...prevState,
      {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        stateOfOrigin: "",
        phoneNumber: "",
      },
    ]);
  };

  const handleRemoveFormData = (e, index) => {
    e.preventDefault();
    const result = [...formData];
    result.splice(index, 1);
    setFormData(result);
  };

  // useEffect(() => {
  //   const getBiodata = () => {
  //     axios
  //       .get("http://localhost:4500/biodata")
  //       .then((response) => {
  //         // console.log("my-result", response.data);
  //         setTableData(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getBiodata();
  // }, []);

  const getBiodata = async () => {
    try {
      const result = await axios.get("http://localhost:4500/biodata");
      setTableData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBiodata();
  }, []);

  return (
    <>
      <Container>
        <NavBar />
        <section className="add my-3">
          <Row>
            <Col className="align-item-center text-end">
              <ButtonAdd
                title="Add"
                icon="plus-circle"
                onClick={handleOpen}
                variant="dark"
              />
            </Col>
          </Row>
        </section>
        <h4>{process.env.REACT_APP_BASE_URL}</h4>
        <Table data={tableData} />
      </Container>
      <BModal
        showModal={isOpen}
        hideModal={handleClose}
        title="Biodata Entry"
        size="lg"
      >
        <form onSubmit={handleSubmit}>
          {/*
           *show state on modal
           <pre>{JSON.stringify(formData, null, 2)}</pre>
           */}
          {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
          {formData.map((inputField, index) => {
            return (
              <Row key={index}>
                <div className="mb-3 d-flex justify-content-end">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => handleRemoveFormData(e, index)}
                  >
                    <i class="fa fa-trash fs-1x" aria-hidden="true"></i>
                  </button>
                </div>
                <Col md={6}>
                  <FormField.BTextField
                    placeholder="First Name"
                    name={"firstName"}
                    value={inputField.firstName}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Col>
                <Col md={6}>
                  <FormField.BTextField
                    placeholder="Last Name"
                    value={inputField.lastName}
                    name={"lastName"}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Col>
                <Col md={6}>
                  <FormField.BTextField
                    type="email"
                    placeholder="Email"
                    name={"email"}
                    value={inputField.email}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Col>
                <Col md={6}>
                  <FormField.BTextField
                    type="number"
                    placeholder="Phone Number"
                    name={"phoneNumber"}
                    value={inputField.phoneNumber}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Col>
                <Col md={6}>
                  <FormField.BRadioField
                    title="Gender"
                    data={data.gender}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Col>
                <Col md={6}>
                  <FormField.BSelectField
                    data={data.stateOfOrigin}
                    name={"stateOfOrigin"}
                    value={inputField.stateOfOrigin}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Col>
              </Row>
            );
          })}

          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-success btn-sm" onClick={handleFormData}>
              <i className="fa fa-plus fs-1x" aria-hidden="true"></i>
            </button>
          </div>

          <div class="d-grid">
            <button
              type="submit"
              className="btn btn-dark mb-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </BModal>
    </>
  );
};

export default Welcome;
