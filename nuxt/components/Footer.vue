<template>
	<div class="footer">
		<div class="footer-link-wrap">
			<div class="footer-link">
				<h3>真话保险</h3>
				<div @click="toIndex">保险基础知识</div>
				<div @click="toIndex">保险科普观念</div>
				<div @click="toIndex">社会保险</div>
				<div @click="toIndex">年金保险</div>
				<div @click="toIndex">查看更多<span class="iconfont icon-qianjin1"></span></div>
			</div>
			<div class="footer-link">
				<h3>保险咨询</h3>
				<nuxt-link to="/zhenhua">在线课程</nuxt-link>
				<nuxt-link to="/consultation/consulting">咨询业务</nuxt-link>
				<nuxt-link to="/consultation/training">培训业务</nuxt-link>
				<nuxt-link to="/consultation/conference">会议业务</nuxt-link>
				<nuxt-link to="/consultation/project">资格认证</nuxt-link>
			</div>
			<div class="footer-link">
				<h3>南方保险研究院</h3>
				<a href="https://institute.juntaozx.com">研究院介绍</a>
				<a href="https://institute.juntaozx.com/#/information">行业资讯</a>
				<a href="https://institute.juntaozx.com/#/activity">研究院活动</a>
			</div>
			<div class="footer-link">
				<h3>关于我们</h3>
				<nuxt-link to="/about/us/intro">公司介绍</nuxt-link>
				<!-- <nuxt-link to="/about/us/team">公司团队</anuxt-link> -->
				<nuxt-link to="/about/us/recruit">人才招聘</nuxt-link>
				<nuxt-link to="/about/us/contact">联系我们</nuxt-link>
			</div>
			<div class="footer-link">
				<h3>合作伙伴</h3>
				<nuxt-link to="/partner">合作伙伴</nuxt-link>
			</div>
			<div class="footer-msg">
				<h3>联系我们</h3>
				<p>公司地址：广州市海珠区新港西路135号中山大学国家科技园B座806、807</p>
				<p>联系电话：020-80922241联系电话：020-80922241</p>
				<p>邮箱：juntao@juntaozx.com</p>
			</div>
			<div class="footer-link">
				<h3>关注公众号</h3>
				<img src="../assets/images/footer/code.png">
				<p>扫一扫，关注我们</p>
			</div>
		</div>
		<div class="footer-copyright-wrap">
			<p>COPYRIGHT ©2015-2020 版权所有 ©钧韬保险咨询有限公司    未经许可 严禁复制</p>
			<p><a href="http://beian.miit.gov.cn">粤ICP备16093970号-1</a>        ALL RIGHTS RESERVED </p>
		</div>

	</div>
</template>
<script>
export default{
	name:'Footer',
	data() {
		return {

		}
	},
	methods:{
		toIndex() {
			if(this.$route.name == 'Index') {
				document.querySelector(".course-type").scrollIntoView(true);
			} else {
				this.$router.push({name:'Index',params:{toCourse:true}});
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.footer {
	margin-top: 0.55rem;
	background-color: #12223c;
	.footer-link-wrap {
		padding: 0.7rem 2.3rem 0.4rem;
		border-bottom: 0.04rem solid #0d192c;
		display: flex;
		justify-content: space-between;
		.footer-link {
			text-align: center;
			h3 {
				margin-bottom: 0.16rem;
				padding: 0.08rem 0.2rem;
				font-size: 0.24rem;
				font-weight: bold;
				color: #fff;
				border-bottom: 0.02rem solid #fff;
			}
			a,div {
				margin-bottom: 0.08rem;
				display: block;
				font-size: 0.18rem;
				color: #fff;
				.iconfont {
					margin-left: 0.1rem;
					font-size: 0.18rem;
				}
			}
			p {
				margin-top: -0.1rem;
				font-size: 0.16rem;
				color: #fff;
			}
			img {
				width: 1.1rem;
				height: 1.1rem;
				vertical-align: top;
			}
		}
		.footer-msg{
			display: none;
		}
	}
	.footer-copyright-wrap,
	.footer-copyright-wrap a {
		padding: 0.25rem;
		font-size: 0.2rem;
		color: #fff;
		text-align: center;
	}
}
@media screen and (max-width: 1024px) {
.footer {
	margin-top: 1rem;
	.footer-link-wrap {
		padding: 1.2rem 1.5rem 1rem;
		
		.footer-link,
		.footer-msg{
			display: inline-block;
			h3 {
				margin-bottom: 0.1rem;
				padding-bottom: 0.2rem;
				font-size: 0.8rem;
				font-weight: bold;
				color: #fff;
				text-align: center;
				border-bottom: 0.02rem solid #fff;
			}
			p {
				font-size: 0.6rem;
				color: #fff;
			}
		}
		.footer-msg {
			width: 10rem;
		}
		.footer-link {
			display: none;
			img {
				width: 3.3rem;
				height: 3.3rem;
				margin: 0.3rem 0;
			}
			&:last-child{
				display: inline-block;
			}
		}
	}
	.footer-copyright-wrap,
	.footer-copyright-wrap a {
		padding: 0.5rem;
		font-size: 0.5rem;
	}
}
}
</style>