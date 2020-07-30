<template>
	<div class="intro">
		<div class="intro-title">
			<div class="intro-title-item">
				<p>2016.01</p>
				<p>创立</p>
			</div>
			<div class="intro-title-item">
				<p>500万元</p>
				<p>注册资本（人民币）</p>
			</div>
			<div class="intro-title-item">
				<p>超过80%</p>
				<p>硕士、博士</p>
			</div>
		</div>
		<div class="intro-text">
			<p>钧韬保险咨询有限公司于2016年1月创立于中山大学国家科技园，注册资本500万元人民币，依托南方保险研究院及众多名牌高校的雄厚资源与研究实力，致力于打造一个创新型的保险服务生态圈，成为中国现代保险教育培训与咨询行业的先行者和引领者。</p>
			<p>钧韬保险咨询有限公司拥有业内顶尖研究团队，其中拥有博士、硕士学位者超过80%，集项目咨询、培训业务、会议业务、行业研究、认证评级、资讯平台等业务为一体，为保险公司、保险中介机构、保险消费者、相关政府部门等机构提供专业的风险管理与保险咨询服务。</p>
		</div>
	</div>
</template>
<script>
export default{
	name:'Intro',
	data() {
		return {
		}
	},
}
</script>
<style lang="scss" scoped>
.intro {
	.intro-title {
		border-bottom: 0.02rem solid #eeeeee;
		display: flex;
		justify-content: space-around;
		.intro-title-item {
			width: 4rem;
			padding: 0.15rem 0;
			border-right: 0.02rem solid #eeeeee;
			p {
				text-align: center;
				color: #dd660a;
				&:first-child {
					font-size: 0.36rem;
					font-weight: bold;
				}
				&:last-child {
					font-size: 0.2rem;
				}
			}
			&:last-child {
				border: 0;
			}
		}
	}
	.intro-text {
		padding: 0.6rem;
		font-size: 0.24rem;
		color: #5e5e5e;
		text-indent: 0.5rem;
		line-height: 0.5rem;
	}
}
@media screen and (max-width: 1024px) {
.intro {
	.intro-title {
		/*border-bottom: 0.02rem solid #eeeeee;
		display: flex;
		justify-content: space-around;*/
		.intro-title-item {
			width: 6rem;
			padding: 0.3rem 0;
			p {
				&:first-child {
					font-size: 0.8rem;
				}
				&:last-child {
					font-size: 0.4rem;
				}
			}
		}
	}
	.intro-text {
		padding: 1rem 1rem 2rem;
		font-size: 0.6rem;
		line-height: 1rem;
	}
}
}
</style>