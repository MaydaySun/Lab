/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

//在其他题完成后开始运行（防止被割裂）
function testTime(){
    let value = 1;
	let count = 0;
    console.log(value + "\n");
	const t = window.setInterval(function exe(){
        count++;
        value *= 2;
        console.log(value + " ");
        if (new Date().getSeconds() === 0 || count === 10){
            window.clearInterval(t);
            console.log("count:" + count + " ; time:" + count * 5 + "s");
        }
    },5000);
}


/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
testMail("13917735510","15642@AA.edu-1.cn")
function testMail(telephone,mail) {
    //value1匹配1开头的11位数字；value2匹配一位及以上数字、字母、划线，一个@符号，一位及以上数字、字母、划线，任意位(.数字字母划线,如.163)，一位(.两位及以上小写字母,如.com、.cn)
    let value1 = telephone.match("1[0-9]{10}$") ? "right" : "wrong" , value2 = mail.match("^[a-zA-Z0-9_-]+@[a-zA-z0-9_-]+([\.]{1}[a-zA-z0-9_-]+)*[\.]{1}[a-z]{2,}$") ? "right" : "wrong";
    let result = "The telephone is " + value1 + " and the mail is " + value2;
    console.log(result);
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
testRedundancy("is iS Is and is IS IS iS IS Is iS A A a b B b");
function testRedundancy(str) {
    let strArr = str.split(" ");
    let resultArr = new Array();
    for (let i = 0; i < strArr.length - 1; i++) {
        const pattern = new RegExp("^" + strArr[i],"gi");
        if(pattern.test(strArr[i+1]))
            resultArr.push(strArr[i] + " " + strArr[i+1]);
    }
    let result = resultArr.length <= 10 ? new Set(resultArr) : new Set(compared(resultArr).slice(0,10));
    console.log(result.valueOf());
}
//比较arr中的首字母并排序、去重,返回新数组
function compared(arr) {
    let resultArr = arr.slice(0,arr.length);
    for (let i = 0; i < resultArr.length; i++) {
        for (let j = 0; j < resultArr.length; j++){
            if (i != j  && resultArr[i] === resultArr[j])
                resultArr.delete(j);
            
            if(resultArr[i].charAt(0) < resultArr[j].charAt(0)) {
                const tool = resultArr[i];
                resultArr[i] = resultArr[j];
                resultArr[j] = tool;
            }
        }

    }
    return resultArr;
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
testKeyBoard("7_This_is_a_test","_hs_s_a_es");
function testKeyBoard(wantInput, actualInput) {
    let brokenKeySet = new Set();
    //忽略大小写,分成数组
    const wantInputArray = wantInput.toUpperCase().split(""),actualInputArray = actualInput.toUpperCase().split("");
    //Set去重，Array装载去重后的字符串，并循环比较两个Array
    const wantInputKeyArray = Array.from(new Set(wantInputArray)),actualInputKeyArray = Array.from(new Set(actualInputArray));
    for (let i = 0;i < actualInputKeyArray.length;i++){
        if (!actualInputKeyArray.includes(wantInputKeyArray[i])){
            brokenKeySet.add(wantInputKeyArray[i])
        }
    }
    console.log(brokenKeySet.valueOf());
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
testSpecialReverse("  aa   a  b c");
function testSpecialReverse(str) {
    const trimmedStr = str.trim();
    let result = new Array();
    let strArray = trimmedStr.split(new RegExp("\\s+"));
    for (let word of strArray) {
        //逐步头部插入实现反向
        result.unshift(word);
    }
    //用join方法以空格分隔形式输出
    console.log(result.join(" "));
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/
twoSum([1,2,3,4,0],3);
function twoSum(nums, target) {
    let resultMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        //向后查找符合条件的整数
        if (nums.slice(i+1).indexOf(target - nums[i]) > -1)
            //用前一个索引作key，后一个索引作value，表示一个索引对应一个结果索引
            resultMap.set(i,nums.slice(i+1).indexOf(target - nums[i]) + i+1)
    }
    Array.from(resultMap).forEach(function (value) {
            console.log("[" + value + "]");
    });
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
lengthOfLongestSubstring("acbbbb");
function lengthOfLongestSubstring(str) {
    let maxlength = 1,length = 1,map = new Map(),strArray = str.split("");
    for (let i = 0;i < strArray.length;i++) {
            map.set(i,strArray[i]);
            if (i > 0 && (map.get(i) !== map.get(i - 1)))
                length += 1;
            else
                length = 1;
            if (length > maxlength)
                maxlength = length;
    }
    console.log(maxlength);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

//借用构造函数
    function DevelopingCountry() {
        Country.call(this)
    }
    DevelopingCountry.prototype.sayHi = function () {
        console.log("Hi,i am a developing country.")
    };
    function PoorCountry() {
        Country.call(this)
    }
    PoorCountry.prototype.saySad = function () {
        console.log("I am a sad poor country")
    };
    function DevelopedCountry() {
        Country.call(this)
    }
    DevelopedCountry.prototype.sayHappy = function () {
        console.log("I am a Happy developed country")
    };
    let China = new DevelopingCountry(),US = new DevelopedCountry(),Africa = new PoorCountry();
    China.sayHi();Africa.saySad();US.sayHappy();


//原型链
    function DevelopingCountry() {}
    DevelopingCountry.prototype = new Country();
    DevelopingCountry.prototype.sayHi = function () {
        console.log("Hi,i am a developing country.")
    };
    function PoorCountry() {}
    PoorCountry.prototype = new Country();
    PoorCountry.prototype.saySad = function () {
        console.log("I am a sad poor country")
    };
    function DevelopedCountry() {}
    DevelopedCountry.prototype = new Country();
    DevelopedCountry.prototype.sayHappy = function () {
        console.log("I am a Happy developed country")
    };
    China = new DevelopingCountry();US = new DevelopedCountry();Africa = new PoorCountry();
    China.sayHi();Africa.saySad();US.sayHappy();

//Object.create
    function DevelopingCountry() {
        let clone = Object.create(new Country());
        clone.sayHi = function () {
            console.log("Hi,i am a developing country.")
        };
        return clone;
    }
    function PoorCountry() {
        let clone = Object.create(new Country());
        clone.saySad = function () {
            console.log("I am a sad poor country.")
        };
        return clone;
    }
    function DevelopedCountry() {
        let clone = Object.create(new Country());
        clone.sayHappy = function () {
            console.log("I am a Happy developed country.")
        };
        return clone;
    }
    China = new DevelopingCountry();US = new DevelopedCountry();Africa = new PoorCountry();
    China.sayHi();Africa.saySad();US.sayHappy();

testTime();