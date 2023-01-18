
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function UpdateAnimalPage() {
    const params = useParams();
    const [animal, setAnimal] = useState({
        name: '',
        type: '',
        description: '',
    });
    const JSON_HEADERS = {
        "Content-Type": "application/json"
    }
    const updateAnimal = ()=>{
        fetch('/api/v1/animals/' + params.id, {
            method: 'PATCH',
            headers: JSON_HEADERS,
            body: JSON.stringify(animal)
        })
           
    }
    
    useEffect(() => {
        fetch('/api/v1/animals/' + params.id)
            .then(response => response.json())
            .then(setAnimal);
    }, []);

const updateProperty = (property, event) => {
    setAnimal({
        ...animal,
        [property]: event.target.value
    });
}

    return (<div>

        <h2>Update animal</h2>
        <fieldset>
            <legend>{params.id}</legend>
            <label>Name</label>
            <input value={animal.name} onChange={(e)=>updateProperty ('name', e)}/>

            <label>Type</label>
          
            <select value={animal.type}
                    onChange={(e) => updateProperty ('type', e)}>
                        <option value= "TIGER">Tiger </option>
                        <option value= "LION">Lion </option>
                        <option value= "GIRAFFE">Giraffe </option>
                        <option value= "PARROT">Parrot </option>
                        <option value= "RABBIT">Rabbit </option>
                    </select>

            <label>Description</label>
            <input value={animal.description} onChange={(e)=>updateProperty ('description', e)}/>

            <button onClick={updateAnimal}>Update</button>
        </fieldset>

    </div>);

}
 