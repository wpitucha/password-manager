import express from "express";
import securityRoutes from "./routes/security.routes.js";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/security", securityRoutes);

app.get("/", (req, res) => {
  res.send("Backend działa");
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});


// curl -X POST http://localhost:3000/api/security/check-password-breach29? -H "Content-Type: application/json" -d '{"password":"password"}'
// {"success":true,"pwned":true,"count":52256179,"message":"Hasło wystąpiło w publicznych bazach wycieków."}
// Dla bardzo znanych słabych haseł wynik powinien zwrócić pwned: true i wysoki count, bo Pwned Passwords przechowuje liczbę wystąpień dla każdego hasha z korpusu wycieków.