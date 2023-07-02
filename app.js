

// btnGet.addEventListener('click', function () {
//     console.log('get');
//     const endPoint = 'https://api.themoviedb.org/3/movie/popular';
//     const config = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer d13fade1e83159e06053e5933f4145a2'
//         },
//         headers: { accept : 'application/json' }
//     };
//     fetch(endPoint, config).then( response => {
//         console.log(response);

//         return response.json();
//     }).then( respJSON => {
//         console.log(respJSON)
//     })
// });

if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js');
} else {
    document.querySelector('main').innerHTML = '<h2>El navegador no soporta ServiceWorker</h2>';
}