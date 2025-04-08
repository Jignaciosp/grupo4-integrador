CREATE SCHEMA integradorGrupo4;
USE integradorGrupo4;
CREATE TABLE usuarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(250) NOT NULL UNIQUE,
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

INSERT INTO usuarios VALUES(
	DEFAULT,
    "luis.navas@digitalhouse.com",
    "123456",
    "Foto.png",
    40109233,
    '1990-05-15',
    null,
    null,
    null
),
(
	DEFAULT,
    "luis.navas1@digitalhouse.com",
    "123456",
    "Foto.png",
    40109233,
    '1990-05-15',
    null,
    null,
    null
),
(
	DEFAULT,
    "luis.navas2@digitalhouse.com",
    "123456",
    "Foto.png",
    40109233,
    '1990-05-15',
    null,
    null,
    null
),
(
	DEFAULT,
    "luis.navas3@digitalhouse.com",
    "123456",
    "Foto.png",
    40109233,
    '1990-05-15',
    null,
    null,
    null
),
(
	DEFAULT,
    "luis.navas4@digitalhouse.com",
    "123456",
    "Foto.png",
    40109233,
    '1990-05-15',
    null,
    null,
    null
);

INSERT INTO productos VALUES(
	DEFAULT,
    "la descripcion",
    1,
    "img.png",
    "nombre",
    null,
    null,
    null
),
(
	DEFAULT,
    "la descripcion",
    2
),
(
	DEFAULT,
    "la descripcion",
    3
),
(	DEFAULT,
    "la descripcion",
    4
),
(	DEFAULT,
    "la descripcion",
    5
),
(	DEFAULT,
    "la descripcion",
    1
),
(	DEFAULT,
    "la descripcion",
    2
),
(	DEFAULT,
    "la descripcion",
    3
),
(	DEFAULT,
    "la descripcion",
    4
),
(	DEFAULT,
    "la descripcion",
    5
);

INSERT INTO comentarios VALUES(
	DEFAULT,
    1,
    1,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    1,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    1,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    2,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    2,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    2,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    3,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    3,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    3,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    4,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    4,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    4,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    5,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    5,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    5,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    6,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    6,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    6,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    7,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    7,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    7,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    8,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    8,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    8,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    9,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    1,
    9,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    2,
    9,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    3,
    10,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    4,
    10,
    "comentario",
    null,
    null,
    null
),
(
	DEFAULT,
    5,
    10,
    "comentario",
    null,
    null,
    null
);

 