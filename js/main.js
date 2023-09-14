class Class{
    constructor(teacherInCharge,timeSlot){
        this.teacherInCharge = teacherInCharge;
        this.timeSlot = timeSlot;
    }
}

class Teacher{
    constructor(classInCharge,timeSlot,totalTime){
        this.classInCharge = classInCharge;
        this.timeSlot = timeSlot;
        this.totalTIme = totalTIme;
    }
}

let classArr = {};
let classNameArr = [];
let teacherArr = {};
let teacherNameArr = [];


document.getElementById("nextbtn").addEventListener("click",function(event){
    event.preventDefault();
    const formElements = document.forms.firstForm;
    let numOfTeacher  = formElements.numOfTeacher.value;
    teacherNameArr = formElements.teacherName.value.split(',');
    let numOfClass = formElements.numOfClass.value;
    classNameArr = formElements.className.value.split(',');
    console.log(teacherNameArr);
    let string = `
    <div class=col justify-content-center align-items-center>
        <h3>教員ごとの担当数</h3>
    `
    
    for(let i=0; i<numOfTeacher;i++){
        string += `
            <h5>${teacherNameArr[i]}</h5>
            <input type="number" name="numOfTeacherAssigned">
        `
    }
    string += `
    </div>
    `

    string += `
    <table>
        <thead>
            <tr>
                <th>教師名</th>
    `
    for(let i=0;i<numOfClass;i++){
        string += `
        <th>${classNameArr[i]}</th>
        `
    }
    string += `
            </tr>
        </thead>
        <tbody>
    `
    for(let i=0;i<numOfTeacher;i++){
        string +=`
            <tr>
            <td>${teacherNameArr[i]}</td>
        `
        for(let j=0;j<numOfClass;j++){
            string += `
            <td><input type="number" name="${teacherNameArr[i]}_${classNameArr}" min="0"></td>
            `
        }
        string += `
        </tr>
        `
    }
    string += `
        </tbody>
    </table>
    `
    document.getElementById("nextForm").innerHTML = string;
});