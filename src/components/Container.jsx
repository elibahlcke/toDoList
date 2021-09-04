import React, { useState } from 'react';
import FormToDo from './FormToDo';
import Tasklist from './Tasklist';
import '../styles/container.scss'


const Container = () => {
    const [list, setList] = useState([]);
    const handleAddItem = addItem => {
        setList([...list, addItem])
    };

    return (
        <div className="container">
            <FormToDo handleAddItem={handleAddItem} />
            <Tasklist list={list} setList={setList} />
        </div>
    )
}

export default Container
