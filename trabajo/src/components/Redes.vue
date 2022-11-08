<template>
  <TheHeader/>
  <TheButtons/>
  <div id="row">
  <div class="contact_form">

    <div class="formulario">
      <h1 id="title">Dejanos tu opinion!</h1>
      <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>


      <form>
        <p>
          <label for="nombre" class="colocar_nombre">Nombre
            <span class="obligatorio">*</span>
          </label>
          <input type="text" name="introducir_nombre" id="nombre" placeholder="Escribe tu nombre">
        </p>

        <p>
          <label for="email" class="colocar_email">Email
            <span class="obligatorio">*</span>
          </label>
          <input type="email" name="introducir_email" id="email" placeholder="Escribe tu Email">
        </p>

        <p>
          <label for="telefone" class="colocar_telefono">Teléfono
          </label>
          <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono">
        </p>

        <p>
          <label for="asunto" class="colocar_asunto">Asunto
            <span class="obligatorio">*</span>
          </label>
          <input type="text" name="introducir_asunto" id="assunto" placeholder="Escribe un asunto">
        </p>

        <p>
          <label for="mensaje" class="colocar_mensaje">Mensaje
            <span class="obligatorio">*</span>
          </label>
          <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" placeholder="Deja aquí tu comentario..."></textarea>
        </p>

        <button type="submit" name="enviar_formulario" id="enviar">
          <p>Enviar</p>
        </button>

        <p class="aviso">
          <span class="obligatorio"> * </span>los campos son obligatorios.
        </p>

      </form>
    </div>
  </div>


  <div id='valoracion'>
    <h1 id="title2">Contanos como fue tu experiencia</h1>
    <img id='animo-img' src="../assets/img/tenedor.png" alt="">
    <div id="form">
      <fieldset>
        <legend>Ingrese valoracion entre 1 y 10</legend>
        <input type="number" name="cara" id="animo-input" min="0" max="10">
        <button v-on:click="functExperiencia">
          Enviar
        </button>
        <h2 id="feedback"></h2>
      </fieldset>
    </div>
  </div>
  </div>
  <FooterTag/>
</template>

<script>
import {experiencia} from "@/assets/js/reseña";
import FooterTag from "@/components/Footer";
import TheHeader from "@/components/Header";
import TheButtons from "@/components/Botones";

export default {
  name: "Redes-tag",
  components: {
    TheButtons,
    TheHeader,
    FooterTag
  },
  data() {
    return {
      functExperiencia: experiencia
    }
  }
}
</script>

<style scoped>

body{
  height: 100%;
  font-family: 'Noto Sans', sans-serif;
  background-color: burlywood;
}

#row {
  display: flex;
  flex-direction: row;
}

.contact_form{
  height: auto;
  margin: 50px auto;
  border-radius: 10px;
  padding-bottom: 20px;
  background-color: #fbfbfb;
  padding-left: 30px;
}

input{
  background-color: #fbfbfb;
  width: 408px;
  height: 40px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: burlywood;
  margin-top: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
}

textarea{
  background-color: #fbfbfb;
  width: 405px;
  height: 150px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: burlywood;
  margin-top: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
  padding-top: 15px;
}

label{
  display: block;

}

button{
  height: 45px;
  padding-left:   5px;
  padding-right: 5px;
  margin-bottom: 20px;
  margin-top: 10px;
  text-transform: uppercase;
  background-color: burlywood;
  border-color: burlywood;
  border-style: solid;
  border-radius: 10px;
  width: 420px;
  cursor: pointer;
  color: #f3f3f3;
}

button:hover {
  background-color: saddlebrown;
  border-color: saddlebrown;
  opacity: 90%;
}

button p{
  color: #fff;
}

span{
  color: burlywood;
}

.aviso{
  font-size: 13px;
  color: #0e0e0e;
}

h1{
  font-size: 39px;
  padding-bottom: 20px;
  color: saddlebrown;
  text-align: center;
}


h3{
  font-size: 16px;
  padding-bottom: 30px;
  color: #0e0e0e;
  text-align: center;
}


p{
  font-size: 14px;
  color: #0e0e0e;
}


::-webkit-input-placeholder {
  color: #a8a8a8;
}


.formulario input:focus{
  outline:0;
  border: 1px solid firebrick;
}


.formulario textarea:focus{
  outline:0;
  border: 1px solid firebrick;
}


#animo-img {
  width: 100px;
}

#valoracion{
  text-align: center;
  flex-direction: row;
}

fieldset {
  width: 30%;
  text-align: center;
  margin-left: 35%;
}


</style>