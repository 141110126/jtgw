<template>
	<div class="header">
		<div class="header-logo">
			<a href="/">
				<img class="" src="../assets/images/header/header-logo.png">
			</a>
		</div>
		<div class="collapse-btn" @click="collapseNav">
			<span class="iconfont icon-liebiao-copy"></span>
		</div>
		<ul class="header-nav" :class="{openNav:showNav}">
			<li :class="{active:name == 'index'}">
				<a href="/">首页</a>
			</li>
			<li :class="{active:name == 'insuranceZhenhua'}">
				<nuxt-link to="/zhenhua">真话保险</nuxt-link>
			</li>
			<li class="two-stage-nav" :class="{active:name == 'insuranceConsultation'}">
				<h2 @click="toggleTwoStageNav('consulting')">
					保险咨询
					<span class="iconfont icon-xiangxia1" v-if="showConsulting"></span>
					<span class="iconfont icon-msnui-menu-right" v-else></span>
				</h2>
				<ul v-show="showConsulting"> 
					<li>
						<nuxt-link to="/zhenhua">在线课程</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/consultation/consulting">咨询业务</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/consultation/training">培训业务</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/consultation/conference">会议业务</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/consultation/project">资格认证</nuxt-link>
					</li>
				</ul>
			</li>
			<li class="two-stage-nav">
				<h2 @click="toggleTwoStageNav('institute')">
					南方保险研究院
					<span class="iconfont icon-xiangxia1"  v-if="showConsulting"></span>
					<span class="iconfont icon-msnui-menu-right" v-else></span>
				</h2>
				<ul v-show="showInstitute">  
					<li>
						<a href="https://institute.juntaozx.com">研究院介绍</a>
					</li>
					<li>
						<a href="https://institute.juntaozx.com/#/information">行业资讯</a>
					</li>
					<li>
						<a href="https://institute.juntaozx.com/#/activity">研究院活动</a>
					</li>
				</ul>
			</li>
			<li class="two-stage-nav" :class="{active:name == 'aboutUs'}">
				<h2 @click="toggleTwoStageNav('aboutUs')">
					关于我们
					<span class="iconfont icon-xiangxia1" v-if="showAboutUs"></span>
					<span class="iconfont icon-msnui-menu-right" v-else></span>
				</h2>
				<ul class="about-us-list" v-show="showAboutUs"> 
					<li>
						<nuxt-link to="/aboutus/intro">公司介绍</nuxt-link>
					</li>
					<!-- <li>
						<nuxt-link to="/about/us/team">公司团队</nuxt-link>
					</li> -->
					<li>
						<nuxt-link to="/aboutus/recruit">人才招聘</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/aboutus/contact">联系我们</nuxt-link>
					</li>
				</ul>
			</li>
			<li  :class="{active:name == 'partner'}">
				<nuxt-link to="/partner">合作伙伴</nuxt-link>
			</li>
			<li class="two-stage-nav"  :class="{active:name == ''}" @click="openCode">
				<h2>关注公众号</h2>
				<div>
					<div class="public-address">
						<div>
							<img src="../assets/images/footer/code.png">
							<p>扫一扫，关注我们</p>
						</div>
						<div>
							<p>官方公众号</p>
							<p>"真话保险"</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="showCode" v-show="showCode">
			<div class="code-wrap">
				<div class="close-btn" @click="showCode=false">
					<span class="iconfont icon-guanbi"></span>
				</div>
				<h3>真话保险</h3>
				<p>南方保险研究院出品</p>
				<img src="../assets/images/header/follow-code.png">
				<p class="code-tip">扫一扫，关注我们</p>
			</div>
		</div>
		<!-- <div class="header-search">
			<div class="search-content">
				<span class="iconfont icon-sousuo"></span>
				<input type="text" placeholder="输入课程名称">
			</div>
		</div> -->
	</div>
</template>
<script>
export default{
	name:'Header',
	props:['name'],
	data() {
		return {
			showNav:false,
			// showConsulting: document.body.clientWidth > 1024 ? true : false,
			// showInstitute: document.body.clientWidth > 1024 ? true : false,
			// showAboutUs: document.body.clientWidth > 1024 ? true : false,
			showConsulting: true,
			showInstitute: true,
			showAboutUs: true,
			showCode:false,
		}
	},
	watch:{
	  $route(to,from){
	    // console.log(to.path);
	    this.showNav = false;
	  }
	},
	methods:{
		collapseNav() {
			this.showNav = !this.showNav;
		},
		toggleTwoStageNav(type) {
			switch(type) {
				case 'consulting':
					this.showConsulting = !this.showConsulting;
					break;
				case 'institute':
					this.showInstitute = !this.showInstitute;
					break;
				case 'aboutUs':
					this.showAboutUs = !this.showAboutUs;
					break;
			}
		},
		openCode() {
			if(document.body.clientWidth <= 1024) {
				this.showCode=true;
			}
		}
	}
}
</script>
<style lang="scss" scoped>
$deep-blue :#171c61;
.header {
	width: 100%;
	height: 1.1rem;
	line-height: 1.1rem;
	.header-logo {
		display: inline-block;
		width: 3.7rem;
		text-align: center;
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 2.1rem;
				height: 0.71rem;
			}			
		}
	}
	.collapse-btn{
		display: none;
	}
	.header-nav {
		/*display: inline-block;*/
		float: right;
		width: 11.4rem;
		height: 100%;
		line-height: 1.1rem;
		vertical-align: bottom;
		>li {
			height: 100%;
			line-height: 0.9rem;
			padding: 0 0.1rem 0 0.1rem;
			/*overflow: hidden;*/
			display: inline-block;
			border-top: 0.1rem solid transparent;
			position: relative;
			>a,h2  {
				display: inline-block;
				font-size: 0.24rem;
				font-weight: bold;
				color: $deep-blue;
				vertical-align: bottom;
				.iconfont {
					display: none;
				}
				&:hover {
					text-decoration: none;
				}
			}
			&.two-stage-nav {
				ul{
					display: none;
					width: 2.2rem;
					background-color: #fff;
					box-shadow: 0 0.02rem 0.2rem #ccc;
					position: absolute;
					top: 1rem;
					left: 0;
					z-index: 9;
					>li {
						height: 0.6rem;
						a {
							display: inline-block;
							width: 100%;
							height: 100%;
							padding-left: 0.4rem;
							line-height: 0.6rem;
							font-size: 0.2rem;
							vertical-align: top;
						}
						&:hover {
							background-color: #454981;
							a {
								color: #fff;
							}
						}
					}
				}
				.public-address {
					display: none;
					width: 3.26rem;
					height: 2.2rem;
					background-color: #fff;	
					box-shadow: 0 0.02rem 0.2rem #ccc;
					justify-content: center;
					position: absolute;
					z-index: 9;
					top: 1rem;
					right: 0;
					>div {
						&:first-child{
							display: inline-block;
							width: 54%;
							padding: 0.34rem 0;
							text-align: center;
							img {
								width: 1.1rem;
								height: 1.1rem;
							}
							p {
								line-height: 0.4rem;
								font-size: 0.16rem;
							}
						}
						&:last-child{
							display: inline-block;
							width: 45%;
							padding-top: 0.5rem;
							p {
								font-size: 0.2rem;
								font-weight: bold;
								line-height: 0.5rem;
								&:last-child {
									color: #dd660a;
								}
							}
						}
					}
					
				}
			}
			&.active {
				border-top: 0.1rem solid $deep-blue;
			}
			&.two-stage-nav:hover{
				background-color: #454981;
				border-top: 0.1rem solid #454981;
				>a,h2 {
					color: #fff;
				}
				ul {
					display: block;
				}
				.public-address {
					display: flex;
				}
			}
		}
	}	
	.header-search {
		display: inline-block;
		width: 2.5rem;
		height: 1.1rem;
		line-height: 1.1rem;
		.search-content {
			display: inline-block;
			width: 2.4rem;
			height: 0.4rem;
			line-height: 0.4rem;
			border-radius: 0.2rem;
			border: 0.03rem solid $deep-blue;
			position: relative;
			span {
				display: inline-block;
				font-size: 0.2rem;
				font-weight: bold;
				/*margin-top: -0.38rem;*/
				margin-left: 0.1rem;
				vertical-align: top;
			}
			input {
				display: inline-block;
				width: 1.8rem;
				height: 0.33rem;
				margin-top: -0.5rem;
				font-size: 0.2rem;
				position: absolute;
				top: 0.5rem;
				left: 0.4rem;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.header {
		height: 2.4rem;
		line-height: 2.4rem;
		/*position: relative;*/
		.header-logo {
			width: 8rem;
			a {
				img {
					width: 6rem;
					height: 2rem;
					margin-top: 0.2rem;
				}
			}
		}
		.collapse-btn {
			display: inline-block;
			float: right;
			margin-right: 0.5rem;
			.iconfont {
				font-size: 1rem;
				font-weight: bold;
				color: #171c61;
			}
		}
		.header-nav {
			display: none;
			width: 13rem;
			background-color: #f8f8f8;
			height: auto;
			padding: 0 0.6rem;
			position: absolute;
			top: 2.4rem;
			right: 0;
			z-index: 9;
			>li {
				line-height: 2.5rem;
				padding: 0;
				display: block;
				border-top: 0;
				>a,h2 {
					display: inline-block;
					width: 100%;
					height: 2.5rem;
					font-size: 0.8rem;
					color: #656565;
					border-bottom: 0.01rem solid #e5e5e5;
					.iconfont {
						display: inline-block;
						float: right;
						font-size: 0.6rem;
					}
					&:hover {
						text-decoration: none;
					}
				}
				&.two-stage-nav {
					ul{
						display: block;
						width: 100%;
						background-color: #f8f8f8;
						box-shadow: 0 0 0 #ccc;
						position: relative;
						top: 0;
						left: 0;
						>li {
							height: 2rem;
							a {
								line-height: 2rem;
								color: #989898;
								font-size: 0.8rem;
							}
						}
					}
					/*.public-address {
						display: none;
						width: 3.26rem;
						height: 2.2rem;
						background-color: #fff;	
						box-shadow: 0 0.02rem 0.2rem #ccc;
						justify-content: center;
						position: absolute;
						z-index: 9;
						top: 1rem;
						right: 0;
						>div {
							&:first-child{
								display: inline-block;
								width: 54%;
								padding: 0.34rem 0;
							text-align: center;

								img {
									width: 1.1rem;
									height: 1.1rem;
								}
								p {
									line-height: 0.4rem;
									font-size: 0.16rem;
								}
							}
							&:last-child{
								display: inline-block;
								width: 45%;
								padding-top: 0.5rem;
								p {
									font-size: 0.2rem;
									font-weight: bold;
									line-height: 0.5rem;
									&:last-child {
										color: #dd660a;
									}
								}
							}
						}
						
					}*/
					
				}
				
				&.two-stage-nav:hover {
					background-color: #f8f8f8;
					border-top: 0;
					>a,h2 {
						color: #656565;
					}
					.public-address {
						display: none;
					}
				}
				&.active {
					border-top: 0;
					>a,h2 {
						color: #171c61;
					}
				}
			}
			&.openNav {
				display: block;
			}
		}
		.showCode {
			display: block;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.5);
			position: absolute;
			top: 0;
			left: 0;
			z-index: 99;
			.code-wrap{
				width: 14rem;
				background-color: #fff;
				color: #888;
				text-align: center;
				position: absolute;
				top: 5rem;
				left: 50%;
				transform: translateX(-50%);
				.close-btn {
					height: 2rem;
				    text-align: right;
				    line-height: 2rem;
				    padding-right: 0.8rem;
				}
				h3 {
					font-size:1.3rem;
					line-height: 1.5rem;
					font-weight: bold;
				}
				p {
					font-size: 0.4rem;
					line-height: 1rem;
				}
				img {
					width: 9rem;
					height: 9rem;
					margin: 1rem;
				}
				.code-tip {
					margin-bottom: 2rem;
					font-size: 0.8rem;
					color: #000;
				}
			}
			
		}
	}
}
</style>