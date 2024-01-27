const myObject = {
    name : "Sain",
    hobbies : ["eat", "sleep","code"],
    hello : function () {
        console.log("Hello!");
    }
}

localStorage.setItem("myLocalStore",JSON.stringify(myObject));
localStorage.clear();
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);