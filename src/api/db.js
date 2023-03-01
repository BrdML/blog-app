import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhsot",
    user:"root",
    password:"",
    database:"blog"
})