const datos = {
    usuarios: {
        email: "brian@mail.com",
        usuario: "Brian123",
        password: "12345678",
        fechaNacimiento: "2006-04-10",
        documento: 45123456,
        fotoPerfil: "usuario1.png"
    },usuarios: {
        email: "olivia@mail.com",
        usuario: "Olivia",
        password: "12345678",
        fechaNacimiento: "2006-04-10",
        documento: 46123456,
        fotoPerfil: "usuario2.png"
    },usuarios: {
        email: "mariana@mail.com",
        usuario: "Mariana",
        password: "12345678",
        fechaNacimiento: "2006-04-10",
        documento: 46234567,
        fotoPerfil: "usuario3.png"
    },usuarios: {
        email: "ignacio@mail.com",
        usuario: "Ignacio",
        password: "12345678",
        fechaNacimiento: "2006-04-10",
        documento: 45234567,
        fotoPerfil: "usuario4.png"
    },usuarios: {
        email: "luis@mail.com",
        usuario: "Luis",
        password: "12345678",
        fechaNacimiento: "2006-04-10",
        documento: 43123456,
        fotoPerfil: "usuario5.png"
    },

    productos: [
        {
            id: 1,
            nombre: "Torta tres leches",
            imagen: "treslechesTorta.jpg",
            precio: 10,
            descripcion: "Bizcochuelo suave bañado en una mezcla de tres leches, con crema y un toque de canela. Húmeda, dulce y absolutamente irresistible.",
            comentarios:[{
                nombreUsuario: "brian123",
                fotoUsuario: "/images/users/usuario1.png",
                comentario: "Me encanta esta torta, super recomendada!"
            },
            {
                nombreUsuario: "Olivia",
                fotoUsuario: "/images/users/usuario2.png",
                comentario: "¡Exquisita! La torta de chocolate fue un éxito total en el cumpleaños de mi hijo."
            },
            {
                nombreUsuario: "Mariana",
                fotoUsuario: "/images/users/usuario3.png",
                comentario: "Una bomba de sabor. Se nota que usan ingredientes de calidad."
            }
            ]
        },
        {
            id: 2,
            nombre: "Torta de naranja",
            imagen: "tortanaranja.jpg",
            precio: 20,
            descripcion: "Esponjosa, con aroma cítrico y sabor fresco. Un clásico liviano y lleno de sabor natural.",
            comentarios:[{
                nombreUsuario: "Ignacio",
                fotoUsuario: "/images/users/usuario4.png",
                comentario: "La presentación es impecable, parece de revista. ¡Y encima riquísima!"                
            },
            {
                nombreUsuario: "Luis",
                fotoUsuario: "/images/users/usuario5.png",
                comentario: "Llega siempre a tiempo y perfecta. ¡Nunca fallan!"                
            },
            {
                nombreUsuario: "Brian123",
                fotoUsuario: "/images/users/usuario1.png",
                comentario: "Ideal para regalar. Me salvaron con un envío express para un cumpleaños sorpresa."                
            }]
        },
        {
            id: 3,
            nombre: "Budin de chocolate",
            imagen: "budinChocolate.jpg",
            precio: 40,
            descripcion: "Húmedo, intenso y súper chocolatoso. Ideal para acompañar el café o disfrutar como snack dulce.",
            comentarios:[{
                nombreUsuario: "Olivia",
                fotoUsuario: "/images/users/usuario2.png",
                comentario: "Lo compré y me sorprendió la calidad."                   
            },
            {
                nombreUsuario: "Mariana",
                fotoUsuario: "/images/users/usuario3.png",
                comentario: "No soy fan de las tortas, pero esta me encantó. ¡Eso dice mucho!"                   
            },
            {
                nombreUsuario: "Ignacio",
                fotoUsuario: "/images/users/usuario4.png",
                comentario: "Atención excelente y predisposición para adaptar la torta a lo que pedí."                   
            }]
        },
        {
            id: 4,
            nombre: "Pan dulce",
            imagen: "pandulceTorta.jpg",
            precio: 50,
            descripcion: "Clásico de fin de año, con masa suave y esponjosa, frutas abrillantadas y frutos secos. Aromático, tierno y festivo.",
            comentarios:[{
                nombreUsuario: "Luis",
                fotoUsuario: "/images/users/usuario5.png",
                comentario: "Perfecto para las fiestas. Recomendado."                                          
            },
            {
                nombreUsuario: "Brian123",
                fotoUsuario: "/images/users/usuario1.png",
                comentario: "Mi familia quedó fascinada. ¡Ya quieren repetir!"                   
            },
            {
                nombreUsuario: "Olivia",
                fotoUsuario: "/images/users/usuario2.png",
                comentario: "Buen balance entre lo dulce y lo suave. No empalaga."                   
            }]
        },
        {
            id: 5,
            nombre: "Torta rogel",
            imagen: "rogelTorta.jpg",
            precio: 60,
            descripcion: "Capas finas de masa crocante, dulce de leche cremoso y merengue italiano. Crocante, dulce y totalmente irresistible.",
            comentarios:[{
                nombreUsuario: "Mariana",
                fotoUsuario: "/images/users/usuario3.png",
                comentario: "Hermosa estética y sabor casero. Se nota el amor que le ponen."                          
            },
            {
                nombreUsuario: "Ignacio",
                fotoUsuario: "/images/users/usuario4.png",
                comentario: "La torta llegó intacta, bien embalada. ¡Un lujo!"                   
            },
            {
                nombreUsuario: "Luis",
                fotoUsuario: "/images/users/usuario5.png",
                comentario: "Puntuales, atentos y el sabor… inolvidable."                   
            }]
        },
        {
            id: 6,
            nombre: "Torta selva negra",
            imagen: "selvanegraTorta.jpg",
            precio: 10,
            descripcion: "Clásica torta alemana con bizcochuelo de chocolate, crema chantilly y cerezas. Intensa, suave y deliciosa.",
            comentarios:[{
                nombreUsuario: "Brian123",
                fotoUsuario: "/images/users/usuario1.png",
                comentario: "Ideal para eventos, ¡mis invitados no dejaron ni las migas!"                               
            },
            {
                nombreUsuario: "Olivia",
                fotoUsuario: "/images/users/usuario2.png",
                comentario: "El sabor es casero, nada industrial. Y eso se agradece."                   
            },
            {
                nombreUsuario: "Mariana",
                fotoUsuario: "/images/users/usuario3.png",
                comentario: "Muy buena relación calidad-precio"                   
            }]
        },
        {
            id: 7,
            nombre: "Torta de coco",
            imagen: "tartaCoco.jpg",
            precio: 140,
            descripcion: "Bizcochuelo húmedo, crema suave y coco rallado. Delicada, aromática y tentadora.",
            comentarios:[{
                nombreUsuario: "Ignacio",
                fotoUsuario: "/images/users/usuario4.png",
                comentario: "Una obra de arte. No sabía si comerla o enmarcarla."                
            },
            {
                nombreUsuario: "Luis",
                fotoUsuario: "/images/users/usuario5.png",
                comentario: "Recomiendo 100%. ¡Hasta mis hijos, que son re exigentes, la amaron!"                   
            },
            {
                nombreUsuario: "Brian123",
                fotoUsuario: "/images/users/usuario1.png",
                comentario: "La combinación de sabores es perfecta. No se siente pesada, ideal para después de una comida."                   
            }]
        },
        {
            id: 8,
            nombre: "Torta de arandanos y durazno",
            imagen: "tartaduraznosArandanos.jpg",
            precio: 10,
            descripcion: "Bizcochuelo esponjoso, crema suave y frutas frescas. Dulce, frutal y súper fresca.",
            comentarios:[{
                nombreUsuario: "Olivia",
                fotoUsuario: "/images/users/usuario2.png",
                comentario: "¡Riquísima! La pedí para mi aniversario y fue el broche de oro."               
            },
            {
                nombreUsuario: "Mariana",
                fotoUsuario: "/images/users/usuario3.png",
                comentario: "Hice el pedido desde el exterior para sorprender a mi familia y salió todo genial."                   
            },
            {
                nombreUsuario: "Ignacio",
                fotoUsuario: "/images/users/usuario4.png",
                comentario: "Mis invitados me preguntaron de dónde era la torta. ¡Ya pasé el dato!"                   
            }]
        },
        {
            id: 9,
            nombre: "Tarta de manzana",
            imagen: "tartamanzanaTorta.jpg",
            precio: 10,
            descripcion: "Masa crocante, manzanas caramelizadas y un toque de canela. Clásica, casera y siempre deliciosa.",
            comentarios:[{
                nombreUsuario: "Luis",
                fotoUsuario: "/images/users/usuario5.png",
                comentario: "Buenísima opción para quienes buscan algo artesanal y distinto a lo industrial"                  
            },
            {
                nombreUsuario: "Brian123",
                fotoUsuario: "/images/users/usuario1.png",
                comentario: "Liviana, fresca y nada empalagosa. ¡Un golazo!"                   
            },
            {
                nombreUsuario: "Olivia",
                fotoUsuario: "/images/users/usuario2.png",
                comentario: "¡La torta duró 10 minutos en la mesa! Todos repitieron."                   
            }]
        },
        {
            id: 10,
            nombre: "Torta de frutos rojos",
            imagen: "tortafrutosrojosTorta.jpg",
            precio: 30,
            descripcion: "Bizcochuelo suave con crema chantilly y un mix de frambuesas, arándanos, moras y frutillas frescas. Ligera, fresca y con el equilibrio justo entre dulce y ácido. Ideal para cualquier ocasión.",
            comentarios:[{
                nombreUsuario: "Mariana",
                fotoUsuario: "/images/users/usuario3.png",
                comentario: "Estéticamente hermoso, gran sabor."                
            },
            {
                nombreUsuario: "Ignacio",
                fotoUsuario: "/images/users/usuario4.png",
                comentario: "¡Una delicia! Ya estoy pensando cuál pedir la próxima vez."                   
            },
            {
                nombreUsuario: "Luis",
                fotoUsuario: "/images/users/usuario5.png",
                comentario: "Aceptaron el pedido con poco tiempo de anticipación y lo resolvieron de maravilla."                   
            }]
        }
    ],
    filtrarID: function (idBuscado) {
        let idEncontrado = [];
        for (let i = 0; i < this.productos.length; i++) {
            const element = this.productos[i];
            if (element.id==idBuscado) {
                idEncontrado.push(element)
            }
        }
        return idEncontrado
    },
    filtrarBusqueda:function (prodBuscado) {
        let prodEncontrado = [];
        for (let i = 0; i < this.productos.length; i++) {
            const element = this.productos[i];
            if (prodBuscado.toLowerCase() in element.nombre.toLowerCase()) {
                prodEncontrado.push(element)
            } 
        
        }
        return prodEncontrado;
    }
}
module.exports = datos;