//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref);
function showWindowHref(){
    const URL_VALUE = url.value;
    const ARR1 = URL_VALUE.split("?");//获取若干(字符串)和(各参数)组成的字符数组
    const ARGS = ARR1[ARR1.length-1].split("&");//获取ARR1中的各(参数)组成的字符数组
    let name_index = -1,name_value = "NONAME";
    for (let i = 0;i < ARGS.length;i++){
        if (ARGS[i].indexOf("name=") !== -1){
            name_index = ARGS[i].indexOf("name=");
            name_value = ARGS[i].substr(name_index + 5);
        }
    }
    url_result.value = name_value;
}
//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
mul.value = 1;
let count = 0;
const t = window.setInterval(timeTest,5000);
function timeTest(){
    mul.value *= 2;
    count++;
    if (new Date().getSeconds() === 0 || count === 10){
        window.clearInterval(t);
    }
}


//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr(){
    const STRING_VALUE = most.value;
    let maxCount = 0,mostIndex = -1;
    for (let i = 0;i < STRING_VALUE.length;i++){
        let count = 1;
        let toCount = true;//判断是否计数
        for (let frontIndex = 0;frontIndex < i;frontIndex++){
            if (STRING_VALUE.charAt(frontIndex) === STRING_VALUE.charAt(i))
                toCount = false;//若之前的字符有相同的，则不再计数
        }
        if (toCount){
            for (let behindIndex = i + 1;behindIndex < STRING_VALUE.length;behindIndex++){
                if (STRING_VALUE.charAt(behindIndex) === STRING_VALUE.charAt(i))
                    count++;//逐步对之后的字符比较，相同则计数+1
            }
            if (count > maxCount){
                maxCount = count;
                mostIndex = i;
            }
        }
    }
    result.value = "The most character is:" + STRING_VALUE.charAt(mostIndex) + " times:" + maxCount;
}
