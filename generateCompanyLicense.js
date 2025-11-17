// netlify/functions/generateCompanyLicense.js
// Generates a personalized single-file HTML with embedded license code + expiry.

const fs = require("fs");
const path = require("path");

function generateCode() {
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += Math.floor(Math.random() * 10).toString();
  }
  return code;
}

function generateExpiryISO() {
  const now = new Date();
  const exp = new Date(now);
  exp.setFullYear(exp.getFullYear() + 1);
  return exp.toISOString().slice(0, 10); // YYYY-MM-DD
}

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const templatePath = path.join(__dirname, "..", "company-license-template.html");
    const template = fs.readFileSync(templatePath, "utf8");

    const code = generateCode();
    const expires = generateExpiryISO();

    const filled = template
      .replace(/__LICENSE_CODE__/g, code)
      .replace(/__LICENSE_EXPIRES__/g, expires);

    const filename = `avail-center-CODE-${code}.html`;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`
      },
      body: filled
    };
  } catch (err) {
    console.error("Error generating company license file:", err);
    return { statusCode: 500, body: "error" };
  }
};
