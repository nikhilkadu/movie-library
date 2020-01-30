import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  extractCells() {
    const { items, columns } = this.props;
    return items.map(row =>
      columns.map(column => {
        if (column.getChildElement) return column.getChildElement(row);
        return _.get(row, column.id);
      })
    );
  }

  render() {
    const cells = this.extractCells();
    return (
      <tbody>
        {cells.map(row => (
          <tr>
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
