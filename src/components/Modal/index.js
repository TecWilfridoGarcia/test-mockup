import React,{useState } from "react";
import './style.css';
import Modal from 'react-bootstrap/Modal';

   const ModalOptions = () => {
    const [show, setShow] = useState(false);

    return (
      <>
         
        <div variant="primary" onClick={() => setShow(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Body>
            <ul>
              <li className="option-list">Update</li>
              <li className="option-list">Delete</li>
              <li className="option-list">State</li>
            </ul>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  // render(<ModalOptions />);
export default ModalOptions;