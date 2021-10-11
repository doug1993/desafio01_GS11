const express = require("express");
const cors = require("cors");
//const { uuid} = require('uuidv4');
const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

//function middleware verifyExist() 

app.get("/repositories", (req, res) => {

return res.json(repositories)
});

app.post("/repositories", (req, res) => {
  const {title, techs, url} = req.body
  
  const repository = {id : uuid(), url, title, techs, likes:0}
  repositories.push(repository)

  return res.json(repository)
});

app.put("/repositories/:id", (req, res) => {
  const {id} = req.params
  const {title,url,techs} = req.body

  const repositoryExist = repositories.findIndex(repository=>repository.id === id)

  if(repositoryExist<0){
    return res.status(400).json({error: 'Repository not found'})
  }
  const repository = {id,title,url,techs,likes: repositories[repositoryExist].likes} 
  repositories[repositoryExist] = repository

  return res.json(repository)

});

app.delete("/repositories/:id", (req, res) => {
  const {id} = req.params 
  
  
  const repositoryExist = repositories.findIndex(repository=>repository.id === id)

  if(repositoryExist>=0){
    repositories.splice(repositoryExist,1)
  }
  else{
    return res.status(400).json({error:'Error repository does not exist'})
  }

  return res.status(204).send()

});

app.post("/repositories/:id/like", (req, res) => {
  const {id} = req.params
  like = req.query
  
  const repositoryExist = repositories.findIndex(repository=>repository.id === id)  
  
  if(repositoryExist>=0){
    repositories[repositoryExist].likes++
    }else{
      return res.status(400).json({error:'Error repository does not exist'}) 
    }
  
  
  return res.json(repositories[repositoryExist])

});

module.exports = app;
