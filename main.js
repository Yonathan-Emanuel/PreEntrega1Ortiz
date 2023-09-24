        //Mensaje de bienvenida y pedimos al usuario que ingrese su nombre
        
        function solicitarNombre() {
            let nombre = prompt("Hola! Bienvenido a Gym Ba, Ingresá tu Nombre: ");
            alert("Bienvenido " +nombre+ " a continuación vas a poder ver tu rutina para este mes.");
        }

        solicitarNombre();


        //Pedimos la usuario que ingrese uno de los dias, y devolvemos los resultados de su rutina.
        let dia = prompt("Ingresá un día para ver tu rutina: lunes, martes, miercoles, jueves, viernes o sabado:")

        if(dia == "lunes"){
            for (let i = 1; i <= 4; i++) 
            alert("El dia " + dia + " Semana n° " +i+ " Entrenas Pecho y Brazos.");
        } else if(dia == "martes"){
            alert(" El día " + dia + " Tenés descanso");
        } else if(dia == "miercoles"){
            for (let i = 1; i <= 4; i++)
            alert("El dia " + dia + " Semana n° " +i+ " Hombro y Espalda.");
        } else if(dia == "jueves"){
            alert(" El día " + dia + " Tenés descanso");
        } else if(dia == "viernes"){
            for (let i = 1; i <= 4; i++)
            alert("El dia " + dia + " Semana n° " +i+ " Entrenas piernas.");
        } else if(dia == "sabado"){
            alert(" El día " + dia + " Tenés descanso");
        } else{
            alert(" El día ingresado no es válido, por favor, ingresá un día correcto.");
        } 