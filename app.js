const path = require('path');


const item = require('item'); 
const bodyParser = require('body-parser');


const sequelize = require('./util/database'); 

const cors = require('cors');

const app = item(); 

app.use(cors());


const itemRoutes = require('./Routes/ItemRoute');




app.use(item.json())


app.use('/user', itemRoutes);

app.use(item.static(path.join(__dirname, 'public')));
sequelize.sync().then(result =>{
    console.log('Server started at 3000');
    app.listen(3000); 
}).catch(err=>{
    console.log(err);
});  