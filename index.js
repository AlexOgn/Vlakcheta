function razdeliDuma(duma){
    return duma.split('').join(' ');
}

function kolkoEGolqm(array){
    let size = 0;

    for(let i=0;i<4;i++){
        if(array[i].length > 0){
            size++;
        }
    }

    return size;
}

function reverseArray(array){
    let size = kolkoEGolqm(array);
    let shiftSize = 4 - size;

    let reversed = [];
    for(let i=0;i<shiftSize;i++){
        reversed[i] = "";
    }

    for(let i=0;i<size;i++){
        reversed[i+shiftSize] = array[i];
    }

    return reversed;
}

function Vlakchify(){
    let tekst = document.getElementById("goshko").value.toUpperCase();
    let broiBukvi = tekst.length;
    let array = tekst.split(" ");

    let startRed = 7 - broiBukvi % 8;
    startRed = startRed > 3 ? startRed : 4;

    array.forEach(element => {
        if(element.length > 8){
            alert("NQKOQ DUMA E POVECHE OT 8");
            array.length = 0;
        } 
    });

    if(broiBukvi > 32){
        alert("POVECHE OT 32 BUKVI KELESH");
        array.length = 0;
    }
    
    let arrayRedove = ["", "", "", ""];
    let currRed = 0;
    let currLength = 0;

    array.forEach(duma => {
        if(currLength + duma.length + 1 > 9){
            currRed++;
            currLength = 0;
        }

        if(currRed > 4){
            alert('OTNEMA POVECHE OT 4 REDA');
            array.length = 0;
        }

        let broiSpace = currLength == 0 ? " " : "  ";
        arrayRedove[currRed] += `${broiSpace}${razdeliDuma(duma)}`;
        currLength += duma.length + 1;
    });

    arrayRedove = reverseArray(arrayRedove);

    let vlak = `:
━━━━-╮
╰┃ ┣▇━▇
`
    let vlakRedove = [" ┃ ┃  ╰━▅╮", " ╰┳╯ ╰━━┳╯", "  ╰╮ ┳━━╯    ", " ▕▔▋ ╰╮╭━╮"];

    for(let i=0;i<4;i++){
        vlak += `${vlakRedove[i] + arrayRedove[i]} \n`;
    }
    vlak += `╱▔╲▋╰━┻┻╮╲╱▔▔▔╲
▏  ▔▔▔▔▔▔▔  O O┃
╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱
 ▏╳▕▇▇▕ ▏╳▕▇▇▕
 ╲▂╱╲▂╱ ╲▂╱╲▂╱`
    
    let textbox = document.getElementById("Output");
    textbox.innerHTML = vlak;
}
