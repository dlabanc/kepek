$(function () {
  const szuloElem = $("article");
  const sablonElem = $(".kep");

  index = 1;

  const kepAdat = [
    {
      cim: "1. kép címe",
      eleresiUt: "kepek/kep1.jpg",
      leiras: "1. kép részletes leírása",
    },
    {
      cim: "2. kép címe",
      eleresiUt: "kepek/kep2.jpg",
      leiras: "2. kép részletes leírása",
    },
    {
      cim: "3. kép címe",
      eleresiUt: "kepek/kep3.jpg",
      leiras: "3. kép részletes leírása",
    },
    {
      cim: "1. kép címe",
      eleresiUt: "kepek/kep1.jpg",
      leiras: "1. kép részletes leírása",
    },
    {
      cim: "2. kép címe",
      eleresiUt: "kepek/kep2.jpg",
      leiras: "2. kép részletes leírása",
    }
  ];
  //Képek példányosítása a galériában
  for (let index = 0; index < kepAdat.length; index++) {
    let ujElem = sablonElem.clone().appendTo(szuloElem);
    const kartya = new Kartya(ujElem, kepAdat[index], index);
  }
  sablonElem.remove();

  //Nagy kép példányosítás a kiskép egyike alapján
  const nagykepSzulo = $("#nagykepTarolo");
  let ujElem = sablonElem.clone().appendTo(nagykepSzulo);
  const nagyKartya = new Kartya(ujElem, kepAdat[1], index);

  sablonElem.remove();

  //Nagykép beállítása kisképre kattintás során
  $(window).on("kepValasztas", (event) => {
    nagyKartya.setAdatok(event.detail);
    index = event.detail.index;
  });

  $("article .kep").hover(function(){
    $(this).toggleClass("item-fade")
    });
[]
  $("#bal").click(() => {
    if (index <= 0) {
      index = kepAdat.length - 1;
    } else {
      index--;
    }
    nagyKartya.setAdatok(kepAdat[index]);
  });
  $("#jobb").click(() => {
    if (index >= kepAdat.length - 1) {
      index = 0;
    } else {
      index++;
    }
    nagyKartya.setAdatok(kepAdat[index]);
  });

});
