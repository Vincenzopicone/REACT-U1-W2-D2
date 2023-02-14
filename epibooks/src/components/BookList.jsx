import { useEffect, useState } from 'react';
import CommentArea from './CommentArea';
import SingleBook from './SingleBook'
import {Container, Col, Form, Row } from 'react-bootstrap'

const BookList = (props) => {
  /* state = {
    searchQuery: '',
    bookSelected: null
  } */

  const [searchQuery, setsearchQuery] = useState ("");
  const [bookSelected, setbookSelected] = useState (null);

   
  const sendData = (value) => {
    /* this.setState({ bookSelected: value }); */
    setbookSelected(value)
  };

/*   componentDidUpdate = (prevProps, prevState ) => {
    if (prevState.bookSelected !== this.state.bookSelected)  {
      this.sendData(this.state.bookSelected)
    } 
  } */

  useEffect(() => {}, [bookSelected])

    return (
      <>
        <Container xs={12} md={8}>
           <Row>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
              />
            </Form.Group>
            </Row>
            <Row>
          {props.books
            .filter((b) =>
              b.title.toLowerCase().includes(searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook 
                book={b}
                asin={b.asin}
                parentCallBack={sendData}
                setSelectedBookAsin = {bookSelected}
                 />
              </Col>
            ))}
            </Row>

          </Container>
          <Container xs={12} md={6}>
              <CommentArea asin={bookSelected}></CommentArea>
        </Container>
      </>
    )
  }


export default BookList
