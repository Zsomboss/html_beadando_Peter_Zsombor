window.onload = function() {
    if (window.location.href.indexOf("arfelmeres.html")=== -1) {
    alert("Üdvözöljük a XXI. század stílusos otthonok világában");
}
};

function arSzamitas() {

    if (window.location.href.indexOf("belter.html") === -1) {
        var negyzetMeterAr = document.getElementById("negyzetMeterAr").value;

        if (negyzetMeterAr > 1500) {
            alert("A négyzetméter nem haladhatja meg az 1500-at!");
            return;
        }
        if (negyzetMeterAr < 1) {
            alert("A négyzetméter nem lehet kisebb 1-nél!");
            return;
        }

        var hazTipus;
        var hazTipusgomb = document.getElementsByName("hazTipus");
        for (var i = 0; i < hazTipusgomb.length; i++) {
            if (hazTipusgomb[i].checked) {
                hazTipus = hazTipusgomb[i].value;
                break;
            }
        }

        var designTipus = document.getElementById("designTipus").value;
        var varos = document.getElementById("varos").value;

        var utikoltseg = 0;

        switch (varos) {
            case "Tatabánya":
                utikoltseg = 5000;
                break;
            case "Székesfehérvár":
                utikoltseg = 7000;
                break;
            case "Dunaharaszti":
                utikoltseg = 3500;
                break;
            case "Budapest":
                utikoltseg = 0;
        }

        var ar;
        switch (designTipus) {
            case "Beltéri Design":
                ar = negyzetMeterAr * 4000;
                break;
            case "Kültéri Design":
                ar = negyzetMeterAr * 3000;
                break;
            case "Tapéta Rendelés":
                ar = negyzetMeterAr * 2500;
                break;
        }

        var vegosszeg = ar + utikoltseg
        
        alert("Az ár a következő paraméterekkel: \n" +
            "Négyzetméter ár: " + negyzetMeterAr + "\n" +
            "Ház típus: " + hazTipus + "\n" +
            "Design típus: " + designTipus + "\n" +
            "Város: " + varos + "\n" +
            "Úti költség: " + utikoltseg + "\n" +
            "Ár: " + vegosszeg);
    }
}