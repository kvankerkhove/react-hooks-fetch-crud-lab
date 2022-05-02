import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  function handleNewQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDelete(questionID){
    const updatedQuestions = questions.filter(question => question.id !== questionID)
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleNewQuestion={handleNewQuestion}/> : <QuestionList handleDelete={handleDelete} questions={questions} />}
    </main>
  );
}

export default App;
