/**
 * Created by jdunne5 on 10/31/17.
 */
import * as MongoClient from 'mongodb';
var mongoose = require('mongoose')

export default class DatabaseConnection{

    constructor (uri) {
        this.uri = uri
        this.db = {}
        return this;
    }

    // connect () {
    //     return new Promise((resolve, reject) => {
    //         MongoClient.connect(this.uri, (err, db) => {
    //             if (err) reject(err)
    //             this.db = db
    //             resolve(this)
    //         })
    //     })
    //
    //
    // }

    connect(){
        return new Promise((resolve, reject) => {
            mongoose.connect(this.uri, {
                useMongoClient: true
            });

            var db = mongoose.connection;
            db.on('complete', resolve(this));
            db.on('error', reject);
        });
    }


}