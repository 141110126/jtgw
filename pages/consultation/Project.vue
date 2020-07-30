<template>
	<div class="project-rating-wrap">
		<h2 class="project-rating-title">会议业务</h2>
		<div class="project-rating">
			<div class="rating-item " :class="{floatLeft:index%2 == 0,floatRight:index%2 == 1}" v-for="(item,index) in ratingList" :key="index">
				<!-- <img :src="item.thumb"> -->
				<div class="rating-item-content">
					<!-- <h2>{{item.title}}</h2>  -->
					<p v-html="item.content"></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'ProjectRating',
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
			ratingList:[]
		}
	},
	created() {
		// this.metaData = JSON.parse(sessionStorage.getItem('metaData'));
		this.getData();
	},
	methods: {
		getData() {
			var _this = this;
			_this.axios.get('/api/prorats')
			.then(function(res) {
				// console.log(res.data);
				_this.ratingList = res.data.data;
				for(var i = 0, l = _this.ratingList.length; i < l; i ++) {
					_this.metaData.keyword += _this.ratingList[i].keyword;
					_this.metaData.desc += _this.ratingList[i].desc;
				}
			})
			.catch(function(error) {
				// console.log(error);
				// _this.$router.push('/error');
			})
		},
	}
}	

</script>
<style lang="scss" scoped>
.project-rating-wrap {
	.project-rating-title {
		display: none;
	}
	.project-rating {
		width: 13.24rem;
		padding: 0.7rem;
		margin: 0 auto;
		font-size: 0.24rem;
		.rating-item {
			width: 11.84rem;
			margin: 0.3rem 0;
			/*border: 0.02rem solid #a48562;*/
			overflow: hidden;
			img {
				width: 3.68rem;
				height: 2.94rem;
				margin: 0 0.2rem;
				vertical-align: top;
			}
			.rating-item-content {
				/*width: 7rem;*/
				display: inline-block;
				margin: 0 0.2rem;
				overflow: hidden;
				h1,h2,h3 {
					font-weight: bold;
				}
				/*h2 {
					font-size: 0.3rem;
					margin: 0.2rem 0 0.2rem;
					span {
						display: inline-block;
						margin-right: 0.3rem;
						padding: 0.05rem 0.1rem;
						border-bottom: 0.03rem solid #dd650d;
					}
				}
				p {
					margin: 0.05rem 0;
				}*/
			}
			&.floatLeft {
				img,.rating-item-content {
					float: left;
				}
			}
			&.floatRight {
				img,.rating-item-content {
					float: right;
				}
			}
		}
	}
}
@media screen and (max-width:1024px) {
.project-rating-wrap {
	text-align: center;
	.project-rating-title {
		display: inline-block;
		margin-top: 1rem;
		font-size: 0.8rem;
		font-weight: bold;
		color: #171c61;
	}
	.project-rating {
		width: 18rem;
		padding: 0;
		text-align: left;
		.rating-item {
			width: 18rem;
		}
	}
}
}	
</style>