
const asyncHandler = require("express-async-handler")

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req,res)=>{
  res.status(200).json({
    message:`All contacts.`
  })
})


// @desc Get individual contacts
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req,res)=>{
  res.status(200).json({
    message:`Contacts for ${req.params.id}`
  })
})
// @desc Get individual contacts
// @route POST /api/contacts/:id
// @access public
const createContact = asyncHandler(async (req,res)=>{
  // console.log(req.body)
  const {name, mail} = req.body
  if(!name  || !mail){
    res.status(400)
    throw new Error("All fields are required")
  }
  res.status(200).json({
    message: req.body
  })
})
// @desc update individual contacts
// @route UPDATE /api/contacts/:id
// @access public
const updateContact = asyncHandler(async(req,res)=>{
  res.status(200).json({
    message: `Contact update for ${req.params.id}`
  })
})
// @desc delete individual contacts
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async(req,res)=>{
  res.status(200).json({
    message:`Delete contact for ${req.params.id}`
  })
})
module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}