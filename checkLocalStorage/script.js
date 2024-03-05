console.log("script.js")

const cubismToken = "Cubism Editor Web Plugin Token"

function check() {
    let data = localStorage.getItem(cubismToken)
    document.getElementById("localStorage").textContent = data
}
