var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];
// 1.Iterate through the stringList and produce the following output: "Months
//listed are March, April, May".
var list = "";
for(i=0; i < stringList.length; i++) {
        list += stringList[i] + ", ";
      }
        console.log("Months listed are " + list);

//months are listed, how would I seperate them?
//done.

//2.onsole log the last element in numList using .length to get the index.

console.log(numList.length);

//done.

//3.Iterate through numList, output all numbers as single String
var number = "";
for(i=0; i < numList.length; i++){
      number += numList[i] + " ";
    }
  console.log( number );
//done.
// orrrr this too
var alley = "";
for(i=0; i< numList.length; i++){
   alley += numList[i];
}
console.log(alley);
// I was attempting to complete 4 when i found this solution

//4.Iterate through numList and add all of the elements together and console log the total

var total = 0;
for(i=0; i< numList.length; i++){
total += numList[i];
}
  console.log(total);

//var numList = [13, 78, 34];
//console.log(numList);



  //5.If the second element in boolList is true, add the first and last elements
  //in numList. Otherwise multiply the second element in numList by itself.
  //Console log the output.
  var total = "";
if(boolList[1] === true){
  total = numList[0] + numList[2];
  console.log(total)
} else {
  total *= numList[2];
  console.log(total);
};



//6.Iterate through boolList, if the value is true console log the equivelent
//index in numList.

for(i=0; i<boolList.length;  i++){
   if(boolList[i]=== true){
     console.log(numList[i]);
   } else{
     console.log("");
   };

}
