import React, { useState} from 'react'
import '../styles/form.scss'

const FormToDo = props => {
    const [description, setDescription] = useState("");
    const { handleAddItem } = props;
    const handleSubmit = e => {
        e.preventDefault();

        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
            
        });
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button 
                        className="button violet"
                        disabled={description ? "" : "disabled"}
                     >Add</button>   
                </div>
            </div>

        </form>
        
    )
}

export default FormToDo
