// Função retorna um novo array com apenas as descrições das tarefas
const getTasksDescriptions = tasksList => tasksList.map(task => task.description);

// Função para filtrar tarefas por prioridade
const filterTasksByPriority = (tasksList, priority) => tasksList.filter(task => task.priority === priority);

// Função para obter uma task pelo seu id
const findTaskById = (tasksList, id) => tasksList.find(task => task.id === id);

// Função para remover uma task pelo seu id
const removeTask = (tasksList, id) => {
  const taskIndex = tasksList.findIndex(task => task.id === id);

  if (taskIndex !== -1) {
    return tasksList.splice(taskIndex, 1);
  } else {
    return "Tarefa não encontrada.";
  }
};

const descriptions = getTasksDescriptions(tasks);
console.log(descriptions);

const highPriorityTasks = filterTasksByPriority(tasks, 'alta');
console.log(highPriorityTasks);

const task = findTaskById(tasks,2);
console.log(task);

const removedTask = removeTask(tasks, 1);
console.log(removedTask);
console.log(tasks);