import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MainList = ({ list }) => (
  <table className="table">
    <thead className="table-header">
      <tr className="table-row">
        <Link className="disabled-link" to="/">
          <th className="table-cell">Name</th>
          <th className="table-cell">Gravity</th>
          <th className="table-cell">Terrain</th>
        </Link>
      </tr>
    </thead>
    <tbody className="table-body">
      {list &&
        list.map((item) => (
          <tr key={item.key} className="table-row">
            <Link to={item.name} className="link">
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">{item.gravity}</td>
              <td className="table-cell">{item.terrain}</td>
            </Link>
          </tr>
        ))}
    </tbody>
  </table>
);

export default MainList;
