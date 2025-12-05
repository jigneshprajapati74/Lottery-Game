import React from 'react'
import "./Ticket.css";
import TicketNum from './TicketNum';

const Ticket = ({ticket}) => {
  return (
    <div>
      <p>Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx}/>
      ))}
    </div>
  )
}

export default Ticket
