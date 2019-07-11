<template>
  <div id="store-wrapper">
    <div class="nctouch-search-layout history">
      <!-- <if condition="$buildUrl('keyword',list[i]) neq null"> -->
      <dl>
        <dt>
          <img src="../../assets/img/search_history.png" />历史记录
          <a href="javascript:void(0);" style="float: right;" onclick="deletels();">
            <img src="../../assets/img/delete.png" />
          </a>
        </dt>
        <dd id="search_his_list_container">
          <ul>
            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E6%B7%B1%E6%B5%B7%E9%B1%BC%E6%B2%B9"
              >深海鱼油</a>
            </li>

            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E8%89%BE%E6%80%9D%E8%AF%BA%E5%A8%9C"
              >艾思诺娜</a>
            </li>

            <li>
              <a href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E6%98%AF">是</a>
            </li>
          </ul>
        </dd>
      </dl>
      <!-- </if> -->

      <dl class="hot-keyword">
        <dt>
          <img src="../../assets/img/search_hot.png" />热门搜索
        </dt>
        <dd id="hot_list_container">
          <ul>
            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E8%89%BE%E6%80%9D%E8%AF%BA%E5%A8%9C"
              >日本药妆神器</a>
            </li>

            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E6%89%BF%E5%96%84%E5%A0%82"
              >承善堂阿胶</a>
            </li>

            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E5%84%BF%E7%AB%A5%E8%BF%AA%E5%B7%A7"
              >儿童长高推荐</a>
            </li>

            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E6%B7%B1%E6%B5%B7%E9%B1%BC%E6%B2%B9"
              >调节血脂</a>
            </li>

            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E8%9B%8B%E7%99%BD%E7%B2%89"
              >蛋白粉</a>
            </li>

            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E8%BF%AA%E5%B7%A7"
              >补钙爆品</a>
            </li>

            <li>
              <a
                href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E5%85%8B%E5%A5%A5%E5%A6%AE%E6%96%AF"
              >眼部逆龄黑科技</a>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#store-wrapper {
  .nctouch-search-layout {
    padding-top: 0.72rem;
    dl {
      padding: 0.6rem 0.3rem 0.3rem;
      text-align: left;
      dt {
        font-size: 0.42rem;
        line-height: 0.6rem;
        color: #666666;
        margin-bottom: 0.24rem;
        img {
          width: 0.6rem;
          margin-right: 10px;
          margin-top: .3rem;
        }
      }
      dd {
        ul {
          // font-size: 0;
          display: block;
          li {
            display: inline-block;
            background-color: #fff;
            border: solid 0.05rem #eee;
            margin: 0 0.4rem 0.4rem 0;
            border-radius: 1rem;
            a {
              display: block;
              padding: 0.1rem 0.25rem;
              font-size: 0.4rem;
              color: #b5b5b5;
            }
          }
        }
      }
    }
  }
}
</style>


