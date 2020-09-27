const express = require('express')
const router = express.Router()
const employeeController = require('../controller/employeeController');

// retrieve all employee
router.get('/', employeeController.findAll);
// crete a new employee
router.post('/', employeeController.create);
// retrieve a single employee with id
router.get('/:id', employeeController.findById);
// update a employee with id
router.put('/:id', employeeController.update); // : value berubah/diganti
// delete a employee with id
router.delete('/:id', employeeController.delete); // tdk ada : maka ditulis 

module.exports = router