import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import Icon from 'Atoms/Icon'
import styles from './Modal.css'
import { accentColor } from 'Styles/palette.css'

class Modal extends Component {
  leaveDelay = 200
  state = {
    isOpen: false
  }

  componentDidMount () {
    this.createModal()
  }

  createModal = () => {
    this.modalTarget = document.createElement('div')
    this.modalTarget.id = 'modal'
    document.body.appendChild(this.modalTarget)
  }

  componentDidUpdate () {
    if (this.state.isOpen) this._render()
    else this.modalUnmount()
  }

  componentWillReceiveProps (nextProps) {
    this.setModalState(nextProps.isOpen)
  }

  componentWillUnmount () {
    document.body.removeChild(this.modalTarget)
  }

  setModalState = (state) => {
    this.setState({isOpen: state})
  }

  modalUnmount () {
    this.modalTarget.className = null
    ReactDOM.unmountComponentAtNode(this.modalTarget)
  }

  handlerClose = e => {
    const { dismiss } = this.props

    this.setModalState(false)
    this.modalUnmount()
    if (dismiss) dismiss(e)
  }

  dismiss = () => {
    this.modalTarget.className = 'leaveModal'
    setTimeout(this.handlerClose, this.leaveDelay)
  }

  get modalRender () {
    return (
      <CSSTransitionGroup
        transitionName={{
          appear: styles.appear,
          appearActive: styles.appearActive
        }}
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={300}
        transitionAppear
      >
        <div className={styles.modal}>
          <div className={styles.box}>
            <div className={styles.modalClose}>
              <Icon name='IoCloseRound' onClick={this.dismiss} color={accentColor} />
            </div>
            <div className={styles.content}>
              {this.props.children}
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    )
  }

  _render () {
    ReactDOM.render(
      this.modalRender,
      this.modalTarget
    )
  }

  render () {
    return <noscript />
  }
}

Modal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  dismiss: PropTypes.func
}

export default Modal
