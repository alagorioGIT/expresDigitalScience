
const digitalHeroes = require('../db/science');
const misHeroes = digitalHeroes.lista;
const titulo = "Detalle del Heroe";

let heroeController = {


    index: function (req, res) {
        let id = req.params.id;
        let hero = misHeroes.find(heroe => heroe.id == id);
        return res.render('heroes', { heroesList: misHeroes });
    },
    show: function (req, res) {
        let id = req.params.id;
        let hero = misHeroes.find(heroe => heroe.id == id);
        if (hero === undefined) {
            let errorText = `El ID ${id}, no existe en el archivo, elija otro`
            return res.render('errorID', { title: titulo, errorText: errorText })
        }

        return res.render('heroeDetalle', { title: titulo, heroe: hero})

    },
    showReview: function (req, res) {
        let id = req.params.id;
        let ok= req.params.ok;
        let hero = misHeroes.find(heroe => heroe.id == id);
        if(hero!== undefined && ok =='ok'){
            return res.render("heroeBio",{ title: titulo, heroe: hero, ok:ok})
        }else if (hero!== undefined && ok !=='ok'){
            let textoAdicional='Lamento que no desees leer mas de mi :('
            return res.render('heroeBio', { title: titulo, heroe: hero, ok:ok, textoAdicional:textoAdicional})
        }
        if (hero === undefined) {
            let errorText = `El ID ${id}, no existe en el archivo, para mostrar su biografia, elija otro`
            return res.render('errorID', { title: titulo, errorText: errorText })
        }
        
        
    }
}

module.exports = heroeController;