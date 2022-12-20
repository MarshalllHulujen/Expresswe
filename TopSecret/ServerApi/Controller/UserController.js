const { post } = require("../router/userRouter");

const database = [
    {
        id : "1",
        name : "dani",
        job : "game dev",
        hobbies : "drinking milk"
    },
    {
        id : "2",
        name : "hulugen",
        job : "learning from dani",
        hobbies : "dani clone"
    },
    {
        id : "3",
        name : "khasaa",
        job : "nothing",
        hobbies : "playing with his balls"
    },
    {
        id : "4",
        name : "Telmen",
        job : "fighting with 9 year old kids",
        hobbies : "also playing with his balls"
    },
    {
        id : "5", 
        name : "Sodoo", 
        job : "playing yakuza 0",
        hobbies : "joking everyone"
    },
    {
        id : "6",
        name : "Chingun",
        job : "Playing jstris to beat Khulugen (but still loser)",
        hobbies : "trying to roast Khulugen"
    },
    {
        id : "7",
        name : "Tugsuu kkn",
        job : "chatting on hulugen's group chat",
        hobbies : "trying roasting everyone"
    },
    {
        id : "9",
        name : "Tushig", 
        job : "teach us to how to become gigachad",
        hobbies : "influencer"
    }
]

exports.userGetController = ( req, res ) => {
    res.status(200).send(database)
}

exports.userPostController = (req, res) =>{
    const user = req.body
    database.push(user);
    console.log(req.body);
    res.status(201).send(user);
}
exports.usersDeleteController = (req, res) => {
    const { ids } = req.body;
    const newDatabse = database.filter((el, index) => el.id != ids.map(item => item)[index])
    res.status(200).send(newDatabse)
}

exports.userDeleteController = (req, res) => {
    const { id } = req.params;
    const newDatabse = database.filter((el) => el.id != id)
    res.status(200).send(newDatabse)
}


exports.userPutController = (req, res) => {
    const { id } = req.params;  
    const { name } = req.body
    const newDatabse = database.map((el) => el.id == id ? el.name = name : el.name)
    res.status(200).send(newDatabse)
} 