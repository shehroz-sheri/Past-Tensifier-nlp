const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const nlp = require('compromise')
nlp.extend(require('compromise-sentences'))


const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'public')))


router.get('/past-tense', (req, res) => {
    let doc = nlp(req.query.sentence)
    doc.sentences().toPastTense()
    const text = doc.text()
    
    return res.json({text})
})

app.use('/', router)


app.listen(PORT, () => console.log('listening on port ' + PORT))