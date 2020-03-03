import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

var mongodb= require('mongodb');

const Items = {
    email: 'binxjerrytom@gmail.com',
    password: '12345678'
};

const itemsCollection = 'User.Accounts';

function InsertDoc() {
    itemsCollection.insertOne(Items)
    .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
    .catch(err => console.error(`Failed to insert item: ${err}`))
  }
  
  
  export default InsertDoc;
  