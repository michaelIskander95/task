$(window).on('load', function () {
  if ($('#preloader').length) {
   $('#preloader').delay(100).fadeOut('slow', function () {
    $(this).remove();
   });
  }
});

$('#clickBtn1').click(function() {

  $.ajax({
    url: "libs/php/getGeocodeAddress.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#latitude1').val(),
      lng: $('#longitude1').val()
    },
    success: function(result) {

      console.log(result);

      if (result.status.name == "ok") {

        $('#results1').html(result['data']['street']);
        $('#results2').html(result['data']['locality']);
        $('#results3').html(result['data']['adminName1']);
        $('#results4').html(result['data']['countryCode']);

      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Uh oh! Try again.')
    }
  });

});


$('#clickBtn2').click(function() {

  $.ajax({
    url: "libs/php/getOcean.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#latitude2').val(),
      lng: $('#longitude2').val()
    },
    success: function(result) {

      console.log(result));

      if (result.status.name == "ok") {

        $('#results1').html(result['data']['name']);
        $('#results2').empty();
        $('#results3').empty();
        $('#results4').empty();
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Uh oh! Try again.')
    }
  });

});


$('#clickBtn3').click(function() {

  $.ajax({
    url: "libs/php/getEarthquake.php",
    type: 'POST',
    dataType: 'json',
    data: {
      north: $('#quakeNorth').val(),
      east: $('#quakeEast').val(),
      south: $('#quakeSouth').val(),
      west: $('#quakeWest').val()
    },
    success: function(result) {

      console.log(JSON.stringify(result));

      if (result.status.name == "ok") {

        $('#results1').html(result['data'][0]['datetime']);
        $('#results2').html(result['data'][0]['magnitude']);
        $('#results3').html(result['data'][0]['depth']);
        $('#results4').empty();
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Uh oh! Try again.')
    }
  });

});
