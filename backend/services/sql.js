const jwt = require('jsonwebtoken');
const sql = require('mssql');

const config = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
};

module.exports.GetUserTasks = async (JWTtoken, res) => {
    const con = await sql.connect(config);
    const request = new sql.Request(con);
    const tokencheck = jwt.verify(JWTtoken, process.env.SECRET);
    if (!tokencheck) {
    } else {
        //  console.log(tokencheck.id);
        // console.log(new Date());
        request.input('id', sql.Int, tokencheck.id);
        request.input('pvm', sql.Date, new Date());

        const result = await request.query(
            `SELECT * FROM ValitutTehtävät WHERE käyttäjä_id = @id AND viimeinenmuokkaus = @pvm`,
        );
        if (result.rowsAffected >= 1) {
            return result;
        } else {
        }
    }
};

module.exports.GetUserTaskList = async (JWTtoken, res) => {
    const con = await sql.connect(config);
    const request = new sql.Request(con);
    const tokencheck = jwt.verify(JWTtoken, process.env.SECRET);
    if (!tokencheck) {
    } else {
        request.input('registercode', sql.Int, tokencheck.registercode);
        request.input('pvm', sql.Date, new Date());

        const result = await request.query(
            `SELECT * FROM Tehtävät WHERE yrityskoodi = @registercode AND päivämäärä = @pvm`,
        );
        if (result.rowsAffected >= 1) {
            return result;
        } else {
        }
    }
};
