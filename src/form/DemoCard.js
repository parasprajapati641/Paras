// import { Action } from "history";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./DemoCrad.css";
// import Form from "./Form";

function DemoCard() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    setData([...data, formDataObj]);
    e.target.reset();
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <br></br>
            <input
              type="email"
              className="main"
              name="email"
              // value={email}
              // onChange={(e)=>{
              //   setEmail(e.target.value)
              // }}
            />
          </div>
          <div>
            <label>Password:</label>
            <br></br>
            <input
              type="password"
              className="main"
              name="password"
              // value={password}
              //  onChange={(e)=>{
              //   setPassword(e.target.value)
              // }}
            />
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>email</th>
              <th>password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              console.log("map", item.email);
              return (
                <tr>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <button>delete</button>
                  </td>
                  <td>
                    <button>edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DemoCard;
