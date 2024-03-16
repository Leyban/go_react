import { create } from 'zustand'
import { TTask } from '../components/board/subcomponents/task'

interface IDraggedTask {
    task: TTask | null
    dragTask: (newTask: TTask) => void
}

const useDragStore = create<IDraggedTask>()((set) => ({
    task: null,
    dragTask: (newTask) => set(() => ({ task: newTask}))
}))

export default useDragStore
