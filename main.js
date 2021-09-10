   var clickbtnfood = document.getElementById('btnpic');
   var divfood = document.getElementById('thepic');
   clickbtnfood.addEventListener('click', function foodfunc() {
       fetch("https://upcfood.p.rapidapi.com/v1.0/product.cfm?upc=4011&apiKey=f41cf300-bb18-11eb-8918-005056a6fcdc&Format=jSon")
           .then(response => {
               console.log(response);
               divfood.src = response;
           })
           .catch(err => {
               console.error(err);
           });

   });