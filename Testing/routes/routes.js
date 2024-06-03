const express = require("express")
const router = express.Router()
import { createPerson, deletePerson, getPerson, getPersons, updatePerson } from "../controllers/controllers"

router.route("/").get(getPersons).post(createPerson)
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson)