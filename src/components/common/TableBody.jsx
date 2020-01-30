import React, { Component } from "react";
class TableBody extends Component {
  state = {};
  render() {
    return (
      <tbody>
        {this.props.cells.map(row => (
          <tr key={row.key}>
            {row.map(cell => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
