// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = '../../assets/images/tinder/LINE_ALBUM_220904_0.jpg';



// imgArray[0];
// document.getElementById(element).src = imgArray[0].src;


// document.write('<img src="">');


// for (let i; 0 < i < 33; i ++) {
//     var randomNumber = Math.floor(Math.random() * 33);

// }

// var randomNumber = Math.floor(Math.random() * 33);
// console.log(randomNumber);



// document.getElementById("element").innerHTML = randomNumber;
// console.log("randomNumber");


//この部分で全ての画像を埋め込む部分のHTMLタグを読み込む　
//この値は基本的に動かさない
const ele_1 = document.querySelector(".pair-content1");
const ele_2 = document.querySelector(".pair-content2");

const ele_3 = document.getElementById("elemet3");
const ele_4 = document.getElementById("elemet4");
const ele_5 = document.getElementById("elemet5");
const ele_6 = document.getElementById("elemet6");
const ele_7 = document.getElementById("elemet7");
const ele_8 = document.getElementById("elemet8");
const ele_9 = document.getElementById("elemet9");
const ele_10 = document.getElementById("elemet10");
const ele_11 = document.getElementById("elemet11");
const ele_12 = document.getElementById("elemet12");
const ele_13 = document.getElementById("elemet13");
const ele_14 = document.getElementById("elemet14");
const ele_15 = document.getElementById("elemet15");
const ele_16 = document.getElementById("elemet16");
const ele_17 = document.getElementById("elemet17");
const ele_18 = document.getElementById("elemet18");
const ele_19 = document.getElementById("elemet19");
const ele_20 = document.getElementById("elemet20");
const ele_21 = document.getElementById("elemet21");
const ele_22 = document.getElementById("elemet22");
const ele_23 = document.getElementById("elemet23");
const ele_24 = document.getElementById("elemet24");
const ele_25 = document.getElementById("elemet25");
const ele_26 = document.getElementById("elemet26");
const ele_27 = document.getElementById("elemet27");
const ele_28 = document.getElementById("elemet28");
const ele_29 = document.getElementById("elemet29");
const ele_30 = document.getElementById("elemet30");
const ele_31 = document.getElementById("elemet31");
const ele_32 = document.getElementById("elemet32");
const ele_33 = document.getElementById("elemet33");
const ele_34 = document.getElementById("elemet34");

//この下の部分からランダムに数字を要素分、３４個分数字を生成する部分

    // 作成する配列の個数
    const n = 34;

    // ランダムな5個の整数1桁の配列を生成し重複を削除
    let arr = Array.from(new Set(Array(n).fill().map(x => ~~(Math.random() * 34))));


    // 除去後の配列の個数
    let m = n - arr.length;

    if (m != 0) {
    // 配列の個数がnになるまで実行
        for (let m; arr.length < n;) {
        // 配列を結合して、再度、重複を削除
        arr = Array.from(new Set([...arr, ...Array(m).fill().map(x => ~~(Math.random() * 34))]));
        }
    }


//ここから次の動作

function move1(arr) {
    for (let i  = 0; i < arr.length; i++) {
        console.log(`これがクラスに追加する名前の語尾につく= ${arr[i]}`);
        console.log(arr[i]);

        //ここまでは33回動作を繰り返す処理が完璧に行われている
        
        ele_1.classList.add(`element${arr[i]}`);


        // arr.forEach(function(ele_1){
        //     console.log(arr[i]);
        //     ele_1.classList.add(`element${arr[i]}`);
        // });


        // ele_1.forEach(function (element) {
        //     element.classList.add(`element${arr[i]}`);
        // });
    }

}
function move2(arr) {
    for (let i  = 0; i < arr.length; i++) {
        console.log(`これがクラスに追加する名前の語尾につく= ${arr[i]}`);
        console.log(arr[i]);

        //ここまでは33回動作を繰り返す処理が完璧に行われている
        
        ele_2.classList.add(`element${arr[i]}`);

        // arr.forEach(function(ele_1){
        //     console.log(arr[i]);
        //     ele_1.classList.add(`element${arr[i]}`);
        // });


        // ele_1.forEach(function (element) {
        //     element.classList.add(`element${arr[i]}`);
        // });
    }

}


// 実行部分
move1(arr);
move2(arr);

