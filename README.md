# OpenFin_Layouts-Create_View

## Overview
This demo provides an example of programtically opening A new 'view' from an existing view within the same layout.

## Installinng and running
To launch the demo run the following commands:

    npm install
    
    npm start
    
## Opening a new veiw
The button in the default view calls the createView() function defined in public\app\scripts\main.js:
    
    // This function van be used to create a new view that will be attached to the same Layout 
    // Window.  First a reference to the containing Window is obtained, then Layout.createView
    // is called from the Window object:
    async function createView(){
        // Obtain a refernce to this view, then another reference to the containing windows object 
        // (See: https://developer.openfin.co/docs/javascript/stable/View.html) 
        await fin.View.getCurrentSync().getCurrentWindow().then((win)=>{
            let { identity } = win;
            // Using the containing winows object, call Layout.createView
            // (See: https://developer.openfin.co/docs/javascript/stable/tutorial-Layout.createView.html)
            fin.Layout.createView({
                name: 'test_view',
                url: 'https://openfin.co'
            }, identity).then(console.log);
        });
    };
