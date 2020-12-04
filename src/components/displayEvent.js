import React from "react"

function DisplayEvent(props){
    //console.log("props", props);
    const {data} = props;
    return (
        <div className="displayweather">
            <div className="maincard">
                <span className="cardtitle">
                    Title: {data.title}.
                </span>
                <br/>
                <img src={data.thumbnailUrl} />
                
                <br/>
                <a href={data.url}>Link: {data.url} </a>
                
            </div>
        </div>
    )
}
export default DisplayEvent;