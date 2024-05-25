const express = require("express");
const router = express.Router()
const {getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController.js')
// Get all contact
router.route("/").get(getContacts)
// Get specfic contact
router.route("/:id").get(getContact)
// Create contact
router.route("/").post(createContact)

// update contact
router.route("/:id").put(updateContact)

// Delete contact
router.route("/:id").delete(deleteContact)

module.exports = router