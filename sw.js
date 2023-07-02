
self.addEventListener('install', function(){
    console.info('El Service worker se Instalo');

     const cache = caches.open('mi-cache-v1').then( cache => {
         return cache.addAll([
             '/',
             'index.html',
             'app.js',
             'style.css',
         ]);
     })
    
})

 self.addEventListener('active', function(){
     console.info('El Service worker está instalado')
 })


 self.addEventListener('fetch', function(e){
     const url = e.request.url
     const respuestaCache = caches.match( e.request)
     e.respondWith( respuestaCache  )

 })

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTNmYWRlMWU4MzE1OWUwNjA1M2U1OTMzZjQxNDVhMiIsInN1YiI6IjY0OTFmMGRmMmY4ZDA5MDBlMzg3NTM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SAMKXfLuqZ5Ecpkk9MzE0S4R6Q-6c3DiUTSlSibPP8o'
    }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));