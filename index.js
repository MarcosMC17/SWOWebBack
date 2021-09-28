// import Categories from './categories.js';
const express = require('express')
const app = express()
const port = 3000
const Categories = require("./categories")
const categories = new Categories();
const Subcategories = require("./subcategories")
const subcategories = new Subcategories();
const Questions = require("./questions")
const questions = new Questions();
const Applicants = require("./applicants")
const applicants = new Applicants();

// middleware
app.use(express.json());
app.use(express.urlencoded());


// CATEGORIES
app.get('/categories/', (req, res) => {
  let ret = categories.getCategories();
  console.log("[/categories/] ret: " + ret);
  res.send(ret);
})

app.post('/categories/', (req, res) => {
  console.log(req.body.CatName);
  res.status(201).send(categories.postCategories(req.body.CatName));
})

app.put('/categories/', (req, res) => {
  res.send(categories.putCategories(req.body.IdCat, req.body.CatName));
})

app.delete('/categories/', (req, res) => {
  res.send(categories.deleteCategories(req.body.IdCat));
})

// SUBCATEGORIES
app.get('/subcategories/', (req, res) => {
  let ret = subcategories.getSubcategories();
  console.log("[/subcategories/] ret: " + ret);
  res.send(ret);
})

app.post('/subcategories/', (req, res) => {
  res.send(subcategories.postSubcategories(req.body.SubcatName));
})

app.put('/subcategories/', (req, res) => {
  res.send(subcategories.putSubcategories(req.body.IdSubcat, req.body.SubcatName));
})

app.delete('/subcategories/', (req, res) => {
  res.send(subcategories.deleteSubcategories(req.body.IdSubcat));
})


// QUESTIONS
app.get('/questions/', (req, res) => {
  let ret = questions.getQuestions();
  console.log("[/questions/] ret: " + ret);
  res.send(ret);
})

app.post('/questions/', (req, res) => {
  res.send(questions.postQuestions(req.body.Question, req.body.IdCat, req.body.IdSubcat, req.body.SampleAnswer));
})

app.put('/questions/', (req, res) => {
  res.send(questions.putQuestions(req.body.QId, req.body.Question, req.body.IdCat, req.body.IdSubcat, req.body.SampleAnswer));
})

app.delete('/questions/', (req, res) => {
  res.send(questions.deleteQuestions(req.body.QId));
})


// APPLICANTS
app.get('/applicants/', (req, res) => {
  let ret = applicants.getApplicants();
  console.log("[/applicants/] ret: " + ret);
  res.send(ret);
})

app.post('/applicants/', (req, res) => {
  res.send(applicants.postApplicants(req.body.IntDate, req.body.AppName, req.body.AppPosition, req.body.IntName, req.body.IntPosition, req.body.CodingScore, req.body.stack));
})

app.put('/applicants/', (req, res) => {
  res.send(applicants.putApplicants(req.body.AppID, req.body.IntDate, req.body.AppName, req.body.AppPosition, req.body.IntName, req.body.IntPosition, req.body.CodingScore, req.body.stack));
})

app.delete('/applicants/', (req, res) => {
  res.send(applicants.deleteApplicants(req.body.AppID));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})