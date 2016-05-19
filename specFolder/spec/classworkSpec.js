describe("NotesApplication  function", function() {
    var noteme = new NotesApplication("Peter") ;    
    it("NotesApplication should have authour as parenthesis", function() {
        expect(noteme.author).toEqual("Peter");
    });
 
    it("Check for NotesApplication has property Create", function() {
        expect(NotesApplication.prototype.hasOwnProperty("create")).toBe(true);
    });
 
    it("Check for NotesApplication has property listnote", function() {
        expect(NotesApplication.prototype.hasOwnProperty("listNotes")).toBe(true);
    });

    it("Check for NotesApplication has property Get", function() {
        expect(NotesApplication.prototype.hasOwnProperty("get")).toBe(true);
    });
 
     it("Check for NotesApplication has property search", function() {
        expect(NotesApplication.prototype.hasOwnProperty("search")).toBe(true);
    });
 
     it("Check for NotesApplication has property delete", function() {
        expect(NotesApplication.prototype.hasOwnProperty("delete")).toBe(true);
    });

    it("Check for NotesApplication has property edit", function() {
        expect(NotesApplication.prototype.hasOwnProperty("edit")).toBe(true);
    });

    it("Check for NotesApplication Create method to return appropraite ", function() {
        expect(noteme.create("hi")).toBe("Content Created");
    });

    it("Check for NotesApplication get method to return appropraite ", function() {
        expect(noteme.get("a")).toBe("Your Input is not a number");
    });
    it("Check for NotesApplication get method to return appropraite ", function() {
        expect(noteme.edit("4")).toBe("ID does not Exist");
    });
});