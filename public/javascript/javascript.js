const modal = document.querySelector(".modal");
const msgBtn = document.querySelector(".msg-btn");
const closeBtn = document.querySelector(".exit-btn");

if (msgBtn && modal && closeBtn) {
    msgBtn.addEventListener("click", () => {
        modal.showModal();
    })

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.close();
    })
}

