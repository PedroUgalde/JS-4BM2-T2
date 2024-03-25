var dato1=15;
    var dato2=80;
    var dato3=17;

    document.write('El mayor entre' + dato1+', '+dato2+' y '+dato3);
    if ((dato1>dato2)&&(dato1>dato3)) {
        document.write('<h1>'+dato1+'</h1>');
    }

    else if ((dato2>dato3)&&(dato2>dato1)) {
        document.write('<h1>'+dato2+'</h1>');
    }

    else {
        document.write('<h1>'+dato3+'</h1>');
    }