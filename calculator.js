var express=require('express');
var app=express();
var bp= require('body-Parser');
var path = require('path');
app.use(bp.urlencoded({extended: true}));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/num.html'));
     console.log("listening at 8080");
});
app.post('/',(req,res)=>
{
    var num1=req.body.number1;
    var num2=req.body.number2;
    var op=req.body.operator;
    var resu=num1+op+num2;
    console.log(num1 + " "+num2+ " "+op);
    /*if(op=='+')
    {
        var resu=num1+num2;
    }
    if(op=='-')
    {
        var resu=num1-num2;
    }*/
    console.log(eval(resu));
    res.end("result is:"+eval(resu));
});app.listen(8080);