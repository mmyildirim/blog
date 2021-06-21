import { useState } from "react"

const yorumBaslangıc = {display_name: "", body: ""}

const YorumFormu = (props) => {
    const [yorum, setYorum] = useState(yorumBaslangıc)
    // setYorum(yorumBaslangıc);
    const handleOnChange = event => {
        setYorum({ ...yorum, [event.target.name]: event.target.value })
    }
    return (
        <>
            <h2 className="ui header display-6">Yorum Yap</h2>
            <form className="ui form " onSubmit={(e)=>{
                props.handleSubmit(e,yorum)
                setYorum(yorumBaslangıc)
                }}>
                <div className="ui small icon input">
                    <input type="text" placeholder="Adınız" name="display_name" onChange={handleOnChange} value={yorum.display_name} />
                </div>
                <textarea className="mt-2" placeholder="Yorumunuz" rows="3" name="body" onChange={handleOnChange} value={yorum.body}></textarea>
                <button className="ui blue button mt-2 d-block" type="submit">Yorumu Gönder</button>
            </form>

        </>
    )
}

export default YorumFormu;