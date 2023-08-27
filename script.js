// 1st method

const form=document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    const results=document.getElementById('results');
    if(height==="" || height<0|| isNaN(height)){
        console.log(`Please give a valid height ${height}`)
    }
    if(weight==="" || weight<0|| isNaN(weight)){
        console.log(`Please give a valid weight ${weight}`)
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML= `${bmi}`
    }
})

// 2nd method


// const form=document.querySelector('form');
// form.addEventListener('submit',function(e){
// e.preventDefault();
// const height=parseInt(document.querySelector('#height').value);
// const weight=parseInt(document.querySelector('#weight').value);
// const results=document.querySelector('#results');
// if( height===' ' || height < 0|| isNaN(height)){
//     results.innerHTML=`Give a valid height ${height}`;
// }else if(weight===' ' || weight < 0|| isNaN(weight)){
//     results.innerHTML=`Give a valid weight ${weight}`;
// }
// else{
//     const bmi=(weight/((height*height)/10000)).toFixed(2);
//     results.innerHTML= `${bmi}`
// }
// });

