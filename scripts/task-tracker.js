document.addEventListener('DOMContentLoaded', function () {
  let tasks = []; // Array to store tasks
  let tasksFetched = false; // Flag to track whether tasks have been fetched

  // Function to render tasks based on the selected category
  function renderTasks(category) {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = ''; // Clear previous tasks

    if (tasksFetched) {
      // Filter tasks based on the selected category
      const filteredTasks = category ? tasks.filter(task => task.category === category) : tasks;

      // Render filtered tasks
      filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskListContainer.appendChild(taskElement);
      });
    }
  }

  // Function to create a task element
  function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'taskList';
    taskElement.innerHTML = `
      <span>${task.title}</span>
      <button class="deleteBtn" data-task-id="${task.id}">Delete &#10006;</button>
      <button class="completeBtn" data-task-id="${task.id}" data-task-completed="${task.completed}">
        ${task.completed ? 'Incomplete &#10007;' : 'Complete &#10003;'}
      </button>
    `;
    return taskElement;
  }

  // Event listener for the category select dropdown
  const categorySelect = document.getElementById('filtered');
  categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    renderTasks(selectedCategory);
  });

  // Event listener for adding a new task
  const addTaskButton = document.getElementById('addTask');
  addTaskButton.addEventListener('click', function () {
    const newTaskInput = document.getElementById('newTask');
    const newTaskName = newTaskInput.value.trim();

    if (newTaskName) {
      const newTask = { id: tasks.length + 1, title: newTaskName, completed: false, category: categorySelect.value }; // modify
      tasks.push(newTask);

      // Clear input field
      newTaskInput.value = '';

      // Render tasks with the current category
      renderTasks(categorySelect.value);
    }
  });

  // Event listener for marking tasks as complete or incomplete, and deleting them
  document.addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element is a delete button
    if (target.classList.contains('deleteBtn')) {
      deleteTask(target);
    }

    // Check if the clicked element is a complete button
    if (target.classList.contains('completeBtn')) {
      completeTask(target);
    }
  });

  // Function to mark a task as complete or incomplete
  function completeTask(taskButton) {
    const taskId = parseInt(taskButton.dataset.taskId);
    const task = tasks.find(t => t.id === taskId);

    // Toggle the completed status
    task.completed = !task.completed;

    // Update the task element's text and button label based on completion status
    taskButton.setAttribute('data-task-completed', task.completed);
    taskButton.innerHTML = task.completed ? 'Incomplete &#10007;' : 'Complete &#10003;';
  }

  // Function to delete a task
  function deleteTask(deleteButton) {
    const taskId = parseInt(deleteButton.dataset.taskId);

    // Remove the task from the tasks array
    tasks.splice(tasks.findIndex(t => t.id === taskId), 1);

    // Remove the task element from the DOM
    deleteButton.parentElement.remove();
  }

  // Fetch tasks from JSONPlaceholder
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log the fetched data to the console
      tasks = data.map(task => ({ ...task, category: 'Default' })); // Add category property to each task // modify
      tasksFetched = true; // Set the flag to true
      renderTasks(null); // Render tasks after fetching
    })
    .catch(error => console.error('Error fetching tasks:', error));
});
