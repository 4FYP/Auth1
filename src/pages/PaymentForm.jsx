// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button } from 'react-bootstrap';

// const PaymentForm = () => {
//   const [paymentData, setPaymentData] = useState({
//     amount: '',
//     cardholderName: '',
//     cardNumber: '',
//     expirationDate: '',
//     cvv: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setPaymentData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:8800/api/payments', paymentData)
//       .then((response) => {
//         console.log('Payment successful');
//         // Handle success scenario, e.g., show a success message or redirect
//       })
//       .catch((error) => {
//         console.error('Error processing payment: ', error);
//         // Handle error scenario, e.g., display an error message
//       });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="amount">
//         <Form.Label>Payment Amount</Form.Label>
//         <Form.Control
//           type="text"
//           name="amount"
//           value={paymentData.amount}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group controlId="cardholderName">
//         <Form.Label>Cardholder Name</Form.Label>
//         <Form.Control
//           type="text"
//           name="cardholderName"
//           value={paymentData.cardholderName}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group controlId="cardNumber">
//         <Form.Label>Card Number</Form.Label>
//         <Form.Control
//           type="text"
//           name="cardNumber"
//           value={paymentData.cardNumber}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group controlId="expirationDate">
//         <Form.Label>Expiration Date</Form.Label>
//         <Form.Control
//           type="text"
//           name="expirationDate"
//           value={paymentData.expirationDate}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group controlId="cvv">
//         <Form.Label>CVV</Form.Label>
//         <Form.Control
//           type="text"
//           name="cvv"
//           value={paymentData.cvv}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">Pay Now</Button>
//     </Form>
//   );
// };

// export default PaymentForm;


import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all form fields are filled
    const { amount, cardholderName, cardNumber, expirationDate, cvv } = paymentData;
    if (amount && cardholderName && cardNumber && expirationDate && cvv) {
      axios
        .post('http://localhost:8800/api/payments', paymentData)
        .then((response) => {
          console.log('Payment successful');
          setPaymentSuccess(true);
          // Handle success scenario, e.g., show a success message or redirect
        })
        .catch((error) => {
          console.error('Error processing payment: ', error);
          // Handle error scenario, e.g., display an error message
        });
    } else {
      // Handle form validation error, e.g., display an error message
      console.error('Please fill all form fields');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!paymentSuccess ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="amount">
            <Form.Label>Payment Amount</Form.Label>
            <Form.Control
              type="text"
              name="amount"
              value={paymentData.amount}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="cardholderName">
            <Form.Label>Cardholder Name</Form.Label>
            <Form.Control
              type="text"
              name="cardholderName"
              value={paymentData.cardholderName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="expirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="text"
              name="expirationDate"
              value={paymentData.expirationDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="cvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Pay Now
          </Button>
        </Form>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="payment-success"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="tick-icon"
            >
              &#10004;
            </motion.span>
            <h2>Payment Successful!</h2>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default PaymentForm;


