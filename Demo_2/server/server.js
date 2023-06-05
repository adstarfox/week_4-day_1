const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(express.json())
app.use(cors())

let videoGame = {
    name:`Spider-Man Miles Morales`,
    releaseDate: `June 2nd 2020`,
    console: `Play-Station`,
    genre: `Open World Adventer`,
    imageURL: `https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Spider-Man-Miles-Morales-Box-Art-Cover.jpg`
}

app.get(`/api/test`, (req,res)=> {
    res.status(200).send({name: `Alex Durrant`})
})

app.get(`/game`, (req, res) => {
    res.status(200).send(videoGame)
})


app.listen(4000, console.log(`Server running on localhost:4000`))