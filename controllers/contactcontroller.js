const asyncHandler = require('express-async-handler')
// we need this package because in a async function we have catch a user using try catch this package does that job for us and handles the async errors through the error handlers that we have created just wrap every async function in async handler

const Contact = require("../models/contactModel")



// @desc Get All Contacts
// @route get /api/contacts
// @access public

const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})


// @desc Create Contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler( async (req, res) => {
    const {name, email, phone} = req.body
    if (!name ||!email ||!phone ){
        res.status(400)
        throw new Error("All fields are mandatory !")
    }

    const contact = Contact.create({
        name,
        email,
        phone,
    })

    res.status(201).json({ Contact : contact ,message : "Created Contact" })
})

// @desc Get a Contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({message:`get contact for ${req.params.id}`})
})

// @desc Update a Contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({message:`update contact for ${req.params.id}`})
})

// @desc delete a Contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({message:`delete contact for ${req.params.id}`})
})


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}