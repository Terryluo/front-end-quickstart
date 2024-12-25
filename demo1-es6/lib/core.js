console.log("Hello World!");

let url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
/*
console.log(1);
let fetchPromise = fetch(url);

fetchPromise.then(response => {
    console.log(`The response was ${response.status}`);
    return response.json();
});

fetchPromise.catch(error => {
    console.error(error);
})
console.log(2);
 */
new Promise((resolve, reject) => {
    resolve(data);
    reject(data);
})

function getSampleData(url) {
    return new Promise((resolve, reject) => {
       $.ajax({
           url: url,
           method: "GET",
           success: (data) => {
               resolve(data);
           },
           error: (err) => {
               reject(err);
           }
       });
    });
}

getSampleData(url)
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err)});
