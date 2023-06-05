const button = document.querySelector(`button`)
const main = document.querySelector(`main`)


const getGame = evt => {
    axios.get(`http://localhost:4000/game`)
    .then(response => {
        console.log(response.data)
        displayGame(response.data)
    })
    .catch(err => console.log(err))
}

const displayGame = game => {
    let{ name, releaseDate, console, genre, imageURL} = game
    const gameCard = document.createElement(`div`)
    gameCard.innerHTML = `
        <h1>${name}</h1>
        <img src="${imageURL}"/>
        <h2>Released on ${releaseDate} for the ${console}</h2>
        <p>Spider-Man Miles Morales is an ${genre} game where you play as a hero named Miles to save New York.</p>
    `
    main.appendChild(gameCard)
}







button.addEventListener(`click`, getGame)