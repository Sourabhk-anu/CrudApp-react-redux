import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import updateUser from '../features/userDetailSlice'

const Update = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState();

    const {users, loading} = useSelector((state) => state.app);

    useEffect(() => {
        if(id) {
            const singleUsers = users.filter((ele) => ele.id===id);
            setUpdateData(singleUsers[0]);
        }
    }, [])


    const newData = (e) => {
        setUpdateData({...updateData, [e.target.name]:e.target.value})
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
    }

    console.log(updateData);

  return (
    <div>
      <h2 className="my-2">Edit the data</h2>
        <form className="w-50 mx-auto my-5" 
        onSubmit={handleUpdate}
        >
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" name="name" className="form-control" 
    onChange={newData}
    value={updateData && updateData.name}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" name="email" className="form-control" 
    onChange={newData}
    value={updateData && updateData.email}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Age</label>
    <input type="text" name="age" className="form-control" 
    onChange={newData}
    value={updateData && updateData.age}
    />
  </div>
  <div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Male" 
  onChange={newData}
    checked={updateData && updateData.gender === "Male" }
  />
  <label className="form-check-label">
    Male
  </label>
</div>
<div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Female" 
  onChange={newData}
    checked={updateData && updateData.gender === "Female" }
  />
  <label className="form-check-label">
    Female
  </label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Update