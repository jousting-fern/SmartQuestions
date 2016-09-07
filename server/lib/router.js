var router = require('express').Router();
var controller = require('./controller');

//allow teachers to submit question sets
router.post('/teacher/questions', controller.teacher.submitQuestions);
router.get('/teacher/questions', controller.teacher.retrieveAllQuestions);

//allow students to get and post personalized questions
router.get('/student/questions', controller.student.retrieveQuestions);
router.post('/student/questions', controller.student.respondOne);

router.get('/test', controller.student.test);


module.exports = router;