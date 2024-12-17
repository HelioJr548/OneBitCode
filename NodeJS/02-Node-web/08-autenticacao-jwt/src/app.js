const express = require('express');
const authRouter = require('./routes/authRouter');
const protectedRouter = require('./routes/protectedRouter');

const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/protected', protectedRouter);

app.listen(3000, () => console.log('Servidor iniciado!'));
