<template>
	<div class="recruit">
		<ul class="recruit-list" :class="{hideRecruitList: showJobDetail}">
			<li v-for="(item,index) in recruitList" :key="index"  @click="showDetail(index)">
				<div class="recruit-num">{{item.count}}名</div>
				<div class="recruit-job">{{item.name}}</div>
				<div class="recruit-detail">查看详情</div>
			</li>
		</ul>
		<div class="page-wrap" :class="{hidePageWrap: showJobDetail}" v-if="recruitList.length > 0">
			<div class="prev-wrap">
				<span class="iconfont icon-back-copy" :class="{active:prevActive}"  @click="prevActive && toPrev()"></span>
			</div>
			<div class="page-list">
				<ul :style="{width:ulWidth + 'rem'}">
					<li v-for="(item,index) in pageList" :key="'pageList' + index" :class="{active:item == currentPage}" @click="showRecruit(item)">{{item}}</li>
				</ul>
			</div>
			<div class="next-wrap">
				<span class="iconfont icon-qianjin" :class="{active:nextActive}" @click="nextActive && toNext()"></span>
			</div>
		</div>
		<div class="job-detail-wrap" :class="{showJobDetail: showJobDetail}" v-if="recruitList.length > 0">
				<div class="job-detail">
					<div class="close-btn-wrap">
						<span class="iconfont icon-guanbi" @click="closeBtn"></span>
					</div>
					<p>
						<span class="job-title">职位名称：</span>
						<span class="job-text">{{recruitList[detailIndex].name}}</span>
					</p>
					<p>
						<span class="job-title">招聘人数：</span>
						<span class="job-text">{{recruitList[detailIndex].count}}名</span>
					</p>
					<p>
						<span class="job-title">岗位职责：</span>
						<span class="job-text" v-html="recruitList[detailIndex].desc"></span>
					</p>
					<p>
						<span class="job-title">任职资格：</span>
						<span class="job-text" v-html="recruitList[detailIndex].condition"></span>
					</p>
					<p>
						<span class="job-title">简历投递邮箱：</span>
						<span class="job-text job-email">{{recruitList[detailIndex].mail}}</span>
					</p>
				</div>
			</div>
	</div>
</template>
<script>

export default{
	name:'Recruit',
	data() {
		return {
			recruitList:[],
			pageMsg:[],
			pageList:[],
			prevActive:false,
			nextActive:false,
			ulWidth: 0,
			ulLeft: 0,
			showJobDetail:false,
			detailIndex: 0,
			oldPage:1,
			currentPage:1,
			width:document.body.clientWidth > 1024 ? 0.72 : 1.52
		}
	},
	created() {
		this.getRecruitData('/api/recruitments'); 
	},
	methods: {
		getRecruitData(url) {
			var _this = this;
			_this.axios.get(url)
			.then(function(res) {
				console.log(res.data);
				_this.recruitList = res.data.data;
				_this.pageMsg = res.data.meta.pagination;
				_this.currentPage = _this.pageMsg.current_page;
				_this.pageList = new Array(_this.pageMsg.total_pages);
				for(var i = 0; i < _this.pageMsg.total_pages; i++) {
					_this.pageList[i] = i+1;
				}
				_this.ulWidth = _this.pageMsg.total_pages * _this.width;
				_this.togglePageList();
			})
			.catch(function(error) {
				// console.log(error);
				_this.$router.push('/error');
			})
		},
		togglePageList() {
			if(this.pageMsg.links) {
				this.prevActive = this.pageMsg.links.previous ? true : false;
				this.nextActive = this.pageMsg.links.next ? true : false;
			}
		},
		toPrev() {
			if(this.pageMsg.links.previous) {
				this.ulLeft += this.width;
				this.oldPage = this.pageMsg.current_page;
				this.currentPage -= 1;
				this.getRecruitData(this.pageMsg.links.previous);
				this.togglePageList();
			}
		},
		toNext() {
			if(this.pageMsg.links.next) {
				this.ulLeft -= this.width;
				this.oldPage = this.pageMsg.current_page;
				this.currentPage += 1;
				this.getRecruitData(this.pageMsg.links.next);
				this.togglePageList();
			}
		},
		showDetail(index) {
			this.detailIndex = index;
			this.showJobDetail = true;
			
		},
		showRecruit(page) {
			// getRecruitData(url);
		},
		closeBtn() {
			this.showJobDetail = false;
		},
	}
}
</script>
<style lang="scss" scoped>
.recruit {
	.recruit-list {
		min-height: 6.8rem;
		li {
			width: 100%;
			height: 0.68rem;
			padding: 0 0.7rem;
			border-bottom: 0.02rem solid #e5e5e5;
			cursor: pointer;
			div {
				display: inline-block;
				height: 0.68rem;
				line-height: 0.68rem;
				font-size: 0.24rem;
				vertical-align: top;
			}
			.recruit-num {
				width: 1rem;
				color: #dd660a;
			}
			.recruit-job {
				width: 7.6rem;
				margin: 0 0.2rem;
				color: #5e5e5e;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.recruit-detail {
				font-size: 0.18rem;
				color: #3271ff;
			}
		}
	}
	.page-wrap {
		height: 0.9rem;
		line-height: 0.68rem;
		text-align: center;
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
				border-radius: 50%;
				/*border: 0.02rem solid #d5d5d5;*/
				font-size: 0.2rem;
				font-weight: bold;
				color: #d5d5d5;
				/*vertical-align: top;*/
				&.active {
					color: #2d2d2d;
					/*border: 0.02rem solid #2d2d2d;*/
				}
			}
		}
		.page-list {
			display: inline-block;
			width: 1.44rem;
			height: 0.68rem;
			font-size: 0.26rem;
			text-align: left;
			vertical-align: middle;
			overflow: hidden;
			li {
				display: inline-block;
				width: 0.3rem;
				margin: 0 0.2rem;
				color: #989797;
				text-align: center;
				vertical-align: top;
				&.active {
					color: #dd660a;
				}
			}
		}
	}
	.job-detail-wrap {
		display: none;
		width: 100%;
		height: 107%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.3);
		.job-detail {
			width: 10.2rem;
			padding: 0.2rem 0 0.6rem 0.8rem;
			border-radius: 0.2rem;
			background-color: #fff;
			position: absolute;
			top: 0.9rem;
			left: 50%;
			transform: translateX(-50%);
			.close-btn-wrap {
				height: 0.4rem;
				line-height: 0.4rem;
				text-align: right;
				padding-right: 0.4rem;
				margin-bottom: 0.2rem;
				span {
					font-size: 0.22rem;
					color: #868585;
				}
			}
			p {
				margin-bottom: 0.15rem;
				line-height: 0.4rem;
				span {
					vertical-align: top;
				}
				.job-title {
					font-size: 0.24rem;
					color: #dd660a;
				}
				.job-text {
					display: inline-block;
					width: 7rem;
					font-size: 0.22rem;
					color: #5e5e5e;
				}
			}
		}
		&.showJobDetail {
			display: block;
		}
	}
}
@media screen and (max-width: 1024px) {
.recruit {
	.recruit-list {
		min-height: auto;
		li {
			height: 2.5rem;
			div {
				height: 2.5rem;
				line-height: 2.5rem;
				font-size: 0.75rem;
			}
			.recruit-num {
				width: 2.8rem;
			}
			.recruit-job {
				width: 9rem;
			}
			.recruit-detail {
				font-size: 0.75rem;
			}
		}
		&.hideRecruitList {
			display: none;
		}
	}
	.page-wrap {
		height: 2.5rem;
		line-height: 2.5rem;
		.prev-wrap,
		.next-wrap {
			height: 2.5rem;
			line-height: 2.5rem;
			span {
				width: 2.5rem;
				height: 2.5rem;
				line-height: 2.5rem;
				font-size: 0.8rem;
			}
		}
		.page-list {
			width: 2rem;
			height: 2.5rem;
			font-size: 0.8rem;
			li {
				width: 1.5rem;
			}
		}
		&.hidePageWrap {
			display: none;
		}
	}
	.job-detail-wrap {
		/*display: none;
		width: 100%;*/
		height: auto;
		position: static;
		background-color: #fff;
		.job-detail {
			width: 18rem;
			position: static;
			transform: none;
			.close-btn-wrap {
				height: 1.5rem;
				line-height: 1.5rem;
				padding-right: 0.8rem;
				margin-bottom: 0.6rem;
				span {
					font-size: 0.8rem;
				}
			}
			p {
				margin-bottom: 0.2rem;
				line-height: 1rem;
				.job-title {
					font-size: 0.7rem;
				}
				.job-text {
					width: 12.5rem;
					font-size: 0.7rem;
				}
				.job-email {
					width: 11rem;
				}
			}
		}
	}
}	
}
</style>

