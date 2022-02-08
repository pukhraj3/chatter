import React from "react";
import "./App.css";
import {useState} from "react";
import { FiEdit } from 'react-icons/fi'

function NamePicker(props) {
        const [editName, setEditName] = useState(false)
        const [name, setName] = useState('')

    function edit() {
        props.edit(name)
        setEditName(false)
    }

    if (editName) {
    return (

        <div className="username">
            <input 
                className="username-input" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                onKeyPress={(e) => {
                    if(e.key==="Enter") edit()
                }}
            />
            <button className="username" onClick={edit}>OK</button>
        </div>
    )
    }

    else {
        return (
            <div className="username">
                <div>{name}</div> set username: 
                <button className="editUser" onClick={()=>setEditName(true)}>
                    <FiEdit/>
                </button>

            </div>
        )
    }
}

export default NamePicker