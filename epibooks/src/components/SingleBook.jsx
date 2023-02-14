import { Component } from 'react'
import { Card } from 'react-bootstrap'
/* import CommentArea from './CommentArea' */

class SingleBook extends Component {
  state = {
    selected: false,
  }

  sendData = (value) => {
    this.props.parentCallBack(value)
  }

 /* setSelectedChild = (value) => {
    this.props.setSelected(value)
  }  */

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.setState({ selected: !this.state.selected });
            this.sendData(this.props.asin)}}
          style={{ border: this.props.setSelectedBookAsin === this.props.book.asin ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      {/*   {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
