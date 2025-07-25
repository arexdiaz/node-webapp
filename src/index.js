const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World II');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
