import React, {useState,useEffect} from 'react'
import Axios from 'axios'

export const useImageAPI=(image)=>{


    const [imageimgAlt, setimageimgAlt] = useState("")
    useEffect(() => {
        Axios.get(`https://pixabay.com/api/?key=14218850-657ec90f61321ccb7cbf65a74&q=${image}+img&image_type=photo`)
        .then(res=> console.log("imageimgAlt:",res))
        .then(res => setimageimgAlt(res))
            .catch(err => console.error(err))
    }, [image])


const[img,setimg]=useState("")
useEffect(()=>{
    Axios.get(
        `https://api.unsplash.com/search/photos?query=${image}`)
        .then(response=>setimg(response.data["0"].img))
        .then(response=>console.log("img:",img,"response:",response))

        .catch(error=>console.error(error))

        
},[image])

    return[img,imageimgAlt]
}
