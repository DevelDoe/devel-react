/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-03T20:26:47+01:00
* @Email:  me@andreeray.se
* @Filename: server.js
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T21:18:10+01:00
*/



const   EXPRESS = require('express'),
        APP     = EXPRESS(),
        PORT = process.env.PORT || 3000

APP.use(function(req,res,next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname +  req.url)
    } else {
        next()
    }
})

APP.use(EXPRESS.static('public'))

APP.listen(PORT)
console.log('Port: ' + PORT)
