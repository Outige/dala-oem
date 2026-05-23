const quoteForm = document.querySelector("#quoteForm");
const formStatus = document.querySelector("#formStatus");
const productInterest = document.querySelector("#productInterest");
const currentYear = document.querySelector("#year");
const heroImage = document.querySelector(".hero-media img");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

heroImage?.addEventListener("error", () => {
  heroImage.classList.add("is-missing");
});

document.querySelectorAll(".product-request").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;

    if (productInterest && product) {
      productInterest.value = product;
      clearFieldError(productInterest);
    }

    document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => productInterest?.focus(), 450);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId && document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const requiredMessages = {
  fullName: "Enter your full name.",
  companyName: "Enter your company name.",
  email: "Enter a valid email address.",
  phone: "Enter a phone or WhatsApp number.",
  country: "Enter your country.",
  buyerType: "Select your buyer type.",
  productInterest: "Select a product interest.",
  projectType: "Select a project type."
};

quoteForm?.querySelectorAll("[required]").forEach((field) => {
  field.addEventListener("input", () => clearFieldError(field));
  field.addEventListener("change", () => clearFieldError(field));
});

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const requiredFields = [...quoteForm.querySelectorAll("[required]")];
  const invalidFields = requiredFields.filter((field) => !isValidField(field));

  requiredFields.forEach((field) => {
    if (isValidField(field)) {
      clearFieldError(field);
    } else {
      setFieldError(field, requiredMessages[field.name] || "This field is required.");
    }
  });

  if (invalidFields.length > 0) {
    invalidFields[0].focus();
    return;
  }

  const formData = new FormData(quoteForm);
  const quoteRequest = Object.fromEntries(formData.entries());

  console.log("Dala quote request", quoteRequest);

  formStatus.textContent = "Your quote request has been captured. Connect this form to your preferred email, CRM, or form service before launch.";
  formStatus.classList.add("is-visible");
  formStatus.focus?.();
  quoteForm.reset();
});

function isValidField(field) {
  if (field.type === "email") {
    return field.validity.valid && field.value.trim().length > 0;
  }

  return field.value.trim().length > 0;
}

function setFieldError(field, message) {
  const error = document.querySelector(`#${field.id}Error`);

  field.setAttribute("aria-invalid", "true");

  if (error) {
    error.textContent = message;
  }
}

function clearFieldError(field) {
  const error = document.querySelector(`#${field.id}Error`);

  field.removeAttribute("aria-invalid");

  if (error) {
    error.textContent = "";
  }
}
