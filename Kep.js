class Kartya {
    constructor(elem,adat,index){
        this.elem=elem;
        this.adat=adat;
        this.adat.index=index;

        
        this.cim=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");

        this.setAdatok(this.adat);

        this.elem.on("click",()=>{
            this.sajatEsemeny();
        })

    }

    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src",ertekek.eleresiUt);
        this.leiras.html(ertekek.leiras);
    }


    //Esemény létrehozása, ami tud kommunikálni a "játéktérrel".
    sajatEsemeny(){
        let esemeny = new CustomEvent("kepValasztas",{detail:this.adat});//<--- Obj. adatait adja vissza
        window.dispatchEvent(esemeny);//<--- Hozzáadom az eseményt a "játéktérhez"
    }
    
}