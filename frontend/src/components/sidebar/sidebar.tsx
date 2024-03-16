import "./sidebar.css"
import Kanban from "./../../assets/kanban.tsx"
import sun from "./../../assets/icon-light-theme.svg"
import moon from "./../../assets/icon-dark-theme.svg"
import crossedEye from "./../../assets/icon-hide-sidebar.svg"
import eye from "./../../assets/icon-show-sidebar.svg"
import { useLayoutEffect, useState } from "react"


function SideBar({ darkMode, toggleDarkMode, boards, activeBoard, setActiveBoard }: {
    darkMode: boolean,
    toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    boards: { name: string, id: number }[],
    activeBoard: number | undefined
    setActiveBoard: React.Dispatch<React.SetStateAction<number | undefined>>,
}) {

    const [highlightPosition, setHighlightPosition] = useState<number>(0)
    const [hidden, toggleHidden] = useState(false)

    function handleDarkMode() {
        toggleDarkMode(!darkMode)
    }

    function calcHighlightPosition() {
        let index: number = 0
        for (let i = 0; i < boards.length; i++) {
            if (boards[i].id === activeBoard) {
                index = i
            }
        }
        if (index) { return (index / boards.length) * 100 }
        return index
    }

    function handleKanbanSelect(id: number) {
        setActiveBoard(id)
    }

    function minifyTitle(title: string) {
        let words = title.split(" ")
        let initials = ""

        words.forEach((w, i) => {
            if (i < 2) {
                initials += w[0]
            }
        })

        return initials
    }

    useLayoutEffect(function() {
        
    }, [hidden])

    useLayoutEffect(function() {
        setHighlightPosition(calcHighlightPosition())
    }, [boards, activeBoard])

    return (
        <div id="sidebar" className={hidden ? "hidden" : undefined}>

            <div className="container">
                <div className="title">
                    <div style={{ backgroundColor: '#655FCB' }}></div>
                    <div style={{ backgroundColor: '#655FCB', opacity: 0.7 }}></div>
                    <div style={{ backgroundColor: '#655FCB', opacity: 0.5 }}></div>
                    <h1>kanban</h1>
                </div>
                <h4 className="all_boards">{hidden ? " " : <>ALL  BOARDS ({boards.length})</>}</h4>
                <ul>
                    {boards.map((board) => (
                        <li key={board.id} className={activeBoard === board.id ? "active" : ""} onClick={() => handleKanbanSelect(board.id)}>
                            {!hidden && <Kanban color={activeBoard === board.id ? "#E2E2E2" : undefined} /> }{hidden ? minifyTitle(board.name) : board.name}
                        </li>
                    ))}
                    <div className="highlight" style={(activeBoard && boards.length) ? { top: highlightPosition.toString() + "%" } : { display: "none" }}></div>
                </ul>
                <p className="create_new">
                    {hidden 
                        ? "+"
                        : <><Kanban color="#645FC6" />Create New Board</>
                    }
                </p>
            </div>

            <div className="bottom_stuff">
                <div className="light_switch">
                    <img src={sun} alt="light mode" />
                    <label className="switch">
                        <input type="checkbox" checked={darkMode} onChange={handleDarkMode} />
                        <span className="slider"></span>
                    </label>
                    <img src={moon} alt="dark mode" />
                </div>
                <div className="hide" onClick={()=>toggleHidden(!hidden)}>
                    {hidden 
                        ? <img src={eye} alt="show sidebar" />
                        : <><img src={crossedEye} alt="hide sidebar" /> Hide Sidebar</>
                    }
                </div>
            </div>

        </div>
    )
}

export default SideBar

