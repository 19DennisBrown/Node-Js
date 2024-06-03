

const getPersons = (req, res)=>{
  res.status(200).json({
    message:`All persons route`
  })
}

const getPerson=(req,res)=>{
  res.status(200).json({
    message:`${req.params.id} person`
  })
}
const createPerson=(req,res)=>{
  const {name, age} = req.body
  if(!name || !age){
    res.status(400)
    throw new Error("All inputs required")
  }
  res.status(200).json({
    message:req.body
  })
}
const updatePerson=(req,res)=>{
  res.status(200).json({
    message:`${req.params.id} person`
  })
}
const deletePerson=(req,res)=>{
  res.status(200).json({
    message:`${req.params.id} person`
  })
}
module.exports = {getPersons, updatePerson,deletePerson,getPerson,createPerson}