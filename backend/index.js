const express =require("express");
const app =express();
const cors =require("cors");
const routes =require("./routes/index")



const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/api",routes)






app.listen(PORT,()=>{
    console.log(`server listening on port no ${PORT}`);
})