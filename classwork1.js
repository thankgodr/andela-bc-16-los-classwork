function NotesApplication(author){
	this.author = author;
	this.notelist = [];	

}

NotesApplication.prototype.create = function(note_content){
         this.notelist.push(note_content);
}

NotesApplication.prototype.listNotes = function(){
		for(var i = 0; i < this.notelist.length; i++){
			console.log("Note ID: " + i);
			console.log(this.notelist[i]);
			console.log("By Author " + this.author);
}
}

NotesApplication.prototype.get = function(note_id){
		obj = []
	for(var i =0; i < this.notelist.length; i++){
		if(note_id === i){
            obj.push(this.notelist[i]) ;
		}
	}
	if(obj.length > 0){
		return obj.join(" ")
	}
	else{
		return "No ID Found"
	}
}

NotesApplication.prototype.search = function(search_text){
		obj = []
		for(var i =0; i < this.notelist.length; i++){
			if( this.notelist[i].search(search_text) == -1){
                       
			}
			else{
				obj.push([i,this.notelist[i]]); 
			}
		}
		if(obj.length > 0){
			return obj
		}
		else{
			return "No text Found"
		}
	}
var Note2 = new NotesApplication("Peter")
Note2.create("Created Content")
Note2.search("Content")
function NotesApplication(author){
	this.author = author;
	this.notelist = [];	

}

NotesApplication.prototype.create = function(note_content){
         this.notelist.push(note_content);
}

NotesApplication.prototype.listNotes = function(){
		for(var i = 0; i < this.notelist.length; i++){
			console.log("Note ID: " + i);
			console.log(this.notelist[i]);
			console.log("By Author " + this.author);
}
}

NotesApplication.prototype.get = function(note_id){
		obj = []
	for(var i =0; i < this.notelist.length; i++){
		if(note_id === i){
            obj.push(this.notelist[i]) ;
		}
	}
	if(obj.length > 0){
		return obj.join(" ")
	}
	else{
		return "No ID Found"
	}
}

NotesApplication.prototype.search = function(search_text){
		obj = []
		for(var i =0; i < this.notelist.length; i++){
			if( this.notelist[i].search(search_text) == -1){
                       
			}
			else{
				obj.push([i,this.notelist[i]]); 
			}
		}
		if(obj.length > 0){
			return obj
		}
		else{
			return "No text Found"
		}
	}

