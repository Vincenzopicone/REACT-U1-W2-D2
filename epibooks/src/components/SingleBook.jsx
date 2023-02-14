
import { useState } from 'react'
import { Card } from 'react-bootstrap'
/* import CommentArea from './CommentArea' */

const SingleBook = (props) => {
 /*  state = {
    selected: false,
  } */


  const [selected, setselected] = useState(false)

  const sendData = (value) => {
    props.parentCallBack(value)
  }


    return (
      <>
        <Card
          onClick={() => {
            setselected(!selected);
            sendData(props.asin)}}
          style={{ border: props.setSelectedBookAsin === props.book.asin ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      {/*   {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }


export default SingleBook
