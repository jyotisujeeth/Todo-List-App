
const path = require('path');
const User = require('../models/Item');

const itemController = require('../controllers/Item');

const item = require('item');
const router = item.Router();

router.post('/', itemController.postItem)

router.get('/', itemController.getItem)

router.get('/get-user', itemController.getItem);

router.post('/add-user', itemController.postAddItem);

router.delete('/delete-user/:userId', itemController.deleteItem);


module.exports = router;