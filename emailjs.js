(function () {
  const config = {
    publicKey: "WhZnrWkIM9ip7pSv0",
    serviceId: "service_1zkjral",
    quoteTemplateId: "template_l0upgcr",
    onboardingTemplateId: "template_o19b68s",
    toEmail: "tieg@dala.co.za"
  };

  const placeholderPattern = /^(YOUR_|REPLACE_)/;

  function hasValue(value) {
    return typeof value === "string" && value.trim().length > 0 && !placeholderPattern.test(value);
  }

  function isQuoteConfigured() {
    return hasValue(config.publicKey) && hasValue(config.serviceId) && hasValue(config.quoteTemplateId);
  }

  function isOnboardingConfigured() {
    return hasValue(config.publicKey) && hasValue(config.serviceId) && hasValue(config.onboardingTemplateId);
  }

  function initEmailJS() {
    if (!window.emailjs || !hasValue(config.publicKey)) {
      return;
    }

    window.emailjs.init({
      publicKey: config.publicKey
    });
  }

  function buildTemplateParams(quoteRequest) {
    const productInterest = Array.isArray(quoteRequest.productInterest)
      ? quoteRequest.productInterest.join(", ")
      : quoteRequest.productInterest || "";

    return {
      to_email: config.toEmail,
      subject: `Dala OEM quote request from ${quoteRequest.companyName || quoteRequest.fullName || "website"}`,
      from_name: quoteRequest.fullName || "",
      from_email: quoteRequest.email || "",
      reply_to: quoteRequest.email || "",
      full_name: quoteRequest.fullName || "",
      company_name: quoteRequest.companyName || "",
      email: quoteRequest.email || "",
      phone: quoteRequest.phone || "",
      country: quoteRequest.country || "",
      buyer_type: quoteRequest.buyerType || "",
      product_interest: productInterest,
      project_type: quoteRequest.projectType || "",
      volume: quoteRequest.volume || "",
      packaging: quoteRequest.packaging || "",
      message: quoteRequest.message || "",
      submitted_at: new Date().toLocaleString()
    };
  }

  async function sendQuoteRequest(quoteRequest) {
    if (!window.emailjs) {
      throw new Error("EmailJS did not load. Check the CDN script in index.html.");
    }

    if (!isQuoteConfigured()) {
      throw new Error("EmailJS is missing a service ID or template ID in emailjs.js.");
    }

    return window.emailjs.send(
      config.serviceId,
      config.quoteTemplateId,
      buildTemplateParams(quoteRequest)
    );
  }

  initEmailJS();

  window.DalaEmailJS = {
    config,
    isConfigured: isQuoteConfigured,
    isQuoteConfigured,
    isOnboardingConfigured,
    sendQuoteRequest
  };
})();
