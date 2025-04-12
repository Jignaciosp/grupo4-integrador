const datos = {
    usuarios: {
        email: "juan@mail.com",
        usuario: "Juan",
        password: "12345678",
        fechaNacimiento: "2006-04-10",
        documento: 45123456,
        fotoPerfil: "default-image.png"
    },
    productos: [
        {
            id: 1,
            nombre: "Torta tres leches",
            imagen: "treslechesTorta.jpg",
            precio: 10,
            descripcion: "torta tres leches",
            comentarios:[{
                nombreUsuario: "brian123",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Me encanta esta torta, super recomendada!"
            }]
        },
        {
            id: 2,
            nombre: "Torta de naranja",
            imagen: "tortanaranja.jpg",
            precio: 20,
            descripcion: "torta de naranja",
            comentarios:[{
                nombreUsuario: "mariana123",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Recomendadisimo! Me re gusto"                
            }]
        },
        {
            id: 3,
            nombre: "Budin de chocolate",
            imagen: "budinChocolate.jpg",
            precio: 40,
            descripcion: "budin de chocolate",
            comentarios:[{
                nombreUsuario: "luli_rock",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Lo compré y me sorprendió la calidad."                   
            }]
        },
        {
            id: 4,
            nombre: "Pan dulce",
            imagen: "pandulceTorta.jpg",
            precio: 50,
            descripcion: "pan dulce",
            comentarios:[{
                nombreUsuario: "juanma_dev",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Perfecto para las fiestas. Recomendado."                                          
            }]
        },
        {
            id: 5,
            nombre: "Torta rogel",
            imagen: "rogelTorta.jpg",
            precio: 60,
            descripcion: "torta rogel",
            comentarios:[{
                nombreUsuario: "sofi.gamer",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Muy rica."                          
            }]
        },
        {
            id: 6,
            nombre: "Torta selva negra",
            imagen: "selvanegraTorta.jpg",
            precio: 10,
            descripcion: "Torta selva negra",
            comentarios:[{
                nombreUsuario: "martinOk",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Es justo lo que estaba buscando."                               
            }]
        },
        {
            id: 7,
            nombre: "Torta de coco",
            imagen: "tartaCoco.jpg",
            precio: 140,
            descripcion: "Torta de coco",
            comentarios:[{
                nombreUsuario: "cami27",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Me encantó."                
            }]
        },
        {
            id: 8,
            nombre: "Torta de arandanos y durazno",
            imagen: "tartaduraznosArandanos.jpg",
            precio: 10,
            descripcion: "Torta de arandanos y durazno",
            comentarios:[{
                nombreUsuario: "elias.tech",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "deliciosa, muy buena calidad."               
            }]
        },
        {
            id: 9,
            nombre: "Tarta de manzana",
            imagen: "tartamanzanaTorta.jpg",
            precio: 10,
            descripcion: "Tarta de manzana",
            comentarios:[{
                nombreUsuario: "juli_ramone",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Muy buena atención y entrega rápida."                  
            }]
        },
        {
            id: 10,
            nombre: "Torta de frutos rojos",
            imagen: "tortafrutosrojosTorta.jpg",
            precio: 30,
            descripcion: "Torta de frutos rojos",
            comentarios:[{
                nombreUsuario: "nati.design",
                fotoUsuario: "/images/products/default-image.png",
                comentario: "Estéticamente hermoso, gran sabor."                
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