$(document).ready(function() {
    fetch(`https://gnews.io/api/v4/top-headlines?&token=e6d0bfea67a61fc654e7cf751c7d32f7&lang=en`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var content ='';
        data["articles"].forEach(function(element){
            content += "<div class='row'>";
            content += "<div class='col-md-4'><img class='img-responsive' width=' 100%' src='"+ element.image + "'></div>"
            content += "<div class='col-md-8'><a href='" + element.url + "' target='_blank'>" + element.title + "</a>";
            content += "<br><i>" + element.publishedAt + "</i>";
            content += "<p>" + element.description + "</div></div>";
        //console.log(data);
        });
    $("#newsfeed").html(content);
    $("#mynewslogo").on("click", function(){
        $("#newsfeed").html(content);
    });
});
//Lọc tin tức theo từ khoá tìm kiếm
    $("#search_button").on('click',function(){
        $(".modal").slideUp("slow");
     const keyword = $("#searchbox").val();
     fetch(`https://gnews.io/api/v4/search?q=${keyword}&token=e6d0bfea67a61fc654e7cf751c7d32f7`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.articles.length === 0) {
            alert("Không tìm thấy dữ liệu");
            return;
            }
        var content ='';
        data["articles"].forEach(function(element){
            content += "<div class='row'>";
            content += "<div class='col-md-4'><img class='img-responsive' width=' 100%' src='"+ element.image + "'></div>"
            content += "<div class=' col-md-8'><a href='" + element.url + "' target='_blank'>" + element.title + "</a>";
            
            content += "<br><i>" + element.publishedAt + "</i>";
            content += "<p>" + element.description + "</div></div>";
        //console.log(data);
    });
    $("#newsfeed").html(content);
    $("#mynewslogo").on("click", function(){
        $("#newsfeed").html(content);
    });
    })
    });
    
    // Nút Search Icon
    $("#search_icon").on("click", function() {
        $(".modal").slideToggle("slow");
    });
    // Nút tắt cửa sổ search
    $("#close_search").on("click", function() {
        $(".modal").slideUp("slow");
        $("#published_date_from").val('');
        $("#published_date_to").val('');
        $("#topic").val('Choose a topic...');
        $("#country").val('Choose a country...');
    });

});
 // Hiệu ứng Pre-Loading 
 $(window).on('load', function() {

    $('#af-preloader').delay(300).fadeOut('slow')
  
  })
// Nút Back To Top
$(function(){
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
    else $(".lentop").fadeOut();
    });
    $(".lentop").click(function () {
    $("body,html").animate({scrollTop: 0}, "slow");
    });
    });