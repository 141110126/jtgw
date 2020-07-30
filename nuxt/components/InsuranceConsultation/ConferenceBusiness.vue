<template>
	<div class="conference-business-wrap">
		<h2 class="conference-business-title">会议业务</h2>
		<div class="conference-business">
			<div class="conference-item " :class="{floatLeft:index%2 == 0,floatRight:index%2 == 1}" v-for="(item,index) in conferenceList" :key="index">
				<!-- <img :src="item.thumb"> -->
				<div class="conference-item-content">
					<!-- <h2>{{item.title}}</h2>  -->
					<p v-html="item.content"></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'ConferenceBusiness',
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
			conferenceList:[]
		}
	},
	created() {
		this.metaData = JSON.parse(sessionStorage.getItem('metaData'));
		this.getData();
	},
	methods: {
		getData() {
			var _this = this;
			_this.axios.get('/api/conbus')
			.then(function(res) {
				// console.log(res.data);
				_this.conferenceList = res.data.data;
				for(var i = 0, l = _this.conferenceList.length; i < l; i ++) {
					_this.metaData.keyword += _this.conferenceList[i].keyword;
					_this.metaData.desc += _this.conferenceList[i].desc;
				}
			})
			.catch(function(error) {
				// console.log(error);
				// _this.$router.push('/error');
			})
		},
	},
}	

</script>
<style lang="scss" scoped>
.conference-business-wrap {
	text-align: center;
	.conference-business-title {
		display: none;
	}
	.conference-business {
		width: 13.24rem;
		padding: 0.7rem;
		margin: 0 auto;
		font-size: 0.24rem;
		.conference-item {
			width: 11.84rem;
			margin: 0.3rem 0;
			/*border: 0.02rem solid #a48562;*/
			overflow: hidden;
			/*img {
				width: 3.68rem;
				height: 2.94rem;
				margin: 0 0.2rem;
				vertical-align: top;
			}
			.conference-item-content {
				width: 7rem;
				display: inline-block;
				margin: 0 0.2rem;
				h2 {
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
				}
			}*/
			&.floatLeft {
				img,.conference-item-content {
					float: left;
				}
			}
			&.floatRight {
				img,.conference-item-content {
					float: right;
				}
			}
		}
	}	
}
@media screen and (max-width:1024px) {
.conference-business-wrap {
	text-align: center;
	.conference-business-title {
		display: inline-block;
		margin-top: 1rem;
		font-size: 0.8rem;
		font-weight: bold;
		color: #171c61;
	}
	.conference-business {
		width: 18rem;
		padding: 0;
		text-align: left;
		.conference-item {
			width: 18rem;
		}
	}	
}
}
</style>