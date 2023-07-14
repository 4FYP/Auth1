// import React, { useState } from 'react';
// import './Chatbox.css'; // Create a CSS file for styling the chatbox
// import 'bootstrap/dist/css/bootstrap.min.css';



// const Chatbox = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//     <h4>Chatbox</h4>
//     <button onClick={toggleChatbox}>
//     {/* <FontAwesomeIcon icon={} /> */}
//     </button>
    
//     <div className={`chatbox ${isOpen ? 'open' : ''}`}>
//       <div className="chatbox-header">
       
//       </div>
//       <div className="chatbox-content"></div>
//       <div className="chatbox-footer">
//         <input type="text" placeholder="Type your message..." />
//         <button className="btn btn-primary">Send</button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Chatbox;

import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendClick = (event) => {
    event.preventDefault();
    // Make an API call to send the message
    axios
      .post('http://localhost:8800/api/chat', { message: message.chat_msg })
      .then((response) => {
        console.log('Message sent successfully');
        // Handle success scenario, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error sending message: ', error);
        // Handle error scenario, e.g., display an error message
      });
  };

  return (
    <div>
      <h4>Chatbox</h4>
      <button onClick={toggleChatbox}>
        <FontAwesomeIcon icon={faComment} />
      </button>

      <div className={`chatbox ${isOpen ? 'open' : ''}`}>
        <div className="chatbox-header"></div>
        <div className="chatbox-content"></div>
        <div className="chatbox-footer">
          <Form onSubmit={handleSendClick}>
            <Form.Control
              type="text"
              placeholder="Type your message..."
              name="chat_msg"
              value={message.chat_msg}
              onChange={handleInputChange}
            />
            <Button type="submit" className="btn btn-primary">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
