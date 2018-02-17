import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from 'Atoms/Typography';

import styles from './Notification.css';

const cx = classNames.bind(styles)

const Notification = ({ title, titleProps, description, descriptionProps, actions, type }) => {

  const classNames = cx(
    styles.notification,
    {
      [styles[type]]: type,
    },
  );
  const specialPadding = actions ? '5px' : '20px';

  return (
    <div className={classNames} style={{paddingBottom: specialPadding}}>
      {title && <Typography.Subtitle {...titleProps}>{title}</Typography.Subtitle>}
      {description && <Typography.Header {...descriptionProps}>{description}</Typography.Header>}
      {actions && <div className={cx(styles.footer)}>
        {
          actions.map((action) => {
            return (<span className={cx(styles.action)} key={action.label}>{action.component}</span>)
          })
        }
      </div>}

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