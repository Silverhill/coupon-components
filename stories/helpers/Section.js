import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class Section extends Component {
  static displayName = 'Section';
  render () {
    const ComponentMargin = React.Children.toArray(this.props.children)
      .map((child, i) => {
        if (React.isValidElement(child)) {
          const ChildrenComponent = child.type;
          return (
            <div style={{marginBottom: 10}} key={`section-${i}`}>
              <ChildrenComponent {...child.props} />
            </div>
          )
        }
      })

    const customStyles = {
      dark: this.props.dark
    }

    return (
      <div className={cx(styles.section, customStyles)} style={this.props.style}>
        {ComponentMargin}
      </div>
    )
  }
}

Section.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  dark: PropTypes.bool
}

export default Section
