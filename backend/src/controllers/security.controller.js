// src/controllers/security.controller.js
import { checkPasswordAgainstPwned } from "../services/pwnedPasswords.service.js";

export async function checkPasswordBreach(req, res) {
  try {
    const { password } = req.body;

    if (!password || typeof password !== "string") {
      return res.status(400).json({
        success: false,
        error: "Password is required"
      });
    }

    const result = await checkPasswordAgainstPwned(password);

    return res.status(200).json({
      success: true,
      pwned: result.pwned,
      count: result.count,
      message: result.pwned
        ? "Hasło wystąpiło w publicznych bazach wycieków."
        : "Nie znaleziono hasła w sprawdzanej bazie."
    });
  } catch (error) {
    console.error("Password breach check error:", error);

    return res.status(502).json({
      success: false,
      error: "Nie udało się sprawdzić hasła."
    });
  }
}