import React from 'react'

export default function ListView(props) {
    return (
        <div>
            {
                props.formList.map((form, index) => <div key={index}>
                    <p>{form.name}</p>
                    <p>{form.phone}</p>
                    <p>{form.gender}</p>
                    <p>{form.age}</p>
                    <p>{form.date}</p>
                    <p>{form.doctor}</p>
                    <p>{form.problem}</p>
                </div>)
            }
        </div>
    )
}
