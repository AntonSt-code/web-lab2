document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // не перезавантажує сторінку

  // Отримуємо значення
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Очищаємо попередні повідомлення
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(msg => msg.textContent = "");

  let isValid = true;

  // Перевірка імені
  if (name === "") {
    showError("name", "Введіть ім’я");
    isValid = false;
  }

  // Перевірка email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    showError("email", "Введіть email");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("email", "Невірний формат email");
    isValid = false;
  }

  // Перевірка повідомлення
  if (message === "") {
    showError("message", "Поле повідомлення не може бути порожнім");
    isValid = false;
  }

  // Якщо все добре
  if (isValid) {
    document.getElementById("successMessage").textContent = "Форма успішно відправлена!";
    this.reset();
  } else {
    document.getElementById("successMessage").textContent = "";
  }
});

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.nextElementSibling.textContent = message;
}
