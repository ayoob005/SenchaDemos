/**
 * Copyright (C) 2005-2012 by Rivello Multimedia Consulting (RMC).                    
 * code [at] RivelloMultimediaConsulting [dot] com                                                  
 *                                                                      
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the      
 * "Software"), to deal in the Software without restriction, including  
 * without limitation the rights to use, copy, modify, merge, publish,  
 * distribute, sublicense, and#or sell copies of the Software, and to   
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:                                            
 *                                                                      
 * The above copyright notice and this permission notice shall be       
 * included in all copies or substantial portions of the Software.      
 *                                                                      
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,      
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF   
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR    
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.                                      
 */
//Marks the right margin of code *******************************************************************
Ext.define('com.rmc.projects.extjsmvctemplate.store.MessageStore', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.data.Store',
    model : 'com.rmc.projects.extjsmvctemplate.model.MessageModel',
    fields: ['message'],
    data: [
        {message: 'Hello World From MessageStore!'}
    ],
    autoLoad : true,
    
    messageModel : null,
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    loadModel : function () {
        
        //NOT SURE IF THERE IS A MORE BUILT-IN WAY TO INSTANTIATE THIS MODEL
        //BUT THIS SOLUTION WORKS FINE.
        this.messageModel = new this.model ();
    },
    getMessage : function () {
        
        
        //
        //ATTEMPT #1 - USE A MODEL TO HOLD DATA IN AN ARRAY OR OBJECT
        //              STATUS: FAILED. CAN'T FIGURE IT OUT 
        //
        
        //IF THE MODEL IS NOT LOADED, LOAD IT
        //if (!this.messageModel) {
        //    this.loadModel();
        //}
        //console.log (this.messageModel)
        
        
        
        
        //
        //ATTEMPT #2 - JUST GRAB DATA FROM A STORE ARRAY OR OBJECT
        //              STATUS: WORKS!
        //
        console.log (this.data.items[0].data.message)
        return this.data.items[0].data.message;
    }
    
});