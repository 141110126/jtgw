<template>
	<div class="insurance">
		<Header name="insuranceZhenhua"></Header>
		<div class="banner">
			<img src="../assets/images/zhenhua/banner.png">
			<div>
				<h1>真话保险</h1>
				<p>三分钟保险知识系列</p>
				<p>钧韬保险咨询联合南方保险研究院共同出品</p>
				<p>新一代H5视听动画，生动有趣、简单易学</p>
				<p>帮您快速成为保险专家</p>
			</div>
		</div>
		<div class="text">
			<img class="text-img1" src="../assets/images/zhenhua/zhenhua1.jpg">
			<img class="text-img2" src="../assets/images/zhenhua/zhenhua2.jpg">
			<img class="text-img3" src="../assets/images/zhenhua/zhenhua3.jpg">
			<img class="text-img4" src="../assets/images/zhenhua/zhenhua4.jpg">
			<div>
				<p>健康保险</p>
				<p>年金保险</p>
				<p>社会保险</p>
				<p>保险理财</p>
				<p>保险理念</p>
				<p>保险基础知识</p>
				<p>海量保险知识，全方位覆盖</p>
			</div>
		</div>
		<div class="video">
			<div>
				<p>专业、客观、中立，</p>
				<p>不夸大、不片面、不误导，</p>
				<p>传播最纯正的保险知识，</p>
				<p>还原最真实的保险原理，</p>
				<p>让每个人都能懂保险、爱保险</p>
			</div>
			<video v-if="videoUrl != ''" controls>
				<source :src="videoUrl" type="video/mp4">
				您的浏览器不支持 video 标签。
			</video>	
		</div>
		<div class="course">
			<h2>在线课程</h2>
			<p>三分钟学懂保险，保险学习和展业的革命</p>
			<div class="course-content">
				<ul class="course-nav">
					<li :class="{active:activeCourseTypeIndex == index}" v-for="(item,index) in courseType" :key="index" @click="toCourseList(index,item.id)">{{item.name}}</li>
				</ul>
				<ul class="course-list">
					<li v-for="(courseItem,courseIndex) in courselist" :key="courseIndex" @click="showCourse(courseItem.id)"> 
						<img :src="courseItem.thumb">
						<h3>{{courseItem.name}}</h3>
					</li>
				</ul>
				<div class="course-page">
					<div class="prev-wrap">
						<span class="iconfont icon-back-copy" :class="{active:prevActive}"  @click="prevActive && toPrev()"></span>
					</div>
					<div class="first-page" :class="{unActive:!prevActive}" @click="toFirstPage">首页</div>
					<div class="prev-btn" :class="{unActive:!prevActive}"   @click="prevActive && toPrev()">上一页</div>
					<ul class="page-content">
						<li :class="{active: pagination.current_page == pageItem}" v-for="(pageItem,pageIndex) in pageList" @click="toPage(pageItem)">{{pageItem}}</li>
					</ul>
					<div class="next-wrap">
						<span class="iconfont icon-qianjin" :class="{active:nextActive}" @click="nextActive && toNext()"></span>
					</div>
					<div class="next-btn" :class="{unActive:!nextActive}"  @click="nextActive && toNext()">下一页</div>
					<div class="last-page" :class="{unActive:!nextActive}" @click="toLastPage">末页</div>
				</div>
			</div>
		</div>
		<div class="course-detail-wrap" v-show="showCourseDetail">
			<div class="course-detail">
				<div class="close-btn">
					<span class="iconfont icon-guanbi" @click="hideCourse"></span>
				</div>
				<img :src="courseDetail.thumb">
				<h2>{{courseDetail.name}}</h2>
				<h3>【课程介绍】</h3>
				<div class="course-detail-content" v-html="courseDetail.content"></div>
				<p>扫码马上进入了解</p>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default{
	name:'InsuranceZhenhua',
	components: {
		Header,
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
			videoUrl:'',
			courseType:[],
			activeCourseTypeIndex: 0,
			activeCourseTypeId: 0,
			courselist: [],
			pagination: {},
			pageList:[],
			currentPage:0,
			prevActive:false,
			nextActive: false,
			showCourseDetail:false,
			courseDetail:{}
		}
	},
	created() {
		this.metaData = JSON.parse(sessionStorage.getItem('metaData'));
		this.getVedio();
		this.getCourseType();
	},
	methods: {
		getVedio() {
			var _this = this;
			_this.axios.get('/api/coursevideos')
			.then(function(res) {
				//console.log(res.data);
				_this.videoUrl = res.data.url;
			})
			.catch(function(error) {
				//console.log(error);
				_this.$router.push('/error');			
			})
		},
		getCourseType() {
			var _this = this;
			_this.axios.get('/api/coursecates')
			.then(function(res) {
				console.log(res.data);
				_this.courseType = res.data.data;
				_this.activeCourseTypeId = res.data.data[0].id;
				_this.getCourseList('/api/courselists/' + _this.activeCourseTypeId);
			})
			.catch(function(error) {
				//console.log(error);
				_this.$router.push('/error');				
			})
		},
		getCourseList(url) {
			var _this = this;
			_this.axios.get(url)
			.then(function(res) {
				//console.log(res.data);
				_this.courselist = res.data.data;
				_this.pagination = res.data.meta.pagination;
				_this.pageList = new Array(_this.pagination.total_pages);
				_this.currentPage = _this.pagination.current_page;
				for(var i = 0; i < _this.pagination.total_pages; i++) {
					_this.pageList[i] = i+1;
				}
				if(_this.pagination.links) {
					_this.prevActive = _this.pagination.links.previous ? true : false;
					_this.nextActive = _this.pagination.links.next ? true : false;
				} else {
					_this.prevActive = false;
					_this.nextActive = false;
				}
			})
			.catch(function(error) {
				//console.log(error);
				_this.$router.push('/error');
			})
		},
		toCourseList(index,id) {
			this.activeCourseTypeIndex = index;
			this.activeCourseTypeId = id;
			this.getCourseList('/api/courselists/' + this.activeCourseTypeId);
		},
		toPrev() {
			this.getCourseList(this.pagination.links.previous);
		},
		toNext() {
			this.getCourseList(this.pagination.links.next);
		},
		toFirstPage() {
			var firstPageUrl = '/api/courselists/' + this.activeCourseTypeId + '?page=1';
			this.getCourseList(firstPageUrl);
		},
		toLastPage() {
			var lastPageUrl = '/api/courselists/' + this.activeCourseTypeId + '?page=' + this.pageList.length;
			this.getCourseList(lastPageUrl);
		},
		showCourse(id) {
			var _this = this;
			_this.showCourseDetail = true;
			_this.axios.get('/api/courses/' + id)
			.then(function(res) {
				//console.log(res.data);
				_this.courseDetail = res.data;
				
			})
			.catch(function(error) {
				//console.log(error);
				_this.$router.push('/error');
			})
		},
		hideCourse() {
			this.showCourseDetail = false;
		},
		toPage(pageItem) {
			var url = '/api/courselists/' + this.activeCourseTypeId + '?page=' + pageItem;
			this.getCourseList(url);
		}
	}
}
</script>
<style lang="scss" scoped>
.insurance {
	position: relative;
}
.banner {
	width: 100%;
	padding: 0.1rem 3rem;
	background-color: #f2795c;
	img {
		width: 4.65rem;
		height: 7.5rem;
		vertical-align: top;
	}
	div {
		display: inline-block;
		margin-left: 1rem;
		padding-top: 0.3rem;
		h1 {
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
			font-size: 0.7rem;
			font-weight: bold;
			color: #fff;
			text-align: center;
		}
		p {
			line-height: 0.7rem;
			font-size: 0.36rem;
			color: #fff;
			text-align: center;
		}
	}
}
.text {
	height: 8.2rem;
	background-color: #fff;
	padding-top: 1.8rem;
	position: relative;
	img {
		width: 2.7rem;
		position: absolute;
	}
	.text-img1 {
		top: 3rem;
		left: 3rem;
		z-index: 1;
	}
	.text-img2 {
		top: 0.5rem;
		left: 4rem;
	}
	.text-img3 {
		top: 2rem;
		left: 6rem;
	}
	.text-img4 {
		top: 1rem;
		left: 8rem;
		z-index: 1;
	}
	div {
		display: inline-block;
		margin-left: 12rem;
		p {
			line-height: 0.7rem;
			font-size: 0.36rem;
			color: #f2795c;
			text-align: center;
		}
	}
	
}
.video {
	padding: 0.5rem;
	background-color: #f2795c;
	color: #fff;
	text-align: center;
	div {
		display: inline-block;
		margin-right: 1rem;
		vertical-align: middle;
		p {
			font-size: 0.36rem;
			line-height: 0.7rem;
		}
	}
	
	video {
		width: 6rem;
		height: 5.3rem;
		vertical-align: middle;
	}
}
.course {
	padding: 1.3rem 1rem 0.4rem;
	text-align: center;
	h2 {
		font-size: 0.48rem;
		font-weight: bold;
		color: #f2795c;
	}
	p {
		margin: 0.4rem 0 0.6rem;
		font-size: 0.36rem;
		color: rgba(242,121,92,0.8);
	}
	.course-content {
		border-top: 0.02rem solid #f2795c;
		.course-nav {
			width: 100%;
			margin: 0.4rem 0;
			display: flex;
			justify-content: space-between;
			li {
				display: inline-block;
				padding: 0 0.2rem;
				font-size: 0.24rem;
				border: 0.03rem solid transparent;
				cursor: pointer;
				&.active {
					color: #f2795c;
					border: 0.03rem solid #f2795c;
				}
			}
		}
		.course-list {
			li {
				display: inline-block;
				width: 3rem;
				height: 2.9rem;
				margin: 0.25rem 0.3rem;
				border: 0.02rem solid #eee;
				box-shadow: 0 0.02rem 0.2rem #eee;
				vertical-align: top;
				cursor: pointer;
				img {
					width: 100%;
					height: 1.68rem;
				}
				h3 {
					padding: 0.1rem 0.05rem 0 0.1rem;
					font-size: 0.22rem;
					text-align: left;
				}
				.hits {
					padding: 0 0.2rem;
					text-align: right;
					font-size: 0.18rem;
					color: #8a8a8a;
				}
				&:hover {
					opacity: 0.9;
				}
			}
		}
		.course-page {
			.prev-wrap,
			.next-wrap {
				display: inline-block;
				height: 0.68rem;
				line-height: 0.68rem;
				span {
					display: inline-block;
					width: 0.3rem;
					height: 0.3rem;
					line-height: 0.3rem;
					font-size: 0.2rem;
					font-weight: bold;
					color: #d5d5d5;
					&.active {
						color: #2d2d2d;
					}
				}
			}
			.first-page,
			.last-page,
			.prev-btn,
			.next-btn {
				display: none;
			}
			.page-content {
				display: inline-block;
				height: 0.68rem;
				li {
					display: inline-block;
					width: 0.68rem;
					height: 0.68rem;
					line-height: 0.68rem;
					color: #989797;
					font-size: 0.24rem;
					vertical-align: middle;
					&.active {
						color: #f2795c;
					}
				}
			}
		}
	}
}
.course-detail-wrap {
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;
	.course-detail{
		width: 12.4rem;
		padding: 0.5rem;
		background-color: #fff;
		border-radius: 0.2rem;
		position: absolute;
		bottom: 6rem;
		left: 50%;
		transform: translateX(-50%);
		.close-btn {
			text-align: right;
			padding: 0.3rem 0.5rem;
			font-size: 0.3rem;
			color: #656565;
			position: absolute;
			top: 0;
			right: 0;
		}
		img {
			width: 3.42rem;
			height: 1.95rem;
		}
		h2 {
			display: inline-block;
			width: 7rem;
			font-size: 0.36rem;
			font-weight: bold;
			color: #171c61;
		}
		h3 {
			margin: 0.4rem 0 0.2rem;
			font-size: 0.3rem;
			font-weight: bold;
		}
		.course-detail-content{
			font-size: 0.24rem;
			color: #656565;
			img {
				width: 1.9rem;
				height: 1.9rem;
				/*margin: 0.1rem;*/
			}
		}
		p {
			font-size: 0.24rem;
			color: #656565;
		}
	}
}
@media screen and (max-width: 1024px) {
.banner {
	padding: 0.1rem 0.5rem;
	text-align: center;
	div {
		margin-left: 0;
		h1 {
			font-size: 1rem;
		}
		p {
			line-height: 1rem;
			font-size: 0.6rem;
		}
	}
}
.text {
	padding-top: 1.2rem;
	text-align: center;
	.text-img1 {
		left: 1rem;
	}
	.text-img2 {
		left: 2.5rem;
	}
	.text-img3 {
		left: 5rem;
	}
	.text-img4 {
		left: 7rem;
	}
	div {
		margin-left: 10.5rem;
		p {
			line-height: 0.85rem;
			font-size: 0.6rem;
		}
	}
	
}
.video {
	padding: 1rem;
	div {
		p {
			font-size: 0.6rem;
			line-height: 1rem;
		}
	}
	
	video {
		width: 17rem;
		height: 16rem;
	}
}
.course {
	h2 {
		font-size: 0.8rem;
	}
	p {
		font-size: 0.6rem;
	}
	.course-content {
		.course-nav {
			display: block;
			li {
				width: 5rem;
				font-size: 0.7rem;
				padding: 0.3rem;
				&.active {
					color: #f2795c;
					border: 0.03rem solid #f2795c;
				}
			}
		}
		.course-list {
			li {
				width: 8rem;
				height: 7.3rem;
				img {
					height: 4.5rem;
				}
				h3 {
					font-size: 0.6rem;
				}
			}
		}
		.course-page {
			margin-top: 1rem;
			.prev-wrap,
			.next-wrap {
				display: none;
			}
			.first-page,
			.last-page,
			.prev-btn,
			.next-btn {
				display: inline-block;
				height: 1.2rem;
				line-height: 1.2rem;
				margin: 0 0.1rem;
				padding: 0 0.3rem;
				font-size: 0.6rem;
				color: #656565;
				border: 0.05rem solid #ebe8e7;
				border-radius: 0.3rem;
				&.unActive {
					color: #ccc;
				}
			}
			.page-content {
				height: 0.68rem;
				li {
					width: 1.2rem;
					height: 1.2rem;
					margin: 0 0.1rem;
					line-height: 1.2rem;
					border: 0.05rem solid #ebe8e7;
					border-radius: 0.3rem;
					font-size: 0.6rem;
					font-weight: bold;
					color: #656565;
					&.active {
						border: 0.05rem solid #f2795c;
					}
				}
			}
		}
	}
}
.course-detail-wrap {
	.course-detail{
		width: 18rem;
		padding: 1.5rem;
		border-radius: 1rem;
		bottom: 15rem;
		text-align: center;
		.close-btn {
			text-align: right;
			padding: 1rem 1rem 0 0;
			span {
				font-size: 1rem;
			}
		}
		img {
			width: 13rem;
			height: 7.4rem;
			margin-top: 1rem;
		}
		h2 {
			display:block;
			width: auto;
			margin-top: 0.5rem;
			font-size: 0.8rem;
			text-align: center;
		}
		h3 {
			font-size: 0.7rem;
		}
		.course-detail-content{
			font-size: 0.7rem;
			text-align: left;
		}
		p {
			font-size: 0.6rem;
			text-align: left;
		}
	}
}
}
</style>