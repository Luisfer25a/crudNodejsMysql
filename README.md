# crudNodejsMysql
archivos de laboratorio para virtualización

Para construír la imagen mediante el docker-compose se debe de:
- Inicializar docker.
- Entrar en el directorio raíz del proyecto donde se tienen los archivos del docker-compose.yml y el Dockerfile
- Ejecutar en la consola un docker-compose up

Para desplegar imagenes de docker en ECS:

- Se debe crear el repositorio en "Elastic Container Service" de aws, se ingresa el nombre y se obtiene la url
- Se debe instalar AWS CLI
- Luego se tiene que hacer push de la imagen al repositorio
- Posterior se debe crear el Cluster en la lista de servicios de aws, seleccionando EC2 Linux - Networking al hacerlo
- Se deben abrir los puertos que la aplicación estará usando, en este caso el 3000 y 3306
- Luego se debe crear una task que estará corriendo en el cluster creado.
- Al crear la instancia de EC2, esta proporciona una pulbic DNS que podemos usar para acceder a nuestro servicio.
- Listo ya está dockerizada nuestra aplicación y ejecutandose en ECS.
