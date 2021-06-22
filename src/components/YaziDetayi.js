import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';
import YaziYorumlari from "./YaziYorumlari";
import { api } from "../api";
import {Link} from "react-router-dom";
import SilModal from "./SilModal";


const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);

    const handleCommentSubmit = (e, yorum) => {
        e.preventDefault();
        api().post(`/posts/${id}/comments`,
            yorum
        ).then((response) => {
            setYorumlar([...yorumlar, response.data]);

        });
    };

    useEffect(() => {
        axios.all(
            [
                api().get(`/posts/${id}`),
                api().get(`/posts/${id}/comments`)
            ]
        ).then((responses) => {
            setYaziDetayi(responses[0].data);
            setYorumlar(responses[1].data)
        }).catch((err) => console.log(err))

    },[])
    return (
        <>
            <h1 className=" text-center ui header  text-lead">{yaziDetayi.title}</h1>
            <p className="  text-muted text-center">{moment().subtract(yaziDetayi.created_at).calendar()}</p>
            
            <p className="  mb-4 text-lead text-center">{yaziDetayi.content}</p>
            <div className="ui buttons d-flex mb-5">
                <Link to={`/posts/${yaziDetayi.id}/edit`}  className="ui  primary inverted   button">Duzenle</Link>
                <SilModal yazi={yaziDetayi} push={props.history.push}/>
            </div>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />


        </>
    )
}

export default YaziDetayi;