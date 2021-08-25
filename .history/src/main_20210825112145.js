import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入store
import store from './store'
// 事件总线
Vue.prototype.$bus = new Vue()
// 导入elementui
// import './plugins/elementui'
// 将elementui组件单独封装,然后在main.js中导入即可
// 按需导入elementui组件及其样式
import 'element-ui/lib/theme-chalk/index.css';
import {
    Pagination,Menu,Submenu,MenuItem,MenuItemGroup,Input,InputNumber,Select,Button,
    ButtonGroup,Table,TableColumn,DatePicker,Breadcrumb,BreadcrumbItem,Form,FormItem,Alert,
    Slider,Icon,Upload,Progress,Collapse,CollapseItem,Cascader,Container,Header,Aside,Main,
    Calendar,PageHeader,Loading,MessageBox,Message,Notification
} from 'element-ui';

Vue.use(Pagination);Vue.use(Menu);Vue.use(Submenu);Vue.use(MenuItem);Vue.use(MenuItemGroup);
Vue.use(Input);Vue.use(InputNumber);Vue.use(Select);Vue.use(Option);Vue.use(Button);
Vue.use(ButtonGroup);Vue.use(Table);Vue.use(TableColumn);Vue.use(DatePicker);
Vue.use(Breadcrumb);Vue.use(BreadcrumbItem);Vue.use(Form);Vue.use(FormItem);Vue.use(Alert);
Vue.use(Slider);Vue.use(Icon);Vue.use(Upload);Vue.use(Progress);Vue.use(Collapse);
Vue.use(CollapseItem);Vue.use(Cascader);Vue.use(Container);Vue.use(Header);
Vue.use(Aside);Vue.use(Main);Vue.use(Image);Vue.use(Calendar);Vue.use(PageHeader);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
// 封装导入有点问题，暂时取消封装elementui

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')