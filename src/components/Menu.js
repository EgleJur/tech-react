import { useEffect, useState } from "react"
import './Menu.css'

export function Menu(props) {
    const notifyActiveChange = (state) => {
        props.onChange(state);
    }

    useEffect(()=>{
        if (props.active==="List") {
            document.getElementById('link-list').style.fontWeight = 'bold';
            document.getElementById('link-create').style.fontWeight = '400';
        } else if(props.active==="Create") {
            document.getElementById('link-list').style.fontWeight = '400';
            document.getElementById('link-create').style.fontWeight = 'bold';
        }else{
            document.getElementById('link-list').style.fontWeight = '400';
            document.getElementById('link-create').style.fontWeight = '400';
        }
    });

    return (
        <div>
            <a id='link-list' href='#'
                onClick={(e) => notifyActiveChange("List")}>Animal List</a>
            &nbsp;|&nbsp;
            <a id='link-create' href='#'
                onClick={(e) => notifyActiveChange("Create")}>Create new animal</a>

        </div>
    );
}