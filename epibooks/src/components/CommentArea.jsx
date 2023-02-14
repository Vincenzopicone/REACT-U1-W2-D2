import { Component } from 'react'
import CommentList from './CommentList'
import Loading from './Loading'
import Error from './Error'
import AddComment from "./AddComment"

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount = async () => {
    this.fetchComment()
    
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComment()
      
    }
  }

  fetchComment = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.asin,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZmQyNmEyNDc4ZDAwMTNhMDU4MGYiLCJpYXQiOjE2NzYzODIyMDIsImV4cCI6MTY3NzU5MTgwMn0.0aybnGOVzPESFupFcACvzL2SEresXCWRbDyQ1F70dFg",
          },
        }
      )
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <CommentList commentsToShow={this.state.comments} />
        <AddComment asin={this.props.asin}/>
      </div>
    )
  }
}

export default CommentArea
