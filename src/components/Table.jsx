import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email Address</th>
          <th scope="col">Gender</th>
          <th scope="col">Phone Number</th>
          <th scope="col">State of Origin</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.stateOfOrigin}</td>
            <td>
              <span className="btn btn-light btn-sm mx-1">Edit</span>
              <span className="btn btn-danger btn-sm mx-1">Delete</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
