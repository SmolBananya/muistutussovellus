const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

//components
const admin = require('./admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(8080);

const config = {
    user: 'admin',
    password: 'pointfight',
    server: 'database-1.cumxecap9lly.eu-west-1.rds.amazonaws.com',
    database: 'pointfight',
};

app.post('/api/companyregister', async function (req, res) {
    if (req.body.company && req.body.password && req.body.email) {
        const randomnumber = Math.floor(Math.random() * (99999 - 11111) + 11111);
        const con = await sql.connect(config);
        const request = new sql.Request(con);
        const result = await request.query(
            `SELECT * FROM Käyttäjät WHERE rekisteröintikoodi = '${randomnumber}' OR yritys = '${req.body.company}' OR sähkposti = '${req.body.email}'`,
        );
        if (result.rowsAffected == 0) {
            const result2 = await request.query(
                `INSERT INTO Käyttäjät (hahmo_id, yritys, etunimi, sukunimi, salasana, sähkposti, rekisteröintikoodi, admin) VALUES (10,'${
                    req.body.company
                }', 'teppo', 'testaaja', '${bcrypt.hashSync(req.body.password, 10)}', '${
                    req.body.email
                }', ${randomnumber}, 1)`,
            );

            if (result2.rowsAffected == 1) {
                const result3 = await request.query(
                    `SELECT * FROM Käyttäjät WHERE (rekisteröintikoodi) = '${randomnumber}'`,
                );
                console.log(result3);
                const token = jwt.sign({ id: result3.recordset[0].käyttäjä_id }, process.env.SECRET);
                res.status(200).send({
                    id: result3.recordset[0].käyttäjä_id,
                    auth: true,
                    admin: result3.recordset[0].admin,
                    token: token,
                    company: result3.recordset[0].yritys,
                    code: result3.recordset[0].rekisteröintikoodi,
                });
            } else {
                res.json('Virhe lisättäessä yritystä');
            }

            res.json(result);
            await sql.close(config);
        } else {
            res.json('Rekisteröintikoodi käytössä');
        }
    }
});

app.post('/api/login', async function (req, res) {
    if (req.body.email && req.body.password) {
        const con = await sql.connect(config);
        const request = new sql.Request(con);
        const result = await request.query(`SELECT * FROM Käyttäjät WHERE sähkposti = '${req.body.email}'`);
        if (result.rowsAffected == 1) {
            const pwcheck = bcrypt.compareSync(req.body.password, result.recordset[0].salasana);
            if (pwcheck) {
                const token = jwt.sign({ id: result.recordset[0].käyttäjä_id }, process.env.SECRET);

                res.status(200).send({
                    id: result.recordset[0].käyttäjä_id,
                    auth: true,
                    token: token,
                    admin: result.recordset[0].admin,
                    company: result.recordset[0].yritys,
                });
            } else {
                res.json({ error: 'Väärä salasana!' });
            }
            await sql.close(config);
        } else {
            res.json({ error: 'Väärä käyttäjätunnus!' });
        }
    }
});

app.post('/register', async function (req, res) {
    // if (req.body.email && req.body.password) {
    const user = {
        email: 'teppo.testaaja@testi.fi', //req.body.email,
        password: bcrypt.hashSync('testi', 10),
    };
    console.log(user.password.length);
    const con = await sql.connect(config);
    const request = new sql.Request(con);
    const result = await request.query(
        `INSERT INTO Käyttäjät (hahmo_id, etunimi, sukunimi, salasana, sähkposti, rekisteröintikoodi) VALUES (10, 'teppo', 'testaaja', '${
            user.password
        }', '${user.email}', ${Math.floor(Math.random() * 10)}`,
    );
    const result2 = await request.query(`SELECT * FROM Käyttäjät WHERE yritys = "testi"`);
    console.log(result2);
    res.json(result);
    await sql.close(config);
});

app.get('/', async function (req, res) {
    const con = await sql.connect(config);
    const results = await con.request().query('select * from Tehtävät');
    res.json(results);
});

app.post('/login2', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (
            error,
            results,
            fields,
        ) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});
