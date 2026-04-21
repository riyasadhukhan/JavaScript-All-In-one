/* Build a task manager where users can:

add tasks
mark tasks complete
list all tasks */

class Task {
  constructor() {
    this.taskList = [];
  }

  addTask(task) {
    this.taskObj = {};
    this.taskObj.task = task;
    this.taskObj.status = "not completed";
    this.taskList.push(this.taskObj);
    console.log(`Task added: ${task}`);
  }

  completeTask(task) {
    const completedTask = this.taskList.find((item) => item.task === task);
    if (completedTask) {
      completedTask.status = "completed";
    }
    console.log(`Task completed: ${task}`);
  }

  getTasks() {
    console.log(this.taskList);
  }
}

const taskManager = new Task();
taskManager.addTask("Learn JS");
taskManager.addTask("HTML");
taskManager.completeTask("Learn JS");
taskManager.getTasks();
taskManager.completeTask("HTML");
taskManager.getTasks();

// Task added: Learn JS
// Task completed: Learn JS
// [ { task: "Learn JS", status: "completed" } ]
