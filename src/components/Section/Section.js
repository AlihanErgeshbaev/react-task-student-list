import React from "react";
import "./Section.css";

const Section = ({ users }) => {
  return (
    <div className="students-info">
      <table className="table">
        <tr className="info">
          <td>lastName</td>
          <td>age</td>
          <td>id</td>
        </tr>
        {users.map(item => (
          <tr>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Section;
