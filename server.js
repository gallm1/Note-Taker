const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes
app.get('/', (req,res) {
    // 
})

app.get('/notes', (req,res) => {
    // 
});

app.get('/api/notes', (req,res) => {
    // 
})


// Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});