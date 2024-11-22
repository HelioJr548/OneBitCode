let taskLists = [
	{
		id: '1',
		title: 'Estudos',
		tasks: [{ id: '1', title: 'Estudar Node', completed: false }],
	},
	{
		id: '2',
		title: 'Tarefas de casa',
		tasks: [{ id: '2', title: 'Cozinhar', completed: false }],
	},
	{
		id: '3',
		title: 'Coisas do trabalho',
		tasks: [{ id: '3', title: 'Desenvolver planilha', completed: false }],
	},
];

module.exports = {
	getAllTaskLists: () => {
		return taskLists;
	},

	getTaskListById: (id) => {
		return taskLists.find((list) => list.id === id);
	},

	createList: (title) => {
		const newList = {
			id: Math.floor(Math.random() * 9999999).toString(),
			title: title,
			tasks: [],
		};

		return newList;
	},

	saveList: (taskList) => {
		if (taskList.title === '')
			throw new Error('Título da lista não pode ficar vazio');

		taskLists.push(taskList);
	},

	addTask: (listId, taskTitle) => {
		const newTask = {
			id: Math.floor(Math.random() * 9999999).toString(),
			title: taskTitle,
			completed: false,
		};

		taskLists.find((list) => list.id === listId).tasks.push(newTask);
	},

	deleteTaskList: (id) => {
		const listIndex = taskLists.findIndex((list) => list.id !== id);
		taskLists.splice(listIndex, 1);
	},

	updateTaskStatus: (listId, taskId) => {
		const taskList = taskLists.find((list) => list.id === listId);
		if (!taskList) throw new Error('Task list not found');

		const task = taskList.tasks.find((task) => task.id === taskId);
		if (!task) throw new Error('Task not found');

		task.completed = !task.completed;
	},
};
