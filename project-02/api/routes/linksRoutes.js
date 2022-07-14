const router = require("express").Router()

const Link = require('../models/Links')

router.post('/', async (req,res)=>{
    
    // req.body
    const {name, url, del} = req.body

    if(!name){
        res.status(422).json({error: "O nome é obrigatório"})
    }
    if(!url){
        res.status(422).json({error: "O url é obrigatório"})
    }

    const link = {
        name,
        url,
        del
    }

    // create
    try{
        await Link.create(link)
        res.status(201).json({massage: "Deu certo"})
    }catch (error) {
        res.status(500).json({error:error})
    }
})


module.exports = router