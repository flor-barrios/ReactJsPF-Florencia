const productos = {
    discos: [
        {
            id: 1,
            titulo: 'Harry Styles',
            descripcion: 'Harry Styles es el primer álbum de estudio del cantautor, modelo y actor británico del mismo nombre. Fue lanzado el 12 de mayo de 2017 a través de Erskine y Columbia Records.',
            precio: 'USD 22.00',
            imagen: '/img/disco2harry.jpg',
          },
          {
            id: 2,
            titulo: 'Fine Line',
            descripcion: 'Fine Line es el segundo álbum de estudio del cantante y compositor británico Harry Styles, publicado el 13 de diciembre de 2019 por las compañías discográficas Erskine y Columbia Records. Para su promoción contó con seis sencillos: Lights Up, Adore You, Falling, Watermelon Sugar, Golden y Treat People with Kindness.',
            precio: 'USD 25.00',
            imagen: '/img/discoharry.jpg',
          },
          {
            id: 3,
            titulo: 'Thriller',
            descripcion: 'Thriller es el sexto álbum de estudio del cantante estadounidense Michael Jackson. Fue lanzado el 30 de noviembre de 1982 por Epic Records. Producido por Quincy Jones —quien trabajó también en el álbum Off the Wall (1979) del mismo artista—, la obra está compuesta por un balance de varios géneros musicales: entre disco y rock, funk y balada, R&B y pop.',
            precio: 'USD 14',
            imagen: '/img/discoMichael.jpg',
          },
          {
            id: 4,
            titulo: 'Vice Versa',
            descripcion: 'Vice Versa es el segundo álbum de estudio del rapero puertorriqueño Rauw Alejandro, publicado el 25 de junio de 2021 a través del sello discográfico Sony Music Latin y Duars Entertaiment.',
            precio: 'USD 20',
            imagen: '/img/discorauw.jpg',
          },
          {
            id: 5,
            titulo: 'Midnights',
            descripcion: 'Midnights es el décimo álbum de estudio de la cantautora estadounidense Taylor Swift. El álbum se lanzó el 21 de octubre de 2022 a través de Republic Records. Anunciado en los MTV Video Music Awards de 2022, el álbum marca el primer trabajo nuevo de Swift desde sus álbumes de 2020, Folklore y Evermore. Midnights es un álbum conceptual sobre la contemplación nocturna, escrito y producido por Swift con Jack Antonoff como principal colaborador.',
            precio: 'USD 24',
            imagen: '/img/discotaylor.jpg',
          },
    ],
    
    vinilos: [
        {
            id: 6,
            titulo: 'Sticky Fingers',
            descripcion: 'Sticky Fingers es el noveno álbum de estudio de la banda de rock británica The Rolling Stones, publicado en abril de 1971. Grabado entre diciembre de 1969 y enero de 1971, fue producido por el estadounidense Jimmy Miller, en lo que supuso su tercer trabajo consecutivo con el grupo, y cuenta por primera vez con la participación íntegra del guitarrista Mick Taylor como miembro de los Stones',
            precio: 'USD 57',
            imagen: '/img/vinilostickyStones.jpg',
          },
          {
            id: 7,
            titulo: 'The Dark Side of the Moon',
            descripcion: 'The Dark Side of the Moon es el octavo álbum de estudio del grupo musical británico de rock progresivo Pink Floyd. Salió a la venta el 1 de marzo de 1973 en los Estados Unidos y el 23 de marzo del mismo año en el Reino Unido. Se estima que el álbum ha vendido más de 50 millones de copias a nivel mundial.',
            precio: 'USD 60',
            imagen: '/img/vinilopinkf.jpg',
          },
          {
            id: 8,
            titulo: 'Fine Line',
            descripcion: 'Fine Line es el segundo álbum de estudio del cantante y compositor británico Harry Styles, publicado el 13 de diciembre de 2019 por las compañías discográficas Erskine y Columbia Records. Para su promoción contó con seis sencillos: Lights Up, Adore You, Falling, Watermelon Sugar, Golden y Treat People with Kindness.',
            precio: 'USD 50',
            imagen: '/img/viniloharry.jpg',
          },
          {
            id: 9,
            titulo: 'Abbey Road',
            descripcion: 'Abbey Road es el undécimo álbum de estudio (duodécimo en estados unidos) publicado por la banda británica de rock The Beatles, sería lanzado el 26 de septiembre de 1969 en Reino Unido por Apple Records. Las grabaciones de Abbey Road comenzarían en abril de 1969, haciendo de este el último álbum grabado por la banda, ya que Let It Be, lanzado en 1970, había sido grabado con anterioridad.',
            precio: 'USD 57',
            imagen: '/img/vinilobeatles.jpg',
          },
          {
            id: 10,
            titulo: 'Vinilos sorpresa',
            descripcion: 'Llevate 4 vinilos sorpresa.',
            precio: 'USD 140',
            imagen: '/img/vinilos.jpg',
          },
    ],
    
    instrumentos: [
      {
        id: 11,
        titulo: 'Victrola',
        descripcion: 'Tocadiscos Bluetooth todo en 1 con altavoces integrados y tocadiscos de caoba de 3 velocidades (VTA-65-MAH). Tecnología de conectividad: Alámbrico. Cubierta antipolvo de acrílico transparente extraíble. Altavoces estéreo integrados, salida RCA y conector para auriculares. Características: tocadiscos de 3 velocidades, conectividad Bluetooth y radio FM',
        precio: 'USD 132',
        imagen: '/img/victrolains.jpg',
      },
      {
        id: 12,
        titulo: 'Bateria ASBA',
        descripcion: 'ASBA Drums nació en 1927, en Francia, pero alrededor del año 1983 la empresa suspendió sus actividades. Hace cuatro años, la marca fue reactivada teniendo a la innovación como foco. Bateria hecha a mano por la famosa marca ASBA.',
        precio: 'USD 1400',
        imagen: '/img/bateria.jpg',
      },
      {
        id: 13,
        titulo: 'Guitarra Eléctrica',
        descripcion: 'SERIE WOODSTOCK | TW-61. Un modelo clásico con énfasis en la captura con pastillas P90 único estilo y una clave Varitone capaz de entregar 5 sonidos para cada una de la posición de selección pastillas que resulta en 15 sonidos diferentes , Tagima TW61 es extremadamente versátil y tiene timbres inusuales.',
        precio: 'USD 400',
        imagen: '/img/gelectrica.jpg',
      },
      {
        id: 14,
        titulo: 'Guitarra Clásica',
        descripcion: 'Basado en el buque insignia C5 de Córdoba, el C5 Spruce agrega una nueva opción a un favorito de los fanáticos. Perfecta como primera guitarra con cuerdas de nailon, este modelo liviano está construido con una tapa sólida de abeto Engelmann y aros y fondo de caoba para producir un tono claro y potente con un hermoso sustain. Hecha a mano en el estilo tradicional español.',
        precio: 'USD 250',
        imagen: '/img/guitarra.jpg',
      },
      {
        id: 15,
        titulo: 'Piano',
        descripcion: 'ESTUDIO C3. Gracias a una reverberación transparente y armónicos de sonido rico, el C3 cumple con las crecientes demandas de los pianistas profesionales para un control de expresión más preciso. Calidad de sonido y rendimiento. Apariencia. Seguridad',
        precio: 'USD 29000',
        imagen: '/img/piano.jpg',
      },
    ],
  };

  export default productos;