const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(express.static("public"));
var items = ["wake up"];
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.get("/",function(req,res){
    var today = new Date();
    var currentday = today.getDay();

     var options={
        weekday: 'long',
        day: 'numeric',
        month: 'long'
};

    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{kindofday:day, newsitem:items});
     
    
});
app.post("/",function(req,res){
    var item = req.body.n;
    items.push(item);
    res.redirect("/");
})


app.listen(process.env.PORT,function(){
    console.log("server has started");
})