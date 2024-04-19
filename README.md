
# WebSockets Chatroom

Un servidor en Node que expone un endpoint (/messages) que usando WebSockets (y la libreria de npm socket.io) permite al frontend escuchar los mensajes publicados al servidor desde distintos dispositivos al instante y sin necesidad de polling.



## Para probar localmente

Clonar el proyecto

```bash
  git clone https://github.com/markmysler/chat-websockets.git
```

Ir al directorio del backend

```bash
  cd chat-websockets/server
```

Instalar dependencias

```bash
  npm install
```

Correr el servidor

```bash
  npm run serve
```

Correr el frontend

```
  Abrir archivo index.html desde el explorador de archivos cuantas veces quieras,
  cada pestaña actua como una sesion distinta.
```

