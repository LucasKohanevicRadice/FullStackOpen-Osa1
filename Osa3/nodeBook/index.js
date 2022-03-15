

const { response } = require("express")
require('dotenv').config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const res = require("express/lib/response")
const req = require("express/lib/request")
const app = express()
const Person = require('./models/person')
const { findById } = require("./models/person")

app.use(express.json())
app.use(express.static("build"))

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'))
// app.use(morgan("tiny"))
app.use(cors())

  
app.get("/info", (req,res) => {

    const dateTime = new Date()
    console.log(dateTime)
    Person.find({})
    .then(persons => {
    res.send(`<h2>The phonebook has info for ${persons.length} people</h2> ${dateTime}`)
    })

})

app.get("/", (req,res) => {
    res.redirect("/api/persons")
})

app.get("/api/persons", (req, res) => {

    Person.find({}).then(persons => {
        res.json(persons)
    })

})

app.get("/api/persons/:id", (req , res) => {

    const id = req.params.id
    Person.findById(id)
    .then(person => {
        if (person) {
            res.json(person)
        }
        else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

const randomIntegerGenerator = () => {
    return Math.round(Math.random() * 1000)
  }

app.post("/api/persons", (req, res, next) => {
    const body = req.body

    // if (!body.name) {
    //     console.log("error: A name is required")
    //     return res.status(400).json({
    //         error: "A name is required"
    //     })
    // }

    // else if (!body.number) {
    //     console.log("error: A number is required")
    //     return res.status(400).json({
    //         error: "A phonenumber is required"
    //     })
    // }

    const person = new Person ({
        name: body.name,
        number: body.number
    })

    person.save()
    .then(savedPerson => {
        res.json(savedPerson)
        console.log(savedPerson, "added to the phonebook")
    })
    .catch(
        error => next(error)
    )
})

app.delete("/api/persons/:id", (req, res, next) => {

    Person.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end()
    })
    .catch(error => {
        next(error)
    })
})

app.put("/api/persons/:id", (req, res, next) => {

    const body = req.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, {new: true, runValidators: true, context: 'query'})
    .then(updatedPerson => {
        res.json(updatedPerson)
    })
    .catch(error => next(error))
})



const unknownEndpoint = ( request, response ) => {
    response.status(400).send({ error: "unknown endpoint"})
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next ) => {
    console.error(error.message)

    if (error.message === "CastError") {
        return response.status(400).send({ error: "malformatted id"})
    }

    else if  (error.name === "ValidationError") {
        return response.status(400).json({error: error.message})
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})