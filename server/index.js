require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 4000;
<<<<<<< HEAD
const host = 'localhost';
=======
const host = '127.0.0.1';
>>>>>>> 51752ad40471cd4f55fb9f82421a89d550e3b97a

app.listen(PORT,()=>{
    console.log(`Server is running on http://${host}:${PORT}`);
})
