import React from "react";

function QuestionItem({ question, handleDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleOnClick(){
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "Delete"
    })
      .then(res => res.json())
      .then(() => handleDelete(question.id))
  }

  function handleOnChange(e){
    const updatedIndex = {
      correctIndex: e.target.value
    }
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updatedIndex)
    })
      .then(res => res.json())
      .then(data => data)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleOnChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleOnClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
