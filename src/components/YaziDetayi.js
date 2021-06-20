import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';



const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    useEffect(() => {
        axios.get(` https://blog-yazi-yorum.herokuapp.com/posts/${id}`)
            .then(response => {
                setYaziDetayi(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <h2 className="ui header text-center ">{yaziDetayi.title}</h2>
            <p className=" text-center text-muted">{moment().subtract(yaziDetayi.created_at).calendar() }</p>
            <p className=" text-center mt-4 p-4 lead">{yaziDetayi.content}</p>
        </>
    )
}

export default YaziDetayi;