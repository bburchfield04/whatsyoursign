
var capricorn = document.getElementById('capricorn');
var aquarius = document.getElementById('aquarius');
var pisces = document.getElementById('pisces');
var aries = document.getElementById('aries');
var taurus = document.getElementById('taurus');
var gemini = document.getElementById('gemini');
var cancer = document.getElementById('cancer');
var leo = document.getElementById('leo');
var virgo = document.getElementById('virgo');
var libra = document.getElementById('libra');
var scorpio = document.getElementById('scorpio');
var sagittarius = document.getElementById('sagittarius');
var capricorn = document.getElementById('capricorn');

function zodiacsign() {
    document.birth.date.selectedIndex;
    document.birth.month.selectedIndex;
    document.birth.sign.value;
    if (document.birth.month.selectedIndex == 1 && document.birth.date.selectedIndex <= 19) {
        $('h3').text("Capricorn");
    }
    if (document.birth.month.selectedIndex == 1 && document.birth.date.selectedIndex >= 20) {
        $('h3').text("Aquarius");
    }
    if (document.birth.month.selectedIndex == 2 && document.birth.date.selectedIndex <= 18) {
        $('h3').text("Aquarius");
    }
    if (document.birth.month.selectedIndex == 2 && document.birth.date.selectedIndex >= 19) {
        $('h3').text("Pisces");
    }
    if (document.birth.month.selectedIndex == 3 && document.birth.date.selectedIndex <= 20) {
        $('h3').text("Pisces");
    }
    if (document.birth.month.selectedIndex == 3 && document.birth.date.selectedIndex >= 21) {
        $('h3').text("Aries");
    }
    if (document.birth.month.selectedIndex == 4 && document.birth.date.selectedIndex <= 20) {
        $('h3').text("Aries");
    }
    if (document.birth.month.selectedIndex == 4 && document.birth.date.selectedIndex >= 21) {
        $('h3').text("Taurus");
    }
    if (document.birth.month.selectedIndex == 5 && document.birth.date.selectedIndex <= 20) {
        $('h3').text("Taurus");
    }
    if (document.birth.month.selectedIndex == 5 && document.birth.date.selectedIndex >= 21) {
        $('h3').text("Gemini");
    }
    if (document.birth.month.selectedIndex == 6 && document.birth.date.selectedIndex <= 20) {
        $('h3').text("Gemini");
    }
    if (document.birth.month.selectedIndex == 6 && document.birth.date.selectedIndex >= 21) {
        $('h3').text("Cancer");
    }
    if (document.birth.month.selectedIndex == 7 && document.birth.date.selectedIndex <= 21) {
        $('h3').text("Cancer");
    }
    if (document.birth.month.selectedIndex == 7 && document.birth.date.selectedIndex >= 22) {
        $('h3').text("Leo");
    }
    if (document.birth.month.selectedIndex == 8 && document.birth.date.selectedIndex <= 21) {
        $('h3').text("Leo");
    }
    if (document.birth.month.selectedIndex == 8 && document.birth.date.selectedIndex >= 22) {
        $('h3').text("Virgo");
    }
    if (document.birth.month.selectedIndex == 9 && document.birth.date.selectedIndex <= 21) {
        $('h3').text("Virgo");
    }
    if (document.birth.month.selectedIndex == 9 && document.birth.date.selectedIndex >= 22) {
        $('h3').text("Libra");
    }
    if (document.birth.month.selectedIndex == 10 && document.birth.date.selectedIndex <= 21) {
        $('h3').text("Libra");
    }
    if (document.birth.month.selectedIndex == 10 && document.birth.date.selectedIndex >= 22) {
        $('h3').text("Scorpio");
    }
    if (document.birth.month.selectedIndex == 11 && document.birth.date.selectedIndex <= 21) {
        $('h3').text("Scorpio");
    }
    if (document.birth.month.selectedIndex == 11 && document.birth.date.selectedIndex >= 22) {
        $('h3').text("Sagittarius");
    }
    if (document.birth.month.selectedIndex == 12 && document.birth.date.selectedIndex <= 20) {
        $('h3').text("Sagittarius");
    }
    if (document.birth.month.selectedIndex == 12 && document.birth.date.selectedIndex >= 21) {
        $('h3').text("Capricorn");
    }

    if (document.birth.month.selectedIndex == "x" || document.birth.date.selectedIndex == "y") return;

}

function validate() {
    if (document.birth.month.selectedIndex == 2 && document.birth.date.selectedIndex > 29) {
        alert("There is only a maximum of 29 days in February.");
        return false;
    }
    if (document.birth.month.selectedIndex == 4 && document.birth.date.selectedIndex == 31) {
        alert("There are only 30 days in April.");
        return false;
    }
    if (document.birth.month.selectedIndex == 6 && document.birth.date.selectedIndex == 31) {
        alert("There are only 30 days in June.");
        return false;
    }
    if (document.birth.month.selectedIndex == 9 && document.birth.date.selectedIndex == 31) {
        alert("There are only 30 days in September.");
        return false;
    }
    if (document.birth.month.selectedIndex == 11 && document.birth.date.selectedIndex == 31) {
        alert("There are only 30 days in November.");
        return false;
    } else {
        return true;
    }
}
//Images and Background colors
function pictures() {
    //Capricorn
    if ($("div:contains('Capricorn')").length) {
        $("#capricorn").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#006aa8");
    } else {
        $("#capricorn").css("display", "none");
        $("body,.sign").css("background-color", "");
    }
    //Aquarius
    if ($("div:contains('Aquarius')").length) {
        $("#aquarius").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#9264ac");
    } else {
        $("#aquarius").css("display", "none");
    }
    //Pices
    if ($("div:contains('Pisces')").length) {
        $("#pisces").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#8eb3c5");
    } else {
        $("#pisces").css("display", "none");
    }
    //Aries
    if ($("div:contains('Aries')").length) {
        $("#aries").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#979898");
    } else {
        $("#aries").css("display", "none");
    }
    //Taurus
    if ($("div:contains('Taurus')").length) {
        $("#taurus").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#128a64");
    } else {
        $("#taurus").css("display", "none");
    }
    //Gemini
    if ($("div:contains('Gemini')").length) {
        $("#gemini").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#599e99");
    } else {
      $("#gemini").css("display", "none");
    }
    //Cancer
    if ($("div:contains('Cancer')").length) {
        $("#cancer").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#73A9C2");
    } else {
        $("#cancer").css("display", "none");
    }
    //Leo
    if ($("div:contains('Leo')").length) {
        $("#leo").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#7db355");
    } else {
        $("#leo").css("display", "none");
    }
    //Virgo
    if ($("div:contains('Virgo')").length) {
        $("#virgo").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#1340fb");
    } else {
        $("#virgo").css("display", "none");
    }
    //Libra
    if ($("div:contains('Libra')").length) {
        $("#libra").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#4bc46b");
    } else {
          $("#libra").css("display", "none");
    }
    //Scorpio
    if ($("div:contains('Scorpio')").length) {
        $("#scorpio").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#dfa658");
    } else {
        $("#scorpio").css("display", "none");
    }
    //Sagittarius
    if ($("div:contains('Sagittarius')").length) {
        $("#sagittarius").css("display", "block");
        $("#signs").css("display", "none");
        $("body,.sign").css("background-color", "#2cb6b6");
    } else {
      $("#sagittarius").css("display", "none");
    }

}
