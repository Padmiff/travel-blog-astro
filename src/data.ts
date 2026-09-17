import acropolis from '@assets/Acropolis.jpg';
import furong from '@assets/furong.jpg';
import kyoto from '@assets/kyoto.webp';
import lagoMoraine from '@assets/LagoMoraine.jpg';
import oslo from '@assets/Oslo.jpg';
import seljalandsfoss from '@assets/Seljalandsfoss.jpg';

export const TITULO = 'Descubre lugares increibles al recorrer el mundo.';
export const TITULO_DESTINOS = 'Destinos Populares';
export const TITULO_ARTICULOS = 'Últimos Artículos';

export const DESTINOS_POPULARES = [
    {
        'imagen': kyoto,
        'titulo': 'Kioto, Japón',
        'descripcion': 'Templos y cerezos en flor'
    },
    {
        'imagen': furong,
        'titulo': 'Furong, China',
        'descripcion': 'Tradicion, Templos y cultura'
    },
    {
        'imagen': seljalandsfoss,
        'titulo': 'Seljalandsfoss, Islandia',
        'descripcion': 'Naturaleza, cascadas y conexión'
    }
] as const

export const ULTIMOS_ARTICULOS = [
    {
        'imagen': lagoMoraine,
        'titulo': 'Lago Moraine, Canada',
        'descripcion': 'Lagos y arboles rojisos'
    },
    {
        'imagen': acropolis,
        'titulo': 'Acropolis, Grecia',
        'descripcion': 'Templos, historia y mitos'
    },
    {
        'imagen': oslo,
        'titulo': 'Oslo, Noruega',
        'descripcion': 'Auroras boreales y Frio intenso'
    }
] as const