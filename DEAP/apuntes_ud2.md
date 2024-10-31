# Apache es Modular

## Para instalar módulos:
    - a2enmod php
    - a2dismod php
Cuando instalamos el módulo, es para todo el contexto Servidor, luego en Virtual Host se dice si lo vas a utilizar o no.

## Contextos Apache - Tiene 4
    - Contexto Servidor
    - Contexto Virtual Host 
    - Contexto Directory
    - Contexto .htaccess -> Es un fichero de configuración que en función de donde se encuentre afectará al Virtual Host o a un directorio en 
                            concreto.
    
    Esto tiene Herencia. Todo lo que configure afecta a todos los contextos. 
    Todas las directivas son jerárquicas.

## Estructuras APACHE - /var/www

- Hay que hacer Ejercicio en Diario de Aprendizaje

# SSL

Instalar modulo --> a2enmod ssl
Con el comando --> netstat -nat veremos que el puerto 443 se ha activado

Desinstalar modulo --> a2dismod ssl

Para reiniciar el servicio sin tenerlo que tirar podremos hacer --> service apache2 reload

Si queremos agregar un puerto de escucha nuevo --> /etc/apache2/ports.conf y debajo de Listen 80 poner otro Listen con el puerto que quieras escuchar

## Sites SSL

La ruta es --> /etc/apache2/sites-available (Disponibles) --> /etc/apache2/sites-enabled

Para activar un servicio de Sites --> a2ensite default-ssl.conf

Para desactivar un servicio de Sites --> a2dissite default-ssl.conf

Para aplicar cambios tendremos que reiniciar el servicio, parcial o entero --> service apache2 reload

### Archivo de Sites 000-default.conf

- Este fichero es el que lleva los Vitual Host de mis páginas.
- Dentro de la "etiqueta" <virtualHost> se tendrá que específicar la ruta de: 
    DocumentRoot --> Ruta de mi aplicación
    ServerAdmin --> Correo del administrador --> En caso de caida de la web muestra al usuario este correo para contactar con el.
    ErrorLog --> Errores de log --> En general de Apache2
    CustomLog --> Customizar ruta de errores log --> Actividad de la web

# Contenido Web Apache

La ruta del contenido web es --> /var/www

El fichero de configuración de Apache2 es --> /etc/apache2/apache2.conf