const express = require("express");
const router = express.Router()
const {getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController.js')
// Get all contact // Create contact
router.route("/").get(getContacts).post(createContact)
// Delete contact // get // update
router.route("/:id").delete(deleteContact).get(getContact).put(updateContact)

module.exports = router