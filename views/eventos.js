//Variables
qsomos = document.querySelector("#qSomos");
nprodu = document.querySelector("#nProdu");
nproye = document.querySelector("#nProye");
contac = document.querySelector("#contacto");
ofertaCursos = document.querySelector("#cursos");
contenido = document.querySelector("#contenido");
titconten = document.querySelector("#tituloContenido");
//Funciones
function cargarEventos() {
	qsomos.addEventListener("click",quienesSomos);
	nprodu.addEventListener("click",nuestrosProductos);
	nproye.addEventListener("click",nuestrosProyectos);
	contac.addEventListener("click",contacta);
	ofertaCursos.addEventListener("click",cursos);
}
function quienesSomos() {
	titconten.innerHTML="Digital Soluciones Integrales, C.A."
	contenido.innerHTML="<p><h1>MISION</h1>Somos una empresa de consultoría especializada en gestión empresarial, que aprovecha la reunión de especialistas de diversas áreas de gestión para desarrollar herramientas tecnológicas que simplifiquen y  hagan eficientes los procesos administrativos y el control en la empresa. Aprovechamos nuestro talento y lo aplicamos a las necesidades del mercado para posicionarnos como empresa consultora a nivel nacional.<h1>VISION</h1>Tenemos el firme propósito de expandirnos como la principal empresa de consultoría laboral y de cobro de pasivos vencidos, pero queremos ser grandes y expandirnos al mercado latinoamericano, con nuestros productos DigitalEmpleo, DigitalCobranzas y DigitalHR Sistema Integrado de Gestión.</p>";
}
function nuestrosProductos() {
	titconten.innerHTML="Nuestros Productos"
	contenido.innerHTML="<p><h2>Consultoría</h2><ul><li>Conflictos Laborales</li><li>Inspectoría del Trabajo</li><li>Gestión de Recursos Humanos</li><li>Gestión de Nóminas</li><li>Head Hunter</li><li>Cursos In Company</li></ul><h2>Gestión de Cobranzas</h2><h2>Sistema Integrado de Gestión de RH</h2></p>";
}
function nuestrosProyectos() {
	titconten.innerHTML="Sistea Integrado de Gestión de RH";
	contenido.innerHTML="Actualmente estamos desarrollando nuestro propio Sistema Integrado de Gestión utilizando tecnología Web 3.0. Con esta herramienta pensamos proveer el servicio de gestión de recursos humanos y consultoría en tres modalidades <em>Totalmente Extramuros</em> si el cliente prefiere tercerizar todo el proceso, <em>Gestión in situ con data extramuros</em>, y <em>Totalmente In situ con licenciamiento del software. <br /></em>Nuestro producto contempla un manual de Mejores Prácticas que rige el desarrollo e implementación, aunque flexible a requerimiento del cliente. <br /><h2>Incluye</h2><ul><li>Gestión de Nóminas</li><li>Gestión de la Organización</li><li>Gestión del Desempeño</li><li>Obligaciones Formales</li><li>Seguridad y Salud Laboral</li></ul>";
}
function contacta() {
	titconten.innerHTML="Contacto :";
	contenido.innerHTML="<strong>Gerencia de Productos:</strong><p>Abog. Alfred Abbad González</p><br /><strong>Gerencia de Comercialización:</strong><p>Lic. Mabilis Mendez</p><br /><strong>Gerencia de Desarrollo</strong><p>Ing. Cesar Moncada</p>";
}
function cursos() {
	titconten.innerHTML="Cursos In Company:";
	contenido.innerHTML="<p><strong>Desarrollo de Habilidades de Comunicación.</strong><small> La comunicación es un hecho humano, cotidiano y desencadenado, la comunicación asertiva es la base para el desarrollo armonioso de los procesos en la empresa.</small></p><p><strong>Negociación y Manejo de Conflictos.</strong><small> En la actividad laboral, la tensión y el desacuerdo surgen con la dinámica de los procesos, las habilidades negociadores de los líderes es fundamental para lograr la sinergia de los equipos de trabajo.</small></p><p><strong>Desarrollo de Habilidades del Supervisor.</strong><small> Hay herramientas fundamentales que todo lider de proceso debe manejar, la eficiencia no surge de forma espontanea, es el resultado de la alineación de todos los recursos.</small></p><p><strong>Cálculos Laborales.</strong><small> No permita que su fuerza laboral se desmotive por desconfianza en la adecuación de sus procesos de liquidación de beneficios, la claridad y extactitud es importante.</small></p>";
}
//Eventos
window.addEventListener("load",cargarEventos);
