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
                managementColumns: [
                    {
                        align: 'center',
                        type: 'selection',
                        width: 60,
                    },
                    {
                        align: 'center',
                        key: 'orderID',
                        title: '订单编号',
                        width: 200,
                    },
                    {
                        align: 'center',
                        key: 'orderSource',
                        title: '订单来源',
                        width: 170,
                    },
                    {
                        align: 'center',
                        key: 'ownerTime',
                        title: '下单时间',
                        width: 200,
                    },
                    {
                        align: 'center',
                        key: 'orderAmount',
                        title: '订单金额',
                        width: 200,
                    },
                    {
                        align: 'center',
                        key: 'orderStatus',
                        title: '订单状态',
                        width: 150,
                    },
                    {
                        align: 'center',
                        key: 'payNumber',
                        title: '支付单号',
                        width: 250,
                    },
                    {
                        align: 'left',
                        key: 'paymentMethod',
                        title: '支付方式',
                        width: 150,
                    },
                    {
                        align: 'center',
                        fixed: 'right',
                        key: 'action',
                        render() {
                            return `<i-button type="ghost" @click.native="toView" class="first-btn"
                                    size="small">查看</i-button>
                                    <i-button size="small" type="ghost">设置</i-button>`;
                        },
                        title: '操作',
                        width: 180,
                    },
                ],
                managementData: [
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                    {
                        orderAmount: '899（含运费10.00）',
                        orderID: '65454654546',
                        orderSource: '移动端',
                        orderStatus: '交易完成',
                        ownerTime: '2017-03-21 16:45:45',
                        paymentMethod: '钻石店铺',
                        payNumber: '45654646',
                    },
                ],
                searchCategory: '',
                searchList: [
                    {
                        label: '店铺名称',
                        value: '订单编号',
                    },
                    {
                        label: '商品名称',
                        value: '商品名称',
                    },
                    {
                        label: '商品分类',
                        value: '商品分类',
                    },
                ],
                searchWord: '',
                self: this,
            };
        },
        methods: {
            exportData() {
                this.$refs.orderTable.exportCsv({
                    filename: '商品订单数据',
                });
            },
            toView() {
                const self = this;
                self.$router.push(
                    {
                        path: 'order/view',
                    },
                );
            },
        },
    };
</script>
<template>
    <div class="mall-wrap">
        <div class="store">
            <tabs value="name1">
                <tab-pane label="商品订单" name="name1">
                    <card :bordered="false">
                        <div class="prompt-box">
                            <p>提示</p>
                            <p>点击查看操作将显示订单（包括订单物品）的详细信息</p>
                            <p>点击取消操作可以取消订单（在线支付但未付款的订单和货到付款但未发货的订单）</p>
                            <p>如果平台已确认收到买家的付款，但系统支付状态并未变更，可以点击收到货款操作
                                (仅限于下单后7日内可更改收款状态)，并填写相关信息后更改订单支付状态</p>
                        </div>
                        <div class="store-body">
                            <div class="store-body-header">
                                <i-button class="export-btn" @click="exportData" type="ghost">导出数据</i-button>
                                <div class="store-body-header-right">
                                    <i-input v-model="searchWord" placeholder="请输入关键词进行搜索">
                                        <i-select v-model="searchCategory" slot="prepend" style="width: 100px">
                                            <i-option :key="item"
                                                      :value="item.value"
                                                      v-for="item in searchList">{{ item.label }}</i-option>
                                        </i-select>
                                        <i-button slot="append" type="primary">搜索</i-button>
                                    </i-input>
                                </div>
                            </div>
                            <i-table class="shop-table"
                                     :context="self"
                                     :columns="managementColumns"
                                     :data="managementData"
                                     ref="orderTable" highlight-row ></i-table>
                        </div>
                        <div class="page">
                            <page :total="100" show-elevator></page>
                        </div>
                    </card>
                </tab-pane>
            </tabs>
        </div>
    </div>
</template>