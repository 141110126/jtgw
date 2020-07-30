<template>
	<div class="train">
		<template v-for="item in dataList">
			<router-link to="/consultation/training" >
				<img :src="item.thumb">
				<div class="train-content-text">
					<h3><span class="iconfont icon-lingxing"></span>{{item.title}}</h3>
					<p>{{item.desc}}</p>
				</div>
			</router-link>
		</template>
	</div>
</template>
<script>
export default{
	name:'Train',
	props:['dataList'],
	data() {
		return {

		}
	}
}
</script>
<style lang="scss" scoped>
.train {
	display: flex;
	justify-content: center;
	a {
		width: 5.7rem;
		margin: 0 0.24rem;
		display: inline-block;
		text-decoration: none;
		text-align: center;
		img {
			width: 5.7rem;
			height: 3.83rem;
		}
		.train-content-text {
			height: 2.2rem;
			padding: 0.4rem;
			overflow: hidden;
			h3 {
				font-size: 0.24rem;
				font-weight: bold;
				color: #171c61;
				span {
					margin: 0.1rem;
				}
			}
			p {
				font-size: 0.24rem;
				text-align: left;
			}
		}
		&:hover {
			color: black;
		}
	}
}
@media screen and (max-width: 1024px) {
.train {
	a {
		width: 8.3rem;
		margin: 0 0.24rem;
		img {
			width: 8.3rem;
			height: 5.6rem;
		}
		.train-content-text {
			height: 6rem;
			padding: 0.4rem;
			h3 {
				margin: 0.2rem;
				font-size: 0.6rem;
			}
			p {
				font-size: 0.5rem;
			}
		}
	}
}
}
</style>