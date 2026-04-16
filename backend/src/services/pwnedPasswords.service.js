// src/services/pwnedPasswords.service.js
import crypto from "node:crypto";

export async function checkPasswordAgainstPwned(password) {
  if (!password || typeof password !== "string") {
    throw new Error("Password is required");
  }

  const sha1 = crypto
    .createHash("sha1")
    .update(password, "utf8")
    .digest("hex")
    .toUpperCase();

  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);

  const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
    headers: {
      "Add-Padding": "true",
      "User-Agent": "password-manager-student-project"
    }
  });

  if (!response.ok) {
    throw new Error(`HIBP request failed: ${response.status}`);
  }

  const body = await response.text();
  const lines = body.split("\n");

  for (const line of lines) {
    const [returnedSuffix, count] = line.trim().split(":");

    if (returnedSuffix?.toUpperCase() === suffix) {
      return {
        pwned: true,
        count: Number.parseInt(count, 10) || 0
      };
    }
  }

  return {
    pwned: false,
    count: 0
  };
}