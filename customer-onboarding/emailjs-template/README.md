# EmailJS Template

Use this content in your EmailJS email template. It matches the fields sent from `emailjs.js`.

## Template Settings

Subject:

```text
{{subject}}
```

To email:

```text
{{to_email}}
```

Reply to:

```text
{{reply_to}}
```

From name:

```text
{{from_name}}
```

## Email Body

```html
<h2>New Dala OEM Quote Request</h2>

<p>A new quote request was submitted from the Dala OEM website.</p>

<h3>Contact Details</h3>
<p><strong>Name:</strong> {{full_name}}</p>
<p><strong>Company:</strong> {{company_name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Phone / WhatsApp:</strong> {{phone}}</p>
<p><strong>Country:</strong> {{country}}</p>

<h3>Project Details</h3>
<p><strong>Buyer type:</strong> {{buyer_type}}</p>
<p><strong>Product interest:</strong> {{product_interest}}</p>
<p><strong>Project type:</strong> {{project_type}}</p>
<p><strong>Estimated quantity / volume:</strong> {{volume}}</p>

<h3>Packaging Requirements</h3>
<p>{{packaging}}</p>

<h3>Message</h3>
<p>{{message}}</p>

<hr>

<p><strong>Submitted at:</strong> {{submitted_at}}</p>
```

## Variables Sent By The Site

```text
{{to_email}}
{{subject}}
{{from_name}}
{{from_email}}
{{reply_to}}
{{full_name}}
{{company_name}}
{{email}}
{{phone}}
{{country}}
{{buyer_type}}
{{product_interest}}
{{project_type}}
{{volume}}
{{packaging}}
{{message}}
{{submitted_at}}
```


## Email Body (Old Archive)
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```