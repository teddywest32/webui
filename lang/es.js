/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Archivos Torrent||*.torrent||Todos los archivos (*.*)||*.*||"
	, "OK"
	, "Cancelar"
	, "Aplicar"
	, "Si"
	, "No "
	, "Cerrar"
	, "Preferencias"
	, "Idioma"
	, "Idioma:"
	, "Privacidad"
	, "Comprobar actualización periódic."
	, "Actualizar a versiones beta"
	, "Enviar información anónima cuando se verifica actualización"
	, "Al descargar"
	, "Extensión .!ut a archivos incompletos"
	, "Reservar espacio en disco"
	, "Prevenir hibernación si hay tareas activas"
	, "Opciones de visualización"
	, "Confirmar al borrar torrents"
	, "Confirmar al borrar trackers"
	, "Diálogo de confirmación al salir"
	, "Alternar color de fondo en la lista"
	, "Mostrar vel. en la barra de título"
	, "Mostrar límite de vel. en la barra"
	, "Al Agregar Torrents"
	, "No iniciar la descarga automáticamente"
	, "Activar la ventana del programa"
	, "Mostrar una ventana con el contenido del torrent"
	, "Acciones por Doble Click"
	, "Para torrents sirviendo:"
	, "Para torrents descargando:"
	, "Ubicación de los archivos descargados"
	, "Colocar nuevas descargas en:"
	, "Mostrar diálogo al agregar torrent"
	, "Mover decargas completadas a:"
	, "Agregar a la etiqueta del torrent"
	, "Sólo mover desde la carpeta de descarga por defecto"
	, "Ubicación de .torrents"
	, "Guardar .torrents en:"
	, "Mover .torrents de tareas terminadas a:"
	, "Cargar automáticamente .torrents desde:"
	, "Borrar .torrents cargados"
	, "Puerto de escucha"
	, "Puerto utilizado para conexiones entrantes:"
	, "Puerto aleat."
	, "Alternar puerto con cada inicio"
	, "Activar mapeo de puerto UPnP"
	, "Activar mapeo de puertos NAT-PMP"
	, "Servidor Proxy"
	, "Tipo:"
	, "Proxy:"
	, "Puerto:"
	, "Autenticación:"
	, "Usuario:"
	, "Contraseña:"
	, "Resolver nombres de host por proxy"
	, "Usar servidor proxy para las conexiones peer-to-peer"
	, "Agregar excepción en Firewall de Windows"
	, "Privacidad de Proxy"
	, "Desactivar búsqueda de DNS locales"
	, "Disable features that leak identifying information"
	, "Desactivar conexiones no soportadas por el proxy"
	, "Límite de Subida Global"
	, "Vel. máxima de subida (kB/s): [0: Sin límite]"
	, "Automático"
	, "Vel. de Subida cuando no hay descargas activas (kB/s):"
	, "Límite de Descarga Global"
	, "Vel. máxima de descarga (kB/s): [0: Sin límite]"
	, "Número de conexiones"
	, "Máximo global de conexiones:"
	, "Número máximo de pares conectados por torrent:"
	, "Número máx. de puestos de subida por torrent:"
	, "Puestos de subida extra si Vel. Subida es < 90%"
	, "Opciones de límites globales"
	, "Aplicar límite de vel. a exceso de transporte"
	, "Aplicar límite de vel. a conexiones uTP"
	, "Funciones básicas de BitTorrent"
	, "Activar Red DHT"
	, "Pedir al tracker info. de scrape"
	, "Activar DHT para torrents nuevos:"
	, "Activar Intercambio de pares"
	, "Activar Descubrimiento de Pares Local"
	, "Lim. ancho de banda pares locales"
	, "IP/Nombre de Host a reportar al tracker:"
	, "Protocolo de Encriptación"
	, "Salientes:"
	, "Permitir conex. entrantes legadas"
	, "Activar administración de ancho de banda [uTP]"
	, "Activar soporte de tracker UDP"
	, "Activar Tope de Transferencias"
	, "Configuración de Topes"
	, "Tipo de Límite:"
	, "Tope de ancho de banda:"
	, "Período de Tiempo (días):"
	, "Histórico de uso para el período elegido:"
	, "Subido:"
	, "Descargado:"
	, "Subido + Descargado:"
	, "Período de tiempo:"
	, "Ultimos %d días"
	, "Reiniciar Historial"
	, "Opciones de cola"
	, "Máximo número de torrents activos (sirv. o descargando):"
	, "Máximo número de descargas activas:"
	, "Servir mientras [Valores predeterminados]"
	, "Ratio mínimo (%):"
	, "Tiempo mínimo sirviendo (minutos):"
	, "Tareas de compartición con mayor prioridad que descargas"
	, "Cuando la meta de compartición se ha alcanzado"
	, "Limitar vel. de subida a (kB/s): [0: detener]"
	, "Activar Planificador"
	, "Tabla del Planificador"
	, "Preferencias del Planificador"
	, "Limitar Vel. Subida (kB/s):"
	, "Limitar Vel. Descarga (kB/s):"
	, "Desactivar DHT al apagar"
	, "Activar Web UI"
	, "Autenticación"
	, "Usuario:"
	, "Contraseña:"
	, "Activar cuenta Invitado con nombre de usuario:"
	, "Conectividad"
	, "Puerto de escucha alternativo (predet.: puerto de conexión):"
,"Permitir acceso desde estas IP únicamente (separe las distintas entradas con una coma):"
	, "Opciones Avanzadas [ADVERTENCIA: ¡No modificar!]"
	, "Valor:"
	, "Si"
	, "No"
	, "Establecer"
	, "Lista de velocidades emergente [Separar valores con una coma]"
	, "Sobreescribir lista de velocidades emergente"
	, "Lista de velocidades de subida:"
	, "Lista de velocidades de bajada:"
	, "Etiquetas [Separe varias etiquetas con un | ]"
	, "Motores de búsqueda [Formato: nombre|URL]"
	, "Conf. básica de cache"
	, "La cache del disco es usada para mantener datos frecuentemente accedidos en la memoria para reducir el número de escrituras y lecturas al disco. µTorrent normalmente maneja la cache automáticamente, pero puede cambiar su comportamiento desde estas opciones."
	, "Sobreescribir tamaño automático de cache y establecer tamaño manualmente (MB):"
	, "Reducir el uso de memoria cuando no se necesita la cache"
	, "Opciones avanzadas de Cache"
	, "Habilitar cache de escrituras de disco"
	, "Escribir bloques intactos cada 2 minutos"
	, "Escribir piezas terminadas inmediatamente"
	, "Habilitar cache de lecturas de disco"
	, "Apagar cache de lectura si la velocidad de subida es baja"
	, "Quitar bloques viejos de la cache"
	, "Aumentar tamaño de cache automáticamente cuando se necesite"
	, "Desactivar cacheo de escritura de disco de Windows"
	, "Desactivar cacheo de lectura de disco de Windows"
	, "Correr Programa"
	, "Correr este programa cuando finalice un torrent:"
	, "Correr este programa cuando un torrent cambia de estado:"
	, "You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128"
	, "Propiedades del Torrent"
	, "Trackers (separar filas con una línea vacía)"
	, "Preferencias del ancho de banda"
	, "Vel. máxima de subida (kB/s): [0: por defecto]"
	, "Vel. máxima de descarga (kB/s): [0: por defecto]"
	, "Número de puestos de subida: [0: predet.]"
	, "Servir mientras"
	, "Ignorar conf. por defecto"
	, "Ratio mínimo (%):"
	, "Tiempo mínimo sirviendo (minutos):"
	, "Otras Preferencias"
	, "Semilla Inicial"
	, "Activar DHT"
	, "Interc. de pares"
	, "Feed"
	, "URL de Feed:"
	, "Alias propio:"
	, "Subscripción"
	, "No descargar automáticamente todos los items"
	, "Descargar automáticamente todos los items publicados"
	, "Usar filtro inteligente de episodios"
	, "Feeds||Favoritos||Historial||"
	, "All Feeds"
	, "Configuración de filtro"
	, "Nombre:"
	, "Filtro:"
	, "No:"
	, "Guardar en:"
	, "Feed:"
	, "Calidad:"
	, "Número de Episodios: [ej: 1x12-14]"
	, "El Filtro compara nombre original en vez de decodificado"
	, "No iniciar descargas automáticamente"
	, "Filtro inteligente"
	, "Dar máxima prioridad a la descarga"
	, "Intervalo Mínimo:"
	, "Etiqueta para torrents nuevos:"
	, "Agregar Feed RSS..."
	, "Editar Feed..."
	, "Desactivar Feed"
	, "Activar Feed"
	, "Actualizar Feed"
	, "Borrar Feed"
	, "Descarga"
	, "Abrir URL en Navegador"
	, "Agregar a favoritos"
	, "Agregar"
	, "Borrar"
	, "TODOS"
	, "(Todos)"
	, "(coincidir siempre)||(coincidir una vez)||12 horas||1 día||2 dias||3 dias||4 dias||1 semana||2 semanas||3 semanas||1 mes||"
	, "Agregar Feed RSS"
	, "Editar Feed RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "¿Desea borrar RSS Feed \"%s\"?"
	, "Archivo"
	, "Nombre"
	, "Episodio"
	, "Formato"
	, "Codec"
	, "Fecha"
	, "Feed"
	, "URL de origen"
	, "IP"
	, "Puerto"
	, "Cliente"
	, "Banderas"
	, "%"
	, "Relevancia"
	, "Vel. Bajada"
	, "Vel. Subida"
	, "Reqs"
	, "Esperado"
	, "Subido"
	, "Descargado"
	, "Hasherr"
	, "Desc. Par"
	, "Máx.Vel.Sub."
	, "Máx.Vel.Des."
	, "En cola"
	, "Inactivos"
	, "Finalizado"
	, "Primera Pieza"
	, "Nombre"
	, "# Piezas"
	, "%"
	, "Prioridad"
	, "Tamaño"
	, "omitir"
	, "baja"
	, "normal"
	, "alta"
	, "Descargado:"
	, "Subido:"
	, "Semillas:"
	, "Restante:"
	, "Vel. de bajada:"
	, "Vel. de subida:"
	, "Clientes:"
	, "Ratio:"
	, "Archivo:"
	, "Hash:"
	, "General"
	, "Transferencia"
	, "%d de %d conectados (%d en el enjambre)"
	, "D:%s S:%s - %s"
	, "Copiar"
	, "Resetear"
	, "Sín Límite"
	, "Resolver IPs"
	, "Get File(s)"
	, "No descargar"
	, "Prioridad Alta"
	, "Prioridad Baja"
	, "Prioridad Normal"
	, "Copiar Magnet URI"
	, "Eliminar datos"
	, "Eliminar .torrent"
	, "Eliminar .torrent + Datos"
	, "Forzar comprobación"
	, "Forzar inicio"
	, "Etiqueta"
	, "Pausar"
	, "Propiedades"
	, "Bajar en cola"
	, "Subir en cola"
	, "Eliminar"
	, "Eliminar y"
	, "Iniciar"
	, "Detener"
	, "Activos"
	, "Todos"
	, "Completados"
	, "Descargando"
	, "Inactivos"
	, "Sin etiqueta"
	, "||Disp.||Disponibilidad"
	, "Añadido el"
	, "Completado en"
	, "Finalizado"
	, "Descargado"
	, "Vel. Bajada"
	, "Tiempo Restante"
	, "Etiqueta"
	, "Nombre"
	, "#"
	, "Clientes"
	, "Restante"
	, "Semillas"
	, "Semillas/Pares"
	, "Ratio"
	, "Tamaño"
	, "URL de origen"
	, "Estado"
	, "Subido"
	, "Vel. Subida"
	, "¿Está seguro de querer borrar los %d torrents seleccionados y todos los datos asociados?"
	, "¿Está seguro de querer borrar los torrents seleccionados y todos los datos asociados?"
	, "¿Está seguro de querer borrar los %d torrents seleccionados?"
	, "¿Está seguro de querer borrar el torrent seleccionado?"
	, "¿Desea borrar filtro RSS \"%s\"?"
	, "Comprobado %:.1d%%"
	, "Descargando"
	, "Error: %s"
	, "Finalizado"
	, "Pausado"
	, "En cola"
	, "En cola"
	, "Completo"
	, "Detenido"
	, "Ingrese Etiqueta"
	, "Ingrese nueva etiqueta para los Torrents seleccionados:"
	, "Nueva etiqueta..."
	, "Quitar etiqueta"
	, "General||Trackers||Pares||Piezas||Archivos||Velocidad||Registro||"
	, "Agregar Torrent"
	, "Agregar Torrent desde URL"
	, "Pausar"
	, "Preferencias"
	, "Bajar en cola"
	, "Subir en cola"
	, "Eliminar"
	, "Descargador RSS"
	, "Iniciar"
	, "Detener"
	, "Archivo"
	, "Agregar Torrent..."
	, "Agregar Torrent desde URL..."
	, "Opciones"
	, "Preferencias"
	, "Mostrar lista por categoría"
	, "Mostrar información detallada"
	, "Mostrar barra de estado"
	, "Mostrar barra de herramientas"
	, "Iconos en pestañas"
	, "Ayuda"
	, "Sitio web de µTorrent"
	, "Foros de µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Pausar todos los Torrents"
	, "Reanudar todos los Torrents"
	, "D: %s%z/s"
	, " L: %z/s"
	, " E: %z/s"
	, " T: %z"
	, "S: %s%z/s"
	, "B"
	, "KB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avanzadas"
	, "Ancho de banda"
	, "Conexión"
	, "Cache de Disco"
	, "Carpetas"
	, "General"
	, "Planificador"
	, "En cola"
	, "Extras UI"
	, "Configuración UI"
	, "BitTorrent"
	, "Web UI"
	, "Tope de transferencias"
	, "Correr Programa"
	, "Mostrar propiedades||Iniciar/Detener||Abrir Carpeta||Mostar Barra de Descarga||"
	, "Deshabilitado||Activo||Forzado||"
	, "(ninguno)||Socks4||Socks5||HTTPS||HTTP||"
	, "Subidas||Descargas||Subidas + Descargas||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nombre"
	, "Valor"
	, "Lun||Mar||Mié||Jue||Vie||Sáb||Dom||"
	, "Lunes||Martes||Miércoles||Jueves||Viernes||Sábado||Domingo||"
	, "Máxima Vel."
	, "Total - Usa límite de ancho de banda global"
	, "Limitado"
	, "Limitado - Usa límites de ancho de banda especificados en el planificador"
	, "Sólo sirviendo "
	, "Sólo sirviendo - Sólo sube datos (incluyendo incompletos)"
	, "Detener"
	, "Apagar - Detiene todos los torrents que no son forzados"
	, "<= %d horas"
	, "(Ignorar)"
	, "<= %d minutos"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw",
		"Más acciones",
		"Torrents",
		"Feeds",
		"App",
		"país",
		'Tiempo restante', // i.e. how much time remaining
		"de", // i.e. 3 of 4 peers
		"/s", // "per second""
		"Pegar una URL de feed o torrent",
		"Inicio",
		"Salir",
		"Seeding",
		"Todos los feeds",
		"velocidad de bits",
		"resolución",
		"duración",
		"transmisión por secuencias posible",
		"tipo", // i.e. file extension
		"remoto", // i.e. uTorrent remote
		"acerca de",
		"sesiones",
		"compartir",
		"compartir este torrent",
		"compartir vínculo",
		"agregar",
		"salir",
		"iniciar sesión",
		"acceso desde cualquier lugar",
		"mantenerse conectado",
		"descargar",
		"El cliente no está disponible en este momento. Compruebe que está conectado a Internet.",
		"No se puede comunicar con el cliente de &micro;Torrent. Este mensaje desaparecerá automáticamente cuando se restablezca la conexión.",
		"Abrir archivo",
		"Descargar en el equipo",
		"Abrir con el reproductor multimedia VLC",
		"Acciones",
		"temporada" // i.e. of a TV show

];
