const quoteForm = document.querySelector("#quoteForm");
const formStatus = document.querySelector("#formStatus");
const productInterest = document.querySelector("#productInterest");
const currentYear = document.querySelector("#year");
const heroImage = document.querySelector(".hero-media img");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primaryNav");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

heroImage?.addEventListener("error", () => {
  heroImage.classList.add("is-missing");
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  primaryNav?.classList.toggle("is-open", !isOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMobileMenu());
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!primaryNav?.classList.contains("is-open")) {
    return;
  }

  const clickTarget = event.target;

  if (clickTarget instanceof Node && !primaryNav.contains(clickTarget) && !menuToggle?.contains(clickTarget)) {
    closeMobileMenu();
  }
});

document.querySelectorAll(".product-request").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;

    if (productInterest && product) {
      const productCheckbox = [...productInterest.querySelectorAll("input")].find((field) => field.value === product);

      if (productCheckbox) {
        productCheckbox.checked = true;
      }

      clearFieldError(productInterest);
    }

    document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => productInterest?.querySelector("input")?.focus(), 450);
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
  productInterest: "Select one or more product interests.",
  projectType: "Select a project type."
};

quoteForm?.querySelectorAll("[required]").forEach((field) => {
  field.addEventListener("input", () => clearFieldError(field));
  field.addEventListener("change", () => clearFieldError(field));
});

quoteForm?.querySelectorAll("[data-required-checkbox-group] input").forEach((field) => {
  field.addEventListener("change", () => clearFieldError(field.closest("[data-required-checkbox-group]")));
});

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const requiredFields = [
    ...quoteForm.querySelectorAll("[required]"),
    ...quoteForm.querySelectorAll("[data-required-checkbox-group]")
  ];
  const invalidFields = requiredFields.filter((field) => !isValidField(field));

  requiredFields.forEach((field) => {
    if (isValidField(field)) {
      clearFieldError(field);
    } else {
      setFieldError(field, requiredMessages[field.name || field.id] || "This field is required.");
    }
  });

  if (invalidFields.length > 0) {
    focusInvalidField(invalidFields[0]);
    return;
  }

  const formData = new FormData(quoteForm);
  const quoteRequest = Object.fromEntries(formData.entries());
  quoteRequest.productInterest = formData.getAll("productInterest");

  console.log("Dala quote request", quoteRequest);

  formStatus.textContent = "Your quote request has been captured. Connect this form to your preferred email, CRM, or form service before launch.";
  formStatus.classList.add("is-visible");
  formStatus.focus?.();
  quoteForm.reset();
});

function isValidField(field) {
  if (field.matches?.("[data-required-checkbox-group]")) {
    return Boolean(field.querySelector("input:checked"));
  }

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
  if (!field) {
    return;
  }

  const error = document.querySelector(`#${field.id}Error`);

  field.removeAttribute("aria-invalid");

  if (error) {
    error.textContent = "";
  }
}

function focusInvalidField(field) {
  if (field.matches?.("[data-required-checkbox-group]")) {
    field.querySelector("input")?.focus();
    return;
  }

  field.focus();
}

function closeMobileMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  primaryNav?.classList.remove("is-open");
}
