import { useLayoutEffect, useState } from "react";
import "./App.css";

import SideBar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Board from "./components/board/board";
import { TColumn } from "./components/board/subcomponents/column";

var boards = [
    {
        id: 1,
        name: "Marketing Plan",
    },
    {
        id: 2,
        name: "Platform Launch",
    },
    {
        id: 3,
        name: "Roadmap",
    },
];

var columns: TColumn[] = [
    {
        id: 1,
        status: "Backlog",
        tasks: [
            {
                id: 1,
                name: "test",
                status: 1,
                subtasks: [
                    {
                        id: 1,
                        name: "test subtask",
                        checked: false
                    },
                    {
                        id: 2,
                        name: "test 2 subtask",
                        checked: true
                    }
                ]
            },
            {
                id: 2,
                name: "test2",
                status: 1,
                subtasks: [
                    {
                        id: 1,
                        name: "test subtask",
                        checked: false
                    },
                    {
                        id: 2,
                        name: "test 2 subtask",
                        checked: true
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        status: "Todo",
        tasks: [
            {
                id: 3,
                name: "test",
                status: 2,
                subtasks: [
                    {
                        id: 1,
                        name: "test subtask",
                        checked: false
                    },
                    {
                        id: 2,
                        name: "test 2 subtask",
                        checked: true
                    }
                ]
            },
            {
                id: 4,
                name: "test2",
                status: 2,
                subtasks: [
                    {
                        id: 1,
                        name: "test subtask",
                        checked: false
                    },
                    {
                        id: 2,
                        name: "test 2 subtask",
                        checked: true
                    }
                ]
            },
        ]
    }
]

function App() {
    const [darkMode, toggleDarkMode] = useState(true);
    const [activeBoard, setActiveBoard] = useState<number | undefined>(1);
    const [title, setTitle] = useState<string>("");

    useLayoutEffect(() => {
        for (let i = 0; i < boards.length; i++) {
            if (activeBoard === boards[i].id) {
                setTitle(boards[i].name)
                break
            }
        }
    }, [activeBoard])

    return (
        <div id="app" className={darkMode ? "dark" : "light"}>
            <SideBar
                boards={boards}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                activeBoard={activeBoard}
                setActiveBoard={setActiveBoard}
            />
            <div className="content">
                <Header title={title} />
                <Board columns={columns} />
            </div>
        </div>
    );
}

export default App;
