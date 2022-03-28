const express =  require('express');
const chirpStore = require('../chirpStore')

let router = express.Router();

router.get('/:id?',(req, res)=>{

    let id= req.params.id
    if(id){
        res.json(chirpStore.GetChirp(id));

    }else{

        res.send(chirpStore.GetChirps());
    }
});

router.post('/', (req, res)=>{
   res.json( chirpStore.CreateChirp(req.body));
   res.sendStatus(200);

})

router.put('/:id', (req, res)=>{
    let id= req.params.id;
    let chirp = {
        user :req.body.user,
        text :req.body.text
    }
    
    if(id){

        res.json(chirpStore.UpdateChirp(id,chirp))
    }
 });

router.delete('/:id',(req, res)=>{
    let id = req.params.id
    if(id){
       
       res.json(chirpStore.DeleteChirp(id));

    }

})

module.exports = router;

