import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Media.css'

function Media(props) {

    let media = props.media

    const handelLike = () => {
        axios.post('http://localhost:7070/Media/Favorites', {
            params: {
                title: media.title,
                href: media.href,
                description:media.description,
                nasa_id:media.nasa_id,
                date_created:media.date_created
            }
        })
        .catch(function(error){
            alert('Error plz try again!!')
        })
    }

    return (
        <Fragment>
            <div className='card col-lg-4 col-md-4 col-sm-6 col-xs-12 deal text-center'>
                <p className='title'>{media.title}</p>
                <Link to="/as"><img src={media.href} className="imageCard" alt="..." /></Link>
                <div className="cardfotter text-center  margin: 20px">
                    <button onClick={handelLike} type="button" className="btn btn-floating outline-dark">
                        <i className="bi bi-hand-thumbs-up-fill"></i>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Media

