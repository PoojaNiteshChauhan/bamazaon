var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
     // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Tesh#786", //Password we have to change it
    database: "bamazon_db"
  });

  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    console.log("Connected as ID:"+ connection.threadID);

    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  
  // function which prompts the user for what action they should take
  function start() {
    var query = "select product_name from products";
    
  ;


    var choiceArr =[];
    var choiceQty;
    
      connection.query(query, function(err, res) 
      {
        for (var i=0;i<res.length;i++)
        {
          choiceArr.push(res[i].product_name)
        }
        inquirer
        .prompt([{
        name: "Products",
        type: "list",
        message: "What is the ID of the product you like to buy?",
        choices: choiceArr,
        
      }, 
      {
        name: "Number",
        type: "input",
        message: "Enter Quantity for this product you like to buy?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
        
      }])
      .then(function(answer) {
        var lookupItems = "select price, stock_quantity from products where product_name =  '" + answer.Products + "'";
        var upDate;
        connection.query(lookupItems,function(err,nres){
        if (answer.Number > nres[0].stock_quantity)
        {
          console.log("Insufficient quantity!,")
        }else 
        {
          console.log ("Your total purchase price is : -   " + (answer.Number * nres[0].price));
          upDate = "update products set stock_quantity = " + (nres[0].stock_quantity-answer.Number) + " where product_name = '" + answer.Products + "'";
          console.log(upDate);

          connection.query(upDate,function(err,result){if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");})
        }
        })
      });

      });
      
    
  }
  
  // function to handle posting new items up for auction
  function postElectronic() {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt(
        {
          name: "id",
          type: "input",
          message: "What is the item id you would like to purchase?"
        })
    .then(function(answer) {
            var query = "select stock_quantity, price from products where item_id ?";
            connection.query(query, { item_id: answer.id }, function(err, res) {
                console.log(res.stock_quantity, res.price);
              }
              
            )})

}