const router = require('express').Router();
const peopleCarsDb = require('../db/peoplecars');

router.get('/getall', async (req, res) => {
    const people = await peopleCarsDb.getAll();
    res.json(people);
})

router.post('/addperson', async (req, res) => {
    await peopleCarsDb.addPerson(req.body);
    res.json({ status: 'ok' });
})

router.get('/getperson', async (req, res) => {
    const person = await peopleCarsDb.getPerson(req.query.id);
    res.json(person);
})

router.post('/addcar', async (req, res) => {
    await peopleCarsDb.addCar(req.body);
    res.json({ status: 'ok' });
})

router.get('/getcars', async (req, res) => {
    const cars = await peopleCarsDb.getCars(req.query.personId);
    res.json(cars);
})

router.post('/deletecars', async (req, res) => {
    await peopleCarsDb.deleteCars(req.body);
    res.json({ status: 'ok' });
});


module.exports = router;
