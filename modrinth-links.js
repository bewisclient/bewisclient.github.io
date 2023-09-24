const element = document.getElementById('modrinth-div');
const modrinth = document.getElementById('modrinth');
const p1 = document.getElementsByClassName('m-link')[0];
const p2 = document.getElementsByClassName('m-link')[1];

element.addEventListener('mouseover', function() {
    modrinth.style.display = "none";
    element.style.width="146px";
    p1.style.opacity = "1";
    p2.style.opacity = "1";
    setInterval(() => {
        p1.href = "https://modrinth.com/mod/bewisclient/";
        p2.href = "https://modrinth.com/modpack/bewisclient-pack/";
    }, 200);
});

element.addEventListener('mouseout', function() {
    modrinth.style.display = "inline";
    element.style.width="90px";
    p1.style.opacity = "0";
    p2.style.opacity = "0";
    p1.href = "";
    p2.href = "";
});