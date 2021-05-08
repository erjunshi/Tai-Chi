let html = document.querySelector("#html");  //通过CSS选择器找到html
let style = document.querySelector("#style");
let string = `/*你好，我是一名前端新人
 *接下来我演示一下我的前端功底
 *首先我要准备一个div
*/
   #div1{
       
       width: 200px;
       height: 200px; 
   }
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 49%);

}
/* 加两个球 */
#div1::before{
    width:100px;
    height:100px;
    
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    
    bottom:0;
    left:50%;
    transform: translate(-50%);
    background:#ffffff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = "";
let n = 0;


let step = () => {
    setTimeout(() => {
        console.log(n)

        if (string[n] === "\n") {
            //如果是回车，就照搬
            string2 += "<br>";
        } else if (string[n] === "") {
            //如果不是就不照搬
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        //设置滚动条
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            //如果n不是最后一个，就继续
            // n = n + 1;
            n += 1;
            step();
        } else {
            //最后一个
        }
    }, 10);
};
step();

