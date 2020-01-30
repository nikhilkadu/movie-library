import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  extractCell(row, column) {
    if (column.getChildElement) return column.getChildElement(row);
    return _.get(row, column.id);
  }

  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map(row => (
          <tr>
            {columns.map(column => (
              <td>{this.extractCell(row, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
