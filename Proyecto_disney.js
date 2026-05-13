// 1. BASE DE DATOS Y VARIABLES GLOBALES
const DB = {
    user: JSON.parse(localStorage.getItem('usuario_registrado')) || {
        email: "test@stream.com",
        pass: "Stream2024!"
    },
    peliculas: [
        // MARVEL
        { 
            title: "Capitán América: The First Avenger", 
            cat: "MARVEL", 
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNRZ58laa3lT2Qh1Mrk13Y0urjmEV1KKZf0FqWdKhTLnM32gWU",
            desc: "Durante la Segunda Guerra Mundial, Steve Rogers se ofrece como voluntario para un experimento científico que lo transforma en el Súper Soldado conocido como Capitán América, la primera línea de defensa contra la organización Hydra.",
            trailer: "fpVcwklqxxM",
            archivoLocal: "video/capitan_ameHD.mp4"
        },
        { 
            title: "Avengers: Endgame", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
            desc: "Después de que Thanos eliminara a la mitad de toda la vida en el universo, los Vengadores restantes deben reunirse una vez más para intentar revertir el daño y restaurar el orden en el cosmos, cueste lo que cueste.",
            trailer: "TcMBFSGVi1c",
            archivoLocal: "video/avengers_endgameHD.mp4"
        },
        { 
            title: "Avengers: Infinity War", 
            cat: "MARVEL", 
            img: "https://m.media-amazon.com/images/I/51yfxA+yyUL._SY300_SX300_QL70_ML2_.jpg",
            desc: "Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su plan de devastación y ruina ponga fin al universo mediante las Gemas del Infinito.",
            trailer: "6ZfuNTqbHE8",
            archivoLocal: "video/avengers_infinityHD.mp4"
        },
        { 
            title: "Iron Man", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
            desc: "El multimillonario Tony Stark construye una armadura de alta tecnología para escapar de su cautiverio, decidiendo luego utilizar su genio para proteger al mundo como el superhéroe blindado Iron Man.",
            trailer: "8ugaeA-nMTc",
            archivoLocal: "video/iron_manHD.mp4"
        },
        { 
            title: "Thor: Love and Thunder", 
            cat: "MARVEL", 
            img: "https://m.media-amazon.com/images/I/81nLIF+eJ7L._SL1500_.jpg",
            desc: "Thor se encuentra en un viaje diferente a todo lo que ha enfrentado: una búsqueda de paz interior. Pero su retiro es interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses.",
            trailer: "tgB1wUcmbbw",
            archivoLocal: "video/thor_love_and_thunderHD.mp4"
        },
        { 
            title: "Doctor Strange", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
            desc: "El Dr. Stephen Strange abre portales a lo desconocido y viaja al Multiverso para enfrentarse a un nuevo y misterioso adversario con la ayuda de aliados místicos tanto antiguos como nuevos.",
            trailer: "aWzlQ2N6qqg",
            archivoLocal: "video/doctor_strangeHD.mp4"
        },
        { 
            title: "Black Panther", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
            desc: "T'Challa regresa a su hogar en la nación africana de Wakanda, tecnológicamente avanzada y aislada, para servir como rey y Pantera Negra, enfrentándose a un viejo enemigo que pone en riesgo el destino de su pueblo.",
            trailer: "dxWvtMOGAhw",
            archivoLocal: "video/black_pantherHD.mp4"
        },
        { 
            title: "Guardians of the Galaxy", 
            cat: "MARVEL", 
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYOJXRrNVHMxbkGMyLobZadDkRbFA4GNubU_YELHv7JW8GZXX5",
            desc: "Un grupo de forajidos intergalácticos debe unirse para detener a un fanático fanfarrón que planea purgar el universo, liderados por el aventurero temerario Peter Quill.",
            trailer: "d96cjJhvlMA",
            archivoLocal: "video/guardians_galaxyHD.mp4"
        },
        { 
            title: "Guardians of the Galaxy 2", 
            cat: "MARVEL", 
            img: "https://es.web.img3.acsta.net/pictures/17/03/09/14/11/154943.jpg",
            desc: "Los Guardianes deben luchar para mantener unida a su nueva familia mientras desentrañan los misterios del verdadero linaje de Peter Quill en esta colorida aventura espacial.",
            trailer: "duGqrYw4usE",
            archivoLocal: "video/guardians_galaxy_2HD.mp4"
        },
        { 
            title: "Guardians of the Galaxy 3", 
            cat: "MARVEL", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_886f315b.jpeg",
            desc: "Nuestra querida banda de inadaptados se está instalando en Knowhere, pero no pasa mucho tiempo antes de que sus vidas se vean alteradas por los ecos del turbulento pasado de Rocket.",
            trailer: "u3V5KDHRQvk",
            archivoLocal: "video/guardians_galaxy_3HD.mp4"
        },
        { 
            title: "The Incredible Hulk", 
            cat: "MARVEL", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQAQsxMDsLnahO1HkzKOPGslq2Bz_tNXjjOLA7IxuFQicAhNzIuofEyOWbeE4piKYWuHqtA&s=10",
            desc: "Bruce Banner vive huyendo mientras busca una cura para la radiacion gamma que lo transforma en Hulk, pero una nueva amenaza con una fuerza descomunal lo obliga a aceptar el monstruo que lleva dentro.",
            trailer: "xbqNb2PFKKA",
            archivoLocal: "video/incredible_hulkHD.mp4"
        },
        { 
            title: "Thor: Ragnarok", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
            desc: "Thor queda atrapado al otro lado del universo sin su martillo y debe regresar a Asgard para detener el Ragnarok, la destruccion de su mundo.",
            trailer: "ue80QwXMRHg",
            archivoLocal: "video/thor_ragnarokHD.mp4"
        },
        { 
            title: "Ant-Man", 
            cat: "MARVEL", 
            img: "https://m.media-amazon.com/images/I/81MDP9RWhoL._AC_UF894,1000_QL80_.jpg",
            desc: "Scott Lang recibe la oportunidad de convertirse en heroe usando un traje que le permite reducir su tamano y aumentar su fuerza.",
            trailer: "pWdKf3MneyI",
            archivoLocal: "video/ant_manHD.mp4"
        },
        { 
            title: "Captain Marvel", 
            cat: "MARVEL", 
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJyz_zQT-AzDZRE6iO6cW3t3SZVtaHq9evxjCU1EVGEwW3WDG1",
            desc: "Carol Danvers descubre el origen de sus poderes mientras la Tierra queda atrapada en medio de una guerra galactica entre dos razas alienigenas.",
            trailer: "Z1BCujX3pw8",
            archivoLocal: "video/captain_marvelHD.mp4"
        },
        { 
            title: "Spider-Man: No Way Home", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
            desc: "Peter Parker pide ayuda a Doctor Strange cuando su identidad queda al descubierto, pero el hechizo abre la puerta a visitantes de otros universos.",
            trailer: "JfVOs4VSpmA",
            archivoLocal: "video/spider_man_no_way_homeHD.mp4"
        },
        { 
            title: "Black Widow", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg",
            desc: "Natasha Romanoff se enfrenta a los secretos de su pasado y a una conspiracion peligrosa relacionada con la Sala Roja.",
            trailer: "ybji16u608U",
            archivoLocal: "video/black_widowHD.mp4"
        },
        { 
            title: "Shang-Chi and the Legend of the Ten Rings", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
            desc: "Shang-Chi debe enfrentarse a la organizacion de los Diez Anillos y al legado familiar que intento dejar atras.",
            trailer: "8YjFbMbfXaQ",
            archivoLocal: "video/shang_chiHD.mp4"
        },
        { 
            title: "Spider-Man: Far From Home (2019)", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
            desc: "Peter Parker viaja a Europa con sus amigos, pero sus vacaciones se complican cuando Nick Fury le pide ayuda para enfrentarse a una nueva amenaza.",
            trailer: "Nt9L1jCKGnE",
            archivoLocal: "video/spider_man_far_from_homeHD.mp4"
        },

        // PIXAR
        { 
            title: "Toy Story 4", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg",
            desc: "Woody siempre ha tenido claro cuál era su labor en el mundo, pero cuando Bonnie añade un nuevo juguete llamado Forky a su habitación, arranca una aventura que le enseñará lo grande que puede ser el mundo.",
            trailer: "wmiIUN-7qhE",
            archivoLocal: "video/ts4HD.mp4"
        },
        { 
            title: "Coco", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
            desc: "Miguel, un joven con el sueño de convertirse en leyenda de la música, se embarca en un viaje extraordinario a la mágica Tierra de los Muertos para descubrir la verdadera historia de su familia.",
            trailer: "xlnPHQ3TLX8",
            archivoLocal: "video/cocoHD.mp4"
        },
        { 
            title: "Inside Out 2", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",
            desc: "Regresa a la mente de Riley, ahora una adolescente, justo cuando el cuartel general está sufriendo una repentina demolición para dejar espacio a algo totalmente inesperado: ¡nuevas emociones!",
            trailer: "L4DrolmDxmw",
            archivoLocal: "video/inside_out_2HD.mp4"
        },
        { 
            title: "Luca", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
            desc: "En un hermoso pueblo costero de la Riviera italiana, un joven llamado Luca vive un verano inolvidable lleno de helados, pasta y viajes en scooter, mientras oculta un secreto sobre su verdadera identidad marina.",
            trailer: "mYfJxlgR2jw",
            archivoLocal: "video/lucaHD.mp4"
        },
        { 
            title: "Turning Red", 
            cat: "PIXAR", 
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYGcDQZPX0Ghja5A8R0Vk9OT-ewrl6pbh0OPRXl0v38q74pnH9",
            desc: "Mei Lee es una joven de trece años, segura de sí misma y algo tonta, que se debate entre seguir siendo la hija obediente de su madre y el caos de la adolescencia, con un pequeño detalle: se convierte en un panda rojo gigante.",
            trailer: "XdKzUbAiswE",
            archivoLocal: "video/turning_redHD.mp4"
        },
        { 
            title: "Finding Dory", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/p_findingdory_19754_4d6d2025.jpeg?region=0%2C0%2C540%2C810",
            desc: "Dory, la pez cirujano azul con problemas de memoria, emprende una búsqueda frenética para reunirse con sus padres, dándose cuenta de que la familia es algo que se encuentra en el camino.",
            trailer: "3JNLwlcPBPI",
            archivoLocal: "video/finding_doryHD.mp4"
        },
        { 
            title: "Monsters SA", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/M/MV5BNzQ0YTVhNjgtODlhYy00YTA2LTk0ZDgtMzc3Yzc2YzFmYzFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            desc: "En Monstruópolis, los monstruos viven de los gritos de los niños humanos, pero cuando una pequeña niña llamada Boo cruza al mundo de los monstruos, James P. Sullivan y Mike Wazowski descubren que no son tan peligrosos.",
            trailer: "CGbgaHoapFM",
            archivoLocal: "video/monsters_sa.mp4"
        },
        { 
            title: "Los Increíbles", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/I/714XszUxCFL.jpg",
            desc: "Bob Parr solía ser uno de los superhéroes más grandes del mundo. Quince años después, tiene una vida normal, hasta que recibe una comunicación misteriosa que lo lleva a una isla remota para una misión secreta.",
            trailer: "sJCjKQQOqT0",
            archivoLocal: "video/incrediblesHD.mp4"
        },
        { 
            title: "Los Increíbles 2", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_4f447b1d.jpeg?region=0,0,540,810&width=480",
            desc: "Helen es reclutada para liderar una campaña que traiga de vuelta a los superhéroes, mientras Bob se queda en casa lidiando con la vida cotidiana y los poderes emergentes del bebé Jack-Jack.",
            trailer: "i5qOzqD9Rms",
            archivoLocal: "video/incredibles_2HD.mp4"
        },
        { 
            title: "Elemental", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_def91c72.jpeg?region=0,0,540,810&width=480",
            desc: "En Ciudad Elemento, los residentes de fuego, agua, tierra y aire conviven. La historia presenta a Candela, una joven fuerte y brillante, cuya amistad con un chico sensible llamado Nilo desafía sus creencias.",
            trailer: "hXzcyx9V0xw",
            archivoLocal: "video/elementalHD.mp4"
        },
        { 
            title: "Lightyear", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_3f5716f2.jpeg?region=0,0,540,810&width=480",
            desc: "La historia definitiva del origen de Buzz Lightyear, el héroe que inspiró el juguete, siguiendo al legendario Guardián Espacial en una aventura intergaláctica a través del tiempo y el espacio.",
            trailer: "BwPL0Md_QFQ",
            archivoLocal: "video/lightyearHD.mp4"
        },
        { 
            title: "Cars", 
            cat: "PIXAR", 
            img: "https://es.web.img3.acsta.net/c_310_420/pictures/14/05/28/11/24/435900.jpg",
            desc: "Rayo McQueen, un coche de carreras novato y engreído, termina perdido en una ciudad olvidada de la Ruta 66, donde descubre que la vida es algo más que ganar trofeos y patrocinios.",
            trailer: "W_H7_tDHFE8",
            archivoLocal: "video/carsHD.mp4"
        },
        { 
            title: "Cars 2", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/I/911pF4wxWCL.jpg",
            desc: "La estrella de las carreras Rayo McQueen y su inseparable amigo Mate viajan al extranjero para competir en el primer Gran Premio Mundial, pero Mate se ve envuelto en una emocionante aventura de espionaje internacional.",
            trailer: "7C7LJGgzvq8",
            archivoLocal: "video/cars_2HD.mp4"
        },
        { 
            title: "Cars 3", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/M/MV5BNjM0MmUwZjgtYjU1Yi00NzljLTlmZTMtMzc5NjQyMmUxNDY5XkEyXkFqcGc@._V1_.jpg",
            desc: "Sorprendido por una nueva generación de corredores ultrarrápidos, el legendario Rayo McQueen es expulsado repentinamente del deporte que tanto ama y debe esforzarse para demostrar que aún es el mejor.",
            trailer: "2LeOH9AGJQM",
            archivoLocal: "video/cars_3HD.mp4"
        },
        { 
            title: "Ratatouille", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
            desc: "Remy, una rata con un gran talento para la cocina, suena con convertirse en chef en Paris y demostrar que cualquiera puede cocinar.",
            trailer: "NgsQ8mVkN8w",
            archivoLocal: "video/ratatouilleHD.mp4"
        },
        { 
            title: "WALL-E", 
            cat: "PIXAR", 
            img: "https://img2.od-cdn.com/ImageType-100/11618-1/%7BCF6C09A2-9058-4B3E-B9AE-1C9FB3E591BB%7DIMG100.JPG",
            desc: "Un pequeno robot recolector de basura descubre una nueva mision que puede cambiar el destino de la humanidad.",
            trailer: "CZ1CATNbXg0",
            archivoLocal: "video/wall_eHD.mp4"
        },
        { 
            title: "Up", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
            desc: "Carl Fredricksen emprende una aventura inesperada hacia Sudamerica con su casa elevada por globos y un joven explorador como companero.",
            trailer: "m7pFraFvV5M",
            archivoLocal: "video/upHD.mp4"
        },
        { 
            title: "Brave", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg",
            desc: "Merida, una princesa habil con el arco, desafia una antigua tradicion y desata una maldicion que debera corregir para salvar a su familia.",
            trailer: "6CKcqIahedc",
            archivoLocal: "video/braveHD.mp4"
        },

        // STAR WARS
        { 
            title: "The Mandalorian", 
            cat: "STAR WARS", 
            img: "https://static.wikia.nocookie.net/starwars/images/8/80/MandoS2Poster.jpg",
            desc: "Tras la caída del Imperio, un pistolero solitario se abre camino a través de las galaxias exteriores, lejos de la autoridad de la Nueva República, protegiendo a un misterioso niño de fuerzas oscuras.",
            trailer: "aOC8E8z_ifw",
            archivoLocal: "video/mandalorianHD.mp4"
        },
        { 
            title: "A New Hope", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/81CIXJxQ3TL._SL1500_.jpg",
            desc: "Luke Skywalker une fuerzas con un caballero Jedi, un piloto arrogante y dos droides para salvar la galaxia de la estación de combate destructora de planetas del Imperio, mientras intenta rescatar a la Princesa Leia.",
            trailer: "k-Ua033oKAk",
            archivoLocal: "video/star_wars_a_new_hopeHD.mp4"
        },
        { 
            title: "The Empire Strikes Back", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/51zRGNNUXqL._AC_UF894,1000_QL80_.jpg",
            desc: "Tras una derrota devastadora en el planeta helado Hoth, Luke Skywalker viaja a Dagobah para entrenar con el Maestro Yoda, mientras Darth Vader persigue implacablemente a sus amigos a través de la galaxia.",
            trailer: "xESiohGGP7g",
            archivoLocal: "video/star_wars_empire_strikes_backHD.mp4"
        },
        { 
            title: "Return of the Jedi", 
            cat: "STAR WARS", 
            img: "https://prodimage.images-bn.com/pimages/9780345307675_p0_v4_s600x595.jpg",
            desc: "Luke Skywalker lidera una misión para rescatar a Han Solo de las garras de Jabba el Hutt, mientras la Alianza Rebelde se prepara para un asalto final contra una segunda Estrella de la Muerte, más poderosa y protegida.",
            trailer: "MYD_xxY5wEI",
            archivoLocal: "video/star_wars_return_jediHD.mp4"
        },
        { 
            title: "The Phantom Menace", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/51Mfm8-rDyL._AC_UF1000,1000_QL80_.jpg",
            desc: "Dos caballeros Jedi escapan de un bloqueo hostil para buscar aliados y conocen a un joven esclavo que posee un vínculo inusualmente fuerte con la Fuerza, mientras una amenaza largo tiempo dormida resurge en las sombras.",
            trailer: "Xv5OAeerXzs",
            archivoLocal: "video/star_wars_phantom_menaceHD.mp4"
        },
        { 
            title: "Attack of the Clones", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/81xU32hBH0L._AC_UF894,1000_QL80_.jpg",
            desc: "Diez años después de la invasión de Naboo, la galaxia está al borde de la guerra civil. Bajo la dirección de un Jedi renegado, miles de sistemas solares amenazan con separarse de la República Galáctica.",
            trailer: "tjSyI0-Qr9I",
            archivoLocal: "video/star_wars_attack_clonesHD.mp4"
        },
        { 
            title: "Revenge of the Sith", 
            cat: "STAR WARS", 
            img: "https://pics.filmaffinity.com/Star_Wars_Episodio_III_La_venganza_de_los_Sith-745938026-large.jpg",
            desc: "Tres años después del inicio de las Guerras Clon, los Jedi se dispersan por la galaxia liderando un gran ejército de clones. El Canciller Palpatine revela su verdadera naturaleza mientras Anakin Skywalker sucumbe al lado oscuro.",
            trailer: "XqSEh6Hxe9g",
            archivoLocal: "video/star_wars_revenge_sithHD.mp4"
        },
        { 
            title: "Andor", 
            cat: "STAR WARS", 
            img: "https://hips.hearstapps.com/hmg-prod/images/andor-poster-1663598863.jpg",
            desc: "En una era llena de peligros, engaños e intrigas, Cassian Andor emprenderá el camino que lo convertirá en un héroe rebelde, explorando una nueva perspectiva de la galaxia de Star Wars.",
            trailer: "PboKpnin_Wg",
            archivoLocal: "video/andorHD.mp4"
        },
        { 
            title: "The Force Awakens", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
            desc: "Treinta años después de la derrota del Imperio, surge una nueva amenaza: la Primera Orden. Rey, una chatarrera del desierto, y Finn, un soldado de asalto desertor, se unen a Han Solo para buscar la última esperanza de paz.",
            trailer: "sGbxmsDFVnE",
            archivoLocal: "video/star_wars_force_awakensHD.mp4"
        },
        { 
            title: "The Rise of Skywalker", 
            cat: "STAR WARS", 
            img: "https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg",
            desc: "Los miembros supervivientes de la Resistencia se enfrentan a la Primera Orden una vez más, mientras el legendario conflicto entre los Jedi y los Sith llega a su punto culminante en este cierre épico de la saga Skywalker.",
            trailer: "Q0CbN8sfihY",
            archivoLocal: "video/star_wars_rise_skywalkerHD.mp4"
        },
        { 
            title: "Ahsoka", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/61CMxmLKppL._AC_UF1000,1000_QL80_.jpg",
            desc: "Ambientada tras la caída del Imperio, la antigua Caballero Jedi Ahsoka Tano investiga una amenaza emergente que pone en peligro a una vulnerable galaxia, mientras busca al desaparecido Gran Almirante Thrawn.",
            trailer: "J_1EXWNETiI",
            archivoLocal: "video/ahsokaHD.mp4"
        },
        { 
            title: "The Clone Wars", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/M/MV5BOTdiODQ1MDYtZjM5My00MmQ5LTk1ZWUtZWIwYjBhZGMxZDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            desc: "Mientras las Guerras Clon barren la galaxia, los Caballeros Jedi luchan por mantener el orden y restaurar la paz. El Gran Ejército de la República se enfrenta al ejército de droides de los Separatistas.",
            trailer: "ZLW2jkd6E7g",
            archivoLocal: "video/star_wars_clone_warsHD.mp4"
        },
        { 
            title: "Rogue One", 
            cat: "STAR WARS", 
            img: "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
            desc: "En un tiempo de conflicto, un grupo de héroes improbables se une en una misión para robar los planos de la Estrella de la Muerte, el arma de destrucción definitiva del Imperio.",
            trailer: "Wji-BZ0oCwg",
            archivoLocal: "video/rogue_oneHD.mp4"
        },
        { 
            title: "Solo", 
            cat: "STAR WARS", 
            img: "https://upload.wikimedia.org/wikipedia/en/5/54/Solo_A_Star_Wars_Story_poster.jpg",
            desc: "A través de una serie de arriesgadas travesuras en un submundo criminal oscuro y peligroso, Han Solo entabla amistad con su futuro copiloto Chewbacca.",
            trailer: "jPEYpryMp2s",
            archivoLocal: "video/soloHD.mp4"
        },

        // NAT GEO
        { 
            title: "Free Solo", 
            cat: "NAT GEO", 
            img: "https://lumiere-a.akamaihd.net/v1/images/docfilmswebsite_1080x1600_freesolo_91d7bed0.jpeg",
            desc: "Sigue a Alex Honnold mientras intenta realizar el primer ascenso en solitario libre de la pared de granito de El Capitán en el Parque Nacional Yosemite.",
            trailer: "_LRPuo6ZVVk", 
            archivoLocal: "video/free_soloHD.mp4"
        },
        { 
            title: "Welcome to Earth", 
            cat: "NAT GEO", 
            img: "https://m.media-amazon.com/images/M/MV5BMjE1ZDBmNDAtYzQ2NC00MjU5LTkzZTItNWM4NmY1MGFjYjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            desc: "Will Smith se embarca en una aventura global para explorar los lugares más extremos y espectaculares de la Tierra, guiado por exploradores de élite.",
            trailer: "i0MTCXgil1M",
            archivoLocal: "video/welcome_to_earthHD.mp4"
        },
        { 
            title: "The Rescue", 
            cat: "NAT GEO", 
            img: "https://lumiere-a.akamaihd.net/v1/images/therescue-poster_1080x1600_e9ca44a1.jpeg",
            desc: "La crónica del rescate que cautivó al mundo en 2018: doce niños y su entrenador de fútbol atrapados en una cueva inundada en Tailandia.",
            trailer: "raVceiFQSjw",
            archivoLocal: "video/the_rescue.mp4"
        },
        { 
            title: "Fire of Love", 
            cat: "NAT GEO", 
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Fire_of_Love_poster.jpeg/250px-Fire_of_Love_poster.jpeg",
            desc: "Katia y Maurice Krafft amaban dos cosas: el uno al otro y los volcanes. Durante décadas, la pareja recorrió el planeta persiguiendo erupciones.",
            trailer: "pH6Fn_RA21M",
            archivoLocal: "video/fire_of_love.mp4"
        },

        // MAS PELICULAS
        {
            title: "Pirates of the Caribbean",
            cat: "DISNEY",
            img: "https://pics.filmaffinity.com/Piratas_del_Caribe_La_maldiciaon_de_la_Perla_Negra-627724446-large.jpg",
            desc: "El capitan Jack Sparrow se ve arrastrado a una aventura de piratas, tesoros malditos y batallas en alta mar.",
            trailer: "tnx35Z4nWWc",
            archivoLocal: "video/pirates_caribbeanHD.mp4"
        },
        {
            title: "Avatar",
            cat: "20TH CENTURY",
            img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
            desc: "Jake Sully viaja a Pandora y descubre un mundo extraordinario mientras se debate entre su mision y el pueblo Na'vi.",
            trailer: "5PSNL1qE6VY",
            archivoLocal: "video/avatarHD.mp4"
        },
        {
            title: "Avatar: The Way of Water",
            cat: "20TH CENTURY",
            img: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
            desc: "La familia Sully explora los oceanos de Pandora y se enfrenta a una nueva amenaza que vuelve a poner en peligro su hogar.",
            trailer: "d9MyW72ELq0",
            archivoLocal: "video/avatar_way_of_waterHD.mp4"
        },
        {
            title: "Jungle Cruise",
            cat: "DISNEY",
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNzRbBBs_7Oey0OhrXcH85YX-yAdrCgIbD-_5yPMfse7bgv-o1",
            desc: "Una doctora y un capitan de barco recorren la selva en busca de un arbol legendario con poderes curativos.",
            trailer: "f_HvoipFcA8",
            archivoLocal: "video/jungle_cruiseHD.mp4"
        },
        {
            title: "Cruella",
            cat: "DISNEY",
            img: "https://m.media-amazon.com/images/I/81eXmEDov7L._AC_UF894,1000_QL80_.jpg",
            desc: "Estella entra en el mundo de la moda londinense y empieza a convertirse en la audaz y provocadora Cruella.",
            trailer: "gmRKv7n2If8",
            archivoLocal: "video/cruellaHD.mp4"
        },
        {
            title: "Encanto",
            cat: "DISNEY",
            img: "https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg",
            desc: "Mirabel Madrigal intenta salvar la magia de su familia en una casa encantada llena de dones extraordinarios.",
            trailer: "CaimKeDcudo",
            archivoLocal: "video/encantoHD.mp4"
        },
        {
            title: "Frozen",
            cat: "DISNEY",
            img: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
            desc: "Anna emprende un viaje para encontrar a su hermana Elsa y devolver el verano al reino de Arendelle.",
            trailer: "n7f6hlKsxxo"
        },
        {
            title: "Moana",
            cat: "DISNEY",
            img: "https://static.wikia.nocookie.net/doblaje/images/f/fa/Moana_poster_5.jpg/revision/latest?cb=20210824202043&path-prefix=es",
            desc: "Moana navega mas alla del arrecife para salvar a su pueblo y descubrir su verdadero destino.",
            trailer: "LKFuXETZUsI",
            archivoLocal: "video/moanaHD.mp4"
        },
        {
            title: "Zootopia",
            cat: "DISNEY",
            img: "https://upload.wikimedia.org/wikipedia/en/e/ea/Zootopia_poster.jpg",
            desc: "La agente Judy Hopps y el zorro Nick Wilde investigan un misterio en una ciudad habitada por animales de todo tipo.",
            trailer: ""
        },

        // SERIES
        {
            title: "Los Simpsons",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhYS00ZTRiLTgzOTEtNmEyZTYwMTcwN2Y0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
            desc: "La familia Simpson vive situaciones absurdas y satiricas en Springfield.",
            trailer: ""
        },
        {
            title: "Padre de familia",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BODM1MmQ2MGYtMDlhOC00ZGEyLTg4YjAtMGY0NWE2ZTPQCVwD5vo1cfbPYiFWBhcWds8YNxMxWQs@._V1_.jpg",
            desc: "La familia Griffin protagoniza una comedia animada irreverente llena de humor absurdo.",
            trailer: ""
        },
        {
            title: "The Cleveland Show",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMTY3NTY0Mzg4MV5BMl5BanBnXkFtZTcwMTE1MjMyMw@@._V1_.jpg",
            desc: "Cleveland Brown empieza una nueva vida con su familia en Stoolbend.",
            trailer: ""
        },
        {
            title: "Futurama",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMjA4NTAyMjA0N15BMl5BanBnXkFtZTgwNTI5NDc5MTE@._V1_.jpg",
            desc: "Fry despierta en el futuro y trabaja como repartidor espacial.",
            trailer: ""
        },
        {
            title: "Malcolm in the Middle",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BNTljYzU4N2MtZDgxMi00M2NmLTk3OWQtN2Y0N2E2ZGVmYmYyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
            desc: "Malcolm intenta sobrevivir a su familia caotica mientras lidia con el colegio.",
            trailer: ""
        },
        {
            title: "Bob's Burgers",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMjI0NTU2NzI5Nl5BMl5BanBnXkFtZTgwMzU2MTU4MDI@._V1_.jpg",
            desc: "La familia Belcher intenta mantener a flote su hamburgueseria.",
            trailer: ""
        },
        {
            title: "American Dad",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMTY5Nzk5NzQ4OV5BMl5BanBnXkFtZTgwMjE2MzkwNzE@._V1_.jpg",
            desc: "Stan Smith y su familia protagonizan una comedia animada con espias y aliens.",
            trailer: ""
        },
        {
            title: "Gravity Falls",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMjI4Mjg3ODU0NF5BMl5BanBnXkFtZTgwNjU3MDUxMDE@._V1_.jpg",
            desc: "Dipper y Mabel pasan el verano en Gravity Falls, un pueblo lleno de misterios.",
            trailer: ""
        },
        {
            title: "Phineas and Ferb",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMTY3NTY0Mzg4MV5BMl5BanBnXkFtZTcwMTE1MjMyMw@@._V1_.jpg",
            desc: "Phineas y Ferb convierten cada dia de verano en una invencion gigantesca.",
            trailer: ""
        },
        {
            title: "WandaVision",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BYjkwNzNiY2UtOTA1OC00YzMyLWEyMzYtNWVjMmViY2VlM2I5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            desc: "Wanda y Vision viven una aparente vida perfecta que empieza a revelar grietas.",
            trailer: ""
        },
        {
            title: "Loki",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtYWQ3AS00VVNjLTg2OTktM2I0YmE4YzcyN2RjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            desc: "Loki es capturado por la Autoridad de Variacion Temporal.",
            trailer: ""
        },
        {
            title: "Moon Knight",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZjdkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            desc: "Steven Grant descubre que comparte cuerpo con un mercenario ligado a un antiguo dios egipcio.",
            trailer: ""
        },
        {
            title: "Daredevil",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BODcwMjg4MzktNTNlNC00OTU2LWE3OTYtYTUzZTU2ZWEyZTM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            desc: "Matt Murdock protege Hell's Kitchen como abogado de dia y vigilante de noche.",
            trailer: ""
        }
    ]
};

let avatarSeleccionado = "";
let perfilAEditar = null;
let modoEdicion = false;

// ELEMENTOS DEL DOM
const loginSection = document.getElementById('login-section');
const profileSection = document.getElementById('profile-section');
const dashboardSection = document.getElementById('dashboard-section');
const modalPerfil = document.getElementById('modal-perfil');
const modalreg = document.getElementById('modalreg');
const inputNombre = document.getElementById('nuevo-nombre-perfil');

const GENEROS_CATALOGO = {
    pelicula: {
        "Accion": [
            "Capitán América: The First Avenger",
            "Avengers: Endgame",
            "Avengers: Infinity War",
            "Iron Man",
            "Black Panther",
            "Pirates of the Caribbean",
            "Avatar",
            "Shang-Chi and the Legend of the Ten Rings",
            "Rogue One"
        ],
        "Superheroes": [
            "Capitán América: The First Avenger",
            "Avengers: Endgame",
            "Avengers: Infinity War",
            "Iron Man",
            "Thor: Love and Thunder",
            "Doctor Strange",
            "Black Panther",
            "Ant-Man",
            "Spider-Man: No Way Home",
            "Black Widow"
        ],
        "Ciencia ficcion": [
            "Iron Man",
            "Doctor Strange",
            "Guardians of the Galaxy",
            "Guardians of the Galaxy 2",
            "Guardians of the Galaxy 3",
            "Avatar",
            "A New Hope",
            "The Empire Strikes Back"
        ],
        "Animacion": [
            "Toy Story 4", "Coco", "Inside Out 2", "Luca", "Turning Red", 
            "Finding Dory", "Monsters SA", "Cars", "Ratatouille", "Encanto"
        ],
        "Aventura": [
            "Pirates of the Caribbean",
            "Jungle Cruise",
            "Moana",
            "Up",
            "Brave",
            "Avatar"
        ]
    },
    serie: {
        "Animacion": ["The Clone Wars", "Los Simpsons", "Futurama", "Gravity Falls"],
        "Ciencia ficcion": ["The Mandalorian", "Andor", "Loki", "WandaVision"]
    }
};

// --- LOGICA DE INTERFAZ ---
document.querySelectorAll('[data-genero-box]').forEach(box => {
    const boton = box.querySelector('.genre-toggle');
    boton.onclick = () => box.classList.toggle('open');
});

document.querySelectorAll('[data-genero]').forEach(genero => {
    genero.onclick = () => {
        document.querySelectorAll('[data-genero]').forEach(item => item.classList.remove('active'));
        genero.classList.add('active');
        filtrarPorGenero(genero.dataset.tipo, genero.dataset.genero);
    };
});

// --- REGISTRO Y LOGIN ---
const modalregElement = document.getElementById('modalreg');
document.getElementById('link-suscribete').onclick = (e) => { e.preventDefault(); modalregElement.classList.remove('hidden'); };
document.getElementById('cerrar-reg').onclick = () => modalregElement.classList.add('hidden');

document.getElementById('form-registro').onsubmit = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const pass = e.target.querySelector('input[type="password"]').value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios_disney')) || [];
    if (usuarios.find(u => u.email === email)) return alert("Email ya registrado");
    usuarios.push({ email, pass });
    localStorage.setItem('usuarios_disney', JSON.stringify(usuarios));
    alert("Registro exitoso");
    modalregElement.classList.add('hidden');
};

document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    const mail = document.getElementById('email-input').value;
    const pass = document.getElementById('pass-input').value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios_disney')) || [];
    const prueba = { email: "test@stream.com", pass: "Stream2024!" };
    if (usuarios.find(u => u.email === mail && u.pass === pass) || (mail === prueba.email && pass === prueba.pass)) {
        loginSection.classList.add('hidden');
        profileSection.classList.remove('hidden');
    } else alert("Datos incorrectos");
};

// --- PERFILES ---
document.querySelectorAll('.profile-item').forEach(item => {
    item.onclick = function() {
        perfilAEditar = this;
        const nombre = this.querySelector('span').innerText;
        if (nombre === 'Añadir' || modoEdicion) {
            inputNombre.value = nombre === 'Añadir' ? "" : nombre;
            modalPerfil.classList.remove('hidden');
        } else entrarAlDashboard(nombre);
    };
});

document.querySelectorAll('.option-img').forEach(img => {
    img.onclick = function() {
        document.querySelectorAll('.option-img').forEach(i => i.classList.remove('selected'));
        this.classList.add('selected');
        avatarSeleccionado = this.dataset.img;
    };
});

document.getElementById('btn-guardar-perfil').onclick = () => {
    if (inputNombre.value.trim() && avatarSeleccionado) {
        perfilAEditar.querySelector('span').innerText = inputNombre.value;
        perfilAEditar.querySelector('.avatar').style.backgroundImage = `url('${avatarSeleccionado}')`;
        perfilAEditar.querySelector('.avatar').classList.remove('empty');
        if (perfilAEditar.nextElementSibling) perfilAEditar.nextElementSibling.classList.remove('hidden');
        modalPerfil.classList.add('hidden');
        resetModal();
    } else alert("Faltan datos");
};

// --- DASHBOARD ---
function entrarAlDashboard(nombre) {
    profileSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    document.getElementById('active-user-name').innerText = "Hola, " + nombre;
    mostrarPeliculas();
}

function mostrarPeliculas(filtro = '') {
    const grid = document.getElementById('movie-display-grid');
    grid.innerHTML = '';
    const filtradas = filtro ? DB.peliculas.filter(p => p.cat === filtro) : DB.peliculas;
    pintarPeliculas(filtradas);
}

function filtrar(categoria) {
    document.getElementById('category-title').innerText = categoria || "Recomendados para ti";
    mostrarPeliculas(categoria);
}

function filtrarPorGenero(tipo, genero) {
    document.getElementById('category-title').innerText = `${genero} - ${tipo === "serie" ? "Series" : "Peliculas"}`;
    const titulos = GENEROS_CATALOGO[tipo][genero] || [];
    const filtradas = DB.peliculas.filter(p => titulos.includes(p.title));
    pintarPeliculas(filtradas);
}
function pintarPeliculas(peliculas) {
    const grid = document.getElementById('movie-display-grid');
    grid.innerHTML = ''; // IMPORTANTE: Esto evita que se mezclen géneros

    peliculas.forEach(p => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.backgroundImage = `url("${p.img}")`;
        card.setAttribute('data-title', p.title);
        
        // La tarjeta está limpia (sin botón play)
        card.onclick = () => verDetalles(p);
        grid.appendChild(card);
    });
}

function verDetalles(pelicula) {
    dashboardSection.classList.add('hidden');
    const details = document.getElementById('movie-details');
    details.classList.remove('hidden');
    document.getElementById('detail-title').innerText = pelicula.title;
    document.getElementById('detail-description').innerText = pelicula.desc;
    
    const player = document.getElementById('player');
    const thumb = pelicula.trailer ? `https://img.youtube.com/vi/${pelicula.trailer}/hqdefault.jpg` : pelicula.img;
    player.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${thumb}")`;
    player.style.backgroundSize = 'cover';
    player.innerHTML = '<div class="play-icon" style="font-size:50px; color:white; cursor:pointer;">▶</div>';

    player.onclick = () => {
        if (pelicula.archivoLocal) {
            player.innerHTML = `<video width="100%" height="100%" controls autoplay><source src="${pelicula.archivoLocal}" type="video/mp4"></video>`;
            player.style.backgroundImage = 'none';
        } else if (pelicula.trailer) {
            player.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${pelicula.trailer}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
            player.style.backgroundImage = 'none';
        }
    };
}

document.getElementById('btn-volver').onclick = () => {
    document.getElementById('player').innerHTML = '';
    document.getElementById('movie-details').classList.add('hidden');
    dashboardSection.classList.remove('hidden');
};

document.getElementById('cerrar-detalles').onclick = document.getElementById('btn-volver').onclick;

function resetModal() {
    inputNombre.value = "";
    avatarSeleccionado = "";
    document.querySelectorAll('.option-img').forEach(i => i.classList.remove('selected'));
}

window.onclick = (e) => {
    if (e.target === modalPerfil) modalPerfil.classList.add('hidden');
    if (e.target === modalregElement) modalregElement.classList.add('hidden');
};