import React from "react";

const AddTodo = ({inputValue, setInputValue, handleAddTodo}) => (
    <footer>
        <div>
            <span></span>
            <input type="text" placeholder="해야할 일 입력" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddTodo}/>
        </div>
    </footer>
);

export default AddTodo;