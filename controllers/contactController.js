

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res)=>{
  res.status(200).json({
    message: `Get all contacts`
  })
}

// @desc Get individual contacts
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res)=>{
  res.status(200).json({
    message:`Get contact for ${req.params.id}`
  })
}
// @desc Get individual contacts
// @route POST /api/contacts/:id
// @access public
const createContact = (req,res)=>{
  res.status(200).json({
    message:"Create contact"
  })
}
// @desc update individual contacts
// @route UPDATE /api/contacts/:id
// @access public
const updateContact = (req, res)=>{
  res.json({
    message:`Update contact for ${req.params.id}`
  })
}
// @desc delete individual contacts
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req,res)=>{
  res.json({
    message:`Delete contact for ${req.params.id}`
  })
}
module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}