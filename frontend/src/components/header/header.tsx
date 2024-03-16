import ellipsis from "../../assets/icon-vertical-ellipsis.svg"
import "./header.css"

export default function Header({ title }: { title: string }) {
    return (
        <div id="header">
            <div className="title">
                <h2>{title}</h2>
            </div>

            <div className="buttons">
                <button className="add_new">
                    + Add New Task
                </button>
                <img src={ellipsis} alt="options" />
            </div>

        </div>
    )
}

