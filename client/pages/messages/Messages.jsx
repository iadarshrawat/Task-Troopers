import React from 'react'
import { Link } from 'react-router-dom'
import './Messages.scss'

function Messages() {

  const currentUser = {
    id: 1,
    username: "john Doe",
    isSeller: true,
  }

  const message = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur aut veritatis vel repellat, sapiente architecto hic a error tenetur labore, fugit natus possimus? Debitis est explicabo itaque doloribus eveniet."

  return (
    <div className='message'>
      <div className="container">
        <div className="title">
          <h1>Message</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td> John Doe </td>
            <td><Link to='/message/123' className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td> John Doe </td>
            <td><Link to='/message/123' className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td> John Doe </td>
            <td><Link to='/message/123' className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td> John Doe </td>
            <td><Link to='/message/123' className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td> John Doe </td>
            <td><Link to='/message/123' className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td> John Doe </td>
            <td><Link to='/message/123' className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages