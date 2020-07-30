<template>
	<div class="index" v-if="hasData">
		<Header name="index"></Header>
		<Banner :dataList="banners"></Banner>
		<Title name="在线课程"></Title>
		<CourseType :dataList="courseCategory"></CourseType>
		<Title name="咨询业务"></Title>
		<Consult :dataList="consbus"></Consult>
		<Title name="培训业务"></Title>
		<Train :dataList="trabus"></Train>
		<Title name="研究院"></Title>
		<Institute></Institute>
		<Footer></Footer>
	</div>
</template>
<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import Title from '../components/Title'
import CourseType from '../components/CourseType'
import Consult from '../components/Consult'
import Train from '../components/Train'
import Institute from '../components/Institute'
import Footer from '../components/Footer'
import { log } from 'util';
// import axios from 'axios'
export default{
	name:'Index',
	components: {
		Header,
		Banner,
		Title,
		CourseType,
		Consult,
		Train,
		Institute,
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
			// metaData: {},
			hasData:false,
			banners:[],
			courseCategory: [],//在线课程
			consbus:[], //咨询业务
			trabus:[], //培训业务
			courseList: {},
		}
	},
	created() {
		// this.metaData = JSON.parse(sessionStorage.getItem('metaData'));
		this.getIndexData();
	},
	methods: {
		getIndexData() {
			var _this = this;
			console.log(15973)
			console.log(_this.axios)
			_this.axios.get('/api/index')
			.then(function(res) {
				console.log(res.data);
				_this.hasData = true;
				_this.banners = res.data.banners;
				_this.courseCategory = res.data.courseCategory;
				_this.courseList = _this.courseCategory[0];
				_this.consbus = res.data.consbus;
				_this.trabus = res.data.trabus;
			})
			.catch(function(error) {
				console.log(error)
				_this.$router.push('/error');
			})
		},
	},
	mounted() {
		console.log(this);   
	}
}
</script>
<style scoped>
.index {
	position: relative;
}	
</style>