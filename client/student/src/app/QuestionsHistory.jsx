import React from 'react';

const QuestionsHistory = (props) => {
  // props.questions has this shape:
  // [
  //   {
  //     'questionId': 3,
  //     'questionText': 'why do cats cross the street',
  //     'difficulty': 10,
  //     'categoryName': 'recursion',
  //     'answer': 'x is the multiple',
  //     'grade': 1,
  //     'answerDate': 123
  //   },
  //   {
  //     'questionId': 1,
  //     'questionText': 'what is the x kdjf',
  //     'difficulty': 10,
  //     'categoryName': 'recursion',
  //     'answer': 'x is the multiple',
  //     'grade': 1,
  //     'answerDate': 456
  //   },
  //   {
  //     'questionId': 2,
  //     'questionText': 'y times kdjf',
  //     'difficulty': 1,
  //     'categoryName': 'logic',
  //     'answer': 'x is the multiple',
  //     'grade': 1,
  //     'answerDate': 789
  //   }
  // ]
  return (
    <div>
    <h3>Inside QuestionsHistory Component</h3>
      {props.questions.map(function(question) {
        return (
          <ul key={question.questionId}>
            <li>Question: {question.questionText}</li>
            <li>Answered On: {new Date(question.answerDate).toLocaleString('en-us')}</li>
            <li>Category: {question.categoryName}</li>
            <li>Difficulty: {question.difficulty}</li>
            <li>Your response: {question.answer}</li>
            <li>Grade: {question.grade}</li>
          </ul>
        );
      })}
    </div>
  );

};

export default QuestionsHistory;