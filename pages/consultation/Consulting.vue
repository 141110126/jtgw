<template>
	<div class="consulting-business-wrap">
		<h2 class="consulting-business-title">咨询业务</h2>
		<div class="consulting-business">
			<div class="consulting-list-wrap">
				<div class="prev-wrap">
					<span class="iconfont icon-back-copy" :class="{active:prevActive}" @click="prevActive && toPrev()"></span>
				</div>
				<div class="consulting-list">
					<ul :style="{width: ulWidth + 'rem',left: ulLeft + 'rem'}">
						<li v-for="(item,index) in dataList" :key="index" :class="{activeItem:activeIndex == index}" @click="activeIndex = index">
							<img :src="item.thumb">
							<div class="consulting-text">
								<h5>{{item.title}}</h5>
							</div>
							<div class="point"></div>
						</li>
					</ul>
				</div>
				<div class="next-wrap">
					<span class="iconfont icon-qianjin" :class="{active:nextActive}" @click="nextActive && toNext()"></span>
				</div>
			</div>
			<div class="consulting-item-content">
				<p v-html="dataList[activeIndex].content" v-if="dataList.length > 0"></p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'ConsultingBusiness',
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
			dataList:[],
			ulWidth: 0,
			ulLeft: 0,
			prevActive: false,
			nextActive: false,
			activeIndex: 0,
			bigScreen: true //document.body.clientWidth > 1024 ? true : false,
		}
	},
	created() {
		// this.metaData = JSON.parse(sessionStorage.getItem('metaData'));
		this.getData();
		if (process.browser) {
			this.bigScreen = document.body.clientWidth > 1024 ? true : false
		}
	},
	methods: {
		getData() {
			var _this = this;
			_this.axios.get('/api/consbus')
			.then(function(res) {
				console.log(res.data);
				_this.dataList = res.data.data;
				_this.ulWidth = _this.bigScreen?_this.dataList.length * 5.2 : _this.dataList.length * 7.5;
				_this.toggleCourseList();

				for(var i = 0, l = _this.dataList.length; i < l; i ++) {
					_this.metaData.keyword += _this.dataList[i].keyword;
					_this.metaData.desc += _this.dataList[i].desc;
				}
			})
			.catch(function(error) {
				// console.log(error);
				// _this.$router.push('/error');
			})
		},
		toggleCourseList() {
			var width = this.bigScreen? 10.5: 15.2;

			if(this.ulWidth < width) {
				this.prevActive = false;
				this.nextActive = false;
			} else {
				if(Math.abs(this.ulLeft) + width < this.ulWidth) {
					if(this.ulLeft < -(width-5)) {
						console.log(this.ulLeft);
						this.prevActive = true;
						this.nextActive = true;
					} else {
						this.prevActive = false;
						this.nextActive = true;
					}
				} else {
					this.prevActive = true;
					this.nextActive = false;
				}
			}
		},
		toPrev() {
			var width = this.bigScreen? 10.4: 15;
			this.ulLeft += width;
			this.activeIndex -= 2;
			if(this.activeIndex < 0) {
				this.activeIndex += 1;
			}
			this.toggleCourseList();
		},
		toNext() {
			var width = this.bigScreen? 10.4: 15;
			this.ulLeft -= width;
			this.activeIndex += 2;
			if(this.activeIndex > this.dataList.length - 1) {
				this.activeIndex -= 1;
			}
			this.toggleCourseList();
		}
	}
}
</script>
<style lang="scss" scoped>
.consulting-business-wrap {
	text-align: center;
	.consulting-business-title {
		display: none;
	}
	.consulting-business {
		width: 13.24rem;
		margin: 0.6rem auto 0;
		padding: 0.6rem 0.66rem 0.9rem;
		text-align: left;
		font-size: 0.24rem;
		border: 0.02rem solid #dfe0e9;
		box-shadow: 0 0.02rem 0.2rem #dfe0e9;
		.consulting-list-wrap {
			.prev-wrap,
			.next-wrap {
				display: inline-block;
				width: 0.6rem;
				height: 3.35rem;
				line-height: 3.35rem;
				/*background-color: pink;*/
				vertical-align: top;
				span {
					display: inline-block;
					width: 0.6rem;
					height: 0.6rem;
					line-height: 0.54rem;
					text-align: center;
					font-size: 0.4rem;
					font-weight: bold;
					color: #b9bacf;
					border-radius: 50%;
					/*border: 0.05rem solid #b9bacf;*/
					&.active {
						color: #171c61;
						/*border: 0.05rem solid #171c61;*/
					}
				}
				
			}
			.consulting-list {
				display: inline-block;
				width: 10.4rem;
				height: 4rem;
				overflow: hidden;
				position: relative;
				ul {
					width: 100%;
					transition: left 0.5s;
					position: absolute;
					li{
						display: inline-block;
						width: 4.4rem;
						margin: 0 0.4rem;
						position: relative;
						img{
							width: 4.4rem;
							height: 2.45rem;
						}
						.consulting-text {
							height: 0.9rem;
							line-height: 0.9rem;
							text-align: center;
							font-size: 0.24rem;
						}
						.point {
							display: none;
							width: 0;
							border-width: 0.2rem;
							border-style: solid;
							border-color: #dd660a transparent transparent transparent;
							position: absolute;
							left: 50%;
							transform: translateX(-50%);
						}
						&.activeItem {
							border-bottom: 0.06rem solid #dd660a;
							.point {
								display: block;
							}
						}
					}
				}
			}
		}
		.consulting-item-content {
			padding: 0.3rem 1rem;
			overflow: hidden;
			/*h3 {
				margin-bottom: 0.2rem;
				font-size: 0.28rem;
				font-weight: bold;
			}
			p {
				line-height: 150%;
				font-size: 0.24rem;
			}*/
		}
	}
}

@media screen and (max-width:1024px) {
.consulting-business-wrap {
	.consulting-business-title {
		display: inline-block;
		margin-top: 1rem;
		font-size: 0.8rem;
		font-weight: bold;
		color: #171c61;
	}
	.consulting-business {
		width: 18rem;
		.consulting-list-wrap {
			display: flex;
			justify-content: space-between;
			.prev-wrap,
			.next-wrap {
				width: 1rem;
				span {
					font-size: 1rem;
				}
				
			}
			.consulting-list {
				width: 15rem;
				height: 6rem;
				ul {
					width: 100%;
					li{
						width: 6.7rem;
						img{
							width: 100%;
							height: 3.78rem;
						}
						.consulting-text {
							height: 1.5rem;
							line-height: 1.5rem;
							font-size: 0.8rem;
							h5 {
								font-size: 0.7rem;
							}
						}
						.point {
							bottom: -0.45rem;
						}
					}
				}
			}
		}
		.consulting-item-content {
			padding: 0;
		}
	}
}
}
</style>