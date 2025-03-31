const titulo = "Creditos Digital Science";
let creditosController = {
    index: function (req,res){
        return res.render('creditos', { title: titulo});
       
    }
}
module.exports=creditosController;