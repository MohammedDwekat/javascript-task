const Tasks = [];
const menu =
  "Task Manager Menu \n 1- Add Task \n 2- View Tasks \n 3- Toggle Task Completion\n 4- Edit Task\n 5- Delete Task\n 6- Find Task\n 7- Exit";
console.log(menu);

const AddTask = (array = []) => {
  const Description = prompt("Enter Task Description");

  const Task = { Description: Description, status: 0 };
  array.push(Task);

  console.log(
    `Add - Task ${Task.Description} is ${
      Tasks.status == 1 ? "is Completed" : "is Uncompleted"
    }`
  );
};

const ViewTasks = (array = []) => {
  console.log("Tasks list :\n");
  array.forEach((Task) =>
    console.log(
      `Task ${Task.Description} is ${
        Task.status == 1 ? "is Completed" : "is Uncompleted"
      }`
    )
  );
};

const ToggleTask = (array = []) => {
  const ToggleTask = prompt("Enter Task Name to change it's status");

  const Task = array.find((task) => {
    if (task.Description === ToggleTask) return true;
    return false;
  });

  if (Task) Task.status = Task.status === 1 ? 0 : 1;
  else console.log("task not found");

  console.log(
    `Task ${Task.Description} is ${
      Task.status == 1 ? "is Completed" : "is Uncompleted"
    }`
  );
};

const EditTask = (array = []) => {
  const TaskName = prompt("Enter Task Name that you want to Edit");

  const Task = array.find((task) => {
    if (task.Description === TaskName) return true;
    return false;
  });

  if (Task) {
    const NewName = prompt("Enter the new Name of the task");
    Task.Description = NewName;
  } else console.log("task not found");

  console.log(
    `Task ${Task.Description} is ${
      Task.status == 1 ? "is Completed" : "is Uncompleted"
    }`
  );
};

const DeleteTask = (array = []) => {
  const TaskName = prompt("Enter Task Name that you want to Delete");

  const TaskIndex = array.findIndex((task) => task.Description === TaskName);

  if (TaskIndex !== -1) {
    array.splice(TaskIndex, 1);
    console.log(`Task ${TaskName} is Deleted`);
  } else console.log("task not found");
};

const searchTask = (array = []) => {
  const taskDescription = prompt("Enter Task Description to search");

  const foundTasks = array.filter((task) =>
    task.Description.toLowerCase().includes(taskDescription.toLowerCase())
  );

  if (foundTasks.length > 0) {
    foundTasks.forEach((task) => {
      console.log(
        `Description "${task.Description}", ${
          task.status === 1 ? "is Completed" : "is Uncompleted"
        }`
      );
    });
  } else {
    console.log("No tasks found.");
  }
};

let choice = prompt("Enter your choice (1-6) or 7 to exit:");

while (choice !== "7" && choice !== null) {
  const parsedChoice = parseInt(choice);

  switch (parsedChoice) {
    case 1: {
      AddTask(Tasks);
      console.log(menu);
      break;
    }
    case 2: {
      ViewTasks(Tasks);
      console.log(menu);
      break;
    }
    case 3: {
      ToggleTask(Tasks);
      console.log(menu);
      break;
    }
    case 4: {
      EditTask(Tasks);
      console.log(menu);
      break;
    }
    case 5: {
      DeleteTask(Tasks);
      console.log(menu);
      break;
    }
    case 6: {
      searchTask(Tasks);
      console.log(menu);
      break;
    }
    default: {
      console.log("Invalid option. Please select a number between 1 and 6.");
      console.log(menu);
    }
  }

  choice = prompt("Enter your choice (1-6) or 7 to exit:");
}

console.log("Exiting the menu.");
