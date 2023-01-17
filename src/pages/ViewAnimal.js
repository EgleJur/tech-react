import { useEffect, useState } from "react";
import { AnimalRoomMover } from "../components/AnimalRoomMover";


export function ViewAnimal(props) {
    const [animal, setAnimal] = useState({});

useEffect(()=>{
    fetch('api/v1/animals/' + props.id)
    .then((response)=> response.json())
    .then(setAnimal)
}, [props.id]);

    return(<div>
            <div><b>ID</b></div>
            <div>{animal.id}</div>

            <div><b>Name</b></div>
            <div>{animal.name}</div>

            <div><b>Type</b></div>
            <div>{animal.type}</div>

            <div><b>Description</b></div>
            <div>{animal.description}</div>

            <div><b>Room</b></div>
            <div>{animal.room && animal.room.name}</div>

            <AnimalRoomMover id={props.id} onAnimalChange={setAnimal}/>
        </div>);


}