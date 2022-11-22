addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').classList.toggle('show')
    const btn_menu = document.querySelector(".btn-menu")
    if (btn_menu) {

        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            if (menu_items.classList.toggle('show')) {
                document.getElementById('home').style.display = 'none'
            } else {
                document.getElementById('home').style.display = 'block'
            }
        })
    }

})

function validarEnvio() {
    
    if (document.formulario.nombre.value.length <= 5) {
        alert("Tiene que escribir su nombre completo")
        document.fvalida.nombre.focus()
        return 0;
    }

    
    edad = document.formulario.edad.value
    edad = validarEntero(edad)
    document.formulario.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.formulario.edad.focus()
        return 0;
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.formulario.edad.focus()
            return 0;
        }
    }

    
    if (document.formulario.telefono.value.length <10 || document.formulario.telefono.value==null) {
        alert("Debe ingresar un telefono valido")
        document.formulario.interes.focus()
        return 0;
    }

    if (document.formulario.correo.value.length == 0) {
        alert("Ingrese un email")
        document.fvalida.nombre.focus()
        return 0;
    }

    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();
}

function validarEntero(valor) {
    
    valor = parseInt(valor)
    
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}