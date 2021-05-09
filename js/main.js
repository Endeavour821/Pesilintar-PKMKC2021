$(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });
});

var dt = new Date();
document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleDateString();

var dt = new Date();
document.getElementById("tanggalwaktu2").innerHTML = dt.toLocaleDateString();

var dt = new Date();
document.getElementById("tanggalwaktu3").innerHTML = dt.toLocaleDateString();