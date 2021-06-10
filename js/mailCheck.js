const emailIsValid = function (email) {
  const validEmailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  return validEmailRegex.test(email);
};

const deleteExistingErrors = () => {
  const existingMailError = document.querySelector(".mailError");
  const existingMailErrorMobile = document.querySelector(".mailError-mobile");

  existingMailError.remove();
  existingMailErrorMobile.remove();
};

const createErrorElements = (message) => {
  const mailErrorParagraph = document.createElement("p");
  const mailErrorParagraphMobile = document.createElement("p");
  const errorMessage = document.createTextNode(message);
  const errorMessageMobile = document.createTextNode(message);

  mailErrorParagraph.appendChild(errorMessage);
  mailErrorParagraphMobile.appendChild(errorMessageMobile);

  mailErrorParagraph.classList.add("mailError");
  mailErrorParagraphMobile.classList.add("mailError-mobile");

  return {
    mailErrorParagraph: mailErrorParagraph,
    mailErrorParagraphMobile: mailErrorParagraphMobile,
  };
};

const displayError = (errorElements) => {
  const form = document.querySelector(".mail-form");
  form.appendChild(errorElements.mailErrorParagraphMobile);

  const podcastlist = document.querySelector(".podcastlist");
  podcastlist.after(errorElements.mailErrorParagraph);
};

const createErrorMessageByEmail = (email) => {
  let errorMessage = "";

  if (!emailIsValid(email)) {
    errorMessage = "Oops! Please check your email";
  }
  if (email === "") {
    errorMessage = "Oops! Please add your email";
  }

  return errorMessage;
};

const email = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  deleteExistingErrors();
  const errorMessage = createErrorMessageByEmail(email.value);
  const errorElements = createErrorElements(errorMessage);
  displayError(errorElements);
});
