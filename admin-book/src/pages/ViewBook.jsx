import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container , Row , Col } from "react-bootstrap";

const ViewBook = () => {
  let [book, setBook] = useState({});
  let params = useParams()
  let id = params.id
  useEffect(() => {
    axios({
      url: "http://localhost:3000/book/" + id,
      method: "get",
    })
      .then((res) => {
        setBook(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
        <Container>
            <Col>
                <Row> 
                    <img src={book.bookImage} m height="300px" alt="Book Image" />
                </Row>
                <Row>
                    <h1>{book.bookName}</h1>
                    <p>Author : {book.authorName}</p>
                    <p>Language : {book.language}</p>
                    <p>Short Description : {book.shortDescription}</p>
                    <p>Description :{book.description} </p>
                    <p>Price : {book.price}</p>
                    <p>Book Status : {book.bookStatus}</p>
                    <p>Quantity : {book.quantity}</p>
                    <p>Publisher : {book.publisher}</p>
                    <p>ISBN No. : {book.isbnNo}</p>
                </Row>
            </Col>
        </Container>
    </div>
  );
};

export default ViewBook;

