alert("Hello");

var myForm = document.querySelector("#table-form");


//my-form submiting request
myForm.addEventListener("submit",function(event){

    event.preventDefault();
    var taskField = document.querySelector("#task");
    var taskValue = taskField.value;
    
    //Create element row
    var newRow = document.createElement("tr");
    //create elemet cell
    var newCell = document.createElement("td");
    //new row has a cell value
    newCell.textContent = taskValue;
    newRow.appendChild(newCell);

    //create button element with row 
    var compButton = document.createElement("button");
    compButton.textContent = "Complete";

    compButton.addEventListener("click",function(event){
        completedTask(this);//delete the row
    });

    //create cell for complete button in table
    var compCell = document.createElement("td");
    compCell.appendChild(compButton);
    newRow.appendChild(compCell);

    //append table row into new table body 
    var tableBody = document.querySelector("#table-body");
    tableBody.appendChild(newRow);


    //reset all element in table
    document.querySelector("#table-form").reset();
});


/* //grab existing buttons..which clicked
var allButtons = document.querySelectorAll("#table-body>tr>td>button");
console.log(allButtons);
//Loop through our query selected buttons,
for(var i=0; i<allButtons.length ; i++){
    //lets add listerners to these!!
    allButtons[i].addEventListener("click",function(event){
        //addRowCompaleteTable(this);
        console.log(this.value);
        deleteRow(this);
    });
} */



//Deleting row from to-do list table
function completedTask(element){//element will be button what we pressed it.
    
    var tableRow = element.parentNode.parentNode;//2 levels up from bottom,to get our row.
    console.log(tableRow);
    //select comleted dtable for append competed row
    var compTableBody = document.querySelector("#comp-table-body");
    console.log(compTableBody);
    compTableBody.appendChild(tableRow);

    //just print last child
    console.log(tableRow.lastChild);
    //remove button from table row because of task is completed.
    tableRow.removeChild(tableRow.lastChild);
    //tableRow.parentNode.removeChild(tableRow);//an element can not delete itself...so we havve to tell the parent to do it for us..
}
