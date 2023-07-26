CREATE TABLE doctores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  especialidad VARCHAR(255) NOT NULL,
  consultorio VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL
);

CREATE TABLE pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  ncedula VARCHAR(255) NOT NULL,
  edad INT NOT NULL,
  telefono VARCHAR(255) NOT NULL
);

CREATE TABLE appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ceduladoctor INT NOT NULL,
  cedulapaciente INT NOT NULL,
  especialidad VARCHAR(255) NOT NULL,
  FOREIGN KEY (ceduladoctor) REFERENCES doctores(id),
  FOREIGN KEY (cedulapaciente) REFERENCES pacientes(id)
);