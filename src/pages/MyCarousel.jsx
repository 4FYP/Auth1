// import React from "react";
// import { Carousel } from "react-bootstrap";
// import image1 from "../img/1.jpg";
// import image2 from "../img/5.jpg";
// import image3 from "../img/9.jpg";

// function MyCarousel() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img className="d-block w-100" src={image1} height="400" alt="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>
//             Nulla vitae elit libero, a pharetra augue mollis interdum.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={image2} height="400" alt="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={image3} height="400" alt="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default MyCarousel;


import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../img/1.jpg";
import image2 from "../img/5.jpg";
import image3 from "../img/6.jpg";
import image4 from "../img/7.jpg";
import image5 from "../img/8.jpg";

function MyCarousel() {
  const [bookData, setBookData] = useState(null);

  const handleImageClick = (book) => {
    setBookData(book);
  };

  const book1 = {
    title: "Book 1",
    author: "Author 1",
    description: "Description of Book 1",
  };

  const book2 = {
    title: "Book 2",
    author: "Author 2",
    description: "Description of Book 2",
  };

  const book3 = {
    title: "Book 3",
    author: "Author 3",
    description: "Description of Book 3",
  };

  const book4 = {
    title: "Book 4",
    author: "Author 4",
    description: "Description of Book 4",
  };

  const book5 = {
    title: "Book 5",
    author: "Author 5",
    description: "Description of Book 5",
  };

  return (
    <>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="d-flex">
            <img
              className="mx-auto"
              src={image1}
              height="200"
              width="280"
              alt="First slide"
              onClick={() => handleImageClick(book1)}
            />
            <img
              className="mx-auto"
              src={image2}
              height="200"
              width="280"
              alt="Second slide"
              onClick={() => handleImageClick(book2)}
            />
            <img
              className="mx-auto"
              src={image3}
              height="200"
              width="280"
              alt="Third slide"
              onClick={() => handleImageClick(book3)}
            />
                        <img
              className="mx-auto"
              src={image2}
              height="200"
              width="280"
              alt="Third slide"
              onClick={() => handleImageClick(book3)}
            />
                       
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex">
            <img
              className="mx-auto"
              src={image4}
              height="200"
              width="280"
              alt="Fourth slide"
              onClick={() => handleImageClick(book4)}
            />
            <img
              className="mx-auto"
              src={image5}
              height="200"
              width="280"
              alt="Fifth slide"
              onClick={() => handleImageClick(book5)}
            />
             <img
              className="mx-auto"
              src={image4}
              height="200"
              width="280"
              alt="Fourth slide"
              onClick={() => handleImageClick(book4)}
            />
            <img
              className="mx-auto"
              src={image5}
              height="200"
              width="280"
              alt="Fifth slide"
              onClick={() => handleImageClick(book5)}
            />
          </div>
        </Carousel.Item>
      </Carousel>
      {bookData && (
        <div>
          <h3>{bookData.title}</h3>
          <p>Author: {bookData.author}</p>
          <p>Description: {bookData.description}</p>
        </div>
      )}
    </>
  );
}

export default MyCarousel;
