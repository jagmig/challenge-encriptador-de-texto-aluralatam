function encriptar(codigo){
    const regexp = /[`¡!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;    
    document.querySelector("#msj_exclamacion").removeAttribute("style");    
    let textarea = document.querySelector("#texto1");
    const texto = textarea.value;
    let area_default = document.querySelector("#default");
    let area_resultado = document.querySelector("#resultado");
    let texto_salida = document.querySelector("#texto_salida");

    if(texto != ""){
        let salida = "";
        for(let i=0; i<texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                            
                document.querySelector("#msj_exclamacion").style.color = "red";
                document.querySelector("#msj_exclamacion").style.fontSize = "16px";
                return;               
            }
            else if(texto[0] == regexp){
                document.querySelector("#msj_exclamacion").style.color = "red";
                document.querySelector("#msj_exclamacion").style.fontSize = "16px";
                return;
            }

            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_resultado.classList.add("invisible");
                alert("Escribiste espacio(s)");
                return;
            }

            if (texto[i] == 'a'){
                salida += codigo["a"];
            }
            else if(texto[i] == 'e'){
                salida += codigo["e"];
            }
            else if(texto[i] == 'i'){
                salida += codigo["i"];
            }
            else if(texto[i] == 'o'){
                salida += codigo["o"];                
            } 
            else if(texto[i] == 'u'){
                salida += codigo["u"];
            }
            else{
                salida += texto[i];
            }
        }

        area_default.classList.add("invisible");
        area_resultado.classList.remove("invisible");
        texto_salida.innerHTML = salida;
        
    }    
    return;
}

function desencriptar(codigo){
    document.querySelector("#msj_exclamacion").removeAttribute("style");
    let textarea = document.querySelector("#texto1");
    let texto = textarea.value;
    let area_default = document.querySelector("#default");
    let area_resultado = document.querySelector("#resultado");
    let texto_salida = document.querySelector("#texto_salida");
    if(texto !=""){
        for(var i=0; i<texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#msj_exclamacion").style.color = "red";
                document.querySelector("#msj_exclamacion").style.fontSize = "16px";
                return;
            }

            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_resultado.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_resultado.classList.remove("invisible");
        texto = texto.replace(new RegExp(codigo["a"],"g"), "a");
        texto = texto.replace(new RegExp(codigo["e"],"g"), "e");
        texto = texto.replace(new RegExp(codigo["i"],"g"), "i");
        texto = texto.replace(new RegExp(codigo["o"],"g"), "o");
        texto = texto.replace(new RegExp(codigo["u"],"g"), "u");
        texto_salida.innerHTML = texto;
    }
    return;

}

function clipboard(){
    const texto_out = document.querySelector("#texto_salida");
    navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector('#encrip');
const des = document.querySelector('#desencrip');
const copy = document.querySelector('#copiar');

var codigo = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(codigo);} );
des.addEventListener( 'click', function() {desencriptar(codigo);} );
copy.addEventListener( 'click', function() {clipboard();} );