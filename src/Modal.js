import React from 'react';
import PropTypes from 'prop-types';
import close from './img/close.png'

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto'
    };

    const contentStyle = {
        padding: 30
    }

    let closeImg = {cursor:'pointer', float:'right', width: '30px'};

    return (
      <div className="backdrop" style={backdropStyle}>
        <div style={modalStyle}>
        <img onClick={this.props.onClose} src={close} style={closeImg}/>
            <div style={contentStyle}>
                {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;