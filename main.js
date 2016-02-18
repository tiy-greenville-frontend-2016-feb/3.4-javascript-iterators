(function(){
  'use strict';



  var callLater = function(timeout, callback) {
    var defaultTimeout = 1000;

    // If the timeout isn't passed in, use the default
    // if(callback == undefined){
    //   callback = timeout;
    //   timeout = defaultTimeout;
    // }

    if(arguments.length == 1){
      callback = timeout;
      timeout = defaultTimeout;
    }

    setTimeout(callback, timeout);
  };

  callLater(1000, function(){
    //console.log("I ran with 1000 ms");
  });


  callLater(function(){
    //console.log("I ran with the default.");
  });


  /*
   * Hoisting Example
   */
  var awesome = 10;

  var testHoisting = function(){
    console.log("top of testHoisting: ", awesome);

    var awesome = 20;

    console.log("bottom of testHoisting: ", awesome);
  };
  //testHoisting();

  //console.log("at end: ", awesome);


  /*
   * Objects!
   */

   document.querySelector('.container');


   var cars = [];

   //console.log(cars);

   cars[0] = 'honda';
   cars[1] = 'ford';

  //  console.log(cars[0]);
  //  console.log(cars[1]);
  //
  //  console.log(cars);

   var honda = {
     model: 'civic',
     year: function(){
       console.log("inside object");
     }
   };

   //console.log(honda.year());

   var modelName = 'model';

  //  console.log(honda[modelName]);
  //  console.log(Object.keys(honda));
  //  console.log(honda.hasOwnProperty('model'));
  //  console.log(honda.hasOwnProperty('wheels'));

   //console.log(honda);

   /*
    * Function Iterators
    */

  function processCars(value){
    //console.log("I wish I had a " + value);
    //console.log(array[index]);
  }

  cars.forEach(function(value, index, array){
    //console.log("I wish I had a " + value);
  });

  function forEach(array, callback){
      for(var i = 0; i < array.length; i++){
        var arrayItem = array[i];
        callback(arrayItem, i, array);
      }
  }

  forEach(cars, processCars);



  /*
   * Array Reduce
   */

   function sum(a, b){
     return a + b;
   }

   var addedNumbers = [1, 2, 3].reduce(function(previousValue, currentValue, index, array){
     return previousValue + currentValue;
   });

   console.log(addedNumbers);


   function reduce(array, callback){
     var overallSum = array[0];

     for(var i = 1; i < array.length; i++){
       var currentValue = array[i];
       overallSum = callback(overallSum, currentValue);
     }

     return overallSum;
   }

   var myAddedNumbers = reduce([1, 2, 3], sum);
   //console.log(myAddedNumbers);



   var newArray = [1, 4, 9].map(function(currentValue, index, array){
     return Math.sqrt(currentValue);
   });
   console.log(newArray);

   var myCars = ["honda", "bmw", "dodge"];
   var carsIlike = myCars.filter(function(currentValue, index, array){
     if(currentValue != "dodge"){
       return true;
     }else{
       return false;
     }
   });

   console.log(myCars);
   console.log(carsIlike);










}());
