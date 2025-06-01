CREATE SCHEMA integradorGrupo4;
USE integradorGrupo4;
CREATE TABLE usuarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(250) NOT NULL UNIQUE,
    nombreUsuario VARCHAR(250) NOT NULL UNIQUE,
    contrasenia VARCHAR(500) NOT NULL,
    foto VARCHAR(300),
    dni BIGINT UNSIGNED NOT NULL,
    fechaNacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleteAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descripcion TEXT,
    usuarioId INT UNSIGNED NOT NULL,
    imagen VARCHAR(300),
    nombre VARCHAR(300),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleteAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuarioId INT UNSIGNED NOT NULL,
    productId INT UNSIGNED NOT NULL,
    comentario TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleteAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (productId) REFERENCES productos(id),
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

INSERT INTO usuarios VALUES
(
	DEFAULT,
    "brian@mail.com",
    "brian123",
    "12345678",
    "default-image.png",
    45123456,
    "2006-04-10",
    null,
    null,
    null
),
(
	DEFAULT,
    "olivia@mail.com",
    "olivia456",
    "12345678",
    "default-image.png",
    46123456,
    "2005-10-14",
    null,
    null,
    null
),
(
	DEFAULT,
    "mariana@mail.com",
    "mariana_06",
    "12345678",
    "default-image.png",
    46234567,
    "2006-06-12",
    null,
    null,
    null
),
(
	DEFAULT,
    "ignacio@mail.com",
    "nacho2005",
    "12345678",
    "default-image.png",
    45234567,
    "2005-03-07",
    null,
    null,
    null
),
(
	DEFAULT,
    "luis@mail.com",
    "luisito03",
    "12345678",
    "default-image.png",
    43123456,
    "2003-08-20",
    null,
    null,
    null
);


INSERT INTO productos VALUES(
	DEFAULT,
    "Bizcochuelo suave bañado en una mezcla de tres leches, con crema y un toque de canela. Húmeda, dulce y absolutamente irresistible.",
    1,
    "treslechesTorta.jpg",
    "Torta tres leches",
    null,
    null,
    null
),
(
	DEFAULT,
    "Esponjosa, con aroma cítrico y sabor fresco. Un clásico liviano y lleno de sabor natural.",
    2,
    "tortanaranja.jpg",
    "Torta de naranja",
    null,
    null,
    null
),
(
	DEFAULT,
    "Húmedo, intenso y súper chocolatoso. Ideal para acompañar el café o disfrutar como snack dulce.",
    3,
    "budinChocolate.jpg",
    "Budin de chocolate",
    null,
    null,
    null
),
(	DEFAULT,
    "Clásico de fin de año, con masa suave y esponjosa, frutas abrillantadas y frutos secos. Aromático, tierno y festivo.",
    4,
    "pandulceTorta.jpg",
    "Pan dulce",
    null,
    null,
    null
),
(	DEFAULT,
    "Capas finas de masa crocante, dulce de leche cremoso y merengue italiano. Crocante, dulce y totalmente irresistible.",
    5,
    "rogelTorta.jpg",
    "Torta rogel",
    null,
    null,
    null
),
(	DEFAULT,
    "Clásica torta alemana con bizcochuelo de chocolate, crema chantilly y cerezas. Intensa, suave y deliciosa.",
    1,
    "selvanegraTorta.jpg",
    "Torta selva negra",
    null,
    null,
    null
),
(	DEFAULT,
    "Bizcochuelo húmedo, crema suave y coco rallado. Delicada, aromática y tentadora.",
    2,
    "tartaCoco.jpg",
    "Torta de coco",
    null,
    null,
    null
),
(	DEFAULT,
    "Bizcochuelo esponjoso, crema suave y frutas frescas. Dulce, frutal y súper fresca.",
    3,
    "tartaduraznosArandanos.jpg",
    "Torta de arandanos y durazno",
    null,
    null,
    null
),
(	DEFAULT,
    "Masa crocante, manzanas caramelizadas y un toque de canela. Clásica, casera y siempre deliciosa.",
    4,
    "tartamanzanaTorta.jpg",
    "Tarta de manzana",
    null,
    null,
    null
),
(	DEFAULT,
    "Bizcochuelo suave con crema chantilly y un mix de frambuesas, arándanos, moras y frutillas frescas. Ligera, fresca y con el equilibrio justo entre dulce y ácido. Ideal para cualquier ocasión.",
    5,
    "tortafrutosrojosTorta.jpg",
    "Torta de frutos rojos",
    null,
    null,
    null
);

INSERT INTO comentarios VALUES(
	DEFAULT,
    1,
    1,
    "Me encanta esta torta, super recomendada!",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    1,
    "¡Exquisita! La torta de chocolate fue un éxito total en el cumpleaños de mi hijo.",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    1,
    "Una bomba de sabor. Se nota que usan ingredientes de calidad.",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    2,
    "La presentación es impecable, parece de revista. ¡Y encima riquísima!",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    2,
    "Llega siempre a tiempo y perfecta. ¡Nunca fallan!",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    2,
    "Ideal para regalar. Me salvaron con un envío express para un cumpleaños sorpresa.",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    3,
    "Lo compré y me sorprendió la calidad.",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    3,
    "No soy fan de las tortas, pero esta me encantó. ¡Eso dice mucho!",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    3,
    "Atención excelente y predisposición para adaptar la torta a lo que pedí.",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    4,
    "Perfecto para las fiestas. Recomendado.",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    4,
    "Mi familia quedó fascinada. ¡Ya quieren repetir!",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    4,
    "Buen balance entre lo dulce y lo suave. No empalaga.",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    5,
    "Hermosa estética y sabor casero. Se nota el amor que le ponen.",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    5,
    "La torta llegó intacta, bien embalada. ¡Un lujo!",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    5,
    "Puntuales, atentos y el sabor… inolvidable.",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    6,
    "Ideal para eventos, ¡mis invitados no dejaron ni las migas!",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    6,
    "El sabor es casero, nada industrial. Y eso se agradece.",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    6,
    "Muy buena relación calidad-precio",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    7,
    "Una obra de arte. No sabía si comerla o enmarcarla.",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    7,
    "Recomiendo 100%. ¡Hasta mis hijos, que son re exigentes, la amaron!",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    7,
    "La combinación de sabores es perfecta. No se siente pesada, ideal para después de una comida.",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    8,
    "¡Riquísima! La pedí para mi aniversario y fue el broche de oro.",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    8,
    "Hice el pedido desde el exterior para sorprender a mi familia y salió todo genial.",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    8,
    "Mis invitados me preguntaron de dónde era la torta. ¡Ya pasé el dato!",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    9,
    "Buenísima opción para quienes buscan algo artesanal y distinto a lo industrial",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    9,
    "Liviana, fresca y nada empalagosa. ¡Un golazo!",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    9,
    "¡La torta duró 10 minutos en la mesa! Todos repitieron.",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    10,
    "Estéticamente hermoso, gran sabor.",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    10,
    "¡Una delicia! Ya estoy pensando cuál pedir la próxima vez.",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    10,
    "Aceptaron el pedido con poco tiempo de anticipación y lo resolvieron de maravilla.",
    null,
    null,
    null
);
-- Cambios del 26/05/2025: Actualización de fotos e imágenes
UPDATE usuarios
SET foto = CONCAT('users/usuario', id, '.png')
WHERE id BETWEEN 1 AND 5;

UPDATE productos
SET imagen = CONCAT('products/', SUBSTRING_INDEX(imagen, '.', 1), '.png');

UPDATE integradorgrupo4.productos
SET imagen = REPLACE(imagen, 'products/products/', 'products/')
WHERE imagen LIKE 'products/products/%';

UPDATE integradorgrupo4.productos
SET imagen = REPLACE(imagen, 'products/products/', 'products/')
WHERE id BETWEEN 1 AND 10
   OR id = 15;
   
UPDATE integradorgrupo4.usuarios
SET foto = CASE 
    WHEN id = 6 THEN 'users/usuario4.png'
    WHEN id = 7 THEN 'users/usuario2.png'
    WHEN id = 8 THEN 'users/usuario1.png'
END
WHERE id IN (6, 7, 8);

UPDATE integradorgrupo4.productos
SET deleteAt = CURRENT_TIMESTAMP
WHERE id = 16;

 