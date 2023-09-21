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
const daysOfWeek = ["月","火","水","木","金"];
let classArr = {};
let classNameArr = [];
let teacherArr = {};
let teacherNameArr = [];

function createTable(headText,tableHeadText,verticalArr,horizontalArr){
    let string = `
        <h3>${headText}</h3>
        <table>
            <thead>
                <tr align="center">
                    <th>${tableHeadText}</th>
    `
    //横項目
    for(let i=0;i<horizontalArr.length;i++){
        string += `
        <th>${horizontalArr[i]}</th>
        `
    }
    //head終了
    string += `
            </tr>
        </thead>
        <tbody>
    `    
    //列ループ
    for(let i=0;i<verticalArr.length;i++){
        //縦項目
        string +=`
            <tr>
            <td>${verticalArr[i]}</td>
        `
        //表中身
        for(let j=0;j<horizontalArr.length;j++){
            string += `
            <td><input type="number" name="${verticalArr[i]}_${horizontalArr[j]}" min="0"></td>
            `
        }
        //列終わり
        string += `
        </tr>
        `
    }
    //finished
    string += `
        </tbody>
    </table>
    `
    return string;
}

function createPullDown(name,arr){  
    let string = ``;
    string += `
    <select name="${name}" id="${name}Select">
    `
    for(let i=0;i<arr.length;i++){
        string += `
        <option value=${arr[i]}>${arr[i]}</option>
        `
    }
    string += `
        </select>    
    `
    return string;
}


document.getElementById("toSecondBtn").addEventListener("click",function(event){
    event.preventDefault();
    const formElements = document.forms.firstForm;
    let numOfTeacher  = formElements.numOfTeacher.value;
    teacherNameArr = formElements.teacherName.value.split(',');
    let numOfClass = formElements.numOfClass.value;
    classNameArr = formElements.className.value.split(',');
    console.log(teacherNameArr);
    let string = `
    <div class=col justify-content-center align-items-center>
    `
    string += createTable("教員ごとの担当数","教師名",teacherNameArr,classNameArr);
    string += createTable("クラスごとのコマ数","クラス名",classNameArr,daysOfWeek);
    document.getElementById("secondInputForm").innerHTML = string;
});

document.getElementById("toThirdBtn").addEventListener("click",function(event){
    // 時間が確定している授業を登録
    //例 Aさん Bクラス 月曜 4限
    //プルダウン形式で選択できるようにしたい
    //追加ボタンで複製
    //最初は表示せずに追加したい場合ボタンを押下、ボタンを上に表示、
    event.preventDefault();
    console.log("btnclick");
    let string = ``;
    string += createPullDown("teacher",teacherNameArr);
    string += createPullDown("class",classNameArr);
    string += createPullDown("daysOfWeek",daysOfWeek);
    document.getElementById("thirdInputForm").innerHTML = string;
});

    