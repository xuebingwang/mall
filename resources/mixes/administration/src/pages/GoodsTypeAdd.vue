<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            next(() => {
                injection.sidebar.active('mall');
            });
        },
        data() {
            return {
                editDetail: {
                    attributeName: '',
                    attributeNum: 0,
                    attributeSelect: '',
                    attributeShow: false,
                    checkbox1: [],
                    checkbox2: [],
                    checkbox3: [],
                    customize: '',
                    goodsSort: '',
                    interestRadio: '',
                    interestStyle: '',
                    interestType: true,
                    location: '',
                    showStyle: '',
                    sort: '',
                    typeName: '',
                },
                location: [
                    {
                        label: '颜色',
                        value: '1',
                    },
                    {
                        label: '类型',
                        value: '2',
                    },
                ],
                loading: false,
                ruleValidate: {
                    typeName: [
                        {
                            message: '名称名称不能为空',
                            required: true,
                            trigger: 'blur',
                        },
                    ],
                },
                showStyle: [
                    {
                        label: '颜色',
                        value: '1',
                    },
                    {
                        label: '类型',
                        value: '2',
                    },
                ],
                styleData: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        label: '婴儿推车',
                                        value: '婴儿推车',
                                    },
                                    {
                                        label: '自行车',
                                        value: '自行车',
                                    },
                                    {
                                        label: '婴儿推车',
                                        value: '婴儿推车',
                                    },
                                    {
                                        label: '电动车',
                                        value: '电动车',
                                    },
                                    {
                                        label: '安全座椅',
                                        value: '安全座椅',
                                    },
                                ],
                                label: '童车童床',
                                value: '童车童床',
                            },
                            {
                                label: '营养辅食',
                                value: '营养辅食',
                            },
                            {
                                label: '尿裤湿巾',
                                value: '尿裤湿巾',
                            },
                        ],
                        label: '个护化妆',
                        value: '个护化妆',
                    },
                    {
                        children: [
                            {
                                value: '服饰寝居',
                                label: '服饰寝居',
                                children: [
                                    {
                                        label: '婴儿推车1',
                                        value: '婴儿推车1',
                                    },
                                    {
                                        label: '自行车2',
                                        value: '自行车2',
                                    },
                                    {
                                        label: '婴儿推车3',
                                        value: '婴儿推车3',
                                    },
                                    {
                                        label: '电动车',
                                        value: '电动车',
                                    },
                                    {
                                        label: '安全座椅4',
                                        value: '安全座椅4',
                                    },
                                ],
                            },
                            {
                                children: [
                                    {
                                        label: '婴儿推车1',
                                        value: '婴儿推车1',
                                    },
                                    {
                                        label: '自行车2',
                                        value: '自行车2',
                                    },
                                ],
                                label: '营养辅食',
                                value: '营养辅食',
                            },
                            {
                                children: [
                                    {
                                        label: '车1',
                                        value: '车1',
                                    },
                                    {
                                        label: '自行车2',
                                        value: '自行车2',
                                    },
                                ],
                                label: '尿裤湿巾',
                                value: '尿裤湿巾',
                            },
                        ],
                        label: '家用电器',
                        value: '家用电器',
                    },
                ],
            };
        },
        methods: {
            addAttribute() {

            },
            addCustomize() {

            },
            deleteCustomize() {

            },
            goBack() {
                const self = this;
                self.$router.go(-1);
            },
            submit() {
                const self = this;
                self.loading = true;
                self.$refs.editDetail.validate(valid => {
                    if (valid) {
                        window.console.log(valid);
                    } else {
                        self.loading = false;
                        self.$notice.error({
                            title: '请正确填写设置信息！',
                        });
                    }
                });
            },
        },
    };
</script>
<template>
    <div class="mall-wrap">
        <div class="goods-type-add">
            <div class="edit-link-title">
                <i-button type="text" @click.native="goBack">
                    <icon type="chevron-left"></icon>
                </i-button>
                <span>类型管理—新增</span>
            </div>
            <card :bordered="false">
                <div class="prompt-box">
                    <p>提示</p>
                    <p>关联规格不是必选项，它会影响商品发布时的规格及价格的录入。不选为没有规格</p>
                    <p>关联品牌不是必选项，它会影响商品发布时的品牌选择</p>
                    <p>属性值可以添加多个，每个属性值之间需要使用逗号隔开</p>
                    <p>选中属性的“显示”选项，该属性将会在商品列表页显示</p>
                    <p>自定义属性只需要填写属性名称，属性值有商家自行填写。注意：自定义属性不作为商品检索项使用</p>
                </div>
                <i-form ref="editDetail" :model="editDetail" :rules="ruleValidate" :label-width="200">
                    <div class="basic-information">
                        <row>
                            <i-col span="12">
                                <form-item label="类型名称">
                                    <i-input v-model="editDetail.typeName"></i-input>
                                </form-item>
                            </i-col>
                        </row>
                        <row>
                            <i-col span="12">
                                <form-item label="分类图片">
                                    <cascader :data="styleData" trigger="hover"></cascader>
                                    <p class="tip">选择分类，可关联到任意级分类 （只在后台快捷定位中起作用）</p>
                                </form-item>
                            </i-col>
                        </row>
                        <row>
                            <i-col span="12">
                                <form-item label="排序" prop="sort">
                                    <i-input v-model="editDetail.sort"></i-input>
                                    <p class="tip">
                                        请填写自然数。类型列表将会根据排序进行由小到大排列显示
                                    </p>
                                </form-item>
                            </i-col>
                        </row>
                        <row>
                            <i-col span="20">
                                <form-item label="选择关联规格" class="quike-position">
                                    <div class="flex-position">
                                        <span class="title">快捷定位</span>
                                        <i-select placeholder="请选择" v-model="editDetail.location">
                                            <i-option v-for="item in location" :value="item.value"
                                                      :key="item">{{ item.label }}</i-option>
                                        </i-select>
                                        <span class="intro">分类下对应的规格</span>
                                    </div>
                                    <div class="recommended-classification">
                                        <ul>
                                            <li>
                                                <p>时尚物品</p>
                                                <checkbox-group v-model="editDetail.checkbox1">
                                                    <checkbox label="时尚"></checkbox>
                                                    <checkbox label="时尚1"></checkbox>
                                                    <checkbox label="运动品牌"></checkbox>
                                                </checkbox-group>
                                            </li>
                                            <li>
                                                <p>时尚物品</p>
                                                <checkbox-group v-model="editDetail.checkbox2">
                                                    <checkbox label="时尚"></checkbox>
                                                    <checkbox label="时尚1"></checkbox>
                                                    <checkbox label="运动品牌"></checkbox>
                                                    <checkbox label="运动品牌"></checkbox>
                                                </checkbox-group>
                                            </li>
                                            <li>
                                                <p>时尚物品</p>
                                                <checkbox-group v-model="editDetail.checkbox3">
                                                    <checkbox label="时尚"></checkbox>
                                                    <checkbox label="时尚1"></checkbox>
                                                </checkbox-group>
                                            </li>
                                        </ul>
                                    </div>
                                    <p class="tip">推荐品牌将在展开后的二、三级导航列表右侧突出显示，
                                        建议选择数量为8个具有图片的品牌，超过将被隐藏</p>
                                </form-item>
                            </i-col>
                        </row>
                        <row>
                            <i-col span="20">
                                <form-item label="选择关联品牌" class="quike-position">
                                    <div class="flex-position">
                                        <span class="title">快捷定位</span>
                                        <i-select placeholder="请选择" v-model="editDetail.showStyle">
                                            <i-option v-for="item in showStyle" :value="item.value"
                                                      :key="item">{{ item.label }}</i-option>
                                        </i-select>
                                        <span class="intro">分类下对应的品牌</span>
                                    </div>
                                    <div class="recommended-classification">
                                        <ul>
                                            <li>
                                                <p>时尚物品</p>
                                                <checkbox-group v-model="editDetail.checkbox1">
                                                    <checkbox label="时尚1"></checkbox>
                                                    <checkbox label="时尚2"></checkbox>
                                                    <checkbox label="运动品牌1"></checkbox>
                                                </checkbox-group>
                                            </li>
                                            <li>
                                                <p>时尚物品</p>
                                                <checkbox-group v-model="editDetail.checkbox2">
                                                    <checkbox label="时尚2"></checkbox>
                                                    <checkbox label="时尚3"></checkbox>
                                                    <checkbox label="运动品牌2"></checkbox>
                                                    <checkbox label="运动品牌1"></checkbox>
                                                </checkbox-group>
                                            </li>
                                            <li>
                                                <p>时尚物品</p>
                                                <checkbox-group v-model="editDetail.checkbox3">
                                                    <checkbox label="时尚1"></checkbox>
                                                    <checkbox label="时尚3"></checkbox>
                                                </checkbox-group>
                                            </li>
                                        </ul>
                                    </div>
                                    <p class="tip">推荐品牌将在展开后的二、三级导航列表右侧突出显示，
                                        建议选择数量为8个具有图片的品牌，超过将被隐藏</p>
                                </form-item>
                            </i-col>
                        </row>
                        <row>
                            <i-col span="20">
                                <form-item label="添加属性" class="quike-position">
                                    <div ref="box">
                                        <div class="flex-position">
                                            <i-input v-model="editDetail.attributeNum"></i-input>
                                            <i-input placeholder="输入属性名称"
                                                     v-model="editDetail.attributeName" ></i-input>
                                            <i-input placeholder="输入属性可选值"
                                                     v-model="editDetail.attributeSelect"></i-input>
                                            <checkbox v-model="editDetail.attributeShow">显示</checkbox>
                                            <i-button @click.native="deleteCustomize" type="ghost">删除</i-button>
                                        </div>
                                    </div>
                                    <i-button @click.native="addAttribute" type="ghost">+添加属性</i-button>
                                    <p class="tip">
                                        需要修改属性值，请点击属性后面的编辑按钮
                                    </p>
                                </form-item>
                            </i-col>
                        </row>
                        <row>
                            <i-col span="20">
                                <form-item label="自定义属性" class="quike-position">
                                    <div class="flex-position flex-customize">
                                        <i-input v-model="editDetail.customize"></i-input>
                                        <i-button @click.native="deleteCustomize" type="ghost">删除</i-button>
                                    </div>
                                    <i-button @click.native="addCustomize" type="ghost">+添加自定义属性</i-button>
                                    <p class="tip">
                                        自定义属性用于为商家自行添加某些属性值的预留选项，平台只需建立并设定属性名称即可，
                                        属性值有商家自行添加。注意：自定义属性不能作为商品检索项使用
                                    </p>
                                </form-item>
                            </i-col>
                        </row>
                        <row>
                            <i-col span="12">
                                <form-item>
                                    <i-button :loading="loading" type="primary" @click.native="submit">
                                        <span v-if="!loading">确认提交</span>
                                        <span v-else>正在提交…</span>
                                    </i-button>
                                </form-item>
                            </i-col>
                        </row>
                    </div>
                </i-form>
            </card>
        </div>
    </div>
</template>