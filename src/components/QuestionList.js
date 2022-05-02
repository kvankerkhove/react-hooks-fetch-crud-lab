import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDelete}) {
  const questionItems = questions.map((question) => {
    return <QuestionItem key={question.id} handleDelete= {handleDelete} question={question}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
