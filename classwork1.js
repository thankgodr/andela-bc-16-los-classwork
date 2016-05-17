function NotesApplication(author){
	this.author = author;
	this.notelist = [];	

}

NotesApplication.prototype.create = function(note_content){
         notelist.push(note_content);
}

NotesApplication.prototype.listNotes = function(){
		for(var i = 0; i < notelist.length; i++){
			console.log("Note ID: " + i);
			console.log("Note ID: "notelist[i]);
			console.log("By Author " this.author);
}

NotesApplication.prototype.get = function(note_id){
		obj = []
	for(var i =0; i <notelist.length; i++){
		if(if note_id === i){
            obj.push(notelist[i]) ;
		}
	}
	if(obj.length > 0){
		return obj
	}
	else{
		return "No ID Found"
	}
}

NotesApplication.prototype.search = function(search_text){
		obj = []
		for(var i =0; i <notelist.length; i++){
			if( !notelist[i].search(search_text) == -1){
                obj.push(notelist[i][0]) ;
                obj.push(notelist[i][1]) ; 
			}
		}
		if(obj.length > 0){
			return obj
		}
		else{
			return "No text Found"
		}
	}

