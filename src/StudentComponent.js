import React, { useState } from "react";

const StudentComponent = () => {
  const [studentData, setStudentData] = useState({});
  const [studentList, setStudentList] = useState([]);

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };
  console.log(studentList);
  const handleSubmit = () => {
    setStudentData({
      ...studentData,
      phone_number: parseInt(studentData.phone_number),
      register_number: parseInt(studentData.register_number),
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    };
    const getRequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:8000/test", requestOptions)
      .then((response) => {
        fetch("http://localhost:8000/getalldata", getRequestOptions)
          .then((alldata) => alldata.json())
          .then((alldata) => setStudentList(alldata.data))
          .catch((err) => {
            console.log(err);
          });
        alert("Data has been added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="register_number"
        placeholder="reg no"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="phone_number"
        placeholder="phone number"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="department"
        placeholder="department"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="father_name"
        placeholder="father name"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit}>Add to db</button>
      <table>
        {studentList.map((item, i) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.phone_number}</td>
              <td>{item.department}</td>
              <td>{item.father_name}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default StudentComponent;
