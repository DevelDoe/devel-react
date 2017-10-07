/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-03T20:26:47+01:00
* @Email:  me@andreeray.se
* @Filename: server.js
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-03T18:39:27+02:00
*/



const   EXPRESS = require('express'),
        APP     = EXPRESS(),
        PORT = process.env.PORT || 4000

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
