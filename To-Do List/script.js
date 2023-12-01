var items_arr = [];
function addToList(){
    let items = document.getElementById("task").value.toString();
    if(items){
        items_arr.push(items);
    }
    document.getElementById("list-data").innerHTML = items_arr;
    document.getElementById("task").value = "";
}