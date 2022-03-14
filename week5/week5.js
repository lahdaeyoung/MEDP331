$.get( "https://picsum.photos/400", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });