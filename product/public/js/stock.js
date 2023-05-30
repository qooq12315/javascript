let selectedElement = document.querySelector('#stockSelect')

fetch(new Request('codeSearch.json'))
    .then((response) => {
        return response.json()
    }).then((r) => {
        r.forEach(element => {
            let name = element.name
            let code = element.code
            let stockName = `${code}-${name}`
            let optionElement = document.createElement("option")
            optionElement.value = code
            optionElement.innerText = stockName
            selectedElement.appendChild(optionElement)
        });
    })

let formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    //取股票ID
    let stockId = selectedElement.value
    if (stockId.length > 4) {
        return
    }

    //取得年月
    let monthElement = document.querySelector('input[type="month"]')
    let fullDateString = monthElement.value
    fullDateString = fullDateString.replace("-", "")
    console.log(fullDateString + "01")

    let url = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${fullDateString}01&stockNo=${stockId}`

    console.log(url)
    fetch(new Request(url))
        .then((response) => {
            return response.json()

        }).then((r) => {
            console.log(r)
            let tbodyElement = document.querySelector('tbody')
            let rowHtmlString = ""

            r.data.forEach(array => {

                rowHtmlString += "<tr>"
                rowHtmlString += `<td>${array[0]}</td>`
                rowHtmlString += `<td>${array[1]}</td>`
                rowHtmlString += `<td>${array[2]}</td>`
                rowHtmlString += `<td>${array[3]}</td>`
                rowHtmlString += `<td>${array[4]}</td>`
                rowHtmlString += `<td>${array[5]}</td>`
                rowHtmlString += `<td>${array[6]}</td>`
                rowHtmlString += `<td>${array[7]}</td>`
                rowHtmlString += `<td>${array[8]}</td>`
                rowHtmlString += "</tr>"
            })
            tbodyElement.innerHTML = rowHtmlString
        })
})

