import React from 'react'

const PersonCard = props => {
    const { firstName, lastName, age, hairColor } = props;
    return (
        <div className='boxCard'>
            <h1>{lastName}, {firstName}</h1>
            <p>Edad: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard