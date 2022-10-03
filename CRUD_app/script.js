var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["rank"] = document.getElementById("rank").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["about_you"] = document.getElementById("about_you").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("playerlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rank;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.about_you;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = '<a onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)">Delete</a>';
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("rank").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("about_you").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rank").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("about_you").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.rank;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.about_you;
}

function onDelete(td) {
    if (confirm('Are you sure?'))
        row = td.parentElement.parentElement;
    document.getElementById("playerlist").deleteRow(row.rowIndex);
    resetForm();
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide")
    }
    return isValid;
}
