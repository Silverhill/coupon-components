import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Section from './helpers/Section';

import { Modal, Button, Typography } from '../src';

import styles from './helpers/styles.css';

const story = storiesOf('Molecules/Modal', module)

story.add('Simple Modal',
  withInfo(`
    description or documentation about my component
  `)(
    () => <OpenModal />
  )
);

class OpenModal extends React.Component {
  state = {
    modalIsOpen: false
  }

  toggleModal = e => {
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

  modalDismiss = () => {
    this.setState({modalIsOpen: false})
  }

  render () {
    const { modalIsOpen } = this.state
    return (
      <Section>
        <Typography.Header style={{marginBottom: 20}}>This modal is appended to body</Typography.Header>
        <Typography.Text>Please view file stories/Modal.js for see how to implementent</Typography.Text>
        <Button text={modalIsOpen ? 'Close Modal' : 'Open Modal!'} onClick={this.toggleModal} />
        <Modal
          isOpen={modalIsOpen}
          dismiss={this.modalDismiss}
          classNameModal={styles.customSizeModal}>
          <div>
            <h3>Modal in the house</h3>
          </div>
        </Modal>
      </Section>
    )
  }
}

