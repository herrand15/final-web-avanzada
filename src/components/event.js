import React, {useState} from "react";
import "./weather.css";
import DisplayEvent from "./displayEvent"

function Event() {

    

    async function eventData(e){
        e.preventDefault();
        if(form.city == ""){
            alert("Favor completar campo(s) de búsqueda");
        }
        else{
            const data = await fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => res.json())
            .then((data) => data);

            setEvent({
                data: data
            });
            console.log(data);
        }
       
    }

    const [form, setForm] = useState({
        city:"",
        eventName:""
    })

    const [event, setEvent] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "city"){
            setForm({...form, city:value})
        }
        if(name == "eventName"){
            setForm({...form, eventName:value})
        }
        console.log(form.city, form.eventName);
    };


    return (
        <div className = "weather">
            <span className = "title"> Event Finder</span>
            <br />

            <form>
                <input type="text" name="city" placeholder="city" onChange={(e) => handleChange(e)} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="event name" placeholder="event name" onChange={(e) => handleChange(e)} /> 
                <button className = "getevent" onClick={(e) => eventData(e)}>Search</button>
            </form>
            {
                event.data != undefined ?

                <div>
                    <DisplayEvent data={event.data} />
                </div>
                : null
            }
        </div>
    )

}

export default Event;
