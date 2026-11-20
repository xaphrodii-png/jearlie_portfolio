// Front-end demonstration only; this form does not send or store messages.
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formNote.textContent = "Thanks for your message. This demo form is not connected to an inbox yet.";
    contactForm.reset();
  });
}
