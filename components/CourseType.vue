<template>
	<div id="courseType" class="course-type" v-if="dataList.length > 0">
		<div class="course-type-wrap">
			<ul>
				<template v-for="(item,index) in dataList">
					<li @click="select(index)" :class="{active:courseTypeIndex == index,rightItem:(index + 1) % 3 == 0}">
						<div class="course-type-item">
							<img :src="item.cover">
							<p>{{item.name}}</p>
						</div>
					</li>
				</template>
			</ul>
			<div class="point-sign">
				<div></div>
			</div>
		</div>
		<div class="course-list">
			<div class="course-type-title">
				<hr>
				<div>
					<img :src="cover">
					<h2>{{name}}课程</h2>
				</div>
				<hr>
			</div>
			<div class="course-wrap">
				<div class="to-prev-wrap"> 
					<div class="to-prev" :class="{active: prevActive}" @click="prevActive && toPrev()">
						<span class="iconfont icon-back-copy"></span>
					</div>
				</div>
				<div class="course-list-wrap" ref="courseListUlWrap">
					<!-- <ul ref="courseListUl" :style="{left:ulLeft + 'rem'}">
						<template v-for="item in courses" >
							<li  @click="showCourse(item.id)">
								<img :src="item.thumb">
								<h3>{{item.name}}</h3>
							</li>
						</template>
					</ul> -->
					<ul>
						<template v-for="item in activeCourse" >
							<li  @click="showCourse(item.id)">
								<img :src="item.thumb">
								<h3>{{item.name}}</h3>
							</li>
						</template>
					</ul>
				</div>
				<div class="to-next-wrap">
					<div class="to-next" :class="{active:nextActive}" @click="nextActive && toNext()">
						<span class="iconfont icon-qianjin"></span>
					</div>
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
	</div>
</template>
<script>
export default{
	name:'CourseType',
	props:['dataList'],
	data() {
		return {
			courseTypeIndex: 0,
			cover: '',
			name: '',
			courses:[],
			ulLeft : 0,
			prevActive:false,
			nextActive:false,
			ulWidth: 0,
			showCourseDetail:false,
			courseDetail:{},
			firstCourseIndex:0,
			activeCourse:[],
			screenWidth: document.body.clientWidth,
		}
	},
	mounted() {
		this.courseListUpdate();
		//跳转到指定位置
		if(this.$route.params.toCourse) {
			document.querySelector(".course-type").scrollIntoView(true);
		}
	},
	watch:{
		dataList() {
			this.courseListUpdate();
		},
		courseTypeIndex() {
			this.courseListUpdate();
		},
		firstCourseIndex() {
			if(this.screenWidth > 1024) {
				this.activeCourse = this.courses.slice(this.firstCourseIndex,this.firstCourseIndex + 6);
			} else {
				this.activeCourse = this.courses.slice(this.firstCourseIndex,this.firstCourseIndex + 4);
			}
		},
	},
	methods:{
		courseListUpdate() {
			this.cover = this.dataList[this.courseTypeIndex].cover;
			this.name = this.dataList[this.courseTypeIndex].name;
			this.courses = this.dataList[this.courseTypeIndex].courses;
			// this.ulWidth = this.dataList[this.courseTypeIndex].courses.length * 2.38;
			// this.$refs.courseListUl.style.width = this.ulWidth + 'rem';
			// this.ulLeft = 0;

			this.firstCourseIndex = 0;
			this.activeCourse = this.screenWidth > 1024 ? this.courses.slice(this.firstCourseIndex,6) : this.courses.slice(this.firstCourseIndex,4);
			this.toggleCourseList();

		},
		toggleCourseList() {
			this.prevActive = this.firstCourseIndex <= 0 ? false : true;
			if(this.screenWidth > 1024) {
				this.nextActive = this.firstCourseIndex + 6 < this.courses.length ? true : false;
			} else {
				this.nextActive = this.firstCourseIndex + 4 < this.courses.length ? true : false;
			}
			
			// if(this.ulWidth < 14.6) {
			// 	this.prevActive = false;
			// 	this.nextActive = false;
			// } else {
			// 	if(Math.abs(this.ulLeft) + 14.6 < this.ulWidth) {
			// 		if(this.ulLeft < -14) {
			// 			this.prevActive = true;
			// 			this.nextActive = true;
			// 		} else {
			// 			this.prevActive = false;
			// 			this.nextActive = true;
			// 		}
			// 	} else {
			// 		this.prevActive = true;
			// 		this.nextActive = false;
			// 	}
			// }
		},
		select(index) {
			this.courseTypeIndex = index;
		},
		// toPrev() {
		// 	this.ulLeft += 14.28;
		// 	this.toggleCourseList();
		// },
		// toNext() {
		// 	this.ulLeft -= 14.28;
		// 	this.toggleCourseList();
		// },
		toPrev() {
			if(this.screenWidth > 1024) {
				this.firstCourseIndex -= 6;
			} else {
				this.firstCourseIndex -= 4;
			}
			this.toggleCourseList();
		},
		toNext() {
			if(this.screenWidth > 1024) {
				this.firstCourseIndex += 6;
			} else {
				this.firstCourseIndex += 4;
			}
			this.toggleCourseList();
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
		}
	}
}
</script>
<style lang="scss" scoped>
$gray-border:  0.01rem solid #ecedf2;
.course-type-wrap {
	width: 12rem;
	height: 3.6rem;
	margin: 0 auto;
	border: 0.05rem solid #ecedf2;
	border-radius: 0.2rem;
	position: relative;
	ul {
		width: 100%;
		height: 3.6rem;
		li {
			display: inline-block;
			width: 2.38rem;
			height: 1.78rem;
			text-align: center;
			border-bottom: $gray-border;
			cursor: pointer;
			.course-type-item {
				display: inline-block;
				width: 100%;
				height: 1.46rem;
				margin-top: 0.15rem;
				padding-top: 0.2rem;
				border-right: $gray-border;
				img {
					width: auto;
					height: 0.5rem;
					vertical-align: top;
				}
				p {
					margin-top: -0.7rem;
					font-size: 0.24rem;
					font-weight: bold;
				}
				&:hover {
					text-decoration: none;
					color: black;
				}
			}
			&:last-child a {
				border-right:0;
			}
			&.active {
				background-color: #ecedf2;
			}
		}
		/*&:first-child {
			.course-type-item {
				margin-top: 0.55rem;
			}
			li:last-child .course-type-item {
				border-right: 0;
			}
		}
		&:nth-child(2) {
			border: 0;
			.course-type-item {
				margin-top: 0.2rem;
				padding-top: 0.3rem;
			}
		}*/
	}
	.point-sign {
		width: 0;
		margin: 0 auto;
		border-width: 0.25rem;
		border-style: solid;
		border-color: #ecedf2 transparent transparent transparent;
		position: absolute;
		bottom: -0.5rem;
		left: 50%;
		transform: translateX(-50%);
		div {
			border-width: 0.14rem;
			border-style: solid;
			border-color: #fff transparent transparent transparent;
			position: absolute;
			top: -0.248rem;
			left: -0.14rem;
		}
	}
			
}
.course-list {
	.course-type-title {
		width: 12rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		hr,img,h2,div {
			display: inline-block;
		}
		hr {
			width: 4rem;
			height: 0.04rem;
			margin: 0;
			background-color: #e7e8ef;
			border: 0;
		}
		div {
			width: 3rem;
			text-align: center;
			vertical-align: middle;
			img {
				height: 0.41rem;
				margin-left: 0.15rem;
			}
			h2 {
				margin-right: 0.15rem;
				font-size: 0.24rem;
				font-weight: bold;
				color: #171c61;
				vertical-align: middle;
			}
		}

	}
	.course-wrap {
		margin-bottom: 0.44rem;
		display: flex;
		justify-content: center;
		.to-prev-wrap,
		.to-next-wrap {
			display: inline-block;
			width: 2.48rem;
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;

		}
		.to-prev,.to-next {
			display: inline-block;
			width: 0.8rem;
			height: 0.8rem;
			line-height: 0.8rem;
			text-align: center;
			border-radius: 50%;
			/*border: 0.08rem solid #b9bacf;*/
			span {
				display: inline-block;
    			margin-top: -0.4rem;
				font-size: 0.5rem;
				font-weight: bold;
				color: #b9bacf;
			}
			&.active {
				/*border: 0.08rem solid #5c6090;*/
				span {
					color: #5c6090;
				}
			}
		}
		
		.to-next {
			span {
				font-size: 0.54rem;
			}
		}
		.course-list-wrap {
			display: inline-block;
			width: 12rem;
			overflow: hidden;
			/*ul {
				width: 100%;
				text-align: left;
				transition: left 0.5s;
				li {
					display: inline-block;
					width: 1.82rem;
					height: 2rem;
					margin: 0 0.09rem;
					padding: 0.04rem;
					border: 0.02rem solid #f8f8f8;
					box-shadow: 0 0.015rem 0.1rem #d6d7e3;
					overflow: hidden;
					cursor: pointer;
					img {
						width: 1.82rem;
						height: 1rem;
						vertical-align: top;
					}
					h3 {
						height: 0.9rem;
						margin-top: -0.25rem;
						font-size: 0.15rem;
					}
				}
			}*/
			ul {
				width: 100%;
				text-align: left;
				li {
					display: inline-block;
					width: 1.86rem;
					height: 2rem;
					margin: 0 0.07rem;
					border: 0.02rem solid #f8f8f8;
					box-shadow: 0 0.015rem 0.1rem #d6d7e3;
					cursor: pointer;
					vertical-align: top;
					overflow: hidden;
					img {
						width: 1.8rem;
						height: 1rem;
						vertical-align: top;
						display: block;
					}
					h3 {
						margin: 0.05rem;
						font-size: 0.15rem;
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
	.course-detail{
		width: 12.4rem;
		padding: 0.6rem;
		background-color: #fff;
		border-radius: 0.2rem;
		position: absolute;
		top: 7rem;
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
	.course-type-wrap {
		width: 17.502rem;
		height: 12.1rem;
		ul {
			height: 100%;
			li {
				width: 5.78rem;
				height: 4rem;
				.course-type-item {
					height: 2.4rem;
					margin-top: 0.8rem;
					img {
						height: 1.4rem;
					}
					p {
						margin-top: 0.2rem;
						font-size: 0.6rem;
					}
				}
				&.rightItem {
					.course-type-item {
						border-right: 0;
					}
				}
			}
		}
		.point-sign {
			border-width: 0.5rem;
			bottom: -1rem;
			div {
				border-width: .37rem;
			    top: -.56rem;
			    left: -.38rem;
			}
		}		
	}
	.course-list {
		margin-top: 0.5rem;
		.course-type-title {
			width: 17.5rem;
			margin-bottom: 0.5rem;
			hr {
				width: 4rem;
				height: 0.06rem;
			}
			div {
				width: 8rem;
				img {
					height: 1.2rem;
				}
				h2 {
					font-size: 0.7rem;
				}
			}
		}
		.course-wrap {
			.to-prev-wrap,
			.to-next-wrap {
				margin-top: 2.5rem;
			}
			.to-prev,.to-next {
				span {
					font-size: 1rem;
				}
			}
			.course-list-wrap {
				width: 14.5rem;
				ul {
					li {
						width: 6.6rem;
						height: 7.5rem;
						margin: 0.1rem 0.24rem 0.5rem;
						img {
							width: 100%;
							height: 3.6rem;
						}
						h3 {
							padding: 0.4rem 0.2rem;
							font-size: 0.6rem;
						}
					}
				}
			}
		}
	}
	.course-detail-wrap {
		.course-detail{
			width: 18rem;
			padding: 1rem;
			padding: 1.5rem;
			top: 15rem;
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
				text-align: left;
			}
			h3 {
				font-size: 0.7rem;
			}
			.course-detail-content{
				font-size: 0.7rem;
				text-align: left;
				/*p,span {
					font-size: 0.5rem !important;
				}*/
			}
			p {
				font-size: 0.6rem;
				text-align: left;
			}
		}
	}
}
</style>