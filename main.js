let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll(".slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


//Likes
var botoes = document.querySelectorAll(".like");

		for (var i = 0; i < botoes.length; i++) {
			botoes[i].addEventListener("click", function() {
				var id = this.id;
				if (!localStorage.getItem(id)) {
					localStorage.setItem(id, 0);
				} else {
					var count = parseInt(localStorage.getItem(id));
					count = 1;
					localStorage.setItem(id, count);
				}
				alert("Botão " + id + " clicado " + localStorage.getItem(id) + " vezes.");
			}
      )
    }

// Botao evniar
function enviarFormulario() {
		var nome = document.getElementById("#nome").value;
		window.location.href = "#" + encodeURIComponent(nome);
        console.log(enviarFormulario);
}
