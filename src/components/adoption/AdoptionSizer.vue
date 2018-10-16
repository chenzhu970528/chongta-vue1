<template>
  <div>
    <div class="border">
      <div class="sizerContainer">
        <div class="pet-type">
          <button type="button" class="btn btn-lg btn-link" @click="show(0)">汪星人</button>
          <button type="button" class="btn btn-lg  btn-link" @click="show(1)">喵星人</button>
        </div>
        <div class="type-content">
          <span class="text-primary">品种:</span>
          <!--汪星人-->
          <div class="dogSizer" v-if="type == 0">
            <!-- Nav tabs -->
            <div class="letter">
              <ul class="nav nav-pills" role="tablist">
                <li role="presentation" class="active"><a href="#doghot" aria-controls="hot" role="tab"
                                                          data-toggle="tab">热门</a></li>
                <li role="presentation"><a href="#dogA" aria-controls="A" role="tab" data-toggle="tab">A</a></li>
                <li role="presentation"><a href="#dogB" aria-controls="B" role="tab" data-toggle="tab">B</a></li>
                <li role="presentation"><a href="#dogC" aria-controls="C" role="tab" data-toggle="tab">C</a></li>
                <li role="presentation"><a href="#dogD" aria-controls="D" role="tab" data-toggle="tab">D</a></li>
                <li role="presentation"><a href="#dogE" aria-controls="E" role="tab" data-toggle="tab">E</a></li>
                <li role="presentation"><a href="#dogF" aria-controls="F" role="tab" data-toggle="tab">F</a></li>
                <li role="presentation"><a href="#dogG" aria-controls="G" role="tab" data-toggle="tab">G</a></li>
                <li role="presentation"><a href="#dogH" aria-controls="H" role="tab" data-toggle="tab">H</a></li>
                <li role="presentation"><a href="#dogJ" aria-controls="J" role="tab" data-toggle="tab">J</a></li>
                <li role="presentation"><a href="#dogK" aria-controls="K" role="tab" data-toggle="tab">K</a></li>
                <li role="presentation"><a href="#dogL" aria-controls="L" role="tab" data-toggle="tab">L</a></li>
                <li role="presentation"><a href="#dogM" aria-controls="M" role="tab" data-toggle="tab">M</a></li>
                <li role="presentation"><a href="#dogN" aria-controls="N" role="tab" data-toggle="tab">N</a></li>
                <li role="presentation"><a href="#dogP" aria-controls="P" role="tab" data-toggle="tab">P</a></li>
                <li role="presentation"><a href="#dogQ" aria-controls="Q" role="tab" data-toggle="tab">Q</a></li>
                <li role="presentation"><a href="#dogR" aria-controls="R" role="tab" data-toggle="tab">R</a></li>
                <li role="presentation"><a href="#dogS" aria-controls="S" role="tab" data-toggle="tab">S</a></li>
                <li role="presentation"><a href="#dogT" aria-controls="T" role="tab" data-toggle="tab">T</a></li>
                <li role="presentation"><a href="#dogW" aria-controls="W" role="tab" data-toggle="tab">W</a></li>
                <li role="presentation"><a href="#dogX" aria-controls="X" role="tab" data-toggle="tab">X</a></li>
                <li role="presentation"><a href="#dogY" aria-controls="Y" role="tab" data-toggle="tab">Y</a></li>
                <li role="presentation"><a href="#dogZ" aria-controls="Z" role="tab" data-toggle="tab">Z</a></li>
              </ul>
            </div>
            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="doghot">
                <dl>
                  <dd style="color: #23527c"><b>不限</b></dd>
                  <dd><a href="">萨摩耶</a></dd>
                  <dd><a href="">拉布拉多</a></dd>
                  <dd><a href="">柯基犬</a></dd>
                  <dd><a href="">哈士奇</a></dd>
                  <dd><a href="">金毛</a></dd>
                  <dd><a href="">泰迪</a></dd>
                  <dd><a href="">英国斗牛犬</a></dd>
                  <dd><a href="">法国斗牛犬</a></dd>
                  <dd><a href="">博美</a></dd>
                  <dd><a href="">比熊犬</a></dd>
                  <dd><a href="">边境牧羊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogA">
                <dl>
                  <dd><a href="">澳大利亚牧牛犬</a></dd>
                  <dd><a href="">澳大利亚梗</a></dd>
                  <dd><a href="">安纳托利亚牧羊犬</a></dd>
                  <dd><a href="">阿拉斯加</a></dd>
                  <dd><a href="">澳大利亚牧羊犬</a></dd>
                  <dd><a href="">美国爱斯基摩犬</a></dd>
                  <dd><a href="">爱尔兰猎狼犬</a></dd>
                  <dd><a href="">爱尔兰梗</a></dd>
                  <dd><a href="">阿芬平斯澈犬/猴面梗</a></dd>
                  <dd><a href="">阿富汗猎犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogB">
                <dl>
                  <dd><a href="">波音达犬</a></dd>
                  <dd><a href="">比特犬</a></dd>
                  <dd><a href="">捕鼠梗</a></dd>
                  <dd><a href="">葡萄牙波登可犬</a></dd>
                  <dd><a href="">波兰牧羊犬</a></dd>
                  <dd><a href="">伯恩山犬</a></dd>
                  <dd><a href="">波利犬</a></dd>
                  <dd><a href="">布里塔尼犬</a></dd>
                  <dd><a href="">伯瑞犬</a></dd>
                  <dd><a href="">波士顿犬</a></dd>
                  <dd><a href="">博美</a></dd>
                  <dd><a href="">冰岛牧羊犬</a></dd>
                  <dd><a href="">北海道犬</a></dd>
                  <dd><a href="">贝灵顿梗</a></dd>
                  <dd><a href="">边境梗</a></dd>
                  <dd><a href="">巴吉度</a></dd>
                  <dd><a href="">比格犬</a></dd>
                  <dd><a href="">比利牛斯獒犬</a></dd>
                  <dd><a href="">边境牧羊犬</a></dd>
                  <dd><a href="">比利时玛利诺犬</a></dd>
                  <dd><a href="">巴哥</a></dd>
                  <dd><a href="">比利时牧羊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogC">
                <dl>
                  <dd><a href="">茶杯犬</a></dd>
                  <dd><a href="">查理士王小猎犬</a></dd>
                  <dd><a href="">川东猎犬</a></dd>
                  <dd><a href="">柴犬</a></dd>
                  <dd><a href="">长须牧羊犬</a></dd>
                  <dd><a href="">藏獒</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogD">
                <dl>
                  <dd><a href="">德国牧羊犬</a></dd>
                  <dd><a href="">短毛猎狐梗</a></dd>
                  <dd><a href="">杜高</a></dd>
                  <dd><a href="">斗牛梗</a></dd>
                  <dd><a href="">德国短毛指示犬</a></dd>
                  <dd><a href="">德国杜宾犬</a></dd>
                  <dd><a href="">大麦町犬</a></dd>
                  <dd><a href="">德国刚毛指示犬</a></dd>
                  <dd><a href="">大型雪纳瑞</a></dd>
                  <dd><a href="">丹迪丁蒙梗</a></dd>
                  <dd><a href="">迷你杜宾犬</a></dd>
                  <dd><a href="">大丹犬</a></dd>
                  <dd><a href="">大白熊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogE">
                <dl>
                  <dd><a href="">恶霸犬</a></dd>
                  <dd><a href="">俄罗斯南部牧羊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogF">
                <dl>
                  <dd><a href="">芬兰狐狸犬</a></dd>
                  <dd><a href="">法国斗牛犬</a></dd>
                  <dd><a href="">佛兰德牧羊犬</a></dd>
                  <dd><a href="">法国狼犬</a></dd>
                  <dd><a href="">法老王猎犬</a></dd>
                  <dd><a href="">巴西菲勒犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogG">
                <dl>
                  <dd><a href="">哥顿雪达犬</a></dd>
                  <dd><a href="">高加索</a></dd>
                  <dd><a href="">刚毛猎狐梗</a></dd>
                  <dd><a href="">古牧</a></dd>
                  <dd><a href="">刚毛指示格里芬犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogH">
                <dl>
                  <dd><a href="">惠比特犬</a></dd>
                  <dd><a href="">荷兰毛狮犬</a></dd>
                  <dd><a href="">黑狼犬</a></dd>
                  <dd><a href="">爱尔兰红白雪达犬</a></dd>
                  <dd><a href="">哈威那犬/哈瓦那犬</a></dd>
                  <dd><a href="">红骨猎浣熊犬</a></dd>
                  <dd><a href="">德国狐狸犬</a></dd>
                  <dd><a href="">哈士奇</a></dd>
                  <dd><a href="">蝴蝶犬</a></dd>
                  <dd><a href="">湖畔梗</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogJ">
                <dl>
                  <dd><a href="">京巴犬/北京犬/狮子犬</a></dd>
                  <dd><a href="">加纳利犬</a></dd>
                  <dd><a href="">吉娃娃</a></dd>
                  <dd><a href="">金毛</a></dd>
                  <dd><a href="">杰克罗素梗</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogK">
                <dl>
                  <dd><a href="">美国可卡犬</a></dd>
                  <dd><a href="">匈牙利库维斯犬</a></dd>
                  <dd><a href="">英国可卡犬</a></dd>
                  <dd><a href="">中国昆明犬</a></dd>
                  <dd><a href="">凯利蓝梗/爱尔兰梗</a></dd>
                  <dd><a href="">凯恩梗</a></dd>
                  <dd><a href="">威尔士柯基</a></dd>
                  <dd><a href="">柯基犬</a></dd>
                  <dd><a href="">卡斯罗犬</a></dd>
                  <dd><a href="">克伦伯猎鹬犬</a></dd>
                  <dd><a href="">可蒙犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogL">
                <dl>
                  <dd><a href="">灵缇</a></dd>
                  <dd><a href="">腊肠犬</a></dd>
                  <dd><a href="">捷克狼犬</a></dd>
                  <dd><a href="">拉布拉多</a></dd>
                  <dd><a href="">拉萨犬</a></dd>
                  <dd><a href="">罗威士梗</a></dd>
                  <dd><a href="">罗威纳犬</a></dd>
                  <dd><a href="">罗得西亚脊背犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogM">
                <dl>
                  <dd><a href="">马尔济斯犬</a></dd>
                  <dd><a href="">美国斗牛犬</a></dd>
                  <dd><a href="">马里努阿犬</a></dd>
                  <dd><a href="">美国斯塔福梗</a></dd>
                  <dd><a href="">美国猎狐犬</a></dd>
                  <dd><a href="">美国水猎犬</a></dd>
                  <dd><a href="">曼彻斯特梗犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogN">
                <dl>
                  <dd><a href="">牛头梗</a></dd>
                  <dd><a href="">迷你牛头梗</a></dd>
                  <dd><a href="">纽芬兰犬</a></dd>
                  <dd><a href="">纽波利顿獒犬</a></dd>
                  <dd><a href="">挪威猎糜犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogP">
                <dl>
                  <dd><a href="">葡萄牙水犬</a></dd>
                  <dd><a href="">葡萄牙牧羊犬</a></dd>
                  <dd><a href="">帕特大勒梗</a></dd>
                  <dd><a href="">平毛寻回猎犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogQ">
                <dl>
                  <dd><a href="">拳师犬</a></dd>
                  <dd><a href="">秋田犬-美系</a></dd>
                  <dd><a href="">切萨皮克海湾寻回犬</a></dd>
                  <dd><a href="">秋田犬-日本</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogR">
                <dl>
                  <dd><a href="">软毛麦色梗</a></dd>
                  <dd><a href="">日本狆犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogS">
                <dl>
                  <dd><a href="">澳洲丝毛梗</a></dd>
                  <dd><a href="">松狮犬</a></dd>
                  <dd><a href="">苏格兰梗</a></dd>
                  <dd><a href="">苏联红犬</a></dd>
                  <dd><a href="">苏格兰牧羊犬</a></dd>
                  <dd><a href="">威尔士史宾格</a></dd>
                  <dd><a href="">斯科舍诱鸭寻回犬</a></dd>
                  <dd><a href="">凯斯梗犬</a></dd>
                  <dd><a href="">沙皮犬</a></dd>
                  <dd><a href="">圣伯纳犬</a></dd>
                  <dd><a href="">萨路基犬</a></dd>
                  <dd><a href="">意大利士兵诺犬</a></dd>
                  <dd><a href="">舒伯齐犬</a></dd>
                  <dd><a href="">萨摩耶犬</a></dd>
                  <dd><a href="">英国史宾格犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogT">
                <dl>
                  <dd><a href="">中华田园犬</a></dd>
                  <dd><a href="">日本土佐犬</a></dd>
                  <dd><a href="">泰迪</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogW">
                <dl>
                  <dd><a href="">匈牙利威斯拉犬</a></dd>
                  <dd><a href="">万能梗/艾里梗</a></dd>
                  <dd><a href="">德国魏玛犬/威玛猎犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogX">
                <dl>
                  <dd><a href="">迷你雪纳瑞</a></dd>
                  <dd><a href="">寻血猎犬</a></dd>
                  <dd><a href="">标准雪纳瑞</a></dd>
                  <dd><a href="">爱尔兰雪达犬/红雪达</a></dd>
                  <dd><a href="">西藏猎犬</a></dd>
                  <dd><a href="">西藏梗</a></dd>
                  <dd><a href="">西里汉梗</a></dd>
                  <dd><a href="">西施犬</a></dd>
                  <dd><a href="">中国细犬</a></dd>
                  <dd><a href="">小鹿犬</a></dd>
                  <dd><a href="">下司犬</a></dd>
                  <dd><a href="">西高地</a></dd>
                  <dd><a href="">喜乐蒂</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogY">
                <dl>
                  <dd><a href="">英国斗牛犬</a></dd>
                  <dd><a href="">意大利灵缇</a></dd>
                  <dd><a href="">约克夏梗</a></dd>
                  <dd><a href="">英国猎狐犬</a></dd>
                  <dd><a href="">英国雪达犬</a></dd>
                  <dd><a href="">日本银狐</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogZ">
                <dl>
                  <dd><a href="">中亚牧羊犬</a></dd>
                  <dd><a href="">中国冠毛犬</a></dd>
                </dl>
              </div>
            </div>
          </div>
          <!--喵星人-->
          <div class="catSizer" v-if="type == 1">
            <!--字母-->
            <div class="letter">
              <ul class="nav nav-pills" role="tablist">
                <li role="presentation" class="active"><a href="#cathot" aria-controls="cathot" role="tab"
                                                          data-toggle="tab">热门</a></li>
                <li role="presentation"><a href="#catA" aria-controls="A" role="tab" data-toggle="tab">A</a></li>
                <li role="presentation"><a href="#catB" aria-controls="B" role="tab" data-toggle="tab">B</a></li>
                <li role="presentation"><a href="#catD" aria-controls="D" role="tab" data-toggle="tab">D</a></li>
                <li role="presentation"><a href="#catE" aria-controls="E" role="tab" data-toggle="tab">E</a></li>
                <li role="presentation"><a href="#catJ" aria-controls="J" role="tab" data-toggle="tab">J</a></li>
                <li role="presentation"><a href="#catK" aria-controls="K" role="tab" data-toggle="tab">K</a></li>
                <li role="presentation"><a href="#catM" aria-controls="M" role="tab" data-toggle="tab">M</a></li>
                <li role="presentation"><a href="#catP" aria-controls="P" role="tab" data-toggle="tab">P</a></li>
                <li role="presentation"><a href="#catR" aria-controls="R" role="tab" data-toggle="tab">R</a></li>
                <li role="presentation"><a href="#catS" aria-controls="S" role="tab" data-toggle="tab">S</a></li>
                <li role="presentation"><a href="#catT" aria-controls="T" role="tab" data-toggle="tab">T</a></li>
                <li role="presentation"><a href="#catX" aria-controls="X" role="tab" data-toggle="tab">X</a></li>
                <li role="presentation"><a href="#catY" aria-controls="Y" role="tab" data-toggle="tab">Y</a></li>
                <li role="presentation"><a href="#catZ" aria-controls="Z" role="tab" data-toggle="tab">Z</a></li>
              </ul>
            </div>
            <!--内容-->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="cathot">
                <dl>
                  <dd style="color: #23527c"><b>不限</b></dd>
                  <dd><a href="">加菲猫</a></dd>
                  <dd><a href="">英国短毛猫</a></dd>
                  <dd><a href="">折耳猫</a></dd>
                  <dd><a href="">英国短毛猫</a></dd>
                  <dd><a href="">布偶猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane " id="catA">
                <dl>
                  <dd><a href="">阿比西尼亚猫</a></dd>
                  <dd><a href="">矮脚猫</a></dd>
                  <dd><a href="">奥西猫</a></dd>
                  <dd><a href="">埃及猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catB">
                <dl>
                  <dd><a href="">波米拉猫</a></dd>
                  <dd><a href="">伯曼猫</a></dd>
                  <dd><a href="">波斯猫</a></dd>
                  <dd><a href="">布偶猫</a></dd>
                  <dd><a href="">柴猫</a></dd>
                  <dd><a href="">巴厘猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catD">
                <dl>
                  <dd><a href="">东方猫</a></dd>
                  <dd><a href="">德文卷毛猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catE">
                <dl>
                  <dd><a href="">俄罗斯蓝猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catJ">
                <dl>
                  <dd><a href="">加拿大无毛猫</a></dd>
                  <dd><a href="">金吉拉</a></dd>
                  <dd><a href="">加菲猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catK">
                <dl>
                  <dd><a href="">卡尔特猫</a></dd>
                  <dd><a href="">科拉特猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catM">
                <dl>
                  <dd><a href="">英国短毛猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catP">
                <dl>
                  <dd><a href="">皮堡斯</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catR">
                <dl>
                  <dd><a href="">日本短尾猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catS">
                <dl>
                  <dd><a href="">塞尔凯特卷毛猫</a></dd>
                  <dd><a href="">折耳猫</a></dd>
                  <dd><a href="">山东狮子猫</a></dd>
                  <dd><a href="">斯芬克斯猫</a></dd>
                  <dd><a href="">沙特尔猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catT">
                <dl>
                  <dd><a href="">土耳其安哥拉猫</a></dd>
                  <dd><a href="">土耳其梵猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catX">
                <dl>
                  <dd><a href="">新加坡猫</a></dd>
                  <dd><a href="">喜马拉雅猫</a></dd>
                  <dd><a href="">西伯利亚森林猫</a></dd>
                  <dd><a href="">夏尔特猫</a></dd>
                  <dd><a href="">暹罗猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catY">
                <dl>
                  <dd><a href="">英国短毛猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catZ">
                <dl>
                  <dd><a href="">中国狸花猫</a></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="sex">
          <span class="text-primary">性别:</span>
          <ul class="nav nav-pills">
            <li role="presentation" class="active"><a href="#" role="tab" data-toggle="tab">不限</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">公</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">母</a></li>
          </ul>
        </div>
        <div class="sex">
          <span class="text-primary">年龄:</span>
          <ul class="nav nav-pills">
            <li role="presentation" class="active"><a href="#" role="tab" data-toggle="tab">不限</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">2个月内</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">2-3个月</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">3-6个月</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">6-12个月</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">1年以上</a></li>
            <li role="presentation"><a href="#" role="tab" data-toggle="tab">3年以上</a></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "AdoptionSizer",
    data() {
      return {
        type: 0
      }
    },
    methods: {
      show: function (index) {
        this.type = index;
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .border {
    background: url("../../assets/adoption/border.png") no-repeat;
    width: 800px;
    height: 509px;
    background-size: 100% 100%;
    padding-top: 100px;
  }

  .type-content {
    margin-top: 15px;
  }

  .letter li a {
    padding: 5px 10px;
  }

  .sex {
    clear: left;
    margin-top: 20px;
  }

  .sex li a {
    padding: 5px 10px;
  }

  .sizerContainer {
    margin-left: 100px;
  }

  .tab-content {
    margin-top: 5px;
  }

  .tab-content dd {
    display: inline-block;
    margin-left: 8px;
    margin-top: 5px;
  }

  .sizerContainer span {
    float: left;
    margin-right: 20px;
    font-size: 16px;
    line-height: 30px;
  }

  .dogSizer, .catSizer {
    float: left;
    width: 580px;
  }

  .pet-type {
    margin-left: 60px;
  }

</style>
