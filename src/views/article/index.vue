// this is：路由级别组件（页面级别组件）
<template>
  <div>
    <!-- 筛选项 -->
    <el-card>
      <!-- 头部 -->
      <div slot="header">
        <!-- 使用面包屑 -->
        <my-bread>内容管理</my-bread>
      </div>
      <!-- 表单 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <!-- 依赖两项  下拉选择器的值  下拉选择器的选项 -->
          <el-select v-model="reqParams.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选结果区域 -->
    <!-- 筛选结果 -->
    <el-card>
      <div slot="header">根据筛选条件共查询到 {{total}} 条结果：</div>
      <!-- 表格 -->
      <el-table :data="articles">
        <!-- 封面 cover.images[0] 默认取第一张 -->
        <!-- 假设字段可以取出数据  值是图片地址 -->
        <!-- prop 作用把字段背后的值 渲染在列位置 -->
        <!-- 需要是图片需要往组件传入额外的内容才显示图片 -->
        <!-- 使用插槽  渲染图片需要数据  使用作用域插槽 -->
        <el-table-column prop="date" label="封面">
          <template slot-scope="scope">
            <!-- 图片组件 -->
            <el-image
              :src="scope.row.cover.images[0]"
              style="width:160px;height:100px;border:1px solid #ddd"
              fit="contain"
            >
              <div slot="error" class="image-slot">
                <!-- 加载失败显示图片 -->
                <img src="../../assets/images/error.gif" width="160" height="100" alt />
              </div>
            </el-image>
          </template>
        </el-table-column>
        <!-- 标题 -->
        <el-table-column prop="title" label="标题"></el-table-column>
        <!-- 状态 -->
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 0" type="info">草稿</el-tag>
            <el-tag v-if="scope.row.status === 1">待审核</el-tag>
            <el-tag v-if="scope.row.status === 2" type="success">审核通过</el-tag>
            <el-tag v-if="scope.row.status === 3" type="warning">审核失败</el-tag>
            <el-tag v-if="scope.row.status === 4" type="danger">已删除</el-tag>
          </template>
        </el-table-column>
        <!-- 发布时间 -->
        <el-table-column prop="pubdate" label="发布时间"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" width="120px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" plain circle></el-button>
            <!-- plain朴素按钮属性-->
            <el-button
              type="danger"
              @click="delArticle(scope.row.id)"
              icon="el-icon-delete"
              plain
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        style="margin-top:20px;text-align:right"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="reqParams.page"
      :current-page="reqParams.page"
      @current-change="changePager"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
// import { log } from 'util'
export default {
  data () {
    return {
      // 提交给后台的参数对象
      // 通过axios提交给后台，字段的值为null，这项数据不会提交。
      reqParams: {
        status: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null
      },
      // 频道的下拉选项数据
      channelOptions: [],
      // 日期数据  格式数组 [起始日期，结束日期]
      dateArr: [],
      //   文章列表
      articles: [],

      total: 0
    }
  },
  created () {
    // 获取频道选项数据
    this.getChannelOptions()
    // 获取文章列表数据
    this.getArticles()
  },

  methods: {
    // 删除文章
    async delArticle (articleId) {
      // 确认框
      this.$confirm('老铁，此操作将永久删除该文章, 是否继续?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // 点击确认
        // 地址  articles/id  请求 delete
        // get 获取数据 post 添加数据 delete 删除属性 put 完整修改数据 patch 局部修改数据
        await this.$http.delete(`articles/${articleId}`)
        // 代码走这 成功
        this.$message.success('删除成功')
        this.getArticles()
      }).catch(() => {
        // 点击取消
      })
    },
    //   获取频道选项数据
    async getChannelOptions () {
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.channelOptions = data.channels
    },

    // 获取文章列表数据
    async getArticles () {
      // data.results 才是文章列表
      // post 请求  post(url,数据)
      // get 请求 get(url,{params:数据})
      const {
        data: { data }
      } = await this.$http.get('articles', { params: this.reqParams })
      this.articles = data.results
      console.log(data.results)
      console.log(data)
      // 总条数
      this.total = data.total_count
    },
    // 改变分页1
    changePager (newPage) {
      this.reqParams.page = newPage
      console.log(newPage)
      this.getArticles()
    },

    search () {
    //  每次搜索的时候 页码应该改成1
      this.filterParams.page = 1

      // if (this.reqParams.channel_id === '') this.reqParams.channel_id = null
      this.getArticles()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
