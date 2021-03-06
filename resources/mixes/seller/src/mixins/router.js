import Layout from '../layouts/Layout.vue';
import Dashboard from '../pages/Dashboard.vue';
import Home from '../pages/Home.vue';
import Goods from '../pages/Goods.vue';
import GoodsAdd from '../pages/GoodsAdd.vue';
import GoodsEdit from '../pages/GoodsEdit.vue';
import GoodsEditCategory from '../pages/GoodsEditCategory.vue';
import GoodsNotice from '../pages/GoodsNotice.vue';
import GoodsStandard from '../pages/GoodsStandard.vue';
import GoodsPicture from '../pages/GoodsPicture.vue';
import GoodsPictureManage from '../pages/GoodsPictureManage.vue';
import Shop from '../pages/Shop.vue';
import ShopNavigate from '../pages/ShopNavigate.vue';
import ShopNavigateEdit from '../pages/ShopNavigateEdit.vue';
import ShopNavigateAdd from '../pages/ShopNavigateAdd.vue';
import ShopTrend from '../pages/ShopTrend.vue';
import ShopMessage from '../pages/ShopMessage.vue';
import ShopCategory from '../pages/ShopCategory.vue';
import ShopApplication from '../pages/ShopApplication.vue';
import ShopSupplier from '../pages/ShopSupplier.vue';
import ShopStore from '../pages/ShopStore.vue';

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
                    component: Home,
                    path: 'home',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Goods,
                    path: 'goods',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsAdd,
                    path: 'goods/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsEdit,
                    path: 'goods/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsEditCategory,
                    path: 'goods/edit/category',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsNotice,
                    path: 'goods/notice',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsStandard,
                    path: 'goods/standard',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsPicture,
                    path: 'goods/picture',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: GoodsPictureManage,
                    path: 'goods/picture/manage',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: Shop,
                    path: 'shop',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopNavigate,
                    path: 'shop/navigate',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopNavigateEdit,
                    path: 'shop/navigate/edit',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopNavigateAdd,
                    path: 'shop/navigate/add',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopTrend,
                    path: 'shop/trend',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopMessage,
                    path: 'shop/message',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopCategory,
                    path: 'shop/category',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopApplication,
                    path: 'shop/application',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopSupplier,
                    path: 'shop/supplier',
                },
                {
                    beforeEnter: injection.middleware.requireAuth,
                    component: ShopStore,
                    path: 'shop/store',
                },
            ],
            component: Layout,
            path: '/seller',
        },
    ]);
}