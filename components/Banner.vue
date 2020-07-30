<template>
	<div class="banner">
		<div class="banner-wrap">
			<ul class="banner-container" ref="bannerContainer">
				<li v-for="(item,index) in dataList" :key="index" v-show="index === mark">
					<a :href="item.link">
						<img :src="item.banner" :class="{animate:dataList.length > 1}">
					</a>
				</li>
			</ul>
			<ul class="banner-indicators">
				<!-- <template v-for="(item,index) in dataList" :key="index"> -->
					<li :class="{active: index === mark}" @click="dataList.length > 1 && change(index)"  v-for="(item,index) in dataList" :key="index"></li>
				<!-- </template> -->
			</ul>
		</div>
	</div>
</template>
<script>
export default{
	name:'Banner',
	props:['dataList'],
	data() {
		return {
			mark: 0,
			timer: null,
		}
	},
	mounted() {
		if(this.dataList.length > 1) {
			this.play();
		}
	},
	methods:{
		autoPlay() {  
			//console.log(this.dataList.length);
			this.mark++;  
	        if (this.mark === 3) { //当遍历到最后一张图片置零  
	            this.mark = 0;
	        }  
	    },
	    play() {
	    	this.timer = setInterval(this.autoPlay,3500);
	    },
	    change(i) {
	    	this.mark = i;
	    	clearInterval(this.timer);
	    	this.timer = null;
	    	this.play();
	    } 
	}

}
</script>
<style lang="scss" scoped>
.banner {
	.banner-wrap {
		width: 100%;
		height: 4.5rem;
		overflow: hidden;
		position: relative;
		.banner-container {
			width: 100%;
			/*height: 4.5rem;*/
			transition: left 0.3s;
			position: absolute;
			top: 0;
			left: 0;
			li {
				display: inline-block;
				width: 100%;
				img {
					width: 100%;
					height: 4.5rem;
					&.animate {
						opacity: 0.3;
						animation: showAndHide 3.5s;
					}
				}
			}
		}
		.banner-indicators {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			li {
				display: inline-block;
				width: 0.2rem;
				height: 0.2rem;
				margin: 0.2rem;
				border-radius: 50%;
				background-color: #a6a6a6;
				&.active {
					background-color: #171c61;
				}
			}
		}
		.slide-enter {
			opacity: 0.3;
		}
		.slide-enter-to {
			animation: toshow 2s;
		}
		.slide-leave {
			animation: tohide 1s;
		}
	}
}
@keyframes showAndHide {
	0% {
		opacity: 0.2;
	}
	10% {
		opacity: 0.3;
	}
	30% {
		opacity: 1;
	}
	85% {
		opacity: 1;
	}
	100% {
		opacity: 0.3;
	}
}

@media screen and(max-width: 1024px) {
.banner {
	.banner-wrap {
		height: 7rem;
		.banner-container {
			li {
				img {
					height: 7rem;
				}
			}
		}
	}
}
}
</style>