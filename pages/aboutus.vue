<template>
	<div class="about-us">
		<Header name="aboutUs"></Header>
		<TopImg></TopImg>
		<div class="about-us-wrap">
			<div class="about-us-content">
				<div class="about-us-list">
					<hr>
					<nuxt-link to="/aboutus/intro" :class="{active:currentTab == 'aboutus-intro'}">公司介绍</nuxt-link>
					<!-- <nuxt-link to="/aboutus/team" :class="{active:currentTab == 'Team'}">公司团队</nuxt-link> -->
					<nuxt-link to="/aboutus/recruit" :class="{active:currentTab == 'aboutus-recruit'}">人才招聘</nuxt-link>
					<nuxt-link to="/aboutus/contact" :class="{active:currentTab == 'aboutus-contact'}">联系我们</nuxt-link>
					<hr>
				</div>
				<div class="about-us-item">
					<keep-alive>
						<nuxt-child></nuxt-child>
					</keep-alive>
				</div>
			</div>
			
		</div>
		
		<Footer></Footer>
	</div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import TopImg from '../components/TopImg'

export default{
	name:'AboutUs',
	components: {
		Header,
		Footer,
		TopImg,
	},
	// metaInfo() {
	//   	return {
	//   		title: this.metaData.title,
	//   		meta:[{
	//   			name:'keywords',
	//   			content: this.metaData.keyword
	//   		},
	//   		{
	//   			name:'description',
	//   			content: this.metaData.desc
	//   		}]
	//   	}
	// },
	data() {
		return {
			metaData: {},
		}
	},
	computed: {
		currentTab() {
			console.log(this.$route);
			
			return this.$route.name;
		}
	},
	created() {
		// this.metaData = JSON.parse(sessionStorage.getItem('metaData'));
	}
}
</script>
<style lang="scss" scoped>
.about-us-wrap {
	padding-top: 0.92rem;
	position: relative;
	.about-us-content {
		display: flex;
		justify-content: center;
		.about-us-list {
			width: 1.3rem;
			margin-right: 1.7rem;
			line-height: 1;
			hr {
				display: none;
			}
			a {
				display: inline-block;
				padding: 0.2rem 0.1rem;
				text-align: center;
				font-size: 0.24rem;
				color: #b1b1b1;
				border-bottom: 0.01rem solid #dcdcdc;
				&.active {
					color: #171c61;
					border-bottom: 0.01rem solid #171c61;
				}
				&:hover {
					text-decoration: none;
				}
			}
		}
		.about-us-item {
			width: 12rem;
			border: 0.02rem solid #eeeeee;
			box-shadow: 0 0.02rem 0.2rem #eee;
		}
	}
		
}
@media screen and (max-width:1024px) {
.about-us-wrap {
	.about-us-content {
		display: block;
		text-align: center;
		.about-us-list {
			width: 18rem;
			margin: 0 auto 0.5rem;
			hr {
				display: inline-block;
				width: 2rem;
				height: 0.09rem;
				background-color: #171c61;
				vertical-align: middle;
			}
			a {
				display: none;
				font-size: 0.9rem;
				font-weight: bold;
				vertical-align: top;
				&.active {
					display: inline-block;
					border-bottom: 0;
				}
			}
		}
		.about-us-item {
			width: 18rem;
			margin: 0 auto;
			text-align: left;
		}
	}
		
}
}
</style>