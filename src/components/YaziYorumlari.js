import YorumFormu from "./YorumFormu";
import YorumListesi from "./YorumListesi";


const YaziYorumlari = (props) => {
    
    return (
        <>
            <YorumListesi yorumlar={props.yorumlar} />
            <YorumFormu handleSubmit={props.handleSubmit}/>
        </>
    )
}

export default YaziYorumlari;