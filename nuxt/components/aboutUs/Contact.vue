<template>
	<div class="contact">
		<div id="container"></div>
		<div class="cstlayer">
            <div class="wp-title_content">
                <img src="../../assets/images/contact/contact.png">
                <p>地址：广州市海珠区新港西路135号中山大学国家科技园B座806、807</p>
                <p>邮箱：juntao@juntaozx.com</p>
                <p>联系电话：020-80922241</p>
            </div>
        </div>
	</div>
</template>
<script>

export default{
	name:'Contact',
	data() {
		return {
		}
	},
	mounted(){
		this.createdMap();
	},
	methods: {
		createdMap() {
			var map = new BMap.Map("container");      
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);      
			// 创建地址解析器实例     
			var myGeo = new BMap.Geocoder();      
			// 将地址解析结果显示在地图上，并调整地图视野    
			myGeo.getPoint("广东省广州市海珠区中大科技园B座807", function(point){      
			    if (point) {      
			        map.centerAndZoom(point, 18);      
			        map.addOverlay(new BMap.Marker(point));      
			    }      
			 }, 
			"广州市");

			//开启鼠标滚轮缩放
			map.enableScrollWheelZoom(true); 
			//添加平移缩放控件。PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方
			map.addControl(new BMap.NavigationControl());  
			//添加缩略地图。默认位于地图右下方，是一个可折叠的缩略地图
			map.addControl(new BMap.OverviewMapControl());   
		}
	}
}
</script>
<style lang="scss" scoped>
.contact {
	position: relative;
	#container {
		width: 100%;
		height: 6rem;
	}
	.cstlayer {
		width: 3rem;
		height: 3.2rem;
		background-color: rgba(255,255,255,0.8);
		position: absolute;
		bottom: 0.5rem;
		left: 1rem;
		z-index: 2;
		.wp-title_content {
			width: 3rem;
			height: 3.2rem;
			font-size: 0.14rem;
			border-top: 0.05rem solid rgba(86, 171, 228,0.6);
			border-bottom: 0.05rem solid rgba(86, 171, 228,0.6);
			img {
				width: 3rem;
				margin-bottom: 0.2rem;
				opacity: 0.8;
			}
			p {
				padding: 0.03rem 0.2rem;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
.contact {
	position: relative;
	#container {
		height: 12rem;
	}
	.cstlayer {
		width: 18rem;
		height: auto;
		position: static;
		.wp-title_content {
			width: 18rem;
			height: auto;
			padding: 0.5rem 0.5rem 1rem;
			font-size: 0.7rem;
			border: 0;
			img {
				display: none;
			}
			p {
				padding: 0.1rem 0.2rem;
			}
		}
	}
}
}
</style>
