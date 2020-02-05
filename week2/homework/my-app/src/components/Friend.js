import React, { useState } from 'react'
import FriendProfile from '../components/FriendProfile';
import Button from '../components/Button';

export default function Friend() {
    const [friend, setFriend] = useState({});

     function getFriend() {
        const URL = 'https://www.randomuser.me/api?results=1';
            fetch(URL)
                .then(res => res.json())
                .then(data => setFriend(data.results[0]))
                .catch(error => console.error(error));
    }

    return (
        <div>

            {Object.entries(friend).length ? <FriendProfile friend={friend}/> : ''}
            <Button getFriend = {getFriend} />
        </div>
    )
}
