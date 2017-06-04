var app = new Vue({
	el: '#app',

	data: {
            stateModal: false,
        },
        
        components: { 
            table_component : table_component,
            modal_component : modal_component,
        },
});
