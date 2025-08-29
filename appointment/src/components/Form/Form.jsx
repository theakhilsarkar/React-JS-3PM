import React, { useState } from 'react'

import "./Form.css";
import ListView from '../ListView/ListView';

export default function Form() {
    const date = new Date();

    const [formList, setformList] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        gender: "Male",
        age: "",
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        doctor: "Dr. Magenta",
        problem: ""
    });

    const handleInputForm = (e) => {
        const { name, value } = e.target;
        const newData = {
            ...formData,
            [name]: value.trim()
        };
        setFormData(newData);
    }

    const submitForm = (e) => {
        e.preventDefault(); // 

        // const copy = { ...formData };

        // copy.name = copy.name.trim();
        // copy.age = copy.age.trim();
        // copy.phone = copy.phone.trim();
        // copy.problem = copy.problem.trim();

        // setFormData(copy);

        console.log(formData);

        if (formData.name != "" && formData.age != "" && formData.problem != "" && formData.phone != "") {
            console.log(formData);
            let arr = [...formList];
            arr.push(formData);
            setformList(arr);
        } else {
            alert("all field are required  !!");
        }
    }




    return (
        <div className='main'>
            <div className='form-box'>
                <h2>Book Your Appointment</h2>
                <form action="" className='form' onSubmit={submitForm}>

                    <label htmlFor="name">Full Name</label>
                    <input onChange={handleInputForm} type="text" name='name' className='form-control' />

                    <label htmlFor="phone">Contact No.</label>
                    <input onChange={handleInputForm} type="phone" name='phone' />

                    <label htmlFor="gender">Gender</label>
                    <div className='gender'>
                        <div>
                            <input onChange={handleInputForm} type="radio" name='gender' value={"Male"} />
                            <label >Male</label>
                        </div>
                        <div>
                            <input onChange={handleInputForm} type="radio" name='gender' value={"Female"} />
                            <label >Female</label>
                        </div>
                    </div>


                    <label htmlFor="age">Age</label>
                    <input onChange={handleInputForm} type="number" name='age' placeholder='Age' />

                    <label htmlFor="date">Appointment Date</label>
                    <input onChange={handleInputForm} type="date" name='date' />


                    <label htmlFor="doctor">Select Doctor</label>
                    <select onChange={handleInputForm} name="doctor" id="">
                        <option value="Dr. Magenta">Dr. Magenta</option>
                        <option value="Dr. Orange">Dr. Orange</option>
                        <option value="Dr. Blue">Dr. Blue</option>
                        <option value="Dr. Red">Dr. Red</option>
                    </select>

                    <label htmlFor="problem">Share your problem..</label>
                    <textarea onChange={handleInputForm} name="problem" id=""></textarea>

                    <button type='submit' className='btn btn-primary'>Book Appointment</button>
                </form>
            </div>

            <div className="detail-box">
                <ListView formList={formList} />
            </div>

        </div>
    )
}


// Form -
// monday -
// 