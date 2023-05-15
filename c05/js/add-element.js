let newLiElement = document.createElement('li')
let newTextNode = document.createTextNode("12121")
newLiElement.appendChild(newTextNode)
var ulElement = document.getElementsByTagName('ul')[0]
ulElement.appendChild(newLiElement)