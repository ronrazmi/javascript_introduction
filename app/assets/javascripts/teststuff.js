 // Introducing... JavaScript!

    // RUBY CONSOLE
    // puts "Hello"

    // JAVASCRIPT CONSOLE
    // console.log("Hello");



    // RUBY CONSOLE
    // puts "What is your name?"
    // user_name = gets.chomp

    // JAVASCRIPT CONSOLE
    // var userName = prompt("What is you name?");



    // RUBY VARIABLES
    // x = "well, hello there!"
    // puts x

    // JAVASCRIPT VARIABLES
    // var x = "well, hello there!";
    // console.log(x);



    // RUBY CONCATENATION
    // x = "cat"
    // y = "fish"
    // puts "#{x}#{y}"
    // puts x + y

    // JAVASCRIPT CONCATENATION
    // var x = "cat";
    // var y = "fish";
    // console.log(x + y);



    // RUBY NUMBERS
    // x = 1
    // y = 2
    // z = 4.74
    // puts x + y
    // puts x + z

    // JAVASCRIPT NUMBERS
    // var x = 1;
    // var y = 2;
    // var z = 4.74;
    // console.log(x + y);
    // console.log(x + z);



    // RUBY INCREMENT/DECREMENT
    // x = 1
    // x += 1
    // puts x
    // x -= 1
    // puts x

    // JAVASCRIPT INCREMENT/DECREMENT
    // var x = 1;
    // x++;
    // console.log(x);
    // x--;
    // console.log(x);



    // RUBY BOOLEANS
    // x = true
    // y = false
    // puts x
    // puts y

    // JAVASCRIPT BOOLEANS
    // var x = true;
    // var y = false;
    // console.log(x);
    // console.log(y);



    // RUBY ARRAYS
    // people = ["Jane", "John", "Joan"]
    // puts people[0]
    // puts people[1]
    // puts people[2]
    //
    // people << "Cookie Monster"
    // puts people
    // puts people.count

    // JAVASCRIPT ARRAYS
    // var people = ["Jane", "John", "Joan"];
    // console.log(people[0]);
    // console.log(people[1]);
    // console.log(people[2]);
    //
    // people.push("Cookie Monster");
    // console.log(people);
    // console.log(people.length);

    // Find Index of Element in Array (JAVASCRIPT)
    // people.indexOf("John")  // returns 1



    // RUBY HASHES
    // person = { first_name: "John", last_name: "Doe", age: 50, eye_color: "blue" }
    // puts person[:first_name]
    // puts person.first_name   # DOESN'T WORK!!!
    //
    // x = :first_name
    // puts person[x]
    // puts person.x   # DOESN'T WORK!!!

    // JAVASCRIPT OBJECTS (similar to Ruby hashes)
    // var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
    // console.log(person["firstName"]);
    // console.log(person.firstName);
    // //
    // var x = "firstName";
    // console.log(person[x]);
    // console.log(person.firstName);  // DOESN'T WORK!!



    // RUBY UNDEFINED VARIABLE
    // x
    // puts x

    // JAVASCRIPT UNDEFINED VARIABLE
    var x;
    console.log(x);



    // RUBY TYPE CHECK
    // puts "John".class  # String
    // puts 2.93.class  # Float
    // puts false.class  # FalseClass
    // puts {name:'John', age:34}.class  # Hash

    // JAVASCRIPT TYPE CHECK
    // console.log(typeof "John"); //string
    // console.log(typeof 2.93);   //number
    // console.log(typeof false);  //boolean
    // console.log(typeof [1,2,3,4]); //object
    // console.log(typeof {name:'John', age:34}); //object



    // RUBY TYPE CONVERSION
    // "234".to_i
    // 234.to_s

    // JAVASCRIPT TYPE CONVERSION
    // parseInt("234");
    // var num = 234;
    // num.toString();
