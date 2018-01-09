import CompaniesIndex from './../../components/companies/CompaniesIndex.vue';
import CompaniesCreate from './../../components/companies/CompaniesCreate.vue';
import CompaniesEdit from './../../components/companies/CompaniesEdit.vue';


const routes = [
    {path: '/', component: CompaniesIndex, name: 'CompaniesIndex'},
    {path: '/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/edit/:id', component: CompaniesEdit, name: 'editCompany'},
];

const router = new VueRouter({ routes });
const app = new Vue({ router }).$mount('#app');
