const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors())

const host = 3500
let idx = 1 

app.use(express.json())
let quotes=[]

app.post('/createPost' , (req,res)=>{
    const post={
        id :idx,
        Quote : req.body.Quote,
        Name : req.body.Name
        
    }
    idx=idx+1
    quotes.push(post)
    res.status(201).json(post)
    console.log(qoutes)
    
})


app.get('/getAllPost' , (req,res)=>{
    res.json(quotes)
})

app.get('/getPost/:id' , (req,res)=>{
    for(let index=0 ; index<quotes.length ; index++){
        const element = quotes[index];
        if(element.id==req.params.id){
            res.json(element)
            return;
        }
    }
})

app.patch('/editPost/:id' , (req,res) =>{
    for(let index =0 ; index<quotes.length ; index++){
        const element = quotes[index];
        if(element.id==req.params.id){
            element.Quote = req.body.Quote
            element.Name =req.body.Name
            
            res.json(element)

            return;
        }
    }
    res.json({
        "msg" : "no post with id found"

    })
    console.log(req.params.id) 

})

app.delete('/deletepost/:id' , (req,res)=>{
    for(let index= 0 ; index<quotes.length ; index ++){
        const element = quotes[index];
        if(element.id==req.params.id){
            quotes.splice(index,1)
            res.json(element)
            return;
        }

    }
    res.json({
        "msg" : "no post with id found"
    })
    console.log(req.params.id)
})


app.listen(host,()=>{
    console.log("server started.......")
})