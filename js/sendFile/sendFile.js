angular.module('Tabs').controller('dropController', ['file', function(file){
    var drop=this;
    drop.dzOptions = {
        addRemoveLinks : true,
        url: "php/API/fileSend.php", 
        acceptedFiles: ".pdf,.doc,.txt,.docx",
        maxFilesize: 5 ,
        autoProcessQueue:true,
        addRemoveLinks:true
    };

    drop.dzCallbacks = {
        'addedfile' : function(file){
            drop.newFile = file;
        },
        'success' : function(document){
            var data={};
            data.fileName=document.name;
            file.send(data);
        },
       
    };

    drop.dzMethods = {};
    drop.removeNewFile = function(){
        drop.dzMethods.removeFile(drop.newFile); 
    }
}]);