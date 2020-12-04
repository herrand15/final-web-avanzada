import React, {useState} from "react";
import "./weather.css";
import DisplayEvent from "./displayEvent"

function Event() {

    

    async function eventData(e){
        e.preventDefault();
        if(form.eventName == ""){
            alert("Favor completar campo de búsqueda");
        }
        else{
            const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${form.eventName}`)
            .then((res) => res.json())
            .then((data) => data);

            setEvent({
                data: data
            });
            console.log(data);
        }
       
    }

    const [form, setForm] = useState({
        eventName:null
    })

    const [event, setEvent] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

    
        if(name == "eventName"){
            setForm({...form, eventName:value})
        }
        console.log(form.eventName);
    };


    return (
        <div className = "weather">
            <span className = "title"> Event Finder</span>
            <br />

            <form>
                <input type="number" name="eventName" placeholder="id" onChange={(e) => handleChange(e)} /> 
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
