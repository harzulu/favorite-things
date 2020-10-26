$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const backColor = $("#color").val();
    document.body.style.background = backColor;
    const food = $("input#favFood").val();
    const season = $("input#favSeason").val();
    const music = $("input#favMusic").val();
    const color = $("input#color").val();
    const array1 = [food, season, music];
    const array2 = [];
    array2.push(array1[0]);
    array2.push(array1[1]);
    array2.push(array1[2]);
    $("#list").append("<li>" + array2[0] + "</li>");
    $("#list").append("<li>" + array2[1] + "</li>");
    $("#list").append("<li>" + array2[2] + "</li>");
    $("#list").show();
    alert(array2);
  });
});