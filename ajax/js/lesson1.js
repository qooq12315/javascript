let sarea_array = []
let sareaElement = document.getElementById('sarea');
let areaNameElement = document.getElementById('areaName')
let tbodyElement = document.getElementById('tbody')
let youbikedata;

sareaElement.addEventListener('change', (event) => {
    let selectedIndex = sareaElement.selectedIndex;
    selectedValue = sareaElement.options[selectedIndex].value
    if (sarea_array.includes(selectedValue)) {
        //console.log(`行政區:${selectedValue}`)
        areaNameElement.innerText = selectedValue
        let trHTML = ""//行政區內的html資訊
        youbikedata.forEach(element => {

            if (element.sarea == selectedValue) {
                trHTML += "<tr>"
                trHTML += "<td>" + element.sna + "</td>"
                trHTML += "<td>" + element.ar + "</td>"
                trHTML += "<td>" + element.tot + "</td>"
                trHTML += "<td>" + element.bemp + "</td>"
                trHTML += "<td>" + element.act + "</td>"
                trHTML += "</tr>"
            }
        });
        tbodyElement.innerHTML = trHTML
    }
});

function reqListener() {
    youbikedata = JSON.parse(this.responseText)
    for (const youbike of youbikedata) {
        sarea_array.push(youbike.sarea)
    }
    sarea_array = [...new Set(sarea_array)]
    let optionElement = document.createElement('option')
    optionElement.textContent = '請選擇行政區'
    sareaElement.appendChild(optionElement)
    for (const area of sarea_array) {
        let optionElement = document.createElement('option')
        optionElement.textContent = area
        optionElement.setAttribute('value', area)
        sareaElement.appendChild(optionElement)
    }
}

const windowload = (event) => {
    console.log('網頁已經全部被載入');
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}

window.addEventListener('load', windowload)