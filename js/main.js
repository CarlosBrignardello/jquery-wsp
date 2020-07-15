
$(document).ready(function() {
    $('.container').hide();
    $('.container').slideDown(1000);
    
    
    // aquí vamos a colocar nuestro código

    $('.icon-mic').on('click', cargarMensaje = () => {
        // este es el manejador
        var mensajes = $('#mensajes').val(); // este es el texto del mensaje
        if (mensajes == '') {
            return;
        }
        
        // acá creo el string de la fecha
        var fecha = new Date();
        var string_fecha = fecha.getHours() + ':' + fecha.getMinutes();
        
        // acá creo el mensaje final
        var message_out = `
        <div class="w-message w-message-out">
            <div class="w-message-text">
                <p>` + mensajes + `</p>
                <div class="time">` + string_fecha + `</div>
            </div>
        </div>
        `;
        // acá finalmente lo agrego al chat

        $('#chat').append(message_out);
        chat.scrollTop = chat.scrollHeight;
        // limpio el input
        $('#mensajes').val('');
    });

    $('.w-write-message-field').on("keyup", (ev) => {
        if(ev.keyCode != 13){
            return
        }
        else{
            cargarMensaje()
        }
    })

    $('.icon-attachment').on("click", () => {
        $('#chat').slideToggle("1000")
    })
});
