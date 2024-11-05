function startTask() {
    const taskDescription = document.getElementById('taskDescription');
    taskDescription.textContent = "Task in progress: Performing data analysis...";
    
    setTimeout(() => {
      taskDescription.textContent = "Task complete! Well done.";
    }, 3000); // Task completes after 3 seconds
  }
  