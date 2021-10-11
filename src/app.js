const express = require("express");
const cors = require("cors");
const { uuid} = require('uuidv4');

// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {
const {title,url,techs} = req.query
return res.json(preojects)
});

app.post("/repositories", (req, res) => {
  const {title, techs} = req.body
  const {url}= req.params
  const {id} = uuid()

  const repositorie = {id,url,title,techs}
  repositories.push(repositorie)

  return res.json(repositorie)
});

app.put("/repositories/:id", (req, res) => {
  const {id} = req.params
  const {title,url,techs} = req.body

  repositoriesIndex = repositorie.findIndex(repositorie=>repositorie.id === id)

  if(repositoriesIndex<=0){
    return res.status(400).json({error: 'Repositorie not found'})
  }
  const repositorie = {title,url,techs} 
  repositories[repositoriesIndex] =repositorie

  return res.json(repositorie)

});

app.delete("/repositories/:id", (req, res) => {
  const {id} = req.params 
  
  
  repositoriesIndex = repositorie.findIndex(repositorie=>repositorie.id === id)

  if(repositoriesIndex<=0){
    return res.status(400).json({error: 'Repositorie not found'})
  }

  repositories.splice(repositoriesIndex,1)

  return res.json({'Delete':'Sucefully'})

});

app.post("/repositories/:id/like", (req, res) => {
  const {id,like} = req.params
  
  countLike = {...like, }



});

module.exports = app;
