
$('.classInfo').on('click','button', function(event){
    $(event.target).next().toggle("slide");
    });


// $(event.target).hide();





// $('.classInfo').on('mouseleave','span', function(event){
//     $(event.target).prev().hide();
//     $(event.target).show();
// });


// var classSchedule = document.getElementById('classes');
// var classParas = classSchedule.getElementsByTagName('p');
// var num = classParas.length;



// console.log(classParas[0]);
// console.log(num);


// const toggleClassInfo = document.querySelector('.monday');
// const infoDiv = document.querySelector('.mondayInfo');



// toggleClassInfo.addEventListener('click', () => {
//   if (infoDiv.style.display == 'none') {
//     infoDiv.style.display = 'block';
//     toggleClassInfo.style.height = 'auto';
//   } else {                       
//     infoDiv.style.display = 'none';
//   }                         
// });