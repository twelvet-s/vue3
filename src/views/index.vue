<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">
        <blockquote class="text-warning" style="font-size: 14px">
          领取阿里云通用云产品1888优惠券
          <br />
          <el-link
            href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=jcjwnfv3"
            type="primary"
            target="_blank">
            https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=jcjwnfv3
          </el-link>
          <br />
          领取腾讯云通用云产品2860优惠券
          <br />
          <el-link
            href="https://curl.qcloud.com/cAvXfLWI"
            type="primary"
            target="_blank">
            https://curl.qcloud.com/cAvXfLWI
          </el-link>
          <br />
          阿里云服务器折扣区
          <el-link href="https://www.aliyun.com/1111/new?userCode=jcjwnfv3" type="primary" target="_blank"
            >>☛☛点我进入☚☚</el-link
          >
          &nbsp;&nbsp;&nbsp; 腾讯云服务器秒杀区
          <el-link href="https://curl.qcloud.com/VrLWYkZI" type="primary" target="_blank"
            >>☛☛点我进入☚☚</el-link
          ><br />
          <h4 class="text-danger">
            云产品通用红包，可叠加官网常规优惠使用。(仅限新用户)
          </h4>
        </blockquote>

        <hr />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>twelvet后台管理框架</h2>
        <p>一款基于Spring Cloud Alibaba的权限管理系统，集成市面上流行库，可以作用为快速开发的一个框架使用。</p>

        <p>
          一套以微服务架构的脚手架,使用Spring Cloud Alibaba系列进行架构,学习并了解它将能快速掌握微服务核心基础。
          此项目是为了减少业务代码的重复轮子,它具有一个系统该有的通用性核心业务代码,无论是微服务还是单体,都是通用的业务
          但更多的,是为了学习微服务的理念以及开发 您可以使用它进行网站管理后台，网站会员中心，CMS，CRM，OA等待系统的开发,
          当然,不仅仅是一些小系统,我们可以生产更多的服务模块,不断完善项目。
        </p>

        <p>
          系统初心是为了能够更快地完成业务的需求，带来更好的体验、更多的时间。它将会用于孵化一些实用的功能点。
          我们希望它们是轻量级，可移植性高的功能插件。
        </p>

        <p>
          同时，我们更希望广大开发者能在其中更快地获得更好的解决方案、尽量降低我们的学习成本。
          由此，我们应当把更多的时间投入到其它更有意义的事情当中，我们深知知识的重要性，但，并不希望仅拥有单一”知识“。
          去感受/关爱更多光彩，无论人、事、物，它们也将成为你最好的灵感。
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <p>
          <el-tag type="danger">&yen;免费开源</el-tag>
        </p>
        <p>
          <el-button
            type="primary"
            icon="Cloudy"
            plain
            @click="goTarget('https://github.com/twelvet-s/twelvet')">
            访问GitHub
          </el-button>
          <el-button
            icon="HomeFilled"
            plain
            @click="goTarget('https://www.twelvet.cn/')"
            >访问主页</el-button
          >
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul>
              <li>Spring Boot</li>
              <li>Spring Authorization Server</li>
              <li>Spring Cloud Alibaba</li>
              <li>Nacos</li>
              <li>RocketMQ</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vite</li>
              <li>Element-Plus</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>联系信息</span>
            </div>
          </template>
          <div class="body">
            <p>
              <i class="el-icon-s-promotion"></i> 官网：<el-link
                href="http://www.twelvet.cn"
                target="_blank"
                >http://www.twelvet.cn</el-link
              >
            </p>
            <p>
              <i class="el-icon-user-solid"></i>
              QQ群：
              <el-link href="https://jq.qq.com/?_wv=1027&k=cznM6Q00" target="_blank">985830229</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>更新日志</span>
            </div>
          </template>
          <el-collapse accordion>
            <el-collapse-item title="v3.0.0 - 2023-2-01">
              <ol>
                <li>twelvet前后端分离系统VUE3分支正式发布</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>捐赠支持（用于演示站/维护项目）</span>
            </div>
          </template>
          <div class="body">
            <img
              src="https://www.twelvet.cn/assets/images/pay.png"
              alt="donate"
              style="width:100%"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
const version = ref('3.0.0')

function goTarget(url) {
  window.open(url, '__blank')
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

