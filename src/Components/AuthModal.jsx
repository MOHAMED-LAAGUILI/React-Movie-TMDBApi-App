// src/Components/Modal.jsx
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-4 text-gray-500 hover:text-gray-800 transition-transform duration-200 transform hover:scale-110 text-5xl"
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;