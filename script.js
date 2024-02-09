let aInput = document.getElementById("a")
let bInput = document.getElementById("b")
let solution = document.getElementById("solution")

function calculer() {
    a = aInput.value.toString()
    b = bInput.value.toString()
    if( a === ""|| b === "") {
        alert("veuillez entrer un nombre")
    } else {
        solution.textContent = `PGCD(${a}, ${b}) = ${PGCD(a,b)}`
    }
}

function PGCD(a, b) {
    if (b === 0) {
        return a 
    }
    else {
        return PGCD(b, a % b)
    }
}