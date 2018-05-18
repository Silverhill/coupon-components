import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Table.css'

const cx = classNames.bind(styles)

class Table extends Component {

  render () {
    const {
      columns,
      rows,
      className,
    } = this.props

    const tableHeaders = (
      <thead>
        <tr>
          {columns && columns.map(function(column, index) {
            return <th key={index}>{column.title}</th>
          })}
        </tr>
      </thead>
    );

    const tableBody = (
      <tbody>
        {rows && rows.map(function(row, index) {
          return (
            <tr key={index}>
              {columns && columns.map(function(column, index) {
                return <td key={index}>{row[column.field]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    )

    return (
      <table className={cx(className, styles.table)}>
        {tableHeaders}
        {tableBody}
      </table>
    )
  }
}

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  className: PropTypes.string,
}

export default Table
