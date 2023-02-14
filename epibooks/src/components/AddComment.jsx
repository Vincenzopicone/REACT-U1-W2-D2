import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = (props) => {
    /*  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin,
    },
  }  */


  const [comment, setComment] = useState ("");
  const [rate, setRate] = useState (1)
  const [elementId, setElementId] = useState (props.asin)




    const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ViOWEyOWIyODU2YjAwMTMyYTcyMjkiLCJpYXQiOjE2NzYzODQ4MDksImV4cCI6MTY3NzU5NDQwOX0.3j3GnozNngvYZmqogNIc4KYtK5KMADyDmBJrdvRd028",
          },
        }
      )
      if (response.ok) {
        alert('Comment was sent!')
        /* this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        }) */

        setComment("");
        setRate(1);
        setElementId(props.asin)
      } else {
        console.log('error')
        alert('something went wrong')
      }
    } catch (error) {
      console.log('error')
    }
  }

    return (
      <div className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group>
            <Form.Label>Comment text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={comment}
              onChange={(e) =>
                /* this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                }) */
                setComment(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={rate}
              onChange={(e) =>
                /* this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                }) */
                setRate(e.target.value)
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }


export default AddComment
