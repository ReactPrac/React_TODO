import React, { useState, useRef } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import CalendarComponent from "./Calendar";

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [idx, setIdx] = useState(0);
    const [inputValue, setInputValue] = useState("");
    
    // input에 대한 ref 생성
    const inputRefs = useRef([]);

    const [selectedDate, setSelectedDate] = useState(new Date());

    // 할 일 추가
    const handleAddTodo = (e) => {
        if (e.key === 'Enter' && isValid(inputValue)) {
            const newTodo = {
                id: idx + 1,
                todo: inputValue,
                date: new Date(),
                isEdit: false,
                isDone: false,
            };
            setTodoList([...todoList, newTodo].sort((a, b) => b.id - a.id));
            setIdx(idx + 1);
            setInputValue("");
        }
    };

    // 수정
    const handleEditTodo = (id) => {
        const updatedList = todoList.map((item) => {
            if (item.id === id) {
                setInputValue(item.todo); // 기존 할 일 내용으로 inputValue 설정
                return { ...item, isEdit: true }; // 수정 모드로 전환
            }
            return item;
        });
        setTodoList(updatedList);

        // 수정 항목 자동 포커스
        setTimeout(() => {
            const index = todoList.findIndex(item => item.id === id);
            if (inputRefs.current[index]) {
                inputRefs.current[index].focus();
            }
        }, 0);  // 렌더링 이후 포커스 적용
    };

    // 수정 완료 후 저장
    const handleSaveTodo = (id) => {
        const updatedList = todoList.map((item) => {
            if (item.id === id) {
                return { ...item, todo: inputValue, isEdit: false };
            }
            return item;
        });
        setTodoList(updatedList);
        setInputValue(""); // 입력 필드 초기화

        // 포커스 해제
        const index = todoList.findIndex(item => item.id === id);
        if (inputRefs.current[index]) {
            inputRefs.current[index].blur();
        }
    };

    // 삭제
    const handleDeleteTodo = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id)); // 선택된 ID 제외
    };

    // 완료 여부
    const handleDoneTodo = (id) => {
        setTodoList(
            todoList.map((item) =>
                item.id === id ? {...item, isDone: !item.isDone} : item
            )
        );
    };

    // 유효성
    const isValid = (todo) => todo !== "";

    // 캘린더
    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Selected date:", date);
    };

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
                        handleEditTodo={handleEditTodo}
                        handleSaveTodo={handleSaveTodo}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        handleDeleteTodo={handleDeleteTodo}
                        inputRefs={inputRefs}
                        handleDoneTodo={handleDoneTodo}
                    />
                </section>
                <section className="layout-360">
                    <CalendarComponent 
                        handleDateChange={handleDateChange}
                        selectedDate={selectedDate}
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
