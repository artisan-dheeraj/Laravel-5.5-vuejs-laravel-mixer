<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Create new company</div>
            <div class="panel-body">
                <form  @submit.prevent="validateForm">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company name</label>
                            <input type="text" v-validate="'required'" name="name" v-model="company.name" class="form-control">
                            <span v-show="errors.has('name')" class="help text-danger">{{ errors.first('name') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company address</label>
                            <input type="text" v-model="company.address" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company website</label>
                            <input type="text" v-validate="'url'" name="website" v-model="company.website" class="form-control">
                            <span v-show="errors.has('website')" class="help text-danger">{{ errors.first('website') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company email</label>
                            <input type="text" v-validate="'required|email'" :class="{'text-danger': errors.has('email') }" name="email" v-model="company.email" class="form-control">
                            <span v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                company: {
                    name: '',
                    address: '',
                    website: '',
                    email: '',
                }
            }
        },
        methods: {
            validateForm() {
              this.$validator.validateAll().then((result) => {
                  if (result) this.saveForm();
              });
            },
            saveForm() {
                var app = this;
                var newCompany = app.company;
                axios.post('/api/v1/companies', newCompany)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>
