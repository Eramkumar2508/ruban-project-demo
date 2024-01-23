import React from 'react'
import { useState, useEffect } from 'react';

const ImagesList = () => {

    const [images, setImages] = useState();

    const imagesFile = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => { return response.json() })
            .then(data => { setImages(data) })
    }
    useEffect(() => {
        imagesFile()
    }, [])

    return (
        <div className='pl-10'>
            {images?.map(data =>
                <ul className='row'>
                    <div className='col pl-2 py-2' style={{position:"relative"}}>
                        <img src={"https://via.placeholder.com/150/92c952"} alt="#"
                        className='w-24 h-24' />
                    </div>
                    <br/>
                    <div className='col py-2' style={{position:"absolute",left:"130px"}}>
                        <li>Id : {data.id}</li>
                        <li>Title : {data.title}</li>
                        <li>Url : {data.url}</li>
                    </div>
                </ul>
            )}
        </div>
    )
}

export default ImagesList