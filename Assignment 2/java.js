var i = 1;
var data = [];
function nhap(){
    var testScore = { 
        name: "",
        math: 0,
        physical: 0,
        chemistry: 0
};
testScore.name = document.getElementById("hoten").value();
testScore.math = document.getElementById("toan").value();
testScore.physical = document.getElementById("ly").value();
testScore.chemistry = document.getElementById("hoa").value();

document.getElementById("hoten").value = "" ;
document.getElementById("toan").value = "";
document.getElementById("ly").value = "";
document.getElementById("hoa").value = "";
if( testScore.name == "" || testScore.math == "" || testScore.physical == "" || testScore.chemistry =="" ){
    alert("Nhập đủ thông tin");
    return;
}
var tbody = document.getElementsByTagName("tbody")[0];
var row = tbody.insertRow();
var stt = row.insertCell(0);
var name = row.insertCell(1);
var math = row.insertCell(2);
var physical = row.insertCell(3);
var chemistry = row.insertCell(4);
var trungBinh = row.insertCell(5);
stt.innerHTML = i ;
name.innerHTML = testScore.name;
math.innerHTML = testScore.math;
physical.innerHTML = testScore.physical;
chemistry.innerHTML = testScore.chemistry;
trungBinh.innerHTML  = "" ;
i++; 
data.push(testScore);
}
// tinh diem trung binh 
function dtb(){
    var tbody = document.getElementsByClassName("tbody")[0];
    for (let i = 0; i< data.length; i++) {
        var trungBinh = (parseFloat(data[i].math) + parseFloat(data[i].physical) + parseFloat(data[i].chemistry))/3;
        tbody.rows[i].cells[5].innerHTML = trungBinh.toFixed(2);
    }

}
function hsg(){
    var tbody = document.getElementsByClassName("tbody")[0];
    for ( let i = 0; i < data.length; i++){
        var trungBinh = (parseFloat(data[i].math) + parseFloat(data[i].physical) + parseFloat(data[i].chemistry))/3;
        tbody.rows[i].cells[5].innerHTML = trungBinh.toFixed(2);
        if( trungBinh >= 8){
            tbody.row[i].style.backgroundColor = "red ";
        }
    }
}