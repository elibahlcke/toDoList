import React, { useState } from 'react';
import FormToDo from './FormToDo';
import Tasklist from './Tasklist'

const Container = () => {
    const [list, setList] = useState([]);
    const handleAddItem = addItem => {
        setList([...list, addItem])
    };

    return (
        <div>
            <FormToDo handleAddItem={handleAddItem} />
            <Tasklist list={list} setList={setList} />
        </div>
    )
}

export default Container
