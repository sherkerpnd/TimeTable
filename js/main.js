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
    let numOfTeacher  = formElements.noft.value;
    teacherNameArr = formElements.tname.value.split(',');
    let numOfClass = formElements.nofc.value;
    classNameArr = formElements.cname.value.split(',');
    
    
});