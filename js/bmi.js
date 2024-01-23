/**
 * 1.取得元素物件
 * 2.宣告bmi函式
 * 3.身高，體重進行傳遞測試
 * 4.綁定按鈕
 * 5.輸出bmi跟評語
 */


const userNameEl = document.querySelector("#name");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const bmiEl = document.querySelector("#bmi");
const commentEl = document.querySelector("#comment");

console.log(userNameEl, heightEl, weightEl);

function getBMI(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤";
    }
    return bmi.toFixed(2);
}

function calcBMI() {
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空");
        return;
    }

    let bmi = getBMI(height, weight);
    bmiEl.innerText = "BMI:" + bmi;

    let comment;
    if (bmi < 18.5) {
        comment = "體重過輕";
    } else if (bmi < 24) {
        comment = "正常範圍";
    } else if (bmi < 27) {
        comment = "過重";
    } else if (bmi < 30) {
        comment = "輕度肥胖";
    } else if (bmi < 35) {
        comment = "中度肥胖";
    } else {
        comment = "重度肥胖";
    }
    commentEl.innerText = comment;


    // 我原本的寫法
    // if (bmi < 18.5) { commentEl.innerText = "體重過輕" }
    // if (bmi < 24 && bmi >= 18.5) { commentEl.innerText = "正常範圍" }
    // if (bmi < 27 && bmi >= 24) { commentEl.innerText = "過重" }
    // if (bmi < 30 && bmi >= 27) { commentEl.innerText = "輕度肥胖" }
    // if (bmi < 35 && bmi >= 30) { commentEl.innerText = "中度肥胖" }
    // if (bmi >= 35) { commentEl.innerText = "重度肥胖" }

}

function clearForm() {
    userNameEl.value = "";
    heightEl.value = "";
    weightEl.value = "";
    bmiEl.innerText = "";
    commentEl.innerText = "";

}

