const express = require('express');

const validate = require('../../middlewares/validate');
// const firebaseAuth = require('../../middlewares/firebaseAuth');
const userValidation = require('../../validations/user.validation');

const {userController} = require('../../controllers');
const {fileUploadService} = require('../../microservices');

const router = express.Router();

// for updating userDetails
router.patch(
  '/updateDetails',
  fileUploadService.multerUpload.single('profilePic'),
  validate(userValidation.updateDetails),
  userController.updateUser
);

// for updating specific user preferences
router.patch('/updatePreferences', validate(userValidation.updateUserPreferences), userController.updatePreferences);

// for deleting a user
router.delete('/:userId', validate(userValidation.deleteUser), userController.deleteUser);

// to soft delete a user
router.post('/delete/:userId', validate(userValidation.deleteUser), userController.softDeleteUser);

module.exports = router;
