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
                formValidate: {
                    name: '',
                    number: '',
                    rank: '',
                },
                loading: false,
                ruleValidate: {
                    name: [
                        {
                            message: '分类名称不能为空',
                            required: true,
                            trigger: 'blur',
                        },
                    ],
                    number: [
                        {
                            message: '保证金额数不能为空',
                            required: true,
                            trigger: 'blur',
                        },
                    ],
                },
                validate: {
                    name: [
                        {
                            message: '分类名称不能为空',
                            required: true,
                            trigger: 'blur',
                        },
                    ],
                    number: [
                        {
                            message: '保证金额数不能为空',
                            required: true,
                            trigger: 'blur',
                        },
                    ],
                },
            };
        },
        methods: {
            goBack() {
                const self = this;
                self.$router.go(-1);
            },
            submit() {
                const self = this;
                self.loading = true;
                self.$refs.activityValidate.validate(valid => {
                    if (valid) {
                        self.$Message.success('提交成功!');
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
        <div class="store-category-set">
            <div class="edit-link-title">
                <i-button type="text" @click.native="goBack">
                    <icon type="chevron-left"></icon>
                </i-button>
                <span>店铺分类—设置</span>
            </div>
            <card :bordered="false">
                <i-form :label-width="200" ref="activityValidate" :model="formValidate" :rules="validate">
                    <row>
                        <i-col span="12">
                            <form-item label="分类名称" prop="name">
                                <i-input v-model="formValidate.name" placeholder=""></i-input>
                            </form-item>
                        </i-col>
                    </row>
                    <row>
                        <i-col span="12" prop="number">
                            <form-item  label="保证金额数" prop="number">
                                <i-input v-model="formValidate.number" placeholder=""></i-input>
                            </form-item>
                        </i-col>
                    </row>
                    <row>
                        <i-col span="12">
                            <form-item label="排序">
                                <i-input v-model="formValidate.rank" placeholder=""></i-input><br>
                                <p class="tip">数字范围为0~255，数字越小越靠前</p>
                            </form-item>
                        </i-col>
                    </row>
                    <form-item>
                        <i-button @click.native="submit" type="primary">
                            <span v-if="!loading">确认提交</span>
                            <span v-else>正在提交…</span>
                        </i-button>
                    </form-item>
                </i-form>
            </card>
        </div>
    </div>
</template>