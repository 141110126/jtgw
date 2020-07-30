<template>
	<div class="consult">
		<template v-for="item in dataList">
			<router-link to="/consultation/consulting" class="consult-content">
				<img :src="item.thumb">
				<div class="consult-content-text">
					<h3>{{item.title}}</h3>
					<p>{{item.desc}}</p>
				</div>
			</router-link>
		</template>
	</div>
</template>
<script>
export default{
	name:'Consult',
	props:['dataList'],	
}
</script>
<style lang="scss" scoped>
.consult{
	margin-bottom: 0.74rem;
	display: flex;
	justify-content: center;
	text-align: center;
	.consult-content{
		display: inline-block;
		text-decoration: none;
		width: 4.96rem;
		height: 5rem;
		margin: 0 1rem;
		img {
			width: 4.96rem;
			height: 2.76rem;
		}
		div {
			height: 2.2rem;
			padding: 0 0.7rem;
			overflow: hidden;
			h3 {
				margin: 0.4rem 0 0.2rem;
				text-align: center;
				font-size: 0.24rem;
				font-weight: bold;
			}
			p {
				max-height: 1rem;
				margin: 0 auto;
				font-size: 0.22rem;
				text-align: left;
			}
		}
		&:hover {
			color: black;
			border-bottom: 0.08rem solid #454981;
		}
	}
}
@media screen and (max-width: 1024px) {
.consult{
	margin-bottom: 1rem;
	.consult-content{
		width: 8.3rem;
		height: 9.2rem;
		margin: 0 0.3rem;
		img {
			width: 8.3rem;
			height: 4.17rem;
		}
		div {
			height: 5rem;
			padding: 0;
			h3 {
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