<template>

	<div>
    <form-helper>

      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="username" required="">
        <input type="text" placeholder="password" required="">
        <label>Your Message</label>
        <textarea></textarea>
      </div>

      <div slot="form-controls">
        <button @click="handleSubmit">Login</button>
      </div>

    </form-helper>
	</div>
</template>


<script>
  import formHelper from './formhelper.vue'

  export default {
  	components: {
      'form-helper': formHelper
  	},
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
