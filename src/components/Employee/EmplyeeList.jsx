import {
  Icon,
  Label,
  Loader,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import { deleteEmployee, getEmployeeList } from "../../service/Api";

import EmpProfileModal from "./EmpProfileModal";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmplyeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [empl, setEmpl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeList().then((resp) => {
      setEmployees(resp?.data);
    });
  }, []);

  const gotoUpdate = (id) => {
    navigate("/update/" + id);
  };
  const deletUser = (id) => {
    deleteEmployee(id).then(() => {
      alert("Deleted!");
      window.location.reload(true);
    });
  };
  const gotoView = (emp) => {
    setEmpl(emp);
    setShowModal(true);
  };
  const listItems = employees?.map((item) => (
    <TableRow>
      <TableCell>{item.code}</TableCell>
      <TableCell>
        {item.firstName} {item.lastName}
      </TableCell>
      <TableCell>{item.age}</TableCell>
      <TableCell>{item.department}</TableCell>
      <TableCell>
        <button className="btn btn-primary" onClick={() => gotoUpdate(item.id)}>
          Edit
        </button>{" "}
        <button
          className="btn btn-secondary"
          onClick={() => deletUser(item.id)}
        >
          Delete
        </button>{" "}
        <button className="btn btn-secondary" onClick={() => gotoView(item)}>
          View
        </button>
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      <div class="container-fluid p-10">
        <EmpProfileModal
          employee={empl}
          showModal={showModal}
          handleCloseModal={() => {
            setShowModal(false);
          }}
        />
        <h1 class="mt-4">Employees</h1>

        {employees?.length > 0 ? (
          <>
            <Table celled className="ui celled table">
              <TableHeader className="">
                <TableRow>
                  <TableHeaderCell>Employee Name</TableHeaderCell>
                  <TableHeaderCell>Employee Code</TableHeaderCell>
                  <TableHeaderCell>Age</TableHeaderCell>
                  <TableHeaderCell>Department</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>{listItems}</TableBody>
            </Table>
          </>
        ) : (
          <>
            <Loader inverted content="Loading" />
          </>
        )}
      </div>
    </>
  );
};

export default EmplyeeList;
