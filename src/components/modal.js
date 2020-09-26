import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered="centered">
            <Modal.Header closeButton="closeButton">
                <Modal.Title id="contained-modal-title-vcenter">
                    اشتراک گذاری
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    با استفاده از روش‌های زیر این صفحه را به اشتراک بگذارید.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
function App() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
       <div>
            < div className="share" onClick={
            () => setModalShow(true)
        } > </div>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}
export default App;