function Student(id, firstName, lastName, email) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
}



var students = []
var selectedRow=null;

function addStudent() {
    let student = new Student(
        document.getElementById('id').value,
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('email').value
    )
    if (validate()) {
        return;
    }
    var table = document.getElementById("logTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var idBtn1 = row.insertCell(0)
    var idCell = row.insertCell(1);
    var FirstNameCell = row.insertCell(2);
    var LastNameCell = row.insertCell(3);
    var Emailid = row.insertCell(4);

    var idBtn2 = row.insertCell(5);


    idCell.innerText = student.id;
    FirstNameCell.innerText = student.firstName;
    LastNameCell.innerText = student.lastName;
    Emailid.innerText = student.email;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="updateStudents(this)">edit</button>'
    idBtn2.innerHTML = idBtn2.innerHTML + '<button type="button" class="btn btn-danger" onclick="deleteStudents(this)">delete</button>'

 






    students.push(student)
    document.getElementById('id').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';

}
function updateStudents(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("custom1").disabled=true;
    document.getElementById("custom").disabled=false;

    document.getElementById("id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;



}
function updateRecord(){
    selectedRow.cells[1].innerHTML=document.getElementById("id").value;
    selectedRow.cells[2].innerHTML=document.getElementById("firstName").value;
    selectedRow.cells[3].innerHTML=document.getElementById("lastName").value;
    selectedRow.cells[4].innerHTML=document.getElementById("email").value;
    document.getElementById("custom").disabled=true;
    document.getElementById("custom1").disabled=false;
    
 }

function deleteStudents(td) {
    if (confirm('sure about delete the data?')) {
        row = td.parentElement.parentElement;
        document.getElementById("logTable").deleteRow(row.rowIndex);
    }
}

function setWarning(text) {

    var alertWarningHTML = ''
    alertWarningHTML += '<div class="alert alert-dismissible alert-danger">'
    alertWarningHTML += '<button type="button" class="close" data-dismiss="alert">&times;</button>'
    alertWarningHTML += '<h4 class="alert-heading">Warning!</h4>'
    alertWarningHTML += '<p class="mb-0">' + text + '</p>'
    alertWarningHTML += '</div>'

    document.getElementById('message').style.display = 'block'
    document.getElementById('message').innerHTML = alertWarningHTML;


}
function validate() {
    if (isNaN(document.orderForm.id.value) || document.orderForm.id.value == '') {
        setWarning('Id invalid');
        return true;
    } else if (parseInt(document.orderForm.id.value) < 0) {
        setWarning('invalid id');
        return true;

    } else if (document.orderForm.firstName.value == '' || document.orderForm.lastName.value == '' || document.orderForm.email.value == '') {
        setWarning('Field cannot be empty');
        return true;

    }
    return false;
}
function search(){
    var  input = document.getElementById("search");
     var filter = input.value.toUpperCase();
     var table = document.getElementById("logTable");
     var tr = table.getElementsByTagName("tr");
 
 
     for (var i = 0; i < tr.length; i++) {
         td = tr[i].getElementsByTagName("td")[0];
         tdd = tr[i].getElementsByTagName("td")[1];
         if (td) {
           var txtValue = td.textContent || td.innerText;
            var txtValue2 = tdd.textContent || tdd.innerText;
           if (txtValue.toUpperCase().indexOf(filter) > -1|| txtValue2.toUpperCase().indexOf(filter) >-1) {
             tr[i].style.display = "";
           } else {
             tr[i].style.display = "none";
           }
         }
       }
  }
 