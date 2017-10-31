/**
 * Created by jdunne5 on 10/31/17.
 */
import * as MongoClient from 'mongodb'

export default class DatabaseConnection{

    constructor (uri) {
        this.uri = uri
        this.db = {}
        return this
    }

    connect () {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.uri, (err, db) => {
                if (err) reject(err)
                this.db = db
                resolve(this)
            })
        })
    }


}