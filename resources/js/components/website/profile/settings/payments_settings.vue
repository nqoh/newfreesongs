<template>
    <div>
        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" >
            <span id="status"></span>
            <div class="form-group">
                <label fo="Firstname">First Name: <span class="star" id="ErrorName"></span> </label>
                <input type="text" class="form-control" v-model="firstname" id="Firstname">
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" >
            <div class="form-group">
                <label fo="Cell_Number">Cell Number: <span class="star" id="ErrorCell"></span></label>
                <input type="text" class="form-control" v-model="cell" id="cell_number">
            </div>
        </div>


        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" >
            <div class="form-group">
                <label fo="country">Email: <span class="star" id="ErrorEmail"></span></label>
                <input type="email" class="form-control" v-model="email" id="email">
            </div>
        </div>


        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9" >
            <div class="form-group">
                <label fo="city">Bank Name: <span class="star" id="ErrorBank"></span></label>
                <input type="text" class="form-control" v-model="bank_name" id="bank_name">
            </div>
        </div>



        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-9 col-9">
            <div class="form-group">
                <label fo="email">Account Number: <span class="star" id="ErrorAcc"></span></label>
                <input type="email" class="form-control" id="account_number" v-model="account_no">
            </div>
        </div>

        <div style="clear: both; margin-left: 15px">
            <button class="btn" @click="SaveData()">Save</button>
            <span style="font-size:17px"><span style="color:red">*</span>All this information will be kept strictly confidential.</span>
            <br>
            <a href="/store"><a>Learn More About Our Online Store</a></a>
        </div>
    </div>
</template>

<script>
    function _(x) {
        return document.getElementById(x)
    }
    import {buss} from '../../../../app'
    export default {
        data () {
            return {
                firstname:'',
                cell:'',
                email:'',
                bank_name:'',
                account_no:''
            }
        },
        created(){
            buss.$emit('setColor','')
        },
        watch: {
            firstname: function (val) {
                if (val.length >= 3 && val.length <= 15) {
                    _("ErrorName").innerHTML = ""
                    _('Firstname').style.border = "1px solid #954b4b"
                } else {
                    _("ErrorName").innerHTML = "3 to 15 characters allow"
                    _('Firstname').style.border = "1px solid red"
                    _('Firstname').focus()
                }
            },
            cell: function (val) {

                var contact = val.split('');
                for(var i=0; i < contact.length ; i++) {
                    if(contact[i] =='0' || contact[i] =='1' ||contact[i] =='2' || contact[i] =='3' || contact[i] =='4' ||
                       contact[i] =='5'|| contact[i] =='6' || contact[i] =='7' || contact[i] =='8' || contact[i] =='9'){
                        _('ErrorCell').innerHTML="";
                        _('cell_number').style.border = "1px solid #954b4b"
                    }else{
                        this.cell = val.substring(0, val.length - 1);
                        _('ErrorCell').innerHTML="Invalid contact number";
                        _('cell_number').style.border = "1px solid red"
                        _('cell_number').focus()
                        break
                        return false
                    }
                }
            },

            email: function (val) {
                if (val.indexOf('@') > -1 && val.indexOf('.') > -1) {
                    _('ErrorEmail').innerHTML = ''
                    _('email').style.border = "1px solid #954b4b"
                } else {
                    _('ErrorEmail').innerHTML = "Invalid email"
                    _('email').style.border = "1px solid red"
                    _('email').focus()
                }
            },

            bank_name: function (val) {
                if (val.length >= 3 && val.length <= 15) {
                    _("ErrorBank").innerHTML = ""
                    _('bank_name').style.border = "1px solid #954b4b"
                } else {
                    _("ErrorBank").innerHTML = "Enter full bank name"
                    _('bank_name').style.border = "1px solid red"
                    _('bank_name').focus()
                }
            },

            account_no: function (val) {
                var acc_no = val.split('');
                for(var i=0; i < acc_no.length ; i++) {
                    if(acc_no[i] =='0' || acc_no[i] =='1' ||acc_no[i] =='2' || acc_no[i] =='3' || acc_no[i] =='4' ||
                        acc_no[i] =='5'|| acc_no[i] =='6' || acc_no[i] =='7' || acc_no[i] =='8' || acc_no[i] =='9'){
                        _('ErrorAcc').innerHTML=""
                        _('account_no').style.border = "1px solid #954b4b"
                    }else{
                        this.account_no = val.substring(0, val.length - 1);
                        _('ErrorAcc').innerHTML="Invalid account number";
                        _('account_no').style.border = "1px solid red"
                        _('account_no').focus()
                        break
                        return false
                    }
                }
            }

        },
        created(){
            this.getAccountDetails();
          } ,
        methods:{
            SaveData(){
              if(this.email !== "" && this.firstname !== "" && this.cell !== ""
                  && this.bank_name !=="" && this.account_no !== ""){
                  var formData = new FormData();
                  formData.append('firstname', this.firstname);
                  formData.append('cell', this.cell);
                  formData.append('bank_name', this.bank_name);
                  formData.append('account_no', this.account_no);
                  formData.append('email', this.email)
                  var vm = this
                  $.ajaxSetup({
                      headers: {
                          'X-CSRF-Token': $('meta[name=_token]').attr('content')
                      }
                  });

                  $.ajax({
                      url: "/edit/account",
                      data: formData,
                      type: 'POST',
                      contentType: false,
                      cache: false,
                      processData: false,
                      success: function (response) {
                          if (response !== "Ok") {
                              _('status').style.color='green';
                              _('status').innerHTML="Bank details updated"
                              vm.getAccountDetails();
                          } else {
                              vm.getAccountDetails();
                          }
                      }
                  });
              }else{
                  _('status').style.color='red';
                  _('status').innerHTML="All fields required"
              }
            },

            getAccountDetails(){
                $.get('/getAccountDetails',(data)=>{
                    this.firstname = data[0].name;
                    this.email = data[0].email;
                    this.bank_name = data[0].bank;
                    this.account_no = data[0].account;
                    this.cell = data[0].cell;
                })
            }
        },

        metaInfo: {
            title: 'Edit Payment',
        }

    }
</script>

<style scoped>
    a {
        font-weight: bold;
        font-size:18px;
        margin-left: 12%;
    }
</style>
