Package.describe({
    summary: "Editable multiselect form field widget"
});

Package.on_use(function(api) {
    
    api.use('standard-app-packages');
    
    api.add_files([
        'client/views/multioption.html',
        'client/views/multioption.js'
        
    ],'client');
    
});