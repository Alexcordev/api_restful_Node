const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.connect('mongodb://localhost/Construction', () => {
        
        console.log("Server connected to construction database");
        
      });

  
app.listen(port, () => {
        console.log("Server connected to 3700 local port");
});

