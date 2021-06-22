import { useEffect, useState } from "react"
import { api } from "../api";
import YaziFormu from "./YaziFormu"

const YaziDuzenle = (props) => {
    const [yazi, setYazi] = useState({});
    const { id } = props.match.params;
    useEffect(() => {
        api().get(`/posts/${id}`)
        .then((response)=>{
            setYazi({title:response.data.title,content:response.data.content});
        })
    },[]);

    return (
        <div className="container">
            <h1 className="ui header display-6 mt-2 text-lead">Yazı Duzenleme Formu</h1>
            <YaziFormu yazi={yazi} />
        </div>
    )
}

export default YaziDuzenle;