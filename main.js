function verificar() {

    let idade =
    Number(document.getElementById("idade").value);

    let time =
document.getElementById("time").value;

    if (idade >= 18) {
        alert("Você é maior de idade");
    }
    else {
        alert("Você é menor de idade");
    }

    if (time == "Santos") {
        alert("Você torce para o Santos");
    }

    if (time == "Santos" || time == "Barcelona") {
        alert("Você torce para Santos OU Barcelona");
    }

    if (idade >= 18 && time == "Santos") {
        alert("Você é maior de idade E santista");
    }

}