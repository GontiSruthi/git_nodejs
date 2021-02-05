const data = require('./country states.json');
//console.log(data)
window.onload = function () {
    var countySel = document.getElementById("countySel").value=data[0].countries.country;
    stateSel = document.getElementById("stateSel").value=data[0].countries.states;
    for (var country in data) {
    countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
    stateSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    for (var states in data[this.value]) {
    stateSel.options[stateSel.options.length] = new Option(states, states);
    }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
    }
    }
    