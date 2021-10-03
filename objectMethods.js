var facebookProfile = {
  name: "",
  friends: 0,
  messages: [],
  postMessage: function(input){
    if (typeof input === "string"){
        facebookProfile["messages"].push(input)
    } else{
      return "Messages can only be Strings";
    }
  },
  deleteMessage: function(index){
    facebookProfile["messages"].splice(index, 1);
  },
  addFriend: function(){
    facebookProfile.friends = facebookProfile.friends + 1;
  },
  removeFriend: function(){
    if(facebookProfile.friends>0)
      facebookProfile.friends = facebookProfile.friends - 1;
  },
}
console.log(facebookProfile.postMessage("Hello"));



//Donut Problem.forEach
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
  console.log(donut.type+" donuts cost $"+donut.cost+" each");
})