<template>
	<div class="insurance-consultation">
		<Header name="insuranceConsultation"></Header>
		<TopImg></TopImg>
		<div class="insurance-consultation-list">
			<nuxt-link to="/zhenhua" class="insurance-consultation-item">
				<span class="iconfont icon-xuexidan"></span>
				<h2>在线课程</h2>
			</nuxt-link>
			<nuxt-link to="/consultation/consulting" class="insurance-consultation-item" :class="{active:currentTab == 'ConsultingBusiness'}">
				<span class="iconfont icon-zixun"></span>
				<h2>咨询业务</h2>
			</nuxt-link>
			<nuxt-link to="/consultation/training" class="insurance-consultation-item" :class="{active:currentTab == 'TrainingBusiness'}">
				<span class="iconfont icon-peixun"></span>
				<h2>培训业务</h2>
			</nuxt-link>
			<nuxt-link to="/consultation/conference" class="insurance-consultation-item" :class="{active:currentTab == 'ConferenceBusiness'}">
				<span class="iconfont icon-huiyi"></span>
				<h2>会议业务</h2>
			</nuxt-link>
			<nuxt-link to="/consultation/project" class="insurance-consultation-item" :class="{active:currentTab == 'ProjectRating'}">
				<span class="iconfont icon-xiangmupingji"></span>
				<h2>资格认证</h2>
			</nuxt-link>
			<div class="point-sign"> <!--  :style="{left:pointSignLeft}" -->
				<div></div>
			</div>
		</div>
		
		<div class="insurance-consultation-item">
			<nuxt-child></nuxt-child>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Header from '~/components/Header'
import TopImg from '~/components/TopImg'
import Footer from '~/components/Footer'

export default{
	name:'Index',
	components: {
		Header,
		TopImg,
		Footer,
	},
	data() {
		return {
			// pointSignLeft: '4rem'
		}
	},
	computed: {
		currentTab() {
			return this.$route.name;
		},
		pointSignLeft() {
			switch(this.currentTab) {
				case 'ConsultingBusiness':
					return '4.5rem';
				case 'TrainingBusiness':
					return '6.35rem';
				case 'ConferenceBusiness':
					return '8.2rem';
				case 'ProjectRating':
					return '10.1rem';
			}
		}
	},
}
</script>
<style lang="scss" scoped>
.insurance-consultation-list {
	width: 13.24rem;
	margin: 0 auto;
	padding: 0.6rem 0 0;
	border-bottom: 0.02rem solid #a2a4c0;
	display: flex;
	justify-content: center;
	position: relative;
	.point-sign {
		width: 0;
		margin: 0 auto;
		border-width: 0.2rem;
		border-style: solid;
		border-color: #a2a4c0 transparent transparent transparent;
		transition: left 0.2s;
		position: absolute;
		bottom: -0.4rem;
		left: 48.5%;
		div {
			border-width: 0.2rem;
			border-style: solid;
			border-color: #fff transparent transparent transparent;
			position: absolute;
			top: -0.25rem;
			left: -0.2rem;
		}
	}
	.insurance-consultation-item {
		margin: 0.42rem;
		display: inline-block;
		text-align: center;
		.iconfont {
			display: inline-block;
			width: 1rem;
			height: 1rem;
			line-height: 1rem;
			border-radius: 50%;
			border: 0.03rem solid #707070;

			font-size: 0.4rem;
			/*font-weight: bold;*/
			color: #515151;
			vertical-align: text-bottom;
		}
		&:hover {
			text-decoration: none;
		}
		h2 {
			margin-top: 0.2rem;
			font-size: 0.24rem;
			font-weight: bold;
			text-align: center;
		}
		&:nth-child(3) {
			.iconfont {
				font-size: 0.7rem;
				font-weight: bold;
			}
		}
		&.active {
			.iconfont {
				color: #fff;
				background-color: #171c61;
				border: 0.03rem solid #171c61;
			}
			h2 {
				color: #171c61;
			}

		}
	}
}
@media screen and (max-width: 1024px) {
.insurance-consultation-list {
	width: 18rem;
	padding: 0.4rem 0;
	display: block;
	.point-sign {
		border-width: 0.4rem;
		bottom: -0.8rem;
		left: 50%!important;
		transform: translateX(-50%);
		div {
			border-width: 0.3rem;
			top: -0.44rem;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.insurance-consultation-item {
		margin: 0.4rem 1.6rem;
		.iconfont {
			width: 2.5rem;
			height: 2.5rem;
			line-height: 2.5rem;
			font-size: 1rem;
		}
		h2 {
			font-size: 0.5rem;
		}
		&:nth-child(3) {
			.iconfont {
				font-size: 1.4rem;
			}
		}
	}
}
}
</style>
