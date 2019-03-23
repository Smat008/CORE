// Toggle class info on click

$('.classInfo').on('click','button', function(event){
    $(event.target).next().toggle("slide");
    });