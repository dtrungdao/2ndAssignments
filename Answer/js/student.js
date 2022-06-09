let studentList = [
    {
        StudentID: 000,
        FirstName: "Markus",
        LastName: "Kaesser",
        DOB: "26.05.1994",
        Gender: "male",
        Department: "Mathematic",
        Email: "markus@xyz.org",
        JoiningDate: "23.05.2022",

    },
    {
        StudentID: 001,
        FirstName: "Jordan",
        LastName: "Henderson",
        DOB: "01.11.1990",
        Gender: "male",
        Department: "Information Technology",
        Email: "jordan@example.org",
        JoiningDate: "23.05.2022",
    },
    {
        StudentID: 002,
        FirstName: "Petra",
        LastName: "Nuss",
        DOB: "24.03.1993",
        Gender: "female",
        Department: "Information Technology",
        Email: "petra@example.org",
        JoiningDate: "23.05.2022",

    }
];



function getStudents() {
    return studentList;
}

function loadStudent() {
    let studentTable = document.getElementById("student-table-body");

    //document.getElementById("student-table-body").innerHTML = "";
    studentTable.innerHTML = "";

    let students = getStudents();

    for (let student of students) {
        let studentRow = studentTable.insertRow();
        studentRow.insertCell(0).innerText = student.StudentID;
        studentRow.insertCell(1).innerText = student.FirstName;
        studentRow.insertCell(2).innerText = student.LastName;
        studentRow.insertCell(3).innerText = student.DOB;
        studentRow.insertCell(4).innerText = student.Gender;
        studentRow.insertCell(5).innerText = student.Department;
        studentRow.insertCell(6).innerText = student.Email;
        studentRow.insertCell(7).innerText = student.JoiningDate;


    }

}


loadStudent();




function submitAdd() {

    let forms = new FormData(document.forms.add-student);

    let data = {};
    forms.forEach(function (value, key) {
        console.log(key + ": " + value);
        data[key] = value
    });

    console.log(data);
    if (!data.StudentID || !data.FirstName || !data.JoiningDate || !data.DOB) {
        console.log("Please fill out all the data");
        return;
    }

    studentList.push(data);
    loadStudent();
}


function disableDay(){

    document.getElementById("dob").max = new Date().toLocaleDateString('en-ca');
    document.getElementById("joiningDate").max = new Date("2015-12-31").toISOString().split("T")[0];
    document.getElementById("joiningDate").min = new Date("2015-01-01").toISOString().split("T")[0];

    var date = new Date();
    var date17 = date.setFullYear(date.getFullYear() -17);
    var date60 = date.setFullYear(date.getFullYear() -60);

    let dob = document.getElementById("dob").value
    if(dob >= date17 && dob <= date60) alert("Invalid Date of Birth")

}
disableDay();

function filterDepartment(){
    if (document.getElementById("department-top").value = "it") {
        let onlyIT = studentList.filter(
            (studentList) => studentList.Department === "Information Technology"
    );
        return onlyIT;
    }

    if (document.getElementById("department-top").value = "mathe"){
        let onlyMath = studentList.filter(
            (studentList) => studentList.Department === "Mathematic"
       );
       return onlyMath;

    }
}

