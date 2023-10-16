

//Set up middleware to tell express to parse JSON before the actual data hits the function that handles the request.

// import the express
const express = require('express');
const app = express();

//
const PORT = 8080;

// Use middleware
app.use(express.json()) // Apply express.json middleware to app

// Add an end-point to API
// Run this function when the route is requested
// Req object == incomming data and res== response data and is what we send back.
app.get('/courses', (req, res) => {
    res.status(200).send([{

        courseName: 'Basic Ceramics Course',
        courseDescription: 'An introduction to ceramics where you learn the fundamentals such as handbuilding, wheel throwing, and glazing.',
        prize: '1000 kr',
        numberOfSpots: '10',
        date: 'Sat, 21 oct 10:00-13:00',
        hours: '3h',
        ID: '#001'

    },
    {

        courseName: 'Sculpture Course',
        courseDescription: 'Unleash your creativity in our sculpture course. Shape clay into unique sculptures with hands-on techniques guided by experts.',
        prize: '3000 kr',
        numberOfSpots: '10',
        date: 'Mon, 21 oct 16:00-18:00',
        hours: '3h',
        ID: '#002'
    },
    ]
)

});

// Add a second end-point, a POST-end-point
// POST is used to add new data to the api
app.post('/courses/:ID', (req, res) => {

// We're adding a tshirt and a logo?!
    const { ID } = req.params;
    const { logo } = req.body;

    // If there is no logo
    if(!logo){
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt:`👕 with you ${logo} and ID of ${id}`
    })
})


// Fires up Api on a server by calling app.listens that tells it to
app.listen(
    PORT,
    // 2:nd argument to listen: Creating a call-back that knows when the api is ready.
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
