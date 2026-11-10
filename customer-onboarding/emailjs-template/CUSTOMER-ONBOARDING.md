# Customer onboarding EmailJS template

Create a new EmailJS template and use these settings.

## Template settings

**Template name**

```text
Dala COD Account Application
```

**Subject**

```text
{{subject}}
```

**To email**

```text
{{to_email}}
```

**Reply to**

```text
{{reply_to}}
```

**From name**

```text
Dala website — {{company_name}}
```

For the email content, switch the EmailJS editor to HTML/source mode and paste the contents of `customer-onboarding.html`.

## Variables used

The onboarding form already sends all of these variables:

```text
{{to_email}}
{{subject}}
{{reply_to}}
{{full_name}}
{{company_name}}
{{email}}
{{phone}}
{{message}}
{{submitted_at}}
```

`{{message}}` contains the complete application: business and registration details, physical and postal addresses, main and accounts contacts, every director/member, delivery details, marketing preferences, and the signed declaration.

After saving the template, copy its EmailJS Template ID into `config.templateId` in `emailjs.js`. If this template replaces the existing quote-request template, note that both forms currently share that one template ID.
