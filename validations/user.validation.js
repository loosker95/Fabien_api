const {check, validationResult } = require('express-validator')


const insertUserValidate = [
        check('name').notEmpty().withMessage('name is required'),
        check('username').notEmpty().withMessage('username is required')
        .isLength({min: 3}).withMessage('Usernname must be at least 3 characters')
        .isAlphanumeric().withMessage('Username must be alphanumeric')
        .not().isNumeric().withMessage('username can not be only numeric'),
        check('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email'),
        check('phone').notEmpty().withMessage('phone is required')
    ]

const updateUserValidate = () =>{
    return [
        check('name').notEmpty().withMessage('name is required'),
        check('username').notEmpty().withMessage('username is required').isLength({min: 3}).withMessage('Usernname must be at least 3 characters'),
        // check('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email'),
        // check('phone').notEmpty().withMessage('phone is required'),
    ]
}

module.exports = {insertUserValidate, updateUserValidate}
// module.exports = {validate}
