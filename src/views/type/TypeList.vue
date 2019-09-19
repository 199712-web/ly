<template>
	<div id="typelist">
		<el-row>
			<!-- 工具条 -->
			<el-col :span="64" class="toolbar">
				<el-form :inline="true" :model="filters" ref="filters">
					<el-form-item>
						<el-input placeholder="类型"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" class="el-icon-search">查询</el-button>
					</el-form-item>
					<el-form-item>
						<el-button type="success" class="el-icon-plus">新增</el-button>
					</el-form-item>
					<el-form-item>
						<el-button type="danger" class="el-icon-delete">删除</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name: 'typelist',
		data(){
			return{
				input: '000'
			}
		}
	}
</script>

<style scoped>
</style>
