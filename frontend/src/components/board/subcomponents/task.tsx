import { useDraggable, useDroppable } from "@dnd-kit/core"
import "./task.css"

export type TTask = {
    id: number
    name: string
    status: number
    subtasks: TSubtask[]
}

export type TSubtask = {
    id: number
    name: string
    checked: boolean
}

export default function Task({ task }: { task: TTask }) {
    const { attributes, listeners, setNodeRef: setDragNodeRef, transform } = useDraggable({
        id: task.id,
        data: {
            status: task.status,
        }
    })
    const { isOver, setNodeRef: setDropNodeRef } = useDroppable({
        id: `task_${task.id}`,
        data: {
            status: task.status,
        }
    })
    const style: React.CSSProperties = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined
    }

    function handleClick() {
        console.log("egg")
    }

    return (
        <div
            className={`task ${isOver && !transform && "dragover"}`}
            ref={(el) => { setDragNodeRef(el); setDropNodeRef(el) }}
            style={style}
            onClick={handleClick}
            {...listeners}
            {...attributes}
        >
            <h4>{task.name}</h4>
            <p>1 of 3 subtasks</p>
        </div>
    )
}
