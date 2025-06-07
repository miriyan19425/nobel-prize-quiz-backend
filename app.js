const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const quizSchema = new mongoose.Schema({
	category: { type: String, required: true },
	question: { type: String, required: true },
	answer: { type: String, required: true } 
});

const Quiz = mongoose.model('Quiz', quizSchema);

function createQuizEntry(req, res){	 
	Quiz.create(req.body).then(data => res.status(201).json({status: "success", data}));
}

function readQuizEntriesByCategory(req, res){
	const {category} = req.params;
	Quiz.find({category})
		 .then(data => res.status(200).json({status: "success", data}));
}

function updateQuizEntry(req, res){
	Quiz.findByIdAndUpdate(req.params.id, req.body)
		 .then(data => res.status(200).json({status: "success", data}));
}

function deleteQuizEntry(req, res){
	Quiz.findByIdAndDelete(req.params.id)
		 .then(() => res.status(204).json({status: "success"}));
}
