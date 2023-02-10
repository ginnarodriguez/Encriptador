
    function encriptar(){
        var textoIngresado = document.getElementById("mensaje").value
        var textoEncriptado = textoIngresado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat");
        document.getElementById("resultado").value = textoEncriptado;
    }
    function desencriptar(){
        var textoIngresado = document.getElementById("mensaje").value
        var textoDesencriptado = textoIngresado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/, "a").replace(/ober/, "o").replace(/ufat/, "u");
        document.getElementById("resultado").value = textoDesencriptado;
    }
    function borrar(){
        var textoIngresado = document.getElementById("resultado").value="";
    }
    async function copiarAlPortapapeles() {
        try {
          // Obtener el contenido a copiar
          var texto = document.getElementById("resultado").value;
      
          // Crear un objeto de tipo DataTransfer
          var clipboard = new ClipboardEvent("").clipboardData || new DataTransfer();
      
          // Añadir el contenido al objeto
          clipboard.setData("text/plain", texto);
      
          // Copiar el contenido al portapapeles
          await navigator.clipboard.writeText(clipboard.getData("text/plain"));
      
          // Mostrar un mensaje de éxito al usuario
          alert("Texto copiado al portapapeles");
        } catch (err) {
          console.error("Error al copiar al portapapeles: ", err);
        }
      }
      
          var btnCopiar = document.querySelector("#copiar");
           btnCopiar.onclick = copiarAlPortapapeles; 
         