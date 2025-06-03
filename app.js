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
