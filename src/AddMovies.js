import React from 'react'
import { useState } from 'react'
const AddMovies = () => {
   const [name,setName]=useState('new movie')
   const [category,setCategory]=useState('')
   const [stars,setStars]=useState(0)
   const [desc,setDesc]=useState('')
   const [cover,setCover]=useState('')
   const [year,setYear]=useState(0)
   const [quality,setQuality]=useState('')
   const [link,setLink]=useState('')
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Movie name:</label>
                <input type='text' placeholder= 'Add movie name'
                value={name} onChange={(e)=> setName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Category:</label>
                <input type='text' placeholder= 'Category'
                value={category} onChange={(e)=> setCategory(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Stars:</label>
                <input type={Number} placeholder= 'Stars'
                value={stars} onChange={(e)=> setStars(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie description:</label>
                <input type='text' placeholder= 'Movie description'
                value={desc} onChange={(e)=> setDesc(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie cover:</label>
                <input type='text' placeholder= 'Plaste a link of photo cover'
                value={cover} onChange={(e)=> setCover(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Year:</label>
                <input type={Number} placeholder= 'Year'
                value={year} onChange={(e)=> setYear(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie quality:</label>
                <input type='text' placeholder= 'Movie quality'
                value={quality} onChange={(e)=> setQuality(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie link:</label>
                <input type='text' placeholder= 'Plaste the link of movie'
                value={link} onChange={(e)=> setLink(e.target.value)}></input>
            </div>
            <input type='submit' value='save movie' />

        </form>
    )
}

export default AddMovies
