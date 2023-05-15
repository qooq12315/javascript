var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>系統維護中</h2>';
msg += '伺服器更新中';
msg += '123123123</div>';

let element = document.createElement('div');
element.setAttribute('id', 'note');
element.innerHTML = msg;
document.body.appendChild(element);

document.getElementById('close').addEventListener('click', (event) => {
    document.body.removeChild(element);

})