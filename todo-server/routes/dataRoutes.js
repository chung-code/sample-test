const express = require('express')
const router = express.Router()
const dataController = require('../controller/dataController_db');; 

//format 
router.get('/test', (req, res) => {
    return res.status(200).send("api call success")
})

router.post('/write', dataController.write)
router.get('/count', dataController.count)
router.get('/list', dataController.list)
router.get('/category', dataController.category)
router.delete('/remove', dataController.remove)

//test
// router.get('/trial', dataController.getProjectData)

module.exports = {
    router
}
