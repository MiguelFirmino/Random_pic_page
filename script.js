function randomize() {
    var img = document.getElementById('random-pic');
    img.src = "https://picsum.photos/900/550?" + new Date().getTime();
}