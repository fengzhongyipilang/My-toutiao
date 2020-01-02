// this is：路由级别组件（页面级别组件）
<template>
  <div class="container-image">
    <el-card>
      <div slot="header">
        <my-bread>素材管理</my-bread>
      </div>
      <!-- 按钮区 -->
      <div class="btn_box">
        <el-radio-group v-model="filterParams.collect" size="small">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
        </el-radio-group>
        <el-button style="float: right" type="success" size="small">添加素材</el-button>
      </div>

      <!-- 图片列表 -->
      <div class="img_list">
        <div class="img_item" v-for="index in 10" :key="index">
          <img src="../../assets/images/avatar.jpg" alt />
          <div class="option">
            <span class="el-icon-star-off"></span>
            <span class="el-icon-delete"></span>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 筛选参数
      filterParams: {
        collect: false, //  false：查询全部 true:查询收藏
        page: 1, // 默认显示第一页
        per_page: 10 // 每页数量
      },
      images: [] // 图片列表数据
    }
  },
  // 获取用户素材
  created () {
    this.getImages()
  },
  methods: {
    async getImages () {
      const {
        // 拿数据
        data: { data }
      } = await this.$http.get('user/images/', { params: this.filterParams })
      this.images = data.results// 给images赋值
    }
  }
}
</script>

<style lang="less" scoped>
.btn_box {
  margin-bottom: 20px;
}
.img_list {
  .img_item {
    width: 180px;
    height: 180px;
    border: 1px dashed #ddd;
    position: relative;
    display: inline-block;
    margin: 0 30px 20px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .option {
      height: 30px;
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      line-height: 30px;
      span {
        color: #fff;
        margin: 0 20px;
      }
      .red {
        color: red;
      }
    }
  }
}
</style>
