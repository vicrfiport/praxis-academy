let mongoose = require("mongoose")
let host = "mongodb://localhost:27017/kapolsek"

mongoose.connect(host,{
    'useNewUrlParser' : true
}
    )

mongoose.set('useCreateIndex', true)