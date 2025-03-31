const { index } = require("./heroeControler");

const homeMsg='Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.';
let homeController={
    index: function(req, res, next) {
        return res.render('index', { title: 'Express Home', mesg: homeMsg });

      }
}
module.exports=homeController;