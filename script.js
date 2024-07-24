const cronometro = document.getElementById("cronometro")
const btnIniciar = document.getElementById("btnIniciar")
const btnPausar = document.getElementById("btnPausar")
const btnZerar = document.getElementById("btnZerar")

let min = 0
let seg = 0
let meuInterval;

function updateCronometro() {
    seg += 1
    if (seg > 59) {
        seg = 0
        min += 1
        cronometro.innerText = `${(min<10?"0"+min:min)}:${(seg<10?"0"+seg:seg)}`
    } else {
        cronometro.innerText = `${(min<10?"0"+min:min)}:${(seg<10?"0"+seg:seg)}`
    }
}

let iniciou = false //var de controle para checar se já foi iniciado
btnIniciar.addEventListener("click", (evt) => {
    if (!iniciou) {
        btnIniciar.innerText = "INICIAR"
        meuInterval = setInterval(updateCronometro, 1000)
    }
    iniciou = true
})

btnPausar.addEventListener("click", (evt) => {
    if (iniciou) {
        clearInterval(meuInterval)
        cronometro.innerText = `${(min<10?"0"+min:min)}:${(seg<10?"0"+seg:seg)}`
        btnIniciar.innerText = "RETOMAR"
        iniciou = false
    }
})

btnZerar.addEventListener("click", (evt) => {
    min = 0
    seg = 0
    cronometro.innerText = `${(min<10?"0"+min:min)}:${(seg<10?"0"+seg:seg)}`
    btnIniciar.innerText = "INICIAR"
    iniciou = false
    clearInterval(meuInterval)
})