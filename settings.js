//read line by line
$(function() {
    //populate textarea with array from db
    getSettings();
    $('#saveButton').click(function() {
        var arrayOfSites = $('#blacklist').value.split('\n');
        //post
        sendSites(arrayOfSites);

    });
    //create single use token using Stripe
    $('#CCButton').click(function() {
        var $form = $('#payment-form');
        $form.submit(function(event) {
        // Disable the submit button to prevent repeated clicks:
        $form.find('.submit').prop('disabled', true);

        // Request a token from Stripe:
        Stripe.card.createToken($form, stripeResponseHandler);

        // Prevent the form from being submitted:
        return false;
        });
    });

})
function stripeResponseHandler(status, response) {
  // Grab the form:
  var $form = $('#payment-form');

  if (response.error) { // Problem!

    // Show the errors on the form:
    $form.find('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));

    // Submit the form:
    $form.get(0).submit();
  }
};

function sendSites(arrayOfSites) {
    //get user ID from cookie

    var id = getCookie("id");
    var url = 'https://sjback.herokuapp.com/api/users/' + id;
    for (int i = 0; i < arrayOfSites.length; i++) {
        var data = {userid: id, site: arrayOfSites[i]}
        $.post(url, data)
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function getSettings() {
    //get id from cookies
    var id = getCookie('id');
    val url = 'https://sjback.herokuapp.com/api/users/' + id;
    $.get(url, function(data) {
        //update all the fields in settings with fields from data
    }

}
