import Configuration from '../pages/Configuration.vue';
import ConfigurationAdvertisement from '../pages/ConfigurationAdvertisement.vue';
import ConfigurationAdvertisementAdd from '../pages/ConfigurationAdvertisementAdd.vue';
import ConfigurationAdvertisementPosition from '../pages/ConfigurationAdvertisementPosition.vue';
import ConfigurationImage from '../pages/ConfigurationImage.vue';
import ConfigurationMessage from '../pages/ConfigurationMessage.vue';
import ConfigurationMessageEditor from '../pages/ConfigurationMessageEditor.vue';
import ConfigurationPay from '../pages/ConfigurationPay.vue';
import ConfigurationSearch from '../pages/ConfigurationSearch.vue';
import ConfigurationSearchEditor from '../pages/ConfigurationSearchEditor.vue';
import ConfigurationSearchAdd from '../pages/ConfigurationSearchAdd.vue';
import Dashboard from '../pages/Dashboard.vue';
import Goods from '../pages/Goods.vue';
import GoodsBrand from '../pages/GoodsBrand.vue';
import GoodsBrandAdd from '../pages/GoodsBrandAdd.vue';
import GoodsBrandEdit from '../pages/GoodsBrandEdit.vue';
import GoodsCategory from '../pages/GoodsCategory.vue';
import GoodsCategoryEdit from '../pages/GoodsCategoryEdit.vue';
import GoodsCategoryAdd from '../pages/GoodsCategoryAdd.vue';
import GoodsCategoryEditNav from '../pages/GoodsCategoryEditNav.vue';
import GoodsLibrary from '../pages/GoodsLibrary.vue';
import GoodsLibraryEdit from '../pages/GoodsLibraryEdit.vue';
import GoodsLibraryEditCategory from '../pages/GoodsLibraryEditCategory.vue';
import GoodsPicture from '../pages/GoodsPicture.vue';
import GoodsPictureLook from '../pages/GoodsPictureLook.vue';
import GoodsStandard from '../pages/GoodsStandard.vue';
import GoodsStandardAdd from '../pages/GoodsStandardAdd.vue';
import GoodsStandardEdit from '../pages/GoodsStandardEdit.vue';
import GoodsType from '../pages/GoodsType.vue';
import GoodsTypeAdd from '../pages/GoodsTypeAdd.vue';
import GoodsTypeEdit from '../pages/GoodsTypeEdit.vue';
import Layout from '../layouts/Layout.vue';
import Operation from '../pages/Operation.vue';
import OperationDelivery from '../pages/OperationDelivery.vue';
import OperationDeliveryLook from '../pages/OperationDeliveryLook.vue';
import OperationDeliveryEdit from '../pages/OperationDeliveryEdit.vue';
import OperationDeliveryAdd from '../pages/OperationDeliveryAdd.vue';
import OperationSettlement from '../pages/OperationSettlement.vue';
import Order from '../pages/Order.vue';
import OrderView from '../pages/OrderView.vue';
import OrderComplain from '../pages/OrderComplain.vue';
import OrderEvaluation from '../pages/OrderEvaluation.vue';
import OrderRefund from '../pages/OrderRefund.vue';
import OrderRefundProcess from '../pages/OrderRefundProcess.vue';
import OrderRefundReedit from '../pages/OrderRefundReedit.vue';
import OrderRefundAdd from '../pages/OrderRefundAdd.vue';
import OrderRejected from '../pages/OrderRejected.vue';
import OrderRejectedLook from '../pages/OrderRejectedLook.vue';
import OrderRejectedHandel from '../pages/OrderRejectedHandel.vue';
import Statistics from '../pages/Statistics.vue';
import StatisticsAftersales from '../pages/StatisticsAftersales.vue';
import StatisticsAnalysis from '../pages/StatisticsAnalysis.vue';
import StatisticsGoods from '../pages/StatisticsGoods.vue';
import StatisticsMember from '../pages/StatisticsMember.vue';
import StatisticsSales from '../pages/StatisticsSales.vue';
import StatisticsStore from '../pages/StatisticsStore.vue';
import Store from '../pages/Store.vue';
import StoreCategory from '../pages/StoreCategory.vue';
import StoreCategorySet from '../pages/StoreCategorySet.vue';
import StoreCategoryAdd from '../pages/StoreCategoryAdd.vue';
import StoreEdit from '../pages/StoreEdit.vue';
import StoreDynamics from '../pages/StoreDynamics.vue';
import SalesFullDown from '../pages/SalesFullDown.vue';
import StoreLevel from '../pages/StoreLevel.vue';
import StoreLevelAdd from '../pages/StoreLevelAdd.vue';
import StorePostal from '../pages/StorePostal.vue';
import SalesSpikes from '../pages/SalesSpikes.vue';
import SalesSpikesLook from '../pages/SalesSpikesLook.vue';
import SalesSpike from '../pages/SalesSpike.vue';
import SalesSpikeAdjunction from '../pages/SalesSpikeAdjunction.vue';
import SalesSpikeSetAdd from '../pages/SalesSpikeSetAdd.vue';
import SalesSpikeSet from '../pages/SalesSpikeSet.vue';
import SalesSpikeTime from '../pages/SalesSpikeTime.vue';
import SalesSpikeTimeAddtime from '../pages/SalesSpikeTimeAddtime.vue';

export default function (injection) {
    injection.useModuleRoute([
        {
            children: [
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Dashboard,
                    path: '/',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Configuration,
                    path: 'configuration',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationAdvertisement,
                    path: 'configuration/advertisement',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationAdvertisementAdd,
                    path: 'configuration/advertisement/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationAdvertisementPosition,
                    path: 'configuration/advertisement/position',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationImage,
                    path: 'configuration/image',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationMessage,
                    path: 'configuration/message',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationPay,
                    path: 'configuration/pay',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationMessageEditor,
                    path: 'configuration/message/editor',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationSearch,
                    path: 'configuration/search',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationSearchAdd,
                    path: 'configuration/search/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ConfigurationSearchEditor,
                    path: 'configuration/search/editor',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Goods,
                    path: 'goods',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsLibrary,
                    path: 'goods/library',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsLibraryEdit,
                    path: 'goods/library/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsLibraryEditCategory,
                    path: 'goods/library/edit/category',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsCategory,
                    path: 'goods/category',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsBrand,
                    path: 'goods/brand',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsBrandAdd,
                    path: 'goods/brand/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsBrandEdit,
                    path: 'goods/brand/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsCategoryEdit,
                    path: 'goods/category/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsCategoryAdd,
                    path: 'goods/category/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsCategoryEditNav,
                    path: 'goods/category/edit/nav',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsType,
                    path: 'goods/type',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsTypeEdit,
                    path: 'goods/type/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsTypeAdd,
                    path: 'goods/type/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsStandard,
                    path: 'goods/standard',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsStandardAdd,
                    path: 'goods/standard/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsStandardEdit,
                    path: 'goods/standard/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsPicture,
                    path: 'goods/picture',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsPictureLook,
                    path: 'goods/picture/look',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Order,
                    path: 'order',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderView,
                    path: 'order/view',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderComplain,
                    path: 'order/complain',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderEvaluation,
                    path: 'order/evaluation',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderRefund,
                    path: 'order/refund',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderRefundProcess,
                    path: 'order/refund/process',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderRefundAdd,
                    path: 'order/refund/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderRefundReedit,
                    path: 'order/refund/reedit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderRejected,
                    path: 'order/rejected',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderRejectedLook,
                    path: 'order/rejected/look',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OrderRejectedHandel,
                    path: 'order/rejected/handel',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Operation,
                    path: 'operation',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OperationSettlement,
                    path: 'operation/settlement',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OperationDelivery,
                    path: 'operation/delivery',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OperationDeliveryAdd,
                    path: 'operation/delivery/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OperationDeliveryLook,
                    path: 'operation/delivery/look',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: OperationDeliveryEdit,
                    path: 'operation/delivery/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Statistics,
                    path: 'statistics',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StatisticsAftersales,
                    path: 'statistics/aftersales',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StatisticsAnalysis,
                    path: 'statistics/analysis',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StatisticsGoods,
                    path: 'statistics/goods',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StatisticsMember,
                    path: 'statistics/member',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StatisticsSales,
                    path: 'statistics/sales',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StatisticsStore,
                    path: 'statistics/store',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Store,
                    path: 'store',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StoreEdit,
                    path: 'store/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StoreCategory,
                    path: 'store/category',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StoreCategorySet,
                    path: 'store/category/set',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StoreCategoryAdd,
                    path: 'store/category/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StoreDynamics,
                    path: 'store/dynamics',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StoreLevel,
                    path: 'store/level',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StoreLevelAdd,
                    path: 'store/level/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: StorePostal,
                    path: 'store/postal',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpike,
                    path: 'sales/spike',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpikes,
                    path: 'sales/spikes',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpikesLook,
                    path: 'sales/spikes/look',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesFullDown,
                    path: 'sales/fulldown',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpikeAdjunction,
                    path: 'sales/spike/adjunction',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpikeSetAdd,
                    path: 'sales/spike/set/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpikeSet,
                    path: 'sales/spike/set',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpikeTime,
                    path: 'sales/spike/time',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: SalesSpikeTimeAddtime,
                    path: 'sales/spike/time/addtime',
                },
            ],
            component: Layout,
            path: '/mall',
        },
    ]);
}