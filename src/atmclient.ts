import * as got from "got";

console.log ("starting ...");

got.get("http://localhost:3000/atm/withdraw/123456010220002/amount/200").then(
    (data) => {
        console.log("Data from web backend " + data.body);
        console.log("finished!");
    },
    (err) => {
        console.log("Error from web backend " + err.message);
    }
 );