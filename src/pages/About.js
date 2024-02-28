import evolution from '../simpson-evolution.jpg'
const About =() => {
    return (
        <div>
            <h1 className="tituloab">¡Bienvenido al mundo de Los Simpsons, donde la comedia y la sátira se unen en un cóctel amarillo de diversión y crítica social!</h1>
            <p className="aboutcon">Todo comenzó en 1987, cuando el caricaturista Matt Groening fue convocado por James L. Brooks para crear una serie de cortometrajes para "The Tracey Ullman Show". El 19 de abril de 1987, los televidentes se encontraron con una familia disfuncional pero entrañable: Los Simpsons.
                En 1989, la familia amarilla saltó a la fama con su propia serie animada en horario estelar, convirtiéndose en un fenómeno cultural instantáneo. ¿Sabías que el nombre de la familia se inspiró en los propios nombres de la familia de Groening? Además, Springfield, el hogar de los Simpsons, es un nombre común en Estados Unidos, lo que le otorga una sensación de familiaridad a la serie.
                Los Simpsons no solo se destacaron por su humor irreverente y sus personajes memorables, sino también por su capacidad para abordar temas sociales y políticos de manera inteligente y provocativa. Desde la crítica a la cultura de la televisión hasta la sátira política, Los Simpsons se han ganado un lugar en el corazón de los espectadores de todo el mundo.
                A lo largo de los años, la serie ha acumulado un impresionante récord de episodios, convirtiéndose en la serie de comedia de horario estelar de mayor duración en la historia de la televisión estadounidense. Con más de 30 temporadas y contando, Los Simpsons continúan siendo una parte integral de la cultura popular, influyendo en generaciones de espectadores y estableciendo un legado que perdurará por mucho tiempo.
                Así que, ya sea que estés buscando una dosis de risas o una reflexión profunda sobre la sociedad, Los Simpsons siempre estarán ahí para entretenerte y hacerte pensar. 
            </p>

                <div className='evolution'>
                <img src={evolution} alt='Psimpson' width="800" height="400" />
                </div>
        </div>


    )
}

export default About;