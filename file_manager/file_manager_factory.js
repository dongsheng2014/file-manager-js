var extend = require('util')._extend;
var diskFileManager = require('./disk_file_manager');
var s3FileManager = require('./s3_file_manager');



var fileManagerFactory = function(options){
  this.options = options;
}

fileManagerFactory.prototipe.build = function(){
  if(this.options.fs == 's3'){
    return new s3FileManager();
  }else{
    return new diskFileManager();
  }
}

module.exports = fileManagerFactory