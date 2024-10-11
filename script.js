const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    const header = faq.querySelector('.faq__header');
    header.addEventListener("click", () => {
        faq.classList.toggle("active");

        const answer = faq.querySelector('.answer');
        if (faq.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            header.setAttribute('aria-expanded', 'true');
        } else {
            answer.style.maxHeight = 0;
            header.setAttribute('aria-expanded', 'false');
        }
    });
});
