const tbody = document.getElementById('data');

let userNum = 0;
function getUserNum() {
    let n = userNum.toString();
    document.getElementById('user-no').innerHTML = n;
}

function addUser() {
    let name = document.getElementById('fn-input').value;
    let gender = document.getElementById('gender-input').value;
    let age = document.getElementById('age-input').value;
    
    var addTr = `<tr><td scope="row">` + name + `</td><td>` + gender + `</td><td>` + age + `</td></tr>`;
    tbody.innerHTML = tbody.innerHTML + addTr;
    userNum++;
}

