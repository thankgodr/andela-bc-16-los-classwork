function getRandomizer(bottom, top) {
    return function() {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    }
}

function NotesApplication(author){
	this.author = author;
	this.notelist = {}

	var create = function(note_content){
         
	}
	
}

