import React from "react";
import "./App.css";
import {useState} from "react";
import { FiEdit, FiSave } from 'react-icons/fi'

function NamePicker(props) {
        const [editName, setEditName] = useState(false)
        const [name, setName] = useState("")

    function edit() {
        props.edit(name)
        setEditName(false)
    }

    if (editName) {
    return (
        <div className="username">
            <input 
                className="text-input" 
                value={name} 
                onChange={(e) => setText(e.target.value)} 
                onKeyPress={(e) => {
                    if(e.key==="Enter") edit()
                }}
            />
            <button className="username" onClick={edit}>OK</button>
        </div>
    )
    }

    if (!editName) {
        return (
            <div className="username">
                <FiUser/>
                <div>{name}</div>
                <button className="editUser" onClick={()=>setEditName(true)}>
                    <fiEdit />
                </button>
            </div>
        )
    }
}

export default NamePicker