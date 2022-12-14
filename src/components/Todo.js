import { useState } from "react"

import Modal from "./Model"
import Backdrop from "./Backdrop"

function Todo(props){
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler() {
    setModalIsOpen(true)
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>DELETE</button>
      </div>
      { modalIsOpen ? <Modal /> : null}
      { modalIsOpen ? <Backdrop /> : null}
    </div>
  )
}

export default Todo