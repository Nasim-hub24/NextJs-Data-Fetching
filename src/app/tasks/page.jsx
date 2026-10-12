
import TaskCard from '@/components/TaskCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TaskPage = async() => {
    const tasks = await getTasks()
    return (
        <div>
            <h2>Task length is {tasks.length} </h2>
            <div>
                {
                    tasks.map(task => <TaskCard key={task.id} task = {task}></TaskCard>)
                }
            </div>

        </div>

    );
};

export default TaskPage;