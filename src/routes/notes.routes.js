const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated); //desse jeito, todas as rotas vão passar pelo ensureAuthenticated

notesRoutes.get("/", notesController.index);  
notesRoutes.post("/", notesController.create);    //não precisa colocar o /notes porque está pegando no index.js
notesRoutes.get("/:id", notesController.show);  
notesRoutes.delete("/:id", notesController.delete);    

module.exports = notesRoutes;