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
    //表作成関数を作ってまとめられる
    //     <h3>教員ごとの担当数</h3>
    // `
    
    // string += `
    // <table>
    //     <thead>
    //         <tr align="center">
    //             <th>教師名</th>
    // `
    // for(let i=0;i<numOfClass;i++){
    //     string += `
    //     <th>${classNameArr[i]}</th>
    //     `
    // }
    // string += `
    //         </tr>
    //     </thead>
    //     <tbody>
    // `
    // for(let i=0;i<numOfTeacher;i++){
    //     string +=`
    //         <tr>
    //         <td>${teacherNameArr[i]}</td>
    //     `
    //     for(let j=0;j<numOfClass;j++){
    //         string += `
    //         <td><input type="number" name="${teacherNameArr[i]}_${classNameArr[i]}" min="0"></td>
    //         `
    //     }
    //     string += `
    //     </tr>
    //     `
    // }
    // string += `
    //     </tbody>
    // </table>
    // `


    // string += `
    //     <h3>クラスごとのコマ数</h3>
    // `
    // string += `
    // <table>
    //     <thead>
    //         <tr align="center">
    //             <th>クラス名</th>
    // `
    // const daysOfWeek = ["月","火","水","木","金"];
    // for(let i=0;i<daysOfWeek.length;i++){
    //     string += `
    //     <th>${daysOfWeek[i]}</th>
    //     `
    // }
    // string += `
    //         </tr>
    //     </thead>
    //     <tbody>
    // `

    // for(let i=0;i<numOfClass;i++){
    //     string +=`
    //         <tr>
    //         <td>${classNameArr[i]}</td>
    //     `
    //     for(let j=0;j<daysOfWeek.length;j++){
    //         string += `
    //         <td><input type="number" name="${classNameArr[i]}_${daysOfWeek[i]}" min="0"></td>
    //         `
    //     }
    //     string += `
    //     </tr>
    //     `
    // }
    // string += `
    //     </tbody>
    // </table>
    // `


    string += `
    <div class="row justify-content-center px-2 py-2">
        <input type="submit" value="次へ" id="toThirdBtn" class="col-4 col-md-3 col-lg-2">
    </div>
    `
    document.getElementById("nextForm").innerHTML = string;
});

document.getElementById("toThirdBtn").addEventListener("click",function(event){
    // 時間が確定している授業を登録
    //例 AさんBクラス月曜4限
    //プルダウン形式で選択できるようにしたい
    //追加ボタンを作成
});



    // for(let i=0; i<numOfTeacher;i++){
    //     string += `
    //         <h5>${teacherNameArr[i]}</h5>
    //         <input type="number" name="numOfTeacherAssigned">
    //     `
    // }
    // string += `
    // </div>
    // `
    