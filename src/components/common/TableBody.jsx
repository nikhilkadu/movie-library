import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  extractCell(row, column) {
    if (column.renderCell) return column.renderCell(row);
    return _.get(row, column.id);
  }

  createKey(row, column) {
    return row._id + (column.id || column.key);
  }

  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map(row => (
          <tr key={row._id}>
            {columns.map(column => (
              <td key={this.createKey(row, column)}>
                {this.extractCell(row, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
