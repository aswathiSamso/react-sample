import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";
import { saveEmployee } from "../../service/Api";

const EmplyeeCreate = () => {
  const [validation, setValidation] = useState(false);
  const [emp, setEmp] = useState({
    id: 0,
    code: "",
    firstName: "",
    lastName: "",
    age: "",
    department: "",
  });

  const navigate = useNavigate();

  const save = () => {
    if (
      !emp?.code ||
      !emp?.firstName ||
      !emp?.lastName ||
      !emp?.department ||
      !emp?.age
    ) {
      setValidation(true);

      return;
    }

    debugger;
    saveEmployee(emp).then((res) => {
      alert("Saved successfully.");
      navigate("/");
      // setEmp({
      //   id: 0,
      //   code: "",
      //   firstName: "",
      //   lastName: "",
      //   age: "",
      //   department: "",
      // });
    });
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="offset-lg-3 col-lg-6">
        <div className="card" style={{ textAlign: "left" }}>
              <div className="card-header">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Employee ID</label>
                      <input
                        required
                        value={emp?.id}
                        onChange={(e) => setEmp({ ...emp, id: e.target.value })}
                        className="form-control"
                      ></input>
                      {validation && !emp?.id && (
                        <span className="text-danger">
                          Enter the Employee id
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Employee Code</label>
                      <input
                        required
                        value={emp?.code}
                        onChange={(e) =>
                          setEmp({ ...emp, code: e.target.value })
                        }
                        className="form-control"
                      ></input>
                      {validation && !emp?.code && (
                        <span className="text-danger">
                          Enter the Employee Code
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        required
                        value={emp?.firstName}
                        onChange={(e) =>
                          setEmp({ ...emp, firstName: e.target.value })
                        }
                        className="form-control"
                      ></input>
                      {validation && !emp?.firstName && (
                        <span className="text-danger">
                          Enter the first name
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        required
                        value={emp?.lastName}
                        onChange={(e) =>
                          setEmp({ ...emp, lastName: e.target.value })
                        }
                        className="form-control"
                      ></input>
                      {validation && !emp?.lastName && (
                        <span className="text-danger">Enter the last name</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Department</label>
                      <select
                        value={emp?.department}
                        onChange={(e) =>
                          setEmp({ ...emp, department: e.target.value })
                        }
                        className="form-control"
                      >
                        <option value="">Select Department</option>
                        <option value="Development">Development</option>
                        <option value="Testing">Testing</option>
                        <option value="HR">HR</option>
                        {/* Add other departments as needed */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        value={emp?.age}
                        onChange={(e) =>
                          setEmp({ ...emp, age: e.target.value })
                        }
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12" style={{ paddingTop: "50px" }}>
                    <div className="form-group">
                      <button className="btn btn-success" onClick={save}>
                        Save
                      </button>
                      {"  "}
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmplyeeCreate;
