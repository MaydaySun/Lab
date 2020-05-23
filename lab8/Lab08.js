/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/
document.getElementsByClassName("arrow_right")[0].addEventListener("click",goRight,false);
document.getElementsByClassName("arrow_left")[0].addEventListener("click",goLeft,false);
let images = document.images;
let footers = document.getElementsByTagName("span");
let footer = document.getElementsByClassName("on")[0];
let auto;
images[1].onmouseleave = startAutoPlay;
images[1].onmouseover = stopAutoPlay;
window.onload = startAutoPlay;
function altGoRight() {
    for (let i = 0 ; i < images.length ; i++){
        let next = parseInt(images[i].alt,10) + 1;
        images[i].alt = next % 6 + Math.floor(next / 6) + "";
    }
}
function altGoLeft() {
    for (let i = 0 ; i < images.length ; i++){
        let previous = parseInt(images[i].alt,10) + 5;
        images[i].alt = previous % 6 + 5 * Math.floor(6 / previous) + "";
    }
}
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
function goRight() {
    altGoRight();
    for (let i = 0 ; i < images.length ; i++){
        images[i].src = images[i].alt + "\.jpg";
    }
    reHighlight();
}
function goLeft() {
    altGoLeft();
    for (let i = 0 ; i < images.length ; i++){
        images[i].src = images[i].alt + "\.jpg";
    }
    reHighlight();
}
function reHighlight() {
    for (let i = 0 ; i < footers.length ; i++){
        footers[i].className = "";
    }
    footers[parseInt(images[1].alt) - 1].className = "on";
}
/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
function startAutoPlay() {
    auto = window.setInterval(goRight,2000);
}
function stopAutoPlay() {
    window.clearInterval(auto);
}

/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/
for (let i = 0 ; i < footers.length ; i++){
    footers[i].addEventListener("click",function () {
        footer = document.getElementsByClassName("on")[0];
        let steps = parseInt(this.innerText) - parseInt(footer.innerText);
        footer.className = "";
        this.className = "on";
        footer = document.getElementsByClassName("on")[0];
        if (steps >= 0){
            for (let j = 0 ; j < steps ; j++){
                altGoRight();
            }
            for (let j = 0 ; j < images.length ; j++){
                images[j].src = images[j].alt + "\.jpg";
            }
        }
        else{
            for (let j = 0 ; j < Math.abs(steps) ; j++){
                altGoLeft();
            }
            for (let j = 0 ; j < images.length ; j++){
                images[j].src = images[j].alt + "\.jpg";
            }
        }

    },false);
}


/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/
//始终提示jquery未定义（放在html里也如此......）
// jquery(document).ready(function () {
//     let jq = jquery.noConflict();
//     jq(document).ready(function () {
//         jq("td").click(function(){
//             let tdValue = jq(this).text();
//             let oInput = jq("<input type = 'text' value = '" + "'\>");
//             jq(this).html(oInput);
//             oInput.focus();
//             oInput.blur(function () {
//                 oInput.parent().html(oInput.val());
//             })
//         });
//     });
// });
//原生js正常运行
let tds = document.getElementsByTagName("td");
for (let i = 0 ; i < tds.length ; i++){
    tds[i].addEventListener("click",changeTd,true);
}
function changeTd() {
    let tdValue = this.innerText;
    this.outerHTML = "<td id='inputTd'><input type='text' value='" + tdValue + "' id='input'></td>";
    let newInput = document.getElementById("inputTd");
    newInput.children[0].focus();
    newInput.children[0].onblur = function () {
        let inputValue = newInput.children[0].value;
        newInput.outerHTML =  "<td name='newTd'>" + inputValue + "</td>";
        let newTd = document.getElementsByName("newTd");
        for (let j = 0 ; j < newTd.length; j++){
            newTd[j].onclick = changeTd;
        }
    };



}



/*********************************************end*************************************/