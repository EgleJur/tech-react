import { useState, useEffect } from "react";


export function AnimalListPage(props) {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('api/v1/animals')
            .then(response => response.json())
            .then(jsonResponse => setAnimals(jsonResponse));
    }, []);



    return (<div>
        <h2>Animals</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Vardas</th>
                    <th>Tipas</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
        </table>
        <tbody>
{animals.map(animal =>(
    <tr key={animal.id}>
        <td><a href="#" onClick={()=>props.onChange(animal.id)}>{animal.id}</a></td>
        <td>{animal.name}</td>
        <td>{animal.type}</td>
        <td>{animal.description}</td>
    </tr>
))}
        </tbody>
    </div>
    )
}