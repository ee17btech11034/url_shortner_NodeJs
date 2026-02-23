const express = require("express")
const methodHandlers = require("../controllers/user")

const router = express.Router()


router.get("/api/", methodHandlers.getAllUsersAsJson) //router takes handler function as arg. //it won't work right now we need to handle it

router
  .route("/")
  .get(methodHandlers.getAllUsersAsHtml)
  .post(methodHandlers.createUser)

router
  .route("/:id") //we can route all req with same path.
  .get(methodHandlers.getUserById)
  .patch(methodHandlers.updateUserbyId)
  .delete(methodHandlers.deleteUserById)


module.exports = router