const express = require('express');

const app = express();

app.listen(8000);

app.get('/',(req,res )=>{

    // res.send('<p>Home Page One</p>');
    res.sendFile('./views/index.html',{root:__dirname});

});

app.get('/about',(req,res )=>{

    // res.send('<p>Home Page One</p>');
    res.sendFile('./views/about.html',{root:__dirname});

});

app.get('/about-us',(req,res )=>{

    res.redirect('/about');

});

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});