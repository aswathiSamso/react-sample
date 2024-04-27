import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getEmployee, updateEmployee } from "../../service/Api";

import axios from "axios";

const EmplyeeUpdate = () => {
  const navigate = useNavigate();
  debugger;
  let { empid } = useParams();

  const [emp, setEmp] = useState({
    id: 0,
    code:"",
    firstName: "",
    lastName: "",
    age: "",
    department: "",
  });

  useEffect(() => {
    if (empid !== null && emp !== undefined) {
      getEmployee(empid).then((resp) => {
        setEmp({
          code: resp.data.code,
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
          age: resp.data.age,
          department: resp.data.department,
        });
      });
    }
  }, [empid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateEmployee({ id: empid, emp: emp }).then(() => {
      alert("Updated Successfully!");
    });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div style={{ textAlign: "center", color: "black" }}>
                <h2>Employee Update</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Employee Code</label>
                      <input
                        value={emp?.code}
                        disabled
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        required
                        value={emp?.firstName}
                        onChange={(e) => setEmp({  ...emp, firstName: e.target.value })}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        required
                        value={emp?.lastName}
                        onChange={(e) => setEmp({  ...emp, lastName: e.target.value })}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Department</label>
                      <select
                        value={emp?.department}
                        onChange={(e) => setEmp({ ...emp,department: e.target.value })}
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
                        onChange={(e) => setEmp({ ...emp,age: e.target.value })}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* <div className="col-lg-12">
                    <div className="form-group">
                      <label>Gender</label>
                      <select
                        value={emp?.gender}
                        onChange={(e) => setEmp({ gender: e.target.value })}
                        className="form-control"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>                       
                      </select>
                    </div>
                  </div> */}
                  <br/>
                  <div className="col-lg-12" style={{marginTop:"15px"}}>
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Update
                      </button>
                      {" "}
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmplyeeUpdate;
