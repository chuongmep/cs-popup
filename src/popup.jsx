import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function Popup() {
    const [isOpen, setIsOpen] = useState(true);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    const customStyles = {
        content: {
            width: '400px',
            height: '300px',
            margin: 'auto', // Center the popup horizontally
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 0px 5px 5px rgba(0,0,0,0.2)',
        },
    };

    return (
        <div>
            <button onClick={openPopup}>Open Popup</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closePopup}
                contentLabel="Popup"
                style={customStyles}
            >
                <h2>Popup Content</h2>
                <p>This is your centered popup content.</p>
                <button onClick={closePopup}>Close</button>
            </Modal>
        </div>
    );
}

export default Popup;
