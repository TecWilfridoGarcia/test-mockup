import React,{useState } from "react";
import './style.css';
import Modal from 'react-bootstrap/Modal';

   const ModalOptions = () => {
    const [show, setShow] = useState(false);

    return (
      <>
         
        <div className="primary" variant="primary" onClick={() => setShow(true)}>
          <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>        </div>
       </div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        > 
        <Modal.Title className="title-modal">
          <h3 className="title">
          Add new route
          </h3>
        </Modal.Title>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Start path</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City, State" />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Destination route</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City, State" />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="$0" />
              </div>
              <button type="submit" className="btn btn-send">Submit</button>
              </form>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  // render(<ModalOptions />); Destination route
export default ModalOptions;