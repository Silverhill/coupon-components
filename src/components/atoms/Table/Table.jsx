import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Table.css'
import * as palette from 'Styles/palette.css';

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
            return <th key={index}>{column}</th>
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
                return <td key={index}>{row[column]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    )

    return (
      <table className={className} width="100%">
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
