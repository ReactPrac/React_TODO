import React, {useState} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList"

function Todo(){
    // 할 일 목록 저장
    const [todoList, setTodoList] = useState([]);

    // 생성 ID
    const [idx, setIdx] = useState(0);
    
    // 입력값 저장
    const [inputValue, setInputValue] = useState("");

    // 할 일 추가
    const handleAddTodo = (e) => {
        // Enter 키 입력 & 유효성 충족시 실행
        if(e.keyCode === 13 && isValid(inputValue)){
            const newTodo = {
                id : idx + 1,           // 생성 ID
                todo: inputValue,       // 할 일 내용
                date: new Date(),       // 생성 날짜
                isEdit: false,          // 수정 모드 여부
                isDelete: false,        // 삭제 여부
                isDone: false,          // 완료 여부
            };
            todoList.push(newTodo);     // 새로운 할 일 목록에 추가
            // 최신 할 일 순서로 정렬
            setTodoList(todoList.sort((a, b) => b.id - a.id).map(item => item));
            setIdx(idx + 1)             // ID 업데이트
            setInputValue("");          // 입력 필드 초기화
        }
    }

    // 유효성 검사
    const isValid = (todo) => todo !== "";

    return (
        <div className="wrapper">
            <header>
                <div className="top-header"></div>
                <nav className="layout-360">
                    <h2>🎈 MY TO-DO LIST 🎈</h2>
                </nav>
            </header>
            <main>
                <section className="layout-360">
                    <TodoList 
                        todoList={todoList}
                    />
                </section>
            </main>
            <AddTodo 
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAddTodo={handleAddTodo}
            />
        </div>
    );
}

export default Todo;