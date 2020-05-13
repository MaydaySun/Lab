const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
for (let i = 0 ;i < works.length;i++){
    let str = "";
    str += "<div class='item'>";
    str += "<h4>Genre : " + works[i].tips + "</h4>";
    str += "<div class='inner-box'><h3 class='author'>" + works[i].author + "</h3>" + "<h5>" + "lifetime:" + works[i].lifetime + "</h5></div>";
    str += "<div class='inner-box'>" + "<h3>Popular Photos</h3>";
    for (let j = 0;j < works[i].photos.length;j++) {
        str += "<img class=\"photo\" src=" + works[i].photos[j] + ">";
    }
    str += "</div>" + "<button>Visit</button>" + "</div>";
    document.write(str);
    let h5Group = document.querySelectorAll(".item div h5");
    let authors = document.querySelectorAll(".author");
    for (let k = 0; k < h5Group.length; k++) {
        h5Group[k].style = "display:inline;margin-left:1em";
        authors[k].style = "display:inline";
    }
}