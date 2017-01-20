import React, { PropTypes } from 'react';
import classNames from 'classnames';


const Modal = (props) => {
  const { className, activeModalName, name, handler } = props;
  const classnames = classNames(className, {
    'ModalOverLayer': true,
    'is-active': activeModalName === name
  });

  return (
    <div className={classnames}>
      <div className="ModalContent">
        <div className="ModalCloseIcon" onClick={handler}>x</div>
          {props.children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  activeModalName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};


export default Modal;
