import React from "react";

const TodoList = ({
    todoList,
    handleEditTodo,
    handleSaveTodo,
    inputValue,
    setInputValue,
    handleDeleteTodo,
    inputRefs,
}) => {
    return (
        <div className="items">
            {todoList.map((item, index) => (
                <div key={item.id}>
                    <div className="fragment"></div>
                    <input
                        ref={(el) => inputRefs.current[index] = el}  // 각 input에 ref 설정
                        className="todo form-control"
                        value={item.isEdit ? inputValue : item.todo} // 수정 모드일 때 inputValue 사용
                        onChange={(e) => setInputValue(e.target.value)} // 입력값 변경
                        readOnly={!item.isEdit} // 수정 모드일 때만 입력 가능
                        style={{
                            color: item.isEdit ? "red" : "black", // 수정 모드일 때 색상 변경
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSaveTodo(item.id); // Enter키로 수정 저장
                            }
                        }}
                    />
                    <div className="edit">
                        <a href="#!" onClick={() => handleEditTodo(item.id)}>
                            <span className="material-symbols-outlined" style={{ color: item.isEdit ? "red" : "black" }}>
                                edit
                            </span>
                        </a>
                        <a href="#!" onClick={() => handleDeleteTodo(item.id)}>
                            <span className="material-symbols-outlined" style={{ color: "black" }}>delete</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
