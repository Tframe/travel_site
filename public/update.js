function updateCity(id){
	$.ajax({
		url: '/city/' + id,
		type: 'PUT',
		data: $('#update-city').serialize(),
		success: function(result){
			window.location.replace("/city");
		}
	})
};

function updateHotel(id){
    $.ajax({
        url: '/hotel/' + id,
        type: 'PUT',
        data: $('#update-hotel').serialize(),
        success: function(result){
            window.location.replace("/hotel");
        }
    })
};

function updateActivity(id){
    $.ajax({
        url: '/activity/' + id,
        type: 'PUT',
        data: $('#update-activity').serialize(),
        success: function(result){
            window.location.replace("/activity");
        }
    })
};

function updateAirline(id){
    $.ajax({
        url: '/airline/' + id,
        type: 'PUT',
        data: $('#update-airline').serialize(),
        success: function(result){
            window.location.replace("/airline");
        }
    })
};

function updateTraveler(id){
    $.ajax({
        url: '/traveler/' + id,
        type: 'PUT',
        data: $('#update-traveler').serialize(),
        success: function(result){
            window.location.replace("traveler");
        }
    })
};

function updateActivityPrice(id){
    $.ajax({
        url: '/activityprice/' + id,
        type: 'PUT',
        data: $('#update-activityprice').serialize(),
        success: function(result){
            window.location.replace("/activityprice");
        }
    })
};

function updateHotelPrice(id){
    $.ajax({
        url: '/hotelprice/' + id,
        type: 'PUT',
        data: $('#update-hotelprice').serialize(),
        success: function(result){
            window.location.replace("/hotelprice");
        }
    })
};

function updateAirlinePrice(id){
    $.ajax({
        url: '/airlineprice/' + id,
        type: 'PUT',
        data: $('#update-airlineprice').serialize(),
        success: function(result){
            window.location.replace("/airlineprice");
        }
    })
};

function updateTripCriteria(id){
    $.ajax({
        url: '/tripcriteria/' + id,
        type: 'PUT',
        data: $('#update-tripcriteria').serialize(),
        success: function(result){
            window.location.replace("/tripcriteria");
        }
    })
};

function updateDestinationType(id){
    $.ajax({
        url: '/destinationtype/' + id,
        type: 'PUT',
        data: $('#update-destinationtype').serialize(),
        success: function(result){
            window.location.replace("destinationtype");
        }
    })
};
