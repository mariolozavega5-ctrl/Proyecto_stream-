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
            bg: "https://c7.alamy.com/comp/3CH3PD0/captain-america-civil-war-2016-directed-by-anthony-russo-and-joe-russo-and-starring-chris-evans-robert-downey-jr-and-scarlett-johansson-political-pressure-divides-the-avengers-leading-to-a-clash-between-former-allies-photograph-of-an-original-us-teaser-poster-featuring-artwork-by-ryan-meinerding-editorial-use-only-credit-marvel-studios-walt-disney-studios-motion-pictures-3CH3PD0.jpg", 
            archivoLocal: "video/capitan_ameHD.mp4"
        },
        { 
            title: "Avengers: Endgame", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
            desc: "Después de que Thanos eliminara a la mitad de toda la vida en el universo, los Vengadores restantes deben reunirse una vez más para intentar revertir el daño y restaurar el orden en el cosmos, cueste lo que cueste.",
            trailer: "TcMBFSGVi1c",
            bg: "https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg", // <--- FONDO HORIZONTAL EN HD
            archivoLocal: "video/avengers_endgameHD.mp4"
        },
        { 
            title: "Avengers: Infinity War", 
            cat: "MARVEL", 
            img: "https://m.media-amazon.com/images/I/51yfxA+yyUL._SY300_SX300_QL70_ML2_.jpg",
            desc: "Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su plan de devastación y ruina ponga fin al universo mediante las Gemas del Infinito.",
            trailer: "6ZfuNTqbHE8",
            bg: "https://m.media-amazon.com/images/S/pv-target-images/48e8a5235439a154a86eae15dbe5353768e087ae9448b7e533c7937ec70f8c7c.jpg", // <--- FONDO HORIZONTAL EN HD
            archivoLocal: "video/avengers_infinityHD.mp4"
        },
        { 
            title: "Iron Man", 
            cat: "MARVEL", 
            img: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
            desc: "El multimillonario Tony Stark construye una armadura de alta tecnología para escapar de su cautiverio, decidiendo luego utilizar su genio para proteger al mundo como el superhéroe blindado Iron Man.",
            trailer: "8ugaeA-nMTc",
            bg: "https://wallpapers.com/images/featured/iron-man-superheroe-ponky3hlfivddo2m.jpg", // <--- FONDO HORIZONTAL EN HD
            archivoLocal: "video/iron_manHD.mp4"
        },
       { 
        title: "Thor: Love and Thunder", 
        cat: "MARVEL", 
        img: "https://m.media-amazon.com/images/I/81nLIF+eJ7L._SL1500_.jpg",
        desc: "Thor se encuentra en un viaje diferente a todo lo que ha enfrentado: una búsqueda de paz interior. Pero su retiro es interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses.",
        trailer: "tgB1wUcmbbw",
        bg: "https://image.tmdb.org/t/p/w1280/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
        archivoLocal: "video/thor_love_and_thunderHD.mp4"
    },
    { 
        title: "Doctor Strange", 
        cat: "MARVEL", 
        img: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
        desc: "El Dr. Stephen Strange abre portales a lo desconocido y viaja al Multiverso para enfrentarse a un nuevo y misterioso adversario con la ayuda de aliados místicos tanto antiguos como nuevos.",
        trailer: "aWzlQ2N6qqg",
        bg: "https://www.ciempiesmagazine.com/wp-content/uploads/2016/04/doctor_strange_2016-HD.jpg",
        archivoLocal: "video/doctor_strangeHD.mp4"
    },
    { 
        title: "Black Panther", 
        cat: "MARVEL", 
        img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
        desc: "T'Challa regresa a su hogar en la nación africana de Wakanda, tecnológicamente avanzada y aislada, para servir como rey y Pantera Negra, enfrentándose a un viejo enemigo que pone en riesgo el destino de su pueblo.",
        trailer: "dxWvtMOGAhw",
        bg: "https://image.tmdb.org/t/p/w1280/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
        archivoLocal: "video/black_pantherHD.mp4"
    },
    { 
        title: "Guardians of the Galaxy", 
        cat: "MARVEL", 
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYOJXRrNVHMxbkGMyLobZadDkRbFA4GNubU_YELHv7JW8GZXX5",
        desc: "Un grupo de forajidos intergalácticos debe unirse para detener a un fanático fanfarrón que planea purgar el universo, liderados por el aventurero temerario Peter Quill.",
        trailer: "d96cjJhvlMA",
        bg: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d34127cb-f8e9-45f7-9f93-55d5b27e736e/compose?aspectRatio=1.78&format=webp&width=1200",
        archivoLocal: "video/guardians_galaxyHD.mp4"
    },
    { 
        title: "Guardians of the Galaxy 2", 
        cat: "MARVEL", 
        img: "https://es.web.img3.acsta.net/pictures/17/03/09/14/11/154943.jpg",
        desc: "Los Guardianes deben luchar para mantener unida a su nueva familia mientras desentrañan los misterios del verdadero linaje de Peter Quill en esta colorida aventura espacial.",
        trailer: "duGqrYw4usE",
        bg: "https://i.blogs.es/57d329/guardiansofthegalaxycabecera/1366_2000.jpg",
        archivoLocal: "video/guardians_galaxy_2HD.mp4"
    },
    { 
        title: "Guardians of the Galaxy 3", 
        cat: "MARVEL", 
        img: "https://lumiere-a.akamaihd.net/v1/images/image_886f315b.jpeg",
        desc: "Nuestra querida banda de inadaptados se está instalando en Knowhere, pero no pasa mucho tiempo antes de que sus vidas se vean alteradas por los ecos del turbulento pasado de Rocket.",
        trailer: "u3V5KDHRQvk",
        bg: "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
        archivoLocal: "video/guardians_galaxy_3HD.mp4"
    },
    { 
        title: "The Incredible Hulk", 
        cat: "MARVEL", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQAQsxMDsLnahO1HkzKOPGslq2Bz_tNXjjOLA7IxuFQicAhNzIuofEyOWbeE4piKYWuHqtA&s=10",
        desc: "Bruce Banner vive huyendo mientras busca una cura para la radiacion gamma que lo transforma en Hulk, pero una nueva amenaza con una fuerza descomunal lo obliga a aceptar el monstruo que lleva dentro.",
        trailer: "xbqNb2PFKKA",
        bg: "https://image.tmdb.org/t/p/w1280/1XvjaAEE0hV2zmwqI7P327x8b7k.jpg",
        archivoLocal: "video/incredible_hulkHD.mp4"
    },
    { 
        title: "Thor: Ragnarok", 
        cat: "MARVEL", 
        img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
        desc: "Thor queda atrapado al otro lado del universo sin su martillo y debe regresar a Asgard para detener el Ragnarok, la destruccion de su mundo.",
        trailer: "ue80QwXMRHg",
        bg: "https://image.tmdb.org/t/p/w1280/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
        archivoLocal: "video/thor_ragnarokHD.mp4"
    },
    { 
        title: "Ant-Man", 
        cat: "MARVEL", 
        img: "https://m.media-amazon.com/images/I/81MDP9RWhoL._AC_UF894,1000_QL80_.jpg",
        desc: "Scott Lang recibe la oportunidad de convertirse en heroe usando un traje que le permite reducir su tamano y aumentar su fuerza.",
        trailer: "pWdKf3MneyI",
        bg: "https://files.ekmcdn.com/allwallpapers/images/ant-man-microverse-wallpaper-poster-31305-1-p.jpg",
        archivoLocal: "video/ant_manHD.mp4"
    },
    { 
        title: "Captain Marvel", 
        cat: "MARVEL", 
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJyz_zQT-AzDZRE6iO6cW3t3SZVtaHq9evxjCU1EVGEwW3WDG1",
        desc: "Carol Danvers descubre el origen de sus poderes mientras la Tierra queda atrapada en medio de una guerra galactica entre dos razas alienigenas.",
        trailer: "Z1BCujX3pw8",
        bg: "https://i.blogs.es/fc43d2/captain-marvel-movie-brie-larson-y5431/1366_2000.jpg",
        archivoLocal: "video/captain_marvelHD.mp4"
    },
    { 
        title: "Spider-Man: No Way Home", 
        cat: "MARVEL", 
        img: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        desc: "Peter Parker pide ayuda a Doctor Strange cuando su identidad queda al descubierto, pero el hechizo abre la puerta a visitantes de otros universos.",
        trailer: "JfVOs4VSpmA",
        bg: "https://img.asmedia.epimg.net/resizer/v2/I4WT6Y6NTROVRMT44WZUUK2WZY.jpg?auth=d2cb60ac0b29c21c61ee1c92e09cccc7b2664de4355c5cd0e883d3a11bb0c056&width=1952&height=1098&smart=true",
        archivoLocal: "video/spider_man_no_way_homeHD.mp4"
    },
    { 
        title: "Black Widow", 
        cat: "MARVEL", 
        img: "https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg",
        desc: "Natasha Romanoff se enfrenta a los secretos de su pasado y a una conspiracion peligrosa relacionada con la Sala Roja.",
        trailer: "ybji16u608U",
        bg: "https://images.thedirect.com/media/article_full/bwnew.jpg",
        archivoLocal: "video/black_widowHD.mp4"
    },
    { 
        title: "Shang-Chi and the Legend of the Ten Rings", 
        cat: "MARVEL", 
        img: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
        desc: "Shang-Chi debe enfrentarse a la organizacion de los Diez Anillos y al legado familiar que intento dejar atras.",
        trailer: "8YjFbMbfXaQ",
        bg: "https://wallpapers.com/images/featured/shang-chi-qo932v0h4crnml73.jpg",
        archivoLocal: "video/shang_chiHD.mp4"
    },
    {
        title: "The Punisher",
        cat: "MARVEL",
        img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Punisher_ver2.jpg",
        desc: "Frank Castle, un exmarine marcado por la perdida de su familia, declara la guerra al crimen usando metodos implacables.",
        trailer: "8e0VvW9-M1Q",
        bg: "https://images4.alphacoders.com/132/1324984.jpeg",
        archivoLocal: "video/punisherHD.mp4"
    },
    { 
        title: "Spider-Man: Far From Home (2019)", 
        cat: "MARVEL", 
        img: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
        desc: "Peter Parker viaja a Europa con sus amigos, pero sus vacaciones se complican cuando Nick Fury le pide ayuda para enfrentarse a una nueva amenaza.",
        trailer: "Nt9L1jCKGnE",
        bg: "https://m.media-amazon.com/images/S/pv-target-images/a5a2d5703727ac5aa4b8c0399a046b62993da6271e0c3d8776340ce0fc7627b1.jpg",
        archivoLocal: "video/spider_man_far_from_homeHD.mp4"
    },

   

        // PIXAR
        { 
            title: "Toy Story 4", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg",
            desc: "Woody siempre ha tenido claro cuál era su labor en el mundo, pero cuando Bonnie añade un nuevo juguete llamado Forky a su habitación, arranca una aventura que le enseñará lo grande que puede ser el mundo.",
            trailer: "wmiIUN-7qhE",
            bg: "https://i.blogs.es/f929a4/toy-story-4-estreno/1366_521.jpg",
            archivoLocal: "video/ts4HD.mp4"
        },
        { 
            title: "Coco", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
            desc: "Miguel, un joven con el sueño de convertirse en leyenda de la música, se embarca en un viaje extraordinario a la mágica Tierra de los Muertos para descubrir la verdadera historia de su familia.",
            trailer: "xlnPHQ3TLX8",
            bg: "https://images.alphacoders.com/872/thumb-1920-872456.jpg",
            archivoLocal: "video/cocoHD.mp4"
        },
        { 
            title: "Inside Out 2", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",
            desc: "Regresa a la mente de Riley, ahora una adolescente, justo cuando el cuartel general está sufriendo una repentina demolición para dejar espacio a algo totalmente inesperado: ¡nuevas emociones!",
            trailer: "L4DrolmDxmw",
            bg: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/c1f98709-d4bd-4d93-9f21-717e6f69e45b/compose?aspectRatio=1.78&format=webp&width=1200",
            archivoLocal: "video/inside_out_2HD.mp4"
        },
        { 
            title: "Luca", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
            desc: "En un hermoso pueblo costero de la Riviera italiana, un joven llamado Luca vive un verano inolvidable lleno de helados, pasta y viajes en scooter, mientras oculta un secreto sobre su verdadera identidad marina.",
            trailer: "mYfJxlgR2jw",
            bg: "https://images7.alphacoders.com/114/1149891.jpg",
            archivoLocal: "video/lucaHD.mp4"
        },
        { 
            title: "Turning Red", 
            cat: "PIXAR", 
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYGcDQZPX0Ghja5A8R0Vk9OT-ewrl6pbh0OPRXl0v38q74pnH9",
            desc: "Mei Lee es una joven de trece años, segura de sí misma y algo tonta, que se debate entre seguir siendo la hija obediente de su madre y el caos de la adolescencia, con un pequeño detalle: se convierte en un panda rojo gigante.",
            trailer: "XdKzUbAiswE",
            bg: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/46e09a26-301a-47f7-b721-53cd228848f3/compose?aspectRatio=1.78&format=webp&width=1200",
            archivoLocal: "video/turning_redHD.mp4"
        },
        { 
            title: "Finding Dory", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/p_findingdory_19754_4d6d2025.jpeg?region=0%2C0%2C540%2C810",
            desc: "Dory, la pez cirujano azul con problemas de memoria, emprende una búsqueda frenética para reunirse con sus padres, dándose cuenta de que la familia es algo que se encuentra en el camino.",
            trailer: "3JNLwlcPBPI",
            bg: "https://i.blogs.es/4fc12c/cartel-buscando-a-dory/1366_2000.jpg",
            archivoLocal: "video/finding_doryHD.mp4"
        },
        { 
            title: "Monsters SA", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/M/MV5BNzQ0YTVhNjgtODlhYy00YTA2LTk0ZDgtMzc3Yzc2YzFmYzFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            desc: "En Monstruópolis, los monstruos viven de los gritos de los niños humanos, pero cuando una pequeña niña llamada Boo cruza al mundo de los monstruos, James P. Sullivan y Mike Wazowski descubren que no son tan peligrosos.",
            trailer: "CGbgaHoapFM",
            bg: "https://m.media-amazon.com/images/M/MV5BMjIzNDMxNDQyNV5BMl5BanBnXkFtZTgwMzg2NzgxMzE@._V1_.jpg",
            archivoLocal: "video/monsters_sa.mp4"
        },
        { 
            title: "Los Increíbles", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/I/714XszUxCFL.jpg",
            desc: "Bob Parr solía ser uno de los superhéroes más grandes del mundo. Quince años después, tiene una vida normal, hasta que recibe una comunicación misteriosa que lo lleva a una isla remota para una misión secreta.",
            trailer: "sJCjKQQOqT0",
            bg: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/51cc5d57-2761-4951-a0e9-7c390c01217c/compose?format=webp&width=2560",
            archivoLocal: "video/incrediblesHD.mp4"
        },
        { 
            title: "Los Increíbles 2", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_4f447b1d.jpeg?region=0,0,540,810&width=480",
            desc: "Helen es reclutada para liderar una campaña que traiga de vuelta a los superhéroes, mientras Bob se queda en casa lidiando con la vida cotidiana y los poderes emergentes del bebé Jack-Jack.",
            trailer: "i5qOzqD9Rms",
            bg: "https://i.pinimg.com/736x/7c/b3/a2/7cb3a22272c2a42f5208d6df176a8822.jpg",
            archivoLocal: "video/incredibles_2HD.mp4"
        },
        { 
            title: "Elemental", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_def91c72.jpeg?region=0,0,540,810&width=480",
            desc: "En Ciudad Elemento, los residentes de fuego, agua, tierra y aire conviven. La historia presenta a Candela, una joven fuerte y brillante, cuya amistad con un chico sensible llamado Nilo desafía sus creencias.",
            trailer: "hXzcyx9V0xw",
            bg: "http://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2e2ec3ab-74f9-4761-85d5-675ca773b203/compose?aspectRatio=1.78&format=webp&width=1200",
            archivoLocal: "video/elementalHD.mp4"
        },
        { 
            title: "Lightyear", 
            cat: "PIXAR", 
            img: "https://lumiere-a.akamaihd.net/v1/images/image_3f5716f2.jpeg?region=0,0,540,810&width=480",
            desc: "La historia definitiva del origen de Buzz Lightyear, el héroe que inspiró el juguete, siguiendo al legendario Guardián Espacial en una aventura intergaláctica a través del tiempo y el espacio.",
            trailer: "BwPL0Md_QFQ",
            bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgPM3bP8_llsfIp2m74ZqQSm-UUWaLrmemQ&s",
            archivoLocal: "video/lightyearHD.mp4"
        },
        { 
            title: "Cars", 
            cat: "PIXAR", 
            img: "https://es.web.img3.acsta.net/c_310_420/pictures/14/05/28/11/24/435900.jpg",
            desc: "Rayo McQueen, un coche de carreras novato y engreído, termina perdido en una ciudad olvidada de la Ruta 66, donde descubre que la vida es algo más que ganar trofeos y patrocinios.",
            trailer: "W_H7_tDHFE8",
            bg: "https://i.pinimg.com/736x/1d/db/9a/1AziGRT61CE9bvyEo7VeGnPGcovJ2MhmPi.jpg",
            archivoLocal: "video/carsHD.mp4"
        },
        { 
            title: "Cars 2", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/I/911pF4wxWCL.jpg",
            desc: "La estrella de las carreras Rayo McQueen y su inseparable amigo Mate viajan al extranjero para competir en el primer Gran Premio Mundial, pero Mate se ve envuelto en una emocionante aventura de espionaje internacional.",
            trailer: "7C7LJGgzvq8",
            bg: "https://images4.alphacoders.com/144/144758.jpg",
            archivoLocal: "video/cars_2HD.mp4"
        },
        { 
            title: "Cars 3", 
            cat: "PIXAR", 
            img: "https://m.media-amazon.com/images/M/MV5BNjM0MmUwZjgtYjU1Yi00NzljLTlmZTMtMzc5NjQyMmUxNDY5XkEyXkFqcGc@._V1_.jpg",
            desc: "Sorprendido por una nueva generación de corredores ultrarrápidos, el legendario Rayo McQueen es expulsado repentinamente del deporte que tanto ama y debe esforzarse para demostrar que aún es el mejor.",
            trailer: "2LeOH9AGJQM",
            bg: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7a3404e1-0a0c-4b92-8e92-d673defea36b/compose?format=webp&width=2560",
            archivoLocal: "video/cars_3HD.mp4"
        },
        { 
            title: "Ratatouille", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
            desc: "Remy, una rata con un gran talento para la cocina, suena con convertirse en chef en Paris y demostrar que cualquiera puede cocinar.",
            trailer: "NgsQ8mVkN8w",
            bg: "https://i.etsystatic.com/47687683/r/il/972505/5785953602/il_570xN.5785953602_flf3.jpg",
            archivoLocal: "video/ratatouilleHD.mp4"
        },
        { 
            title: "WALL-E", 
            cat: "PIXAR", 
            img: "https://img2.od-cdn.com/ImageType-100/11618-1/%7BCF6C09A2-9058-4B3E-B9AE-1C9FB3E591BB%7DIMG100.JPG",
            desc: "Un pequeno robot recolector de basura descubre una nueva mision que puede cambiar el destino de la humanidad.",
            trailer: "CZ1CATNbXg0",
            bg: "https://saposyprincesas.elmundo.es/assets/2020/03/Wall-e-1.jpg",
            archivoLocal: "video/wall_eHD.mp4"
        },
        { 
            title: "Up", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
            desc: "Carl Fredricksen emprende una aventura inesperada hacia Sudamerica con su casa elevada por globos y un joven explorador como companero.",
            trailer: "m7pFraFvV5M",
            bg: "https://images-2.rakuten.tv/storage/snapshot/shot/6ceeec97-842b-47a3-bfb3-4298cde888da-snapshot-1590666116-width936-quality90.jpeg",
            archivoLocal: "video/upHD.mp4"
        },
        { 
            title: "Brave", 
            cat: "PIXAR", 
            img: "https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg",
            desc: "Merida, una princesa habil con el arco, desafia una antigua tradicion y desata una maldicion que debera corregir para salvar a su familia.",
            trailer: "6CKcqIahedc",
            bg: "https://m.media-amazon.com/images/S/pv-target-images/6501ed6aa082c5f3af055621e8d1ec9ec1648ba528fad68d4ecc27399d9e1f03._SX1080_FMjpg_.jpg",
            archivoLocal: "video/braveHD.mp4"
        },
        // STAR WARS
        { 
            title: "The Mandalorian", 
            cat: "STAR WARS", 
            img: "https://static.wikia.nocookie.net/starwars/images/8/80/MandoS2Poster.jpg",
            desc: "Tras la caída del Imperio, un pistolero solitario se abre camino a través de las galaxias exteriores, lejos de la autoridad de la Nueva República, protegiendo a un misterioso niño de fuerzas oscuras.",
            trailer: "aOC8E8z_ifw",
            bg: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ea78b4f8-f180-41e5-9aac-9e99c96fb4ac/compose?aspectRatio=1.78&format=webp&width=1200",
            archivoLocal: "video/mandalorianHD.mp4"
        },
        { 
            title: "A New Hope", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/81CIXJxQ3TL._SL1500_.jpg",
            desc: "Luke Skywalker une fuerzas con un caballero Jedi, un piloto arrogante y dos droides para salvar la galaxia de la estación de combate destructora de planetas del Imperio, mientras intenta rescatar a la Princesa Leia.",
            trailer: "k-Ua033oKAk",
            bg: "https://m.media-amazon.com/images/S/pv-target-images/2ce7bffd6c863e6a7cf0aded3210300117bf38f31e1e08f83a1bbb5df52ad5c6.jpg",
            archivoLocal: "video/star_wars_a_new_hopeHD.mp4"
        },
        { 
            title: "The Empire Strikes Back", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/51zRGNNUXqL._AC_UF894,1000_QL80_.jpg",
            desc: "Tras una derrota devastadora en el planeta helado Hoth, Luke Skywalker viaja a Dagobah para entrenar con el Maestro Yoda, mientras Darth Vader persigue implacablemente a sus amigos a través de la galaxia.",
            trailer: "xESiohGGP7g",
            bg: "https://theparamount.net/wp-content/uploads/2025/05/1596x898-Empire-Strikes-Back-1596x898.jpg",
            archivoLocal: "video/star_wars_empire_strikes_backHD.mp4"
        },
        { 
            title: "Return of the Jedi", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/91LlN7J+Z9L._SL1500_.jpg",
            desc: "Luke Skywalker lidera una misión para rescatar a Han Solo de las garras de Jabba el Hutt, mientras la Alianza Rebelde se prepara para un asalto final contra una segunda Estrella de la Muerte, más poderosa y protegida.",
            trailer: "MYD_xxY5wEI",
            archivoLocal: "video/star_wars_return_jediHD.mp4"
        },
        { 
            title: "The Phantom Menace", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_.jpg",
            desc: "Dos caballeros Jedi escapan de un bloqueo hostil para buscar aliados y conocen a un joven esclavo que posee un vínculo inusualmente fuerte con la Fuerza, mientras una amenaza largo tiempo dormida resurge en las sombras.",
            trailer: "Xv5OAeerXzs",
            bg: "https://images.squarespace-cdn.com/content/v1/5e3f89a15ec9f361e323b5b3/1585223967308-MZQUHHJ712JXDEUHPOFU/From+Disney%2B+--+film+by+Lucasfilm.png",
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
            bg: "https://img1.wsimg.com/isteam/ip/d6a3e7a7-e920-4711-bf09-856dd846af78/STARWARSROSW.jpg/:/rs=w:1280",
            archivoLocal: "video/star_wars_rise_skywalkerHD.mp4"
        },
        { 
            title: "Ahsoka", 
            cat: "STAR WARS", 
            img: "https://m.media-amazon.com/images/I/61CMxmLKppL._AC_UF1000,1000_QL80_.jpg",
            desc: "Ambientada tras la caída del Imperio, la antigua Caballero Jedi Ahsoka Tano investiga una amenaza emergente que pone en peligro a una vulnerable galaxia, mientras busca al desaparecido Gran Almirante Thrawn.",
            trailer: "J_1EXWNETiI",
            bg: "https://www.pennadicorvo.it/wp-content/uploads/2024/05/ahsoka.webp",
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
            bg: "https://i.ytimg.com/vi/fZEbOMW_PNs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBoL01nNU5HsKnd7_NTPXwGyMK4Eg",
            archivoLocal: "video/rogue_oneHD.mp4"
        },
        { 
            title: "Solo", 
            cat: "STAR WARS", 
            img: "https://upload.wikimedia.org/wikipedia/en/5/54/Solo_A_Star_Wars_Story_poster.jpg",
            desc: "A través de una serie de arriesgadas travesuras en un submundo criminal oscuro y peligroso, Han Solo entabla amistad con su futuro copiloto Chewbacca.",
            trailer: "jPEYpryMp2s",
            bg: "https://lumiere-a.akamaihd.net/v1/images/solo-in-home-tall_2740b837.jpeg?region=0,0,1536,864",
            archivoLocal: "video/soloHD.mp4"
        },

        // NAT GEO
        { 
            title: "Free Solo", 
            cat: "NAT GEO", 
            img: "https://lumiere-a.akamaihd.net/v1/images/docfilmswebsite_1080x1600_freesolo_91d7bed0.jpeg",
            desc: "Sigue a Alex Honnold mientras intenta realizar el primer ascenso en solitario libre de la pared de granito de El Capitán en el Parque Nacional Yosemite.",
            trailer: "_LRPuo6ZVVk", 
            bg: "https://i.ytimg.com/vi/7XhsuT0xctI/maxresdefault.jpg",
            archivoLocal: "video/free_soloHD.mp4"
        },
        { 
            title: "Welcome to Earth", 
            cat: "NAT GEO", 
            img: "https://m.media-amazon.com/images/M/MV5BMjE1ZDBmNDAtYzQ2NC00MjU5LTkzZTItNWM4NmY1MGFjYjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            desc: "Will Smith se embarca en una aventura global para explorar los lugares más extremos y espectaculares de la Tierra, guiado por exploradores de élite.",
            trailer: "i0MTCXgil1M",
            bg: "https://www.goldderby.com/wp-content/uploads/2021/12/Welcome-to-Earth-Will-Smith-Logo.png?w=600&h=337&crop=1",
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
            bg: "https://lumiere-a.akamaihd.net/v1/images/image_9c8e5b0c.jpeg?region=0,0,540,810&width=480",
            archivoLocal: "video/fire_of_love.mp4"
        },

        // MAS PELICULAS
        {
            title: "Pirates of the Caribbean",
            cat: "DISNEY",
            img: "https://pics.filmaffinity.com/Piratas_del_Caribe_La_maldiciaon_de_la_Perla_Negra-627724446-large.jpg",
            desc: "El capitan Jack Sparrow se ve arrastrado a una aventura de piratas, tesoros malditos y batallas en alta mar.",
            trailer: "tnx35Z4nWWc",
            bg: "https://lhstoday.org/wp-content/uploads/2022/09/The-Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-e1648961317393-900x450.jpg",
            archivoLocal: "video/pirates_caribbeanHD.mp4"
        },
        {
            title: "Avatar",
            cat: "20TH CENTURY",
            img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
            desc: "Jake Sully viaja a Pandora y descubre un mundo extraordinario mientras se debate entre su mision y el pueblo Na'vi.",
            trailer: "5PSNL1qE6VY",
            bg: "https://i.ytimg.com/vi/nb_fFj_0rq8/maxresdefault.jpg",
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
            cat: "PIXAR",
            img: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
            desc: "Anna emprende un viaje para encontrar a su hermana Elsa y devolver el verano al reino de Arendelle.",
            trailer: "TbQm5doF_Uc",
            archivoLocal: "video/frozenHD.mp4"
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
            img: "https://i.pinimg.com/736x/d0/dc/c7/d0dcc7fd58f2348aee4b16a47a28a7f2.jpg",
            desc: "La agente Judy Hopps y el zorro Nick Wilde investigan un misterio en una ciudad habitada por animales de todo tipo.",
            trailer: "jWM0ct-OLsM",
            archivoLocal: "video/zootopiaHD.mp4"
        },

        // SERIES
        {
            title: "Los Simpsons",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BNTU2OWE0YWYtMjRlMS00NTUwLWJmZWUtODFhNzJiMGJlMzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            desc: "La familia Simpson vive situaciones absurdas y satiricas en Springfield.",
            trailer: "oMXk1wi-9Zs",
            archivoLocal: "video/simpsonsHD.mp4"
        },
        {
            title: "Padre de familia",
            cat: "SERIES",
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRp190r-vx2NVCZ0xp0GbzIIevnQDESO6vDhQOOZjFyEUbCddi_",
            desc: "La familia Griffin protagoniza una comedia animada irreverente llena de humor absurdo.",
            trailer: "jfBKSTo67c0",
            archivoLocal: "video/family_guyHD.mp4"
        },
        {
            title: "The Cleveland Show",
            cat: "SERIES",
            img: "https://static.wikia.nocookie.net/doblaje/images/d/df/Cleveland.jpg/revision/latest?cb=20210901002844&path-prefix=es",
            desc: "Cleveland Brown empieza una nueva vida con su familia en Stoolbend.",
            trailer: "ubJig_MVNxE",
            archivoLocal: "video/cleveland_showHD.mp4"
        },
        {
            title: "Futurama",
            cat: "SERIES",
            img: "https://lumiere-a.akamaihd.net/v1/images/799691_disney_futurama_s11_4x5_csp_x2_jf_6329a661.png?region=0,167,2160,2160",
            desc: "Fry despierta en el futuro y trabaja como repartidor espacial.",
            trailer: "ZHN5Lg0SJyI",
            archivoLocal: "video/futuramaHD.mp4"
        },
        {
            title: "Malcolm in the Middle",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/I/81uKDJ5NA8L._AC_UF894,1000_QL80_.jpg",
            desc: "Malcolm intenta sobrevivir a su familia caotica mientras lidia con el colegio.",
            trailer: "gRbuo7WCFy8",
            archivoLocal: "video/malcolm_middleHD.mp4"
        },
        {
            title: "Bob's Burgers",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
            desc: "La familia Belcher intenta mantener a flote su hamburgueseria.",
            trailer: "hbGXqUumtqg",
            archivoLocal: "video/bobs_burgersHD.mp4"
        },
        {
            title: "American Dad",
            cat: "SERIES",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Americandadseason19.jpg/250px-Americandadseason19.jpg",
            desc: "Stan Smith y su familia protagonizan una comedia animada con espias y aliens.",
            trailer: "L66NP4_Ee1s",
            archivoLocal: "video/american_dadHD.mp4"
        },
        {
            title: "Gravity Falls",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
            desc: "Dipper y Mabel pasan el verano en Gravity Falls, un pueblo lleno de misterios.",
            trailer: "X2DUpDxFJyg",
            archivoLocal: "video/gravity_fallsHD.mp4"
        },
        {
            title: "Phineas and Ferb",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/I/71dG3jzachL._AC_UF1000,1000_QL80_.jpg",
            desc: "Phineas y Ferb convierten cada dia de verano en una invencion gigantesca.",
            trailer: "pj7aDHPfzZU",
            archivoLocal: "video/phineas_ferbHD.mp4"
        },
        {
            title: "La ley de Milo Murphy",
            cat: "SERIES",
            img: "https://static.wikia.nocookie.net/doblaje/images/f/f3/Logo_en_espa%C3%B1ol_de_La_ley_de_Milo_Murphy.png/revision/latest/scale-to-width-down/1000?cb=20200816182132&path-prefix=es",
           
            desc: "Milo Murphy vive aventuras disparatadas porque todo lo que puede salir mal, saldra mal, aunque siempre encuentra la manera de seguir adelante.",
            trailer: "j06KeL5SsUw",
            archivoLocal: "video/milo_murphyHD.mp4"
        },
        {
            title: "Angry Birds Blues",
            cat: "SERIES",
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1vtWXNDYdZX8MMB_WktMBmImCKCkbOVqrHbGXRWxhKyt1nUMO",
            desc: "Los pequenos Blues protagonizan travesuras y caos en una serie animada llena de humor rapido.",
            trailer: "6b9S6LQm5tY",
            archivoLocal: "video/angry_birds_bluesHD.mp4"
        },
        {
            title: "Kim Possible",
            cat: "SERIES",
            img: "https://pics.filmaffinity.com/disney_s_kim_possible-206802866-large.jpg",
            desc: "Kim Possible equilibra el instituto con misiones secretas para salvar el mundo junto a Ron Stoppable.",
            trailer: "GIgLqN_rAXU",
            archivoLocal: "video/kim_possibleHD.mp4"
        },
        {
            title: "DuckTales",
            cat: "SERIES",
            img: "https://lumiere-a.akamaihd.net/v1/images/au_disneyplus_ducktales_movie_poster_f2b8b3f2.jpeg?region=0%2C0%2C540%2C810",
            desc: "Rico McPato y sus sobrinos viajan por el mundo buscando tesoros, misterios y aventuras familiares.",
            trailer: "YKSU82afy1w",
            archivoLocal: "video/ducktalesHD.mp4"
        },
        {
            title: "Anfibilandia",
            cat: "SERIES",
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSl87OJW0iuLnVMcq3gv9a1aBkJWUCJi_CG0xx2oQKDHOKfegKr",
            imgFit: "contain",
            desc: "Anne queda atrapada en un mundo de ranas parlantes y descubre una aventura fantastica llena de amistad.",
            trailer: "cuL48NyEL6o",
            archivoLocal: "video/anfibilandiaHD.mp4"
        },
        {
            title: "The Owl House",
            cat: "SERIES",
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDwm2X2jdPHryQgrmUbNbClK4yHGDF1TgppzuxMtbWQatlSRR2",
            desc: "Luz descubre un portal hacia un reino magico y decide aprender brujeria en una casa muy poco normal.",
            trailer: "1W1FFiT51lg",
            archivoLocal: "video/owl_houseHD.mp4"
        },
        {
            title: "WandaVision",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/I/91pDQnF3WML._SL1500_.jpg",
            desc: "Wanda y Vision viven una aparente vida perfecta que empieza a revelar grietas.",
            trailer: "sj9J2ecsSpo",
            archivoLocal: "video/wandavisionHD.mp4"
        },
        {
            title: "Loki",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/I/81xETRmcFwL._AC_UF1000,1000_QL80_.jpg",
            desc: "Loki es capturado por la Autoridad de Variacion Temporal.",
            trailer: "nW948Va-l10",
            archivoLocal: "video/lokiHD.mp4"
        },
        {
            title: "Moon Knight",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            desc: "Steven Grant descubre que comparte cuerpo con un mercenario ligado a un antiguo dios egipcio.",
            trailer: "nW948Va-l10",
            archivoLocal: "video/moon_knightHD.mp4"
        },
        {
            title: "Daredevil",
            cat: "MARVEL",
            img: "https://lumiere-a.akamaihd.net/v1/images/image003_86eb2e3f.jpeg?region=0,0,607,867",
            desc: "Matt Murdock protege Hell's Kitchen como abogado de dia y vigilante de noche.",
            trailer: "7xALolZzhSM",
            archivoLocal: "video/daredevilHD.mp4"
        },
        {
            title: "Percy Jackson y los Dioses del Olimpo",
            cat: "SERIES",
            img: "https://pics.filmaffinity.com/percy_jackson_and_the_olympians-405548061-large.jpg",
            desc: "Percy Jackson descubre que es hijo de Poseidon y se embarca en una aventura mitologica para encontrar el rayo maestro de Zeus.",
            trailer: "JTZHpPZFauY",
            archivoLocal: "video/percy_jacksonHD.mp4"
        },
        {
            title: "National Treasure: Edge of History",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BZTQ1MjY0ZjktMGEzMi00N2RjLTg2OTYtYzI2YWU0NzVlNzg5XkEyXkFqcGc@._V1_.jpg",
            desc: "Jess Valenzuela sigue pistas ocultas para descubrir tesoros historicos y secretos familiares en una aventura llena de enigmas.",
            trailer: "QOTKWuIlmh8",
            archivoLocal: "video/national_treasureHD.mp4"
        },
        {
            title: "The Mysterious Benedict Society",
            cat: "SERIES",
            img: "https://resizing.flixster.com/omlpIfVHwcHtnzDWxw4OY-2UlW4=/206x305/v2/https://resizing.flixster.com/TIziaJ2-I4IKN_ISL6VmtlH75II=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMGMxMGZmODQtMWU4MC00YTNlLWJkMTUtZTM4NzMyNjE0Mjk2LmpwZw==",
            desc: "Un grupo de ninos extraordinarios es reclutado para una mision secreta que pondra a prueba su inteligencia y valentia.",
            trailer: "MUpFzScK7P8",
            archivoLocal: "video/mysterious_benedict_societyHD.mp4"
        },
        {
            title: "Secrets of Sulphur Springs",
            cat: "SERIES",
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_gWC2Zsj0L8uiqHsYCTtdU1jf4S43qZek1r0WHyPcrQzhAV2x",
            desc: "Griffin y Harper investigan misterios, desapariciones y viajes en el tiempo alrededor de un hotel embrujado.",
            trailer: "YUjLZfGmr7A",
            archivoLocal: "video/sulphur_springsHD.mp4"
        },
        {
            title: "Limitless with Chris Hemsworth",
            cat: "SERIES",
            img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30802100_b_v13_ac.jpg",
            desc: "Chris Hemsworth explora retos extremos y descubrimientos cientificos para entender como vivir mejor durante mas tiempo.",
            trailer: "SJPnK_NgHVI",
            archivoLocal: "video/limitless_chris_hemsworthHD.mp4"
        },
        {
            title: "The World According to Jeff Goldblum",
            cat: "SERIES",
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvHHKUkJ-0e2KyM7iejWeQdwhcVPqV6wDq_zCq4CHwHmxPTyp8",
            desc: "Jeff Goldblum investiga objetos cotidianos, tendencias y curiosidades culturales con una mirada documental muy personal.",
            trailer: "P7aN9OkNl7U",
            archivoLocal: "video/world_according_jeff_goldblumHD.mp4"
        },
        {
            title: "Secrets of the Elephants",
            cat: "SERIES",
            img: "https://m.media-amazon.com/images/M/MV5BMTAxZjc3ZDEtZjllNi00OTlkLWEwZDYtZTE3ZmU1YzcxYTMzXkEyXkFqcGc@._V1_.jpg",
            desc: "Una serie documental que muestra la inteligencia, la vida familiar y los secretos de supervivencia de los elefantes.",
            trailer: "fc-PYHTN1UU",
            archivoLocal: "video/secrets_elephantsHD.mp4"
        }
    ]
};

let avatarSeleccionado = "";
let perfilAEditar = null;
let modoEdicion = false;
// Memoria para Mi Lista (guarda en el navegador)
let miListaFavoritos = JSON.parse(localStorage.getItem('miListaDisney')) || [];

// ELEMENTOS DEL DOM
const loginSection = document.getElementById('login-section');
const profileSection = document.getElementById('profile-section');
const dashboardSection = document.getElementById('dashboard-section');
const modalPerfil = document.getElementById('modal-perfil');
const modalreg = document.getElementById('modalreg');
const inputNombre = document.getElementById('nuevo-nombre-perfil');
const searchInput = document.getElementById('search-input');
const randomizerBtn = document.getElementById('randomizer-btn');

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
            "The Punisher",
            "Rogue One"
        ],
        "Superheroes": [
            "Capitán América: The First Avenger",
            "Shang-Chi and the Legend of the Ten Rings",
            "Avengers: Endgame",
            "Avengers: Infinity War",
            "Iron Man",
            "Thor: Love and Thunder",
            "Thor: Ragnarok",
            "Doctor Strange",
            "Black Panther",
            "Ant-Man",
            "Spider-Man: No Way Home",
            "Spider-Man: Far From Home (2019)",
            "Black Widow",
            "The Punisher",
            "Guardians of the Galaxy 2",
            "Guardians of the Galaxy",
            "Guardians of the Galaxy 3",
            "The Incredible Hulk",

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
        ],
         "Documental": [
            "Free Solo",
            "Welcome to Earth",
            "The Rescue",
            "Fire of Love",
        ]
    },
    serie: {
        "Animacion": [
            "The Clone Wars",
            "Los Simpsons",
            "Futurama",
            "Gravity Falls",
            "Padre de familia",
            "Bob's Burgers",
            "American Dad",
            "Phineas and Ferb",
            "La ley de Milo Murphy",
            "Angry Birds Blues",
            "Kim Possible",
            "DuckTales",
            "Anfibilandia",
            "The Owl House"
        ],
        "Ciencia ficcion": ["The Mandalorian", "Andor", "Loki", "WandaVision", "Ahsoka", "Daredevil"],
        "Aventura": [
            "Percy Jackson y los Dioses del Olimpo",
            "National Treasure: Edge of History",
            "The Mysterious Benedict Society",
            "Secrets of Sulphur Springs",
            "The Mandalorian",
            "Ahsoka"
        ],
        "Documental": [
            "Limitless with Chris Hemsworth",
            "The World According to Jeff Goldblum",
            "Secrets of the Elephants"
        ],
        "Comedia": [
            "Los Simpsons",
            "Padre de familia",
            "The Cleveland Show",
            "Futurama",
            "Malcolm in the Middle",
            "Bob's Burgers",
            "American Dad"
        ]
    }
};

// --- LOGICA DE INTERFAZ ---
document.querySelectorAll('[data-genero-box]').forEach(box => {
    const boton = box.querySelector('.genre-toggle');
    boton.onclick = () => {
        box.classList.toggle('open');
        boton.setAttribute('aria-expanded', box.classList.contains('open'));
    };
});

document.querySelectorAll('[data-genero]').forEach(genero => {
    genero.onclick = () => {
        document.querySelectorAll('[data-genero]').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('[data-categoria]').forEach(item => item.classList.remove('active'));
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
    actualizarFondoCatalogo('');
    mostrarPeliculas();
}

function mostrarPeliculas(filtro = '') {
    const grid = document.getElementById('movie-display-grid');
    grid.innerHTML = '';
    const filtradas = filtro ? DB.peliculas.filter(p => p.cat === filtro) : DB.peliculas;
    pintarPeliculas(filtradas);
}

function filtrar(categoria) {
    limpiarBuscador();
    actualizarFondoCatalogo(categoria);
    document.querySelectorAll('[data-genero]').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('[data-categoria]').forEach(item => {
        item.classList.toggle('active', item.dataset.categoria === categoria);
    });
    document.getElementById('category-title').innerText = categoria || "Recomendados para ti";
    mostrarPeliculas(categoria);
}

function filtrarPorGenero(tipo, genero) {
    limpiarBuscador();
    actualizarFondoCatalogo('');
    document.getElementById('category-title').innerText = `${genero} - ${tipo === "serie" ? "Series" : "Peliculas"}`;
    const titulos = GENEROS_CATALOGO[tipo][genero] || [];
    const filtradas = DB.peliculas.filter(p => titulos.includes(p.title));
    pintarPeliculas(filtradas);
}

if (searchInput) {
    searchInput.oninput = () => buscarPorTitulo(searchInput.value);
}

if (randomizerBtn) {
    randomizerBtn.onclick = recomendarContenidoAleatorio;
}

const featuredSets = [
    {
        label: "Destacado Marvel",
        title: "Heroes, batallas y universos conectados",
        text: "Una coleccion con algunas de las aventuras mas grandes de Marvel.",
        categoria: "MARVEL"
    },
    {
        label: "Destacado Pixar",
        title: "Historias animadas para volver a sentir",
        text: "Portadas coloridas de Pixar para encontrar una pelicula familiar al momento.",
        categoria: "PIXAR"
    },
    {
        label: "Destacado Star Wars",
        title: "Viajes por galaxias muy lejanas",
        text: "Sagas, rebeldes y aventuras espaciales reunidas en un solo vistazo.",
        categoria: "STAR WARS"
    },
    {
        label: "Destacado Series",
        title: "Series listas para engancharte",
        text: "Una coleccion rapida con series del catalogo para elegir que ver despues.",
        categoria: "SERIES"
    }
];

let featuredIndex = 0;

iniciarDestacado();

function buscarPorTitulo(texto) {
    document.querySelectorAll('[data-genero]').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('[data-categoria]').forEach(item => item.classList.remove('active'));
    actualizarFondoCatalogo('');

    const busqueda = normalizarTexto(texto);
    if (!busqueda) {
        document.getElementById('category-title').innerText = "Recomendados para ti";
        document.querySelector('[data-categoria=""]').classList.add('active');
        pintarPeliculas(DB.peliculas);
        return;
    }

    const resultados = DB.peliculas.filter(p => normalizarTexto(p.title).includes(busqueda));
    document.getElementById('category-title').innerText = `Resultados para "${texto}"`;
    pintarPeliculas(resultados);
}

function iniciarDestacado() {
    const banner = document.getElementById('featured-banner');
    if (!banner) return;

    pintarCollageDestacado(featuredSets[featuredIndex]);
    banner.onclick = cambiarDestacado;
    banner.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            cambiarDestacado();
        }
    };
}

function cambiarDestacado() {
    featuredIndex = (featuredIndex + 1) % featuredSets.length;
    const set = featuredSets[featuredIndex];
    pintarCollageDestacado(set);
    filtrar(set.categoria);
}

function pintarCollageDestacado(set) {
    const collage = document.getElementById('cover-collage');
    const kicker = document.getElementById('featured-kicker');
    const title = document.getElementById('featured-title');
    const text = document.getElementById('featured-text');
    if (!collage || !kicker || !title || !text) return;

    kicker.innerText = set.label;
    title.innerText = set.title;
    text.innerText = set.text;
    collage.innerHTML = '';

    const portadas = DB.peliculas
        .filter(p => p.cat === set.categoria)
        .slice(0, 8);

    portadas.forEach(pelicula => {
        const img = document.createElement('img');
        img.src = pelicula.img;
        img.alt = pelicula.title;
        collage.appendChild(img);
    });
}

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

function limpiarBuscador() {
    if (searchInput) searchInput.value = "";
}

function actualizarFondoCatalogo(categoria) {
    const temas = {
        "MARVEL": "theme-marvel",
        "PIXAR": "theme-pixar",
        "STAR WARS": "theme-star-wars",
        "NAT GEO": "theme-nat-geo"
    };

    dashboardSection.classList.remove("theme-marvel", "theme-pixar", "theme-star-wars", "theme-nat-geo");

    if (temas[categoria]) {
        dashboardSection.classList.add(temas[categoria]);
    }
}

function recomendarContenidoAleatorio() {
    if (!DB.peliculas.length) return;

    const indice = Math.floor(Math.random() * DB.peliculas.length);
    verDetalles(DB.peliculas[indice]);
}

function pintarPeliculas(peliculas) {
    const grid = document.getElementById('movie-display-grid');
    grid.innerHTML = ''; // IMPORTANTE: Esto evita que se mezclen géneros

    if (peliculas.length === 0) {
        grid.innerHTML = '<p class="empty-results">No se encontraron peliculas ni series con ese nombre.</p>';
        return;
    }

    peliculas.forEach(p => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.backgroundImage = `url("${p.img}")`;
        card.setAttribute('data-title', p.title);
        card.addEventListener('mousemove', actualizarBrilloTarjeta);
        card.addEventListener('mouseleave', resetearBrilloTarjeta);
        
        // La tarjeta está limpia (sin botón play)
        card.onclick = () => verDetalles(p);
        grid.appendChild(card);
    });
}

function actualizarBrilloTarjeta(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${x}%`);
    card.style.setProperty('--glow-y', `${y}%`);
}

function resetearBrilloTarjeta(event) {
    const card = event.currentTarget;

    card.style.setProperty('--glow-x', '50%');
    card.style.setProperty('--glow-y', '50%');
}
// Función de respaldo por si alguna película no tiene la propiedad "bg" en la base de datos
function obtenerFondoDetalle(pelicula) {
    return pelicula.img || ''; 
}
function verDetalles(pelicula) {
    dashboardSection.classList.add('hidden');
    const details = document.getElementById('movie-details');
    details.classList.remove('hidden');

    details.style.setProperty('--details-bg', `url("${pelicula.bg || obtenerFondoDetalle(pelicula)}")`);
    document.getElementById('detail-title').innerText = pelicula.title;
    document.getElementById('detail-description').innerText = pelicula.desc;

    const player = document.getElementById('player');
    player.classList.remove('is-playing');
    const thumb = pelicula.trailer ? `https://img.youtube.com/vi/${pelicula.trailer}/hqdefault.jpg` : pelicula.img;
    player.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${thumb}")`;
    player.style.backgroundSize = 'cover';
    player.style.backgroundPosition = 'center';
    player.style.backgroundRepeat = 'no-repeat';
    player.innerHTML = '<button class="play-icon" type="button" aria-label="Reproducir">▶</button>';

    player.onclick = () => {
        player.classList.add('is-playing');
        if (pelicula.archivoLocal) {
            player.innerHTML = `<video controls autoplay><source src="${pelicula.archivoLocal}" type="video/mp4"></video>`;
            player.style.backgroundImage = 'none';
        } else if (pelicula.trailer) {
            player.innerHTML = `<iframe src="https://www.youtube.com/embed/${pelicula.trailer}?autoplay=1" allowfullscreen></iframe>`;
            player.style.backgroundImage = 'none';
        }
    };

    // --- LÓGICA DE MI LISTA (DENTRO DE LA FUNCIÓN) ---
    const btnFavorito = document.getElementById('btn-favorito');

    // 1. Comprobar si ya está en la lista al abrir la película
    if (miListaFavoritos.includes(pelicula.title)) {
        btnFavorito.innerText = "✓ En mi lista";
        btnFavorito.classList.add('active');
    } else {
        btnFavorito.innerText = "+ Mi lista";
        btnFavorito.classList.remove('active');
    }

    // 2. Acción al hacer clic en el botón
    btnFavorito.onclick = () => {
        if (miListaFavoritos.includes(pelicula.title)) {
            // Quitar de la lista
            miListaFavoritos = miListaFavoritos.filter(titulo => titulo !== pelicula.title);
            btnFavorito.innerText = "+ Mi lista";
            btnFavorito.classList.remove('active');
        } else {
            // Añadir a la lista
            miListaFavoritos.push(pelicula.title);
            btnFavorito.innerText = "✓ En mi lista";
            btnFavorito.classList.add('active');
        }
        // Guardar en el almacenamiento del navegador
        localStorage.setItem('miListaDisney', JSON.stringify(miListaFavoritos));
    };
}

document.getElementById('btn-volver').onclick = () => {
    const player = document.getElementById('player');
    player.innerHTML = '';
    player.classList.remove('is-playing');
    player.style.backgroundImage = 'none';
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
// --- LÓGICA DE MI LISTA ---
  const btnMiLista = document.getElementById('btn-mi-lista');

if (btnMiLista) {
    btnMiLista.onclick = () => {
        // 1. Limpiar los estados visuales del menú lateral
        document.querySelectorAll('[data-genero]').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('.sidebar-link').forEach(item => item.classList.remove('active'));
        btnMiLista.classList.add('active'); // Iluminar el botón de mi lista
        
        limpiarBuscador();
        actualizarFondoCatalogo(''); // Quita los fondos temáticos

        // 2. Cambiar el título principal
        document.getElementById('category-title').innerText = "Mi Lista";

        // 3. Filtrar la base de datos comparando los títulos con tu arreglo de favoritos
        const peliculasGuardadas = DB.peliculas.filter(p => miListaFavoritos.includes(p.title));

        // 4. Mandar a pintar las películas filtradas. Si está vacío, tu función pintarPeliculas ya maneja el mensaje.
        pintarPeliculas(peliculasGuardadas);
        
        // 5. Ocultar el banner destacado porque estamos en una vista específica
        const banner = document.getElementById('featured-banner');
        if (banner) banner.style.display = 'none';
    };
}

// Pequeño parche: Asegúrate de que al hacer clic en "Todo" o cualquier otra categoría, el banner vuelva a aparecer
document.querySelectorAll('.sidebar-link:not(#btn-mi-lista)').forEach(boton => {
    boton.addEventListener('click', () => {
        const banner = document.getElementById('featured-banner');
        if (banner) banner.style.display = 'flex';
        // También quítale el active al botón de mi lista si haces clic en otra cosa
        btnMiLista.classList.remove('active'); 
    });
});