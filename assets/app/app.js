
let btn = document.querySelector('#btn-send')

// btn.onclick = function(){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             console.log('Succesfully')
//         }
//     }
//     xhr.open('GET','');
//     xhr.send();
// }




// btn.onclick = function(){
//     fetch('https://randomuser.me/api/?results=100')
//     .then(response => response.json())
//     .then(data => {
//         let users =  ''

//         data.results.forEach(user => {
//             users += `
//             <div class="mt-4 col-lg-4 col-6">
//                     <div class="card" style="width: 18rem;">
//                         <img src="${user.picture.medium}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                             <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//             `

//             document.getElementById('list').innerHTML = users
//         });
//     })
//     .catch(error => console.log(error))
// }

btn.onclick = function(){
    fetch('https://fakestoreapi.com/products?limit=51')
    .then(response=>response.json())
    .then(json=>{
        let users = ''

        json.forEach(user => {
            users+= `
            <div class="mt-4 col-lg-4 col-6">
                    <div class="card" style="width: 18rem;">
                        <img src="${user.image}" class="card-img-top"  alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${user.id} ${user.title}</h5>
                            <p class="card-text">${user.description}</p>
                            <a href="#" class="btn btn-primary bg-dark">Buy</a>
                            <span>${user.price}</span>
                        </div>
                    </div>
                </div>
            `
            document.getElementById('list').innerHTML = users
        })
        .catch(error => console.log(error))
    })
}