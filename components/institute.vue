<template>
	<div class="institute">
		<div class="institute-item">
			<div class="institute-item-img">
				<img src="~assets/images/institute/institute-logo.png">
			</div>
			<div class="institute-item-text">
				<p>南方保险研究院由国内保险领域一批权威学者共同发起成立，致力于保险及社会保险的知识普及，专注于打造业内权威的保险教育、培训和知识传播平台，为行业提供专业前沿的资讯，成为保险业界的高端智库。</p>
			</div>
		</div>
		<div class="institute-item">
			<div class="institute-item-text">
				<p>研究院顾问既有来自清华大学、复旦大学、南京大学、浙江大学、中山大学、南开大学、武汉大学、西安交通大学、上海财经大学、中央财经大学、中南财经政法大学、西南财经大学等社会保险与商业保险领域的著名高校教授，也有来自大陆及港澳台地区保险行业的资深专家 。</p>
			</div>
			<div class="institute-item-img">
				<img src="~assets/images/institute/institute.png">
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'Institute',
	data() {
		return {

		}
	}
}
</script>
<style lang="scss" scoped>
.institute {
	.institute-item {
		width: 11.8rem;
		height: 4.2rem;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		div {
			display: inline-block;
			width: 5.9rem;
			height: 100%;
			line-height: 4.2rem;
			text-align: center;
			p {
				line-height: 0.5rem;
				font-size: 0.26rem;
				text-align: left;
				color: #fff;
			}
			&.institute-item-text {
				padding: 0.42rem;
				background-color: #d66760;
			}
		}
		&:first-child {
			img {
				width: 2.877rem;
				height: 2.233rem;
			}
		}
		&:last-child {
			img {
				width: 5.9rem;
				height: 4.2rem;
				vertical-align: top;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
.institute {
	.institute-item {
		width: 17.5rem;
		height: auto;
		display: block;
		text-align: center;
		div {
			width: 100%;
			p {
				line-height: 1rem;
				font-size: 0.6rem;
			}
			&.institute-item-text {
				padding: 1rem;
			}
		}
		&:first-child {
			.institute-item-text {
				margin-top: 0.5rem;
				padding-bottom: 0;
			}
			img {
				width: 6.3rem;
				height: 4.9rem;
			}
		}
		&:last-child {
			.institute-item-text {
				padding-top: 0;
			}
			.institute-item-img {
				display: none;
			}
			img {
				width: 8.75rem;
				height: 6.2rem;
			}
		}
	}
}
}
</style>