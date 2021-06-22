
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'
import { api } from '../api';

const YaziListesi = (props) => {
    const [yaziListesi, setYaziListesi] = useState([]);
    useEffect(() => {
        api().get("/posts")
            .then(response => setYaziListesi(response.data))
    }, [])
    return <List divided relaxed >{yaziListesi.map(yazi => {
        return (

            <List.Item key={yazi.id}>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <Link to={`/posts/${yazi.id}`} className="header">{yazi.title}</Link>
                    <List.Description >{moment().subtract(yazi.created_at).calendar() }</List.Description>
                </List.Content>
            </List.Item>

        )
    })}
    <div><a href="/yaziekle"className="btn btn-outline-primary d-block mt-3">Yeni Yazi Ekle</a></div>
    </List>
    
}
export default YaziListesi;