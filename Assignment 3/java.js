var data = [];
var i = 1;

// Lấy giá trị từ input
$('#nhap').click(function(){
  var testScore = {
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0,
    avg: "?"
  };
//Yêu cầu nhập dữ liệu
  if($("#hoten").val() == '' || $("#toan").val() == '' || $("#ly").val() == '' || $("#hoa").val() == '' ) { 
    
    alert("Vui Lòng Nhập Đủ Thông Tin");
    return;
}
//Lấy giá trị từ input
    testScore.name = $("#hoten").val();
    testScore.math = parseFloat($("#toan").val());
    testScore.physical = parseFloat($("#ly").val());
    testScore.chemistry = parseFloat($("#hoa").val());
    testScore.delete = "<button style='background-color: green;' id = 'xoa'>Xóa</button>";

//Xoá trắng các ô input
    $("#hoten").val("");
    $("#toan").val("");
    $("#ly").val("");
    $("#hoa").val("");

// Chèn hàng mới vào bảng sau khi nhập data

$("table").append( '<tr>' + '<td>' + i + '</td>' +
                  '<td>' + testScore.name + '</td>' +
                  '<td>' + testScore.math  + '</td>' +
                  '<td>' + testScore.physical + '</td>' +
                  '<td>' + testScore.chemistry + '</td>' +
                  '<td>' + testScore.avg + '</td>' +
                  '<td>' + testScore.delete + '</td>' + '</tr>');

i++;
// khi tính điểm trung bình thì lấy dữ liệu ở  var data ra

data.push(testScore);
});
//Tính điểm trung bình của 3 môn Toán Lý Hoá

$('#dtb').click(function(){
  for (let i = 0; i< data.length; i++){

    var trungbinh = ((data[i].math) + (data[i].physical) + (data[i].chemistry))/3;
    $('tr').eq(i + 1).children("td").eq(5).html(trungbinh.toFixed(2));
  
  }
});
//Xác định học sinh giỏi khi điểm trung bình cả 3 môn >= 8
$('#hsg').click(function(){
    for (let i = 0; i< data.length; i++){
    var trungbinh = ((data[i].math) + (data[i].physical) + (data[i].chemistry))/3;
      if ( trungbinh >= 8){
         $('tr').eq(i + 1).css("background-color", "red");
      };
    
    };
  }); 
// Xác định học sinh yếu kh điểm trung bình cả 3 môn =< 4
$('#hsy').click(function(){
  for (let i = 0; i< data.length; i++){
  var trungbinh = ((data[i].math) + (data[i].physical) + (data[i].chemistry))/3;
    if ( trungbinh <= 4){
       $('tr').eq(i + 1).css("background-color", "green");
    };
  
  };
});
// Xoá điểm

  $("table").on('click', '#xoa', function() {
    if (confirm("Bạn Muốn Xoá Dữ Liệu ?") == true) {
    $(this).closest('tr').remove();
    }
    });









