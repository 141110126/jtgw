<template>
	<div class="top-img">
		<img src="~assets/images/topImg/top-img.png" v-if="screenWidth > 1024">
		<img src="~assets/images/topImg/top-img1.png" v-else>
	</div>
</template>
<script>
export default{
	name:'TopImg',
	data() {
		return {
			screenWidth: document.body.clientWidth,
		}
	}
}
</script>
<style lang="scss" scoped>
.top-img{
	img {
		width: 100%;
		height: auto;
	}
}
</style>