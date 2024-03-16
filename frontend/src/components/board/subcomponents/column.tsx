import Task, { TTask } from "./task";
import "./column.css"
import { useDroppable } from "@dnd-kit/core";

export type TColumn = {
    id: number
    status: string
    tasks: TTask[]
}

export default function Column({ column }: { column: TColumn }) {
    const { isOver, setNodeRef: setDropNodeRef, active } = useDroppable({
        id: `column_${column.id}`,
        data: {
            status: column.id
        }
    })

    let { status, tasks } = column
    return (
        <div className={`column ${isOver && active && active.id != column.tasks[column.tasks.length - 1].id && "dragover"}`} ref={setDropNodeRef}>
            <h4 className="status">{status + `(${tasks.length})`}</h4>
            <div className="tasks">
                {tasks.map((t) => <Task task={t} key={t.id} />)}
            </div>
        </div>
    )
}
