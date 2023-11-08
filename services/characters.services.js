const axios = require('axios')


class CharacterService {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }

    getAllCharacters() {
        return this.axiosApp.get('/characters')
    }

    getOneCharacter(character_id) {
        return this.axiosApp.get(`/characters/${character_id}`)
    }
    createCharacter(character_data) {
        return this.axiosApp.post(`/characters`, character_data)
    }

    modifyCharacter(character_id, character_data) {
        console.log(character_id, character_data)
        return this.axiosApp.put(`/characters/${character_id}`, character_data)

    }
    deleteCharacter(character_id) {
        return this.axiosApp.delete(`/characters/${character_id}`)
    }
}


// /* GET home page */
// router.get("/characters", (req, res, next) => {
//     axios.get("https://ih-crud-api.herokuapp.com/characters")
//         .then(responseFromAPI => {
//             // console.log(responseFromAPI)
//             res.render("characters/list-characters", { characters: responseFromAPI.data });
//         })
//         .catch(err => console.error(err))
// });



const characterService = new CharacterService()
module.exports = characterService