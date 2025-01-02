function handleModal () {
    const button1 = document.querySelector(".header__button");
    const button2 = document.querySelector(".faq__left__button");
    const modalContainer = document.querySelector(".modal__container");
    const buttonClose = document.querySelector(".modal__register__button--close")


    button1.addEventListener('click', () => {
        modalContainer.showModal();
    });

    button2.addEventListener('click', () => {
        modalContainer.showModal();
    });

    buttonClose.addEventListener('click', () => {
        modalContainer.close();
    });
}

handleModal();