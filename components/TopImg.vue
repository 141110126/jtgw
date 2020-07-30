<template>
	<div class="top-img">
		<img src="~assets/images/topImg/top-img.png" class="big-img">
		<img src="~assets/images/topImg/top-img1.png" class="small-img">
	</div>
</template>
<script>
export default{
	name:'TopImg',
	data() {
		return {
			// screenWidth: document.body.clientWidth,
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
.small-img {
	display: none;
}
.big-img {
	display: block;
}
@media screen and (max-width: 1024px) {
	.small-img {
		display: block;
	}
	.big-img {
		display: none;
	}
}
</style>