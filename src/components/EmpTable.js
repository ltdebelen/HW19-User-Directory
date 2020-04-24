import React from "react";
import moment from "moment";

function EmpTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => (
          <tr key={employee.id.value}>
            <td>
              <img
                alt={employee.name.first}
                src={employee.picture.thumbnail}
              ></img>
            </td>
            <td>
              {employee.name.first} {employee.name.last}
            </td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{moment(employee.dob.date).format("MM-DD-YYYY")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmpTable;
