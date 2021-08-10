const functions = require("firebase-functions");
const Filter = require('bad-words');

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.detectEvilUsers = functions.firestore
    .document('message/{msgId}')
    .onCreate();

    if(filter.isProfane(text)){
        const cleaned = filter.cleaned(text);
        await doc.ref.update({text:`I got BANNED for life for saying...${cleaned} `});
        await db.collection('banned').doc(uid).set({});
    }