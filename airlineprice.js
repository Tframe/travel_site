module.exports = function(){

	var express = require('express');
	var router = express.Router();
	//funciton to select airline price info
	function getAirlinePrices(res, mysql, context, complete){
		mysql.pool.query("SELECT ap.id, a.name, startc.name AS start_city, endc.name AS end_city, ap.flight_date, ap.price FROM Airline_Price ap INNER JOIN Airline a ON ap.airline_id=a.id INNER JOIN City startc ON ap.starting_city_id=startc.id INNER JOIN City endc ON ap.ending_city_id=endc.id", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.airline_price = results;
			complete();
		});
	}

	//function to select city info
	function getCities(res, mysql, context, complete){
		mysql.pool.query("SELECT c.id, c.name FROM City c", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.cities = results;
			complete();
		});
	}
	
	//function to select airline info
	function getAirlines(res, mysql, context, complete){
		mysql.pool.query("SELECT a.id, a.name FROM Airline a", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.airlines = results;
			complete();
		});
	}

	//display airline prices
	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jscripts = ["delete.js", "filter.js", "search.js"];
		var mysql = req.app.get('mysql');
		getAirlinePrices(res, mysql, context, complete);
		getCities(res, mysql, context, complete);
		getAirlines(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 3){
				res.render('airlineprice', context);
			}
		}
	});
	
	//add price then redirects back to airline price page
	router.post('/', function(req, res){
		console.log(req.body)
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO Airline_Price (airline_id, starting_city_id, ending_city_id, flight_date, price) VALUES (?,?,?,?,?)";
		var inserts = [req.body.airline_id, req.body.starting_city_id, req.body.ending_city_id, req.body.flight_date, req.body.price];
		sql = mysql.pool.query(sql,inserts,function(error, results, fields){
			if(error){
				console.log(JSON.stringify(error))
				res.write(JSON.stringify(error));
				res.end();
			}else{
				res.redirect('/airlineprice');
			}
		});
	});
	
	return router;
}();
