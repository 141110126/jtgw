<template>
	<div class="partner">
		<Header name="partner"></Header>
		<TopImg></TopImg>
		<div class="partner_header">
			<h2>部分合作企业及机构</h2>
			<div class="header_line"></div>
		</div>
		<div class="partner_list">
			<div class="partner_item"  v-for="(item,index) in partnerList" :key="index">
				<img :src="item">
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Header from '~/components/Header'
import TopImg from '~/components/TopImg'
import Footer from '~/components/Footer'

export default {
	name:'Partner',
	components: {
		Header,
		TopImg,
		Footer,
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
			partnerList:[
				'/images/partner/partner1.jpg',
				'/images/partner/partner2.jpg',
				'/images/partner/partner3.jpg',
				'/images/partner/partner4.jpg',
				'/images/partner/partner5.jpg',
				'/images/partner/partner6.jpg',
				'/images/partner/partner7.jpg',
				'/images/partner/partner8.jpg',
				'/images/partner/partner9.jpg',
				'/images/partner/partner10.jpg',
				'/images/partner/partner11.jpg',
				'/images/partner/partner12.jpg',
			]
		}
	},
	created() {
		// this.metaData = JSON.parse(sessionStorage.getItem('metaData'));
	}
}
</script>
<style lang="scss" scoped>
.partner {
	.partner_header {
		padding: 1rem 0 0;
		text-align: center;
		h2 {
			font-size: 0.4rem;
			font-weight: bold;
			color: #f2795c;
		}
		.header_line {
			display: inline-block;
			width: 1.5rem;
			height: 0.08rem;
			margin: 0.2rem auto;
			background-color: #f2795c;
			vertical-align: top;
		}
	}
	.partner_list {
		width: 15rem;
		margin: 0 auto;
		.partner_item {
			display: inline-block;
			width: 3.3rem;
			height: 2rem;
			line-height: 1.7rem;
			margin: 0 0.2rem 0.4rem;
			text-align: center;
			border: 0.02rem solid #ccc;
			vertical-align: top;
			img {
				max-width: 2.5rem;
				max-height: 1.8rem;
			}
			&:nth-child(9) {
				img {
					max-width: 1.8rem;
				}
			}
		}
	}
}
@media screen and (max-width: 1024px) {
.partner {
	.partner_header {
		/*padding: 1rem 0 0;
		text-align: center;*/
		h2 {
			font-size: 0.8rem;
		}
		.header_line {
			width: 3rem;
		}
	}
	.partner_list {
		width: 18rem;
		.partner_item {
			width: 5.6rem;
			height: 3.2rem;
			line-height: 3rem;
			img {
				max-width: 4rem;
				max-height: 2.8rem;
			}
			&:nth-child(9) {
				img {
					max-width: 2.8rem;
				}
			}
		}
	}
}
}
</style>