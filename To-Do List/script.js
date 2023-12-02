var items_arr = [];
function addToList() {
  let items = document.getElementById("task").value.toString();
  if (items) {
    this.items_arr = sessionStorage.getItem("task_arr")
      ? JSON.parse(sessionStorage.getItem("task_arr"))
      : [];
    this.items_arr.push(items);
    sessionStorage.setItem("task_arr", JSON.stringify(this.items_arr));
    document.getElementById("task").value = "";

    //add list content with styles
    const taskContainer = document.createElement("div");
    taskContainer.id = `task${this.items_arr.length}`;
    taskContainer.style.cssText =
      "padding: 10px; background-color: Fuchsia; color: white; margin-top: 5px; border-radius: 4px;";

    const taskData = document.createElement("span");
    taskData.innerHTML = items;
    taskContainer.appendChild(taskData);

    // add edit and delete button
    const customData_1 = document.createElement("i");
    const customData_2 = document.createElement("i");

    //adding class, style, click event
    customData_1.className = "fa fa-light fa-pen";
    customData_1.style.cssText =
      "float: right; cursor: pointer; position: relative; right: 5px;";
    customData_1.onclick = function () {
      // to edit that particular task
      var inputChecker = taskContainer.getElementsByTagName("input");
      if (inputChecker?.[0]?.style?.color != "white") {
        const editContent = document.createElement("input");
        const editDone = document.createElement("button");
        editContent.style.cssText =
          "background-color: Fuchsia; color: white; border: 1px solid goldenrod; border-radius: 5px; padding: 5px; margin-top: 5px;";
        editContent.value = items;
        editDone.style.cssText =
          "background-color: goldenrod;color: white;border: none; padding: 5px; border-radius: 3px; margin-left: 4px; cursor: pointer;";
        editDone.innerHTML = "Done";
        editDone.onclick = function (e) {
          taskData.innerHTML = editContent.value;
          editContent.remove();
          editDone.remove();
          let ind = taskContainer.id.slice(4);
          this.items_arr = JSON.parse(sessionStorage.getItem("task_arr"));
          this.items_arr[ind - 1] = editContent.value;
          sessionStorage.setItem("task_arr", JSON.stringify(this.items_arr));
        };
        taskContainer.appendChild(editContent);
        taskContainer.appendChild(editDone);
      }
    };
    customData_2.className = "fa fa-light fa-trash";
    customData_2.style.cssText =
      "float: right; cursor: pointer; position: relative; left: 2px;";
    customData_2.onclick = function () {
      // to remove that particular task
      taskContainer.remove();
      let ind = taskContainer.id.slice(4);
      this.items_arr = JSON.parse(sessionStorage.getItem("task_arr"));
      // this.items_arr.splice(ind-1, 1);
      // i am keeping that index just deleting the value
      delete this.items_arr[ind - 1];
      sessionStorage.setItem("task_arr", JSON.stringify(this.items_arr));
    };
    taskContainer.appendChild(customData_2);
    taskContainer.appendChild(customData_1);
    document.getElementById("list-data").appendChild(taskContainer);
  }
}
