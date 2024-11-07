import React from "react";

const AddTodo = ({inputValue, setInputValue, handleAddTodo}) => (
    <footer>
        <div>
            <span></span>
            <input type="text" placeholder="할 일을 입력하세요" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddTodo}/>
        </div>
    </footer>
);

export default AddTodo;