import React from 'react'

export default function FriendProfile({friend}) {
console.log(friend.name)
    return (
        <div>
             { <ul style = {{listStyleType: 'none', padding: '10px'}}>
                <li>NAME: {friend.name.first} {friend.name.last}</li>
                <li>ADRESS: {friend.location.street.name} {friend.location.street.number}</li>
                <li>COUNTRY: {friend.location.country}</li>
                <li>E-MAIL: {friend.email}</li>
                <li>PHONE: {friend.phone}</li>
           </ul> }
        </div>
    )
}
