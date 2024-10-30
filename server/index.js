require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 4000;
const host = '0.0.0.0';

app.listen(PORT,()=>{
    console.log(`Server is running on http://${host}:${PORT}`);
})