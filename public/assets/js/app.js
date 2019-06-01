// Show the informational modal by clicking the navbar brand
$('#group-brand').click(function(){
    $('#my-modal').modal('show');
});

// Hide the intro div and show the tool list div
$('#view-tools-btn').click(function(){
    $('#intro-row').css("display", "none");
    $('#search-list-row').css("display", "block");
});

// Alert that 'View Projects' isn't enabled in this demo
$('#view-projects-btn').click(function(){
    alert("'View Projects' not enabled in this demo.");
});

// Alert that 'Waitlist' button isn't enabled in this demo
$('.wait-btn').click(function(){
    alert("'Approve' not enabled in this demo.");
});

// Alert that 'Waitlist' button isn't enabled in this demo
$('.checkout-btn').click(function(){
    alert("'Decline' not enabled in this demo.");
});

// NOTE: Optional functions that can be used 

// // Alert that 'Waitlist' button isn't enabled in this demo
// $('.wait-btn').click(function(){
//     alert("Thank you. You have been placed on the waitlist for this item. Please see the librarian for more information.");
// });

// // Alert that 'Waitlist' button isn't enabled in this demo
// $('.checkout-btn').click(function(){
//     alert("Thank you. Your request has been submitted. Please see the librarian to complete your request.");
// });
