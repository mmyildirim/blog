import moment from 'moment';
import React from 'react';

const YorumListesi = (props) => {
    return (
        <React.Fragment>
       
            {props.yorumlar.filter(yorum=>yorum.display_name.length!==1).map(yorum => {
                return (
                        
                    <div className="ui relaxed list" key={yorum.id}>
                        <div className="item">
                            <img className="ui avatar image " alt="avatar"src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" />
                            <div className="content">
                                <p className="header text-primary">{yorum.display_name}</p>
                                <div className="description text-load">{yorum.body}<span className="mt-3 text-muted d-block">{moment().startOf(yorum.created_at).fromNow()}</span></div>
                            </div>
                        </div>
                    </div>)
            })}
        </React.Fragment>
    )
}

export default YorumListesi;