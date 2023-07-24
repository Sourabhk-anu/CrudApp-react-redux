import React from 'react'
import './CustomModal.css'
import { useSelector } from 'react-redux'

const CustomModal = ({id, showPopup, setShowPopup}) => {

    const allUsers = useSelector((state) => state.app.users)

    const singleUsers = allUsers.filter((ele) => ele.id===id);

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button onClick={() => setShowPopup(false)}>Close</button>
            <h2>{singleUsers[0].name}</h2>
        </div>
    </div>
  )
}

export default CustomModal