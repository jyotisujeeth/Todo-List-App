
const path = require('path')

const User = require('../models/Item')

exports.getExpense =  (req, res, next) => {
  res.sendFile(path.join(__dirname, '../','Views', 'item.html'));
}

exports.postExpense = (req, res, next) => {
  console.log(req.body);
  res.redirect('/user-add-user');
}




exports.get_details = async (req,res,next)=>{
    console.log("Getting details");

    try{
      
     const data =  await User.findAll()
     res.status(201).json(data);
    }
    catch(error) {
      console.log(error);
      res.status(500).json({error:error});
    }
    
   
}

exports.postAddDetails= async(req, res, next) => {
  console.log('adding a user');
  try{
    const item_list = req.body.item_list;
    const Description = req.body.Description;
  

    if(!Categories){
      throw new Error('please enter');
    }

    const data = await User.create({
      item_list: item_list,
      Description: Description,
      
    })
    res.status(201).json({newItemDetails: data});
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:error});
  }
}


exports.deleteItem = async (req,res,next)=>{
  
  try{
    let userId = req.params.userId;
    if(!userId){
      res.status(400).json({error:'id missing'});
    }
    await User.destroy({where:{id:userId}});
    res.sendStatus(200);
    
  }
  catch(error){
    console.log(error);
    res.status(500).json('error Occured');
  };



}