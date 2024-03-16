import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import Column, { TColumn } from "./subcomponents/column";
import _ from "lodash"
import "./board.css"
import { useState } from "react";

export default function Board({ columns }: { columns: TColumn[] }) {
    const [loading, setLoading] = useState(false)

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    )

    function handleDragEnd(e: DragEndEvent) {
        console.log(e.active)
        console.log(e.over)

        if (e.over == null || e.active.data.current?.status == e.over?.data.current?.status) {
            return
        }

        // Find old status index
        const oldStatusIndex = columns.findIndex(status => status.id === e.active.data.current?.status);
        const oldColumnTaskCopy = [...columns[oldStatusIndex].tasks]

        // Find the index of the task with id within the old status column
        const taskIndex = columns[oldStatusIndex].tasks.findIndex(task => task.id === e.active.id);

        // Remove the task from the status
        const removedTask = columns[oldStatusIndex].tasks.splice(taskIndex, 1)[0];

        // Change the status of the removed task to new status
        removedTask.status = e.over?.data.current?.status

        // Find new status index
        const newStatusIndex = columns.findIndex(status => status.id === removedTask.status);
        const newColumnTasksCopy = [...columns[newStatusIndex].tasks]

        // Add the removed task to the new status
        columns[newStatusIndex].tasks.push(removedTask);

        // Call Api
        setLoading(true)
        setTimeout(() => {
            columns[oldStatusIndex].tasks = oldColumnTaskCopy
            columns[newStatusIndex].tasks = newColumnTasksCopy
            setLoading(false)
        }, 2000)
    }

    return (
        <div id="board" style={{ overflow: "hidden" }}>
            <DndContext onDragEnd={handleDragEnd} sensors={sensors} >
                {columns.map((column) => (
                    <Column column={column} key={column.id} />
                ))}
                <div className="new_column">
                    <h2>+ New Column</h2>
                </div>
            </DndContext>
        </div>
    )
}
