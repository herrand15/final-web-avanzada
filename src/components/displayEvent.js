import React from "react"

function DisplayEvent(props){
    //console.log("props", props);
    const {data} = props;
    return (
        <div className="displayevent">
            <div className="maincard">
                <span className="cardtitle">
                    {/*data.name*/}, {/*data.sys.country*/}. Weather
                </span>
                <span className="cardsubtitle">
                    As of {new Date().toLocaleTimeString()}
                </span>
                <h1>
                    {/*Math.floor(data.main.temp - 273.15)*/}
                    <sup>o</sup>
                </h1>
                <span className="weather-main">{/*data.event[0].main*/}</span>
            </div>
        </div>
    )
}
export default DisplayEvent;