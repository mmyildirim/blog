import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'

const YaziListesi = (props) => {
    const [yaziListesi, setYaziListesi] = useState([]);
    useEffect(() => {
        axios.get(" https://blog-yazi-yorum.herokuapp.com/posts")
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
    </List>
}
export default YaziListesi;