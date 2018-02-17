import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from 'Atoms/Typography';

import styles from './Notification.css';

const cx = classNames.bind(styles)

const Notification = ({ title, titleProps, description, descriptionProps, actions, type }) => {
  return (
    <div className={cx(styles.notification)}>
      {title && <Typography.Subtitle {...titleProps}>{title}</Typography.Subtitle>}
      {description && <Typography.Header {...descriptionProps}>{description}</Typography.Header>}
      {actions && actions.map((action) => {
        return (<span key={action.label}>{action.component}</span>)
      })}
    </div>
  );
}

Notification.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.object,
  description: PropTypes.string,
  descriptionProps: PropTypes.object,
  actions: PropTypes.array,
  type: PropTypes.string,
}


export default Notification;