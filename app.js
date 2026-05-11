const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector(".faq-answer");
        const isOpen = faqItem.classList.contains("active");

        faqItem.classList.toggle("active");
        question.setAttribute("aria-expanded", !isOpen);

        if (isOpen) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
