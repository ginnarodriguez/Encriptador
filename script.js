
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
    function copiar(){
        
        navigator.clipboard.writeText("resultado")
        .then(()=>{
            alert("Texto copiado")
        })
        navigator.clipboard.readText("resultado").then(() => {
        console.log('Texto del portapapeles: ', text);
        }, (err) => {
        console.error('No se pudo leer el texto del portapapeles: ', err);
         });

    }
