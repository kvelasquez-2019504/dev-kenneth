// Script para generar navegación tipo slide entre hobbies con botones dinámicos
// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded",function(){
    const listHobbies = []; // Almacena los hobbies detectados
    let id =1;
    // Recorre cada card de hobby y extrae su nombre, asignando un índice único
    document.querySelectorAll(".hobby-card").forEach(function(card) {
        card.querySelectorAll("h2").forEach(function(h2) {
            card.setAttribute("data-index", id);
            card.setAttribute("data-nombre",h2.textContent);
            listHobbies.push({
                index: id,
                nombre: h2.textContent
            });
            id++;
        });
    })
    // Selecciona el contenedor de botones
    const btnCards = document.querySelectorAll(".btn-cards");
    // Por cada hobby, crea un botón de navegación
    listHobbies.forEach(function(btn_hobby) {
        let btn = document.createElement("button");
        btn.textContent = btn_hobby.nombre;
        btn.classList.add("btn-hobby");
        btnCards[0].appendChild(btn);
        // Evento: al hacer click, muestra solo la card correspondiente
        btn.addEventListener("click", function() {
            document.querySelectorAll(".hobby-card").forEach(function(card) {
                if (card.getAttribute("data-index") == btn_hobby.index) {
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }
            });
        });
    })
})