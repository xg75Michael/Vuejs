Vue.component('notification-message', {
	template: `
		<div class="ui message" :class="type" v-if="!hidden">
		  <i class="close icon" @click="hide"></i>
		  <div class="header">
		    {{ header }}
		  </div>
		  <slot></slot>
		</div>
	`,
	props: {
        type: {
          type: String,
          default: 'info'
        },
        header: {
          type: String,
          default: 'Information'
        }
    },
    data() {
    	return {
    		hidden: false
    	}
    },
    methods: {
    	hide() {
    		this.hidden = true
    	}
    }

})

new Vue({
	el: '#messageApp'
})