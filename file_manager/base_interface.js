/**
 * File manager interface
 * @module file_manager/base_interface
 * @description Base interface of file manager
 * @author Valya Grinchik valentina.grinchik@itexus.com
 */

var fileManager = function(options){

}

fileManager.prototype.getFolders = function(){};
fileManager.prototype.getFoldersAndFiles = function(){};
fileManager.prototype.createFolder = function(){};
fileManager.prototype.fileUpload = function(){};

module.exports = fileManager;