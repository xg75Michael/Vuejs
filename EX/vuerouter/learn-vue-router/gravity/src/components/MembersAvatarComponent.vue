<template>
	<div class="members-avatar-component">
		<div class="avatar-container" v-for="url in avatarList" :key="url">
			<el-avatar :size="avatarSize" :src="url" :fit="fit"></el-avatar>
		</div>
	</div>
</template>

<script>
	import { MemberAvatarList } from '../firebaseStorage.js'

	export default {
		data() {
			return {
				fit: 'cover',
				avatarList: MemberAvatarList
			}
		},
		computed: {
			avatarSize() {
				if (this.avatarList.length > 10) {
					return 100;
				} else if (this.avatarList.length < 4) {
					return 200;
				} else {
					return 150;
				}
			}
		},
		methods: {

		},
		created() {

		}
	}
</script>

<style scoped>
	.members-avatar-component {
		display: block;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		height: auto;
	}
	.el-avatar.el-avatar--circle {
		box-shadow: 1px 2px 3px #111;
	}
	.avatar-container {
		display: inline-block;
		opacity: 0.9;
	}
	.avatar-container:hover {
		opacity: 1;
		transform: scale(1.1);
	}

</style>