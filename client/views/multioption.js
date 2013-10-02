Template.multioption.events({
    
    'click .addMultiOption': function(evt) {
        var el = evt.target.tagName=="DIV" ? $(evt.target) : $(evt.target).parent();
        
        var opt = $('input[name=multioption]');
        $('select[name='+this.name+']').append($('<option/>', {
            text:   opt.val()
        }));
        opt.val('');        
    },
    
    'click .remMultiOption': function(evt) {
        $('select[name='+this.name+'] option:selected').remove();
    }
    
});