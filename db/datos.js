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
            nombre: "Producto 1",
            imagen: "default-image.png",
            precio: 10,
            descripcion: "Producto 1 default"
        },
        {
            id: 2,
            nombre: "Cafetera",
            imagen: "img-cafetera-moulinex.jpg",
            precio: 20,
            descripcion: "Producto 2 cafetera"
        },
        {
            id: 3,
            nombre: "Macbook",
            imagen: "img-macbook-pro-2019.jpg",
            precio: 40,
            descripcion: "Producto 3 macbook"
        },
        {
            id: 4,
            nombre: "Tv Galaxy",
            imagen: "img-samsung-galaxy-s10.jpg",
            precio: 50,
            descripcion: "Producto 4 tv samsung galaxy"
        },
        {
            id: 5,
            nombre: "Tv Smart",
            imagen: "img-tv-samsung-smart.jpg",
            precio: 60,
            descripcion: "Producto 4 tv samsung smart"
        },
        {
            id: 6,
            nombre: "Producto 6",
            imagen: "default-image.png",
            precio: 10,
            descripcion: "Producto 6 default"
        },
        {
            id: 7,
            nombre: "Producto 7",
            imagen: "default-image.png",
            precio: 140,
            descripcion: "Producto 7 default"
        },
        {
            id: 8,
            nombre: "Producto 8",
            imagen: "default-image.png",
            precio: 10,
            descripcion: "Producto 8 default"
        },
        {
            id: 9,
            nombre: "Producto 9",
            imagen: "default-image.png",
            precio: 10,
            descripcion: "Producto 9 default"
        },
        {
            id: 10,
            nombre: "Producto 10",
            imagen: "default-image.png",
            precio: 30,
            descripcion: "Producto 10 default"
        }
    ],
    comentarios:[
        {
            nombreUsuario: "brian123",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Me encanta este modelo, siempre quise uno."
        },
        {
            nombreUsuario: "mariana123",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Muy malo"
        },
        {
            nombreUsuario: "luli_rock",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Lo compré y me sorprendió la calidad."
        },
        {
            nombreUsuario: "juanma_dev",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Perfecto para lo que necesito. Recomendado."
        },
        {
            nombreUsuario: "sofi.gamer",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Los colores y el diseño son lo mejor."
        },
        {
            nombreUsuario: "martinOk",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Es justo lo que estaba buscando."
        },
        {
            nombreUsuario: "cami27",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Súper cómodo y liviano, me encantó."
        },
        {
            nombreUsuario: "elias.tech",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Rinde excelente para el trabajo diario."
        },
        {
            nombreUsuario: "juli_ramone",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Muy buena atención y entrega rápida."
        },
        {
            nombreUsuario: "nati.design",
            fotoUsuario: "/images/products/default-image.png",
            comentario: "Estéticamente hermoso, y muy funcional."
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