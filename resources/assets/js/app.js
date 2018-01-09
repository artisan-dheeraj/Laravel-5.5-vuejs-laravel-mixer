
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/** Routes */
import VueRouter from 'vue-router';
window.VueRouter = VueRouter;
window.Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 // Vue.component('CompaniesIndex', require('./components/companies/CompaniesIndex.vue'));
 // Vue.component('CompaniesCreate', require('./components/companies/CompaniesCreate.vue'));
 // Vue.component('CompaniesEdit', require('./components/companies/CompaniesEdit.vue'));


/** Validator */
import VeeValidate, { Validator } from 'vee-validate'
import sv from 'vee-validate/dist/locale/sv.js';

Validator.localize('sv', sv);

window.Vue.use(VeeValidate);
