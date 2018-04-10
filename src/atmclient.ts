import * as got from "got";

got.get("http://localhost:3000/atm").then(
    (data) => {
        console.log("Data from web backend " + data.body);
    },
    (err) => {
        console.log("Error from web backend " + err.message);
    }
 );

 got.get("hhttp://localhost:3000/atm/123456010220001").then(
    (data) => {
        console.log("Data from web backend " + data.body);
    },
    (err) => {
        console.log("Error from web backend " + err.message);
    }
 );

 got.get("http://localhost:3000/atm/withdraw/123456010220002/amount/200").then(
    (data) => {
        console.log("Data from web backend " + data.body);
    },
    (err) => {
        console.log("Error from web backend " + err.message);
    }
 );

 got.get("http://localhost:3000/atm/deposit/123456010220003/amount/200").then(
    (data) => {
        console.log("Data from web backend " + data.body);
    },
    (err) => {
        console.log("Error from web backend " + err.message);
    }
 );