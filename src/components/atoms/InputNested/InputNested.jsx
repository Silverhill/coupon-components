import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Typography from 'Atoms/Typography'

import styles from './InputNested.css'
const cx = classNames.bind(styles)

class InputNested extends Component {
  render () {
    const {
      labelText,
      className,
      description
    } = this.props;

    return (
      <div>
        {labelText &&
          <Typography.Text bold>
            {labelText}
          </Typography.Text>
        }
        {description &&
          <Typography.Label light className={cx(styles.description)}>
            {description}
          </Typography.Label>
        }
        <div className={cx(styles.container, className)} >
          <div className={styles.line}/>
          <div className={styles.components}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

InputNested.propTypes = {
  children: PropTypes.any,
  labelText: PropTypes.string
}

export default InputNested
