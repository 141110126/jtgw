<template>
	<div class="error">
		<img src="../assets/images/error/error.png">
		<p>抱歉，为了大家更好的使用体验，网站正在维护升级，升级期间暂时无法访问</p>
		<p>给您带来不便，敬请谅解</p>
	</div>
</template>
<script>
export default {
	name:'Error',
}
</script>
<style lang="scss" scoped>
.error {
	text-align: center;
	img {
		width: 1.61rem;
		height: 2.08rem;
		margin: 2.5rem 0 0.4rem;
	}
	p {
		margin-bottom: 0.3rem;
		font-size: 0.34rem;
		color: #656565;
	}
}
</style>