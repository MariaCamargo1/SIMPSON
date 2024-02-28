import React from 'react';
import psimpson from '../sprinsim.jpg'



const Home = () => {
    return (
        
        <div className='imgs'>
            <h1 className='titulo'>¡Bienvenido a Springfield!</h1>
            <img src={psimpson} alt='Psimpson' width="1200" height="600"/>
        <section>
            <h1 className='subtitulo'>¡Bienvenido al vibrante mundo de Los Simpsons!</h1>
            <p className='textp'><b>En este rincón virtual de Springfield, te invitamos a descubrir la magia y el humor que han cautivado 
                a audiencias de todas las edades durante décadas. Desde la singularidad de Homer hasta la astucia de Bart, 
                cada personaje aporta su propia chispa a esta serie legendaria.
                Explora nuestra galería de personajes icónicos, desde el optimismo inquebrantable de Ned Flanders hasta 
                las ocurrencias del genio malvado, el Sr. Burns. Sumérgete en las historias que han dado forma a la cultura pop 
                y han dejado una marca indeleble en la televisión.</b></p>
            {/* Puedes agregar más elementos HTML y contenido aquí */}
        </section>

            <footer>
            
        <div class="footer-content">
            <h3>¡Los Simpsons!</h3>
            <p>"Conéctate con nosotros en nuestras redes sociales y únete a nuestra comunidad en línea."</p>
            <ul class="socials" >
                <li><a href="https://es-la.facebook.com/TheSimpsons/"><i class="fa-brands fa-facebook" ></i></a></li>
                <li><a href="https://twitter.com/TheSimpsons"><i class="fa-brands fa-square-x-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/thesimpsons/"><i class="fa-brands fa-square-instagram"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2024 ¡Los Simpsons! By <span>Maria Camargo</span></p>
        </div>
        </footer>
        <script src="https://kit.fontawesome.com/2fb944aa2c.js" crossorigin="anonymous"></script>
            {/* Aquí se agrega el enlace a la hoja de estilos de Google Fonts */}

        </div>
        
        
        
    )
}

export default Home;