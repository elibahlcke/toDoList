import React, { Fragment } from 'react'

const Checkbox = props => {
    const {
        onChange,
        data: { id, description, done}
    } = props;

    return (
        <Fragment>
            <label  className="todo new-item">
                <input 
                    type="checkbox" 
                    className="todo__state"
                    name={id}
                    defaultChecked={done}
                    onChange={onChange} 
                />
                <div className="todo__text">
                    {description}
                </div>

            </label>
        </Fragment>
        
    )
}

export default Checkbox
