let formElement = document.getElementById('formSignup')
let packageElement = document.getElementById('package')
let packageHintElement = document.getElementById('packageHint')
let termElement = document.getElementById('terms')
let termHintElement = document.getElementById('termsHint')


formElement.addEventListener('submit', (event) => {
    console.log('submitting')
    if (!termElement.checked) {
    termHintElement.innerHTML = '請打勾同意'
        event.preventDefault()
    }
})

packageElement.addEventListener('change', (event) => {
    console.log('changing')
    /*
    for(const option of packageElement.options){
        console.log(option.label)
        console.log(option.value)
    }*/

    let selectedIndex = packageElement.selectedIndex
    if (packageElement.options[selectedIndex].value === 'monthly') {
        packageHintElement.innerHTML = '如果選擇1年,可以省10元美金!'
    } else {
        packageHintElement.innerHTML = '正確的選擇!'

    }
})