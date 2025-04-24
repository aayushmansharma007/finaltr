import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.classList.add('modal-open');
    
    // Handle escape key
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    
    return () => {
      // Cleanup
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

