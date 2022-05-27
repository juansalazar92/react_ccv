import Foto from './imagenes/profile.jpg';
import Diploma1 from '.imagenes/Diploma.jpg';
import Diploma2 from '.imagenes/Diploma1.jpg';
import Diploma3 from '.imagenes/Diploma3.jpg';
import './App.css';

function App() {
  return (
    <>
    <div class="encabezado-principal">
   <br/>
            <h2>Hoja de vida</h2><br/>
            <h2>Juan Sebastian Salazar Garcia</h2><br/>
            <img src={Foto} width='150px'/><br/><br/>
    </div> <br/>
<div class="cuerpo">
   <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      PERFIL PROFESIONAL
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      Tecnólogo en Telecomunicaciones. Con experiencia laboral en el área de las telecomunicaciones, de excelentes relaciones interpersonales y habilidad para trabajar en 
      equipo o individual. Enfocado en la productividad y liderazgo. Con alto grado de responsabilidad y fácil interpretación de las políticas organizacionales.
      Persona con excelente actitud y vocación de servicio, dinámica, paciente, puntual y organizada, destacado por la habilidad de trabajo en equipo, capacidad de 
      aprendizaje de forma rápida y adaptabilidad. Comprometido, autónomo y orientado a la obtención de resultados.
      Experiencia en servicio al cliente, generando soluciones a peticiones, quejas o reclamos.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        INFORMACIÓN PERSONAL
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>Nombres y Apellidos: </strong> Juan Sebastian Salazar Garcia<br/>
        <strong>Cedula: </strong> 1002590582<br/>
        <strong>Fecha de Nacimiento: </strong> 26 de Septiembre de 1992<br/>
        <strong>Dirección: </strong> Cra 3 # 31A - 134 <br/>
        <strong>Celular: </strong> 310-416-8970<br/>
        <strong>Correo Electrónico: </strong> juansebas192@gamil.com<br/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        FORMACION ACADEMICA
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>Primarios</strong> <br/>
                    Instituto chipre sede primaria Julio Zuluaga<br/>
                    Basica Primaria<br/>
                    2003<br/>
                    Manizales<br/><br/>
        <strong>Secundarios</strong> <br/>
                    Colegio Instituto chipre<br/>
                    Bachiller Academicobr <br/>
                    2010<br/>
                    Manizales<br/><br/>
        <strong>Universitarios</strong> <br/>
                    Universidad de Caldas<br/>
                    Tecnólogo en Sistemas Informáticos<br/>
                    2014<br/>
                    Manizales<br/><br/>
                    
                    Universidad de Manizales<br/>
                    Ingeniería de Sistemas y Telecomunicaciones<br/>
                    Cursando V Semestre<br/>
                    Manizales<br/>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        EXPERIENCIA LABORAL
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      <strong>Empresa: </strong> Carvajal<br/>
        <strong>Cargo: </strong> Tecnico Print <br/>
        <strong>Área: </strong> Chec<br/>
        <strong>Fecha de Ingreso; </strong> 27 de Septiembre de 2019<br/>
        <strong>Ciudad: </strong> Manizales<br/>
        </div>
    </div>
  </div>
  </div> 
</div><br/><br/>
<div class="container">
  <h2><center>Certificaciones</center></h2>
  <div class="row">
    <div class="col-4">
    <img src={Diploma1}width='100%'/>
    </div>
    <div class="col-4">
    <img src={Diploma2}width='100%'/>
    </div>
    <div class="col-4">
    <img src={Diploma3}width='100%'/>
    </div>
  </div>
</div>
<br/>
<div class="formulario">
  <div class="encabezado-principal"> <h3>Formulario de contacto</h3></div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Asunto</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="XXXXX"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><br/>
      <center><button type="button" class="btn btn-success">Enviar</button></center>
    </div>
</div>
    </>
  );
}

export default App;
