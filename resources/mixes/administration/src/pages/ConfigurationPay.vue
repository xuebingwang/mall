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
                payColumns: [
                    {
                        type: 'selection',
                        width: 150,
                    },
                    {
                        key: 'style',
                        title: '支付方式',
                        width: 300,
                    },
                    {
                        key: 'status',
                        render() {
                            return `<i-switch size="large" v-model="switch1">
                                        <span slot="open">开启</span>
                                        <span slot="close">关闭</span>
                                    </i-switch>`;
                        },
                        title: '当前状态',
                    },
                    {
                        align: 'center',
                        key: 'action',
                        render() {
                            return '<i-button type="ghost">编辑</i-button>';
                        },
                        title: '操作',
                        width: 150,
                    },
                ],
                payStyle: [
                    {
                        style: '货到付款',
                    },
                    {
                        style: '支付宝',
                    },
                    {
                        style: '财付通',
                    },
                    {
                        style: '银联',
                    },
                ],
                plugin: true,
                self: this,
                switch1: true,
            };
        },
        methods: {
            toEdit() {
                const self = this;
                self.$router.push(
                    {
                        path: 'pay',
                    },
                );
            },
        },
    };
</script>
<template>
    <div class="mall-wrap">
        <div class="configuration-pay">
            <tabs value="name1">
                <tab-pane label="支付方式" name="name1">
                    <card :bordered="false" v-if="plugin">
                        <div class="prompt-box">
                            <p>提示</p>
                            <p>此处列出了系统支持的支付方式，点击“编辑”按钮可以编辑支付参数及开关状态</p>
                        </div>
                        <div class="store-body">
                            <i-table :context="self"  :columns="payColumns" :data="payStyle" ref="payStyle"></i-table>
                        </div>
                    </card>
                    <card :bordered="false" v-if="!plugin">
                        <div class="pay-plugin">
                            <p>系统检测到您未安装插件，请安装后尝试</p>
                            <i-button type="ghost">立即安装</i-button>
                        </div>
                    </card>
                </tab-pane>
            </tabs>
        </div>
    </div>
</template>