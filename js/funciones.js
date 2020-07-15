function invertirString(str) {
    // retorna el string "str" dado vuelta
    var retorno = "";
    for(var i= str.length - 1; i>=0; --i) {
        retorno += str.charAt(i);
    }
    return retorno;
}

function transformarString(str) {
    if (str.includes(':)')) {
        str = str.replace(':)', '<i class="icon-insert_emoticon"></i>');
    }
    return str;
}