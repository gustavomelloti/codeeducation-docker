const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wesley')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    connection.query("SELECT name FROM people", function(err, result) {
        connection.end()
        if (err) throw err
        
        let html = '<h1>Full Cycle</h1>'
        
        if (result.length > 0) {
            html = html.concat('<ul>')
            result.forEach(people => {
                html = html.concat(`<li>${people.name}</li>`)
            })
            html = html.concat('</ul>')
        }
        
        res.send(html)
      });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})