var items_arr = [];
function addToList() {
  let items = document.getElementById("task").value.toString();
  if (items) {
    this.items_arr = sessionStorage.getItem("task_arr")
      ? JSON.parse(sessionStorage.getItem("task_arr"))
      : [];
    const uuid = crypto.randomUUID();
    this.items_arr.push({ item: items, uuid: uuid });
    sessionStorage.setItem("task_arr", JSON.stringify(this.items_arr));
    document.getElementById("task").value = "";
    listItems(items, uuid);
  }
}

function listItems(items, uuid) {
  //add list content with styles
  const taskContainer = document.createElement("div");
  taskContainer.id = `${uuid}`;
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
      editDone.onclick = function () {
        taskData.innerHTML = editContent.value;
        editContent.remove();
        editDone.remove();
        this.items_arr = JSON.parse(sessionStorage.getItem("task_arr"));
        for (let i = 0; i < this.items_arr.length; i++) {
          if (this.items_arr[i].uuid === taskContainer.id) {
            this.items_arr[i].item = editContent.value;
            sessionStorage.setItem("task_arr", JSON.stringify(this.items_arr));
            break;
          }
        }
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
    this.items_arr = JSON.parse(sessionStorage.getItem("task_arr"));
    for (let i = 0; i < this.items_arr.length; i++) {
      if (this.items_arr[i].uuid === taskContainer.id) {
        this.items_arr.splice(i, 1);
        sessionStorage.setItem("task_arr", JSON.stringify(this.items_arr));
        break;
      }
    }
    sessionStorage.setItem("task_arr", JSON.stringify(this.items_arr));
  };
  taskContainer.appendChild(customData_2);
  taskContainer.appendChild(customData_1);
  document.getElementById("list-data").appendChild(taskContainer);
}

onLoad = () => {
  this.items_arr = sessionStorage.getItem("task_arr")
    ? JSON.parse(sessionStorage.getItem("task_arr"))
    : [];
  if (items_arr.length > 0) {
    for (let items of this.items_arr) {
      listItems(items.item, items.uuid);
    }
  }
};
