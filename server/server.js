const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();
const fs = require('fs');


const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})


app.use(express.json())
app.use(cors())
app.get('/customers', (req, res) => {
    db.serialize(() => {
        db.all('SELECT * FROM Customers ORDER BY ContactName', (err, row) => {
            res.send(row)
        })
    })
})


app.get("/products", (req, res) => {
    db.serialize(() => {
        db.all('SELECT * FROM Products ORDER BY ProductID', (err, row) => {
            res.send(row)
        })
    })
})

app.get("/employees", (req, res) => {
    db.serialize(() => {
        db.all('SELECT FirstName || " " || LastName as Name, Region, HomePhone FROM Employees', (err, row) => {
            res.send(row)
        })
    })
})

app.get("/regions", (req, res) => {
    db.serialize(() => {
        db.all('SELECT DISTINCT Region FROM Customers WHERE Region NOT NULL', (err, row) => {
            res.send(row)
        })
    })
})

app.post("/NCustomer", (req, res) => {
    const { setter } = req.body;
    const { Name } = req.body;
    const { Region } = req.body;
    const { Phone } = req.body;
    const { Role } = req.body;

    db.serialize(() => {
        db.all(` SELECT * FROM Customers WHERE CustomerID=="${setter}" `, (err, row) => {
            if (row.length == 1) {

                db.exec(`
                UPDATE Customers 
                SET ContactName="${Name}", Region="${Region}", Phone="${Phone}", ContactTitle="${Role}"
                WHERE CustomerID=="${setter}"
                `, (err2, row2) => {
                    db.all(` SELECT * FROM Customers WHERE CustomerID=="${setter}" `, (err3, row3) => {
                        res.send(row3)
                    })
                })
            } else {
                db.exec(`
                INSERT INTO Customers (CustomerID, ContactName, Region, Phone, ContactTitle)
                VALUES("${Name.trim().substring(0, 5).toUpperCase()}","${Name}", "${Region}", "${Phone}", "${Role}")
                `, (err2, row2) => {
                    db.all(` SELECT * FROM Customers WHERE CustomerID=="${Name.trim().substring(0, 5).toUpperCase()}" `, (err3, row3) => {
                        res.send(row3)
                    })
                })
            }
        })
    })
})


app.delete("/DCustomer/:setter", (req, res) => {
    const { setter } = req.params;
    db.serialize(() => {
        db.all(`SELECT * FROM Customers WHERE CustomerID=="${setter}"`, (err, row) => {
            if (row.length == 1) {
                db.exec(`DELETE FROM Customers WHERE CustomerID=="${setter}"`, (err2, row2) => {
                    db.all(`SELECT * FROM Customers WHERE CustomerID=="${setter}"`, (err3, row3) => {
                        res.send(row);
                    })
                })
            }
        })
    })
})

app.get('/Reset', (req, res) => {
    db.serialize(() => {
        fs.readFile('reset.txt', 'utf8', function (err, data) {
            if (err) throw err;
            
            db.exec(`${data}`);
            res.send("DONE!");
        });
    })
})

app.listen(3001, console.log('Server running on http://localhost:3001'))