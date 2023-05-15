let elementTwo = document.getElementById("two");
let  nodeTwo = elementTwo.firstChild

/* 方法一 */
//console.log(nodeTwo.nodeValue)
//nodeTwo.nodeValue = nodeTwo.nodeValue.replace('pine nuts', 'kale')

/* 方法二 */
//nodeTwo.nodeValue = "77777"

/* 方法三 */
elementTwo.innerText = "AAAAA"
