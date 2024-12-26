function mostrarModal () {
    const button = document.getElementById("#showModal")
    const modalContainer = document.querySelector(".modal__register")

    button.addEventListener('click', () => {
        modalContainer.showModal()
    })
}



mostrarModal()