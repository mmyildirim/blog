
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { api } from "../api";
import { Link } from "react-router-dom";

const YaziFormu = (props) => {
    const [yazi, setYazi] = useState({ title: "", content: "" });
    const [hata, setHata] = useState("");
    const onInputChange = (event) => {
        setYazi({ ...yazi, [event.target.name]: event.target.value })
        setHata("");
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(props.yazi.title){
            api().put(`/posts/${props.match.params.id}`,yazi)
            .then((response)=>{
                props.history.push(`/posts/${props.match.params.id}`)
            }).catch(err=>setHata("Yazi Basligi ve Yaziniz Kismi Bos Birakilamaz!"))

        }else{

            api().post('/posts', yazi)
            .then((response) => props.history.push("/"))
            .catch(err=>setHata("Yazi Basligi ve Yaziniz Kismi Bos Birakilamaz!"))
        }
        
    }
    useEffect(()=>{
        if(props.yazi?.title&& props.yazi?.content) setYazi(props.yazi)
    },[props.yazi]);
    return (
        <>
            {hata && (
                <div className="ui negative message">
                    <div className="header text-center">Uyarı!</div>
                    <p className="text-center text-load">{hata}</p>
                </div>
            )}
            <form className="ui form">
                <div className="field">
                    <input type="text" value={yazi.title} name="title" onChange={onInputChange} placeholder="Yazinizin Baslıgını Giriniz." />
                </div>
                <div className="field">
                    <textarea rows="3" value={yazi.content} name="content" onChange={onInputChange} placeholder="Yazinizi Giriniz."></textarea>
                </div>
                <button className="btn btn-outline-primary  text-load" onClick={onFormSubmit}>Yaziyi Ekle</button>
                <Link to={`/posts/${props.match.params.id}`} className="btn btn-outline-secondary mx-2 ">İptal Et</Link>
            </form>
        </>
    )


}

export default withRouter(YaziFormu);