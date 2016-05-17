function NotesApplication(author){
	this.author = author;
	this.notelist = [];	

}

NotesApplication.prototype.create = function(note_content,note_id){
         notelist.push([note_id,note_content]);
}

NotesApplication.prototype.listNotes = function(){
		return notelist;
		//------this block  bellow show how it can me manipulated on the DOM-----\\
		/*for(var i = 0; i < notelist.length; i++){
			console.log("Note ID: "notelist[i][0]);
			console.log("Note ID: "notelist[i][1]);
			console.log("By Author " this.author);
		*/
}

NotesApplication.prototype.get = function(note_id){
		obj = []
	for(var i =0; i <notelist.length; i++){
		if(if note_id === notelist[i][0]){
            obj.push(notelist[i][0]) ;
            obj.push(notelist[i][1]) ; 
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
			if(if note_id === notelist[i][1]){
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

