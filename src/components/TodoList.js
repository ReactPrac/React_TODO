import React from "react";

const TodoList = ({
    todoList,
}) => {
    return (
        <div className="items">
            {todoList.map((item) => (
                <div key={item.id} className="item">
                    <span>{item.todo}</span>
                </div>
            ))}
        </div>
    );
};

export default TodoList;