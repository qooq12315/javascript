let oneElement = document.getElementById('one');
let innerHTML_string = oneElement.innerHTML
oneElement.innerHTML = '<a href=\"http://www.google.com\">' +innerHTML_string + '</a>'