let database = []
function submit(){
    var n = document.getElementById("Name").value;
    var i = document.getElementById("Id").value;
    var s = document.getElementById("Salary").value;
    var object= {Name: n, Id: i, Salary: s }
    database.push(object);
    onload()
}

function onload(){
    tbl=`<table border='1' width='400' <tr><th>NAME</th><th>ID</th><th>SALARY</th><th>DELETE </th></tr>`
    database.forEach(function(x,i) {
        tbl+=`<tr><th>${x.Name}</th><th>${x.Id}</th><th>${x.Salary}</th>
        <th><button onclick="delete1(${i})">DELETE</button></th></tr>`
        
    });
    
  
document.getElementById("msg").innerHTML=tbl
}
function delete1(value){
    database.splice(value,1)
    onload()

}