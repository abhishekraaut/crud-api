const express = require('express')
const connectDB = require('./configs/db');
const bookRoute = require('./routes/book.route');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:4200"]
}))
app.use('/api/books', bookRoute);

const port = process.env.PORT || 3000;
app.listen(port, async() => {
    try {
       await connectDB();
        console.log(`Server is listening at http://localhost:${port}`);
    } catch (error) {
        console.log(error);
    }
})