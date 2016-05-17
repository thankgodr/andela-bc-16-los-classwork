function NotesApplication(author){
	this.author = author;
	var notelist = [];

	 this.create = function(note_content,note_id){
         notelist.push([note_id,note_content])
	}

	this.listNotes() = function(){
		for(var i = 0; i < notelist.length; i++){
			console.log("Note ID: "notelist[i][0])
		}
	}
	

}

