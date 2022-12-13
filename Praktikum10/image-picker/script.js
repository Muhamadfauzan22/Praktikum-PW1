function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "img/Giyu dan Nonu.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Giyu dan Nonu.jpg";
        alert("Ini adalah gambar Giyu dan Nonu.jpg");
    } else if (picker == "water") {
        images.src = "img/Giyu.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Giyu.jpg";
        alert("Ini adalah gambar Giyu.jpg");
    } else if (picker == "electric") {
        images.src = "img/Itachy.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Itachy.jpg";
        alert("Ini adalah gambar Itachy.jpg");
    } else if (picker == "dark") {
        images.src = "img/Jiraya.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Jiraya.jpg";
        alert("Ini adalah gambar Jiraya.jpg");
    } else if (picker == "psyhic") {
        images.src = "img/Kakashi.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Kakashi.jpg";
        alert("Ini adalah gambar Kakashi.jpg");
    } else if (picker == "fairy") {
        images.src = "img/Minato.webp";
        images.width = 300;
        images.alt = "Ini adalah gambar Minato.jpg";
        alert("Ini adalah gambar Minato.jpg");
    } else if (picker == "grass") {
        images.src = "img/Naruto.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Naruto.jpg";
        alert("Ini adalah gambar Naruto.jpg");
    } else if (picker == "ice") {
        images.src = "img/Rengoku.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Rengoku.jpg";
        alert("Ini adalah gambar Rengoku");
    } else {
        alert("Gagal");
    }
}