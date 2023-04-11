
function cronometro(){

    let hora=0, minuto=0, segundo=0;
    while(true){

        if(segundo<60){

            segundo++;
        }else{

             segundo=0
             minuto++;
             if(minuto<60){

             }else{
                minuto=0
                hora++;
             }
        }
        console.log(hora+":" + minuto + ":" + segundo);

    }
    

    }
