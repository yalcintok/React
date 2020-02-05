import React, { useState } from 'react';
import Button2 from '../components/Button2';
import DogPhoto from '../components/DogPhoto'

function DogGallery () {
    const [dogPhotos, setDogPhotos] = useState([]);
    function getDogPhoto() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setDogPhotos([...dogPhotos,data.message]))
            .catch(err => alert(err));
    }
    return (
        <div>
        <Button2 getDogPhoto = {getDogPhoto}/>
        {dogPhotos.map(url => <DogPhoto url={url}/>)}
        </div>
    )
};

export default DogGallery;