import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';
import YaziYorumlari from "./YaziYorumlari";



const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
 
    const handleCommentSubmit = (e,yorum) => {
        e.preventDefault();
        axios.post(`https://blog-yazi-yorum.herokuapp.com/posts/${id}/comments`,
            yorum
        ).then((response) => {
            setYorumlar([...yorumlar, response.data]);
           
        });
    };
  
    useEffect(() => {
        axios.all(
            [
                axios.get(` https://blog-yazi-yorum.herokuapp.com/posts/${id}`),
                axios.get(`https://blog-yazi-yorum.herokuapp.com/posts/${id}/comments`)
            ]
        ).then((responses) => {
            setYaziDetayi(responses[0].data);
            setYorumlar(responses[1].data)
        }).catch((err) => console.log(err))

    })
    return (
        <>
            <h1 className="ui header text-center ">{yaziDetayi.title}</h1>
            <p className=" text-center text-muted">{moment().subtract(yaziDetayi.created_at).calendar()}</p>
            <p className=" text-center mt-4 p-4 lead">{yaziDetayi.content}</p>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit= {handleCommentSubmit}/>
           
           
        </>
    )
}

export default YaziDetayi;