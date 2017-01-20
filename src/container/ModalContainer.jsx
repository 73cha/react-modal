import React, { Component, PropTypes } from 'react';
import Modal from '../components/Modal';
import '../css/Modal.css';


class ModalContainer extends Component {
 constructor() {
    super();
    this.state = {
      activeModalName: ''
    };
  }

  handleOpenModal(e) {
    let modalName = e.target.getAttribute('data-ref-modal');

    this.setState({
      activeModalName: modalName
    });
  }

  handleCloseModal() {
    this.setState({
      activeModalName: ''
    });
  }

  render() {
    const modalProps = {
      activeModalName: this.state.activeModalName,
      handler: this.handleCloseModal.bind(this)
    };

    const thumbProps = {
      onClick: (e) => this.handleOpenModal.bind(this)(e)
    }

    return (
      <div className="ModalContainer">
        <button data-ref-modal="modal1" {...thumbProps}>
          open modal1
        </button>

        <button data-ref-modal="modal3" {...thumbProps}>
          open modal3
        </button>

        <button data-ref-modal="modal2" {...thumbProps}>
          open modal2
        </button>

        <Modal name={'modal1'} {...modalProps}>
          <p>modal1</p>
          <img src="https://placehold.jp/640x480.png" alt="dummy image" />
        </Modal>

        <Modal name={'modal3'} {...modalProps}>
          <p>modal3</p>
          <img src="https://placehold.jp/640x480.png" alt="dummy image" />
        </Modal>

        <Modal name={'modal2'} {...modalProps}>
          <p>modal2</p>
          <img src="https://placehold.jp/640x480.png" alt="dummy image" />
        </Modal>
      </div>
    );
  }
}


export default ModalContainer;
