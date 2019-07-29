Vue.component('github-user-card', {
	template: `
		<div class="ui card">
		  <div class="image">
		    <img :src="user.avatar_url">
		  </div>
		  <div class="content">
		    <a :href="userHrefLink" class="header">{{ username }}</a>
		    <div class="meta">
		      <span class="date">Joined in {{ user.created_at }}</span>
		    </div>
		    <div class="description">
		      {{ user.bio }}
		    </div>
		  </div>
		  <div class="extra content">
		    <a :href="userFriendsHrefLink">
		      <i class="user icon"></i>
		      {{ user.followers }} Friends
		    </a>
		  </div>
		</div>
	`,
	props: {
		username: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			user: {}

		}
	},
	computed: {
		userHrefLink() {
			return "https://github.com/" + this.username;
		},
		userFriendsHrefLink() {
			return "https://github.com/" + this.username + "?tab=followers";
		}
	},
	created() {
		axios.get(`https://api.github.com/users/${this.username}`)
			.then(response => {
				this.user = response.data;
			});
	}
})

new Vue({
	el: '#githubApp',
	data: {
		usernames: ['xg75michael', 'sdras', 'hootlex', 'triketora', 'SeanTAllen', 'marisaroque']
	}
})