<template>
	<div class="title">
		<div class="title-wrap">
			<h2>{{name}}</h2>
		</div>
	</div>
</template>
<script>
export default{
	name:'Title',
	data() {
		return {

		}
	},
	props:['name']
}
</script>
<style lang="scss" scoped>
.title {
	padding: 0.56rem 0 0.7rem;
	.title-wrap {
		width: 5.03rem;
		height: 0.77rem;
		margin: 0 auto;
		padding-top: 0.2rem;
		background-image: url('../assets/images/title/title-wrap.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		h2 {
			font-size: 0.3rem;
			font-weight: bold;
			text-align: center;
			color: #171c61;
		}
	}
}
@media screen and (max-width: 1024px) {
	.title {
		.title-wrap {
			width: 11.76rem;
			height: 1.8rem;
			h2 {
				font-size: 0.8rem;
			}
		}
	}
}
</style>