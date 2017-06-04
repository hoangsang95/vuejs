var table_component = Vue.extend({
template:`
    <div>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Birthday</th>
                    <th colspan="2"><a href="" @click.prevent="showModal('add')" class="btn add"><i class="fa fa-plus" aria-hidden="true"></i></a></th>
                </tr>
            </thead>
            <transition-group name="customers" tag="tbody"> 
                <tr v-for="(value, key) in customers" :key="value.id">
                    <td>{{key + 1}}</td>
                    <td>{{value.name}}</td>
                    <td>{{value.age}}</td>
                    <td>{{value.birthday}}</td>
                    <td><a href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                    <td><a href="" @click.prevent="deleteCustomer(key)"><i class="fa fa-times" aria-hidden="true"></i></a></td>
                </tr>
            </transition-group>
          
         </table>
        <transition name="modal">
            <div class="modal-mask" v-show="modalState">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <slot name="header">
                               <h3><strong>{{modalTitle}}</strong></h3>
                               <button type="button" class="close" @click="modalState = !modalState">&times;</button>
                            </slot>
                        </div>
                        <div class="modal-body">
                            <slot name="body">
                                <form class="form-horizontal" method="POST" action="api/add">
                                    <div class="form-group">
                                        <label class="control-label col-sm-2">Name:</label>
                                        <div class="col-sm-10">
                                            <input type="text" id="name" name="name" class="form-control"  placeholder="Enter name">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-sm-2">Age:</label>
                                        <div class="col-sm-10">
                                            <input type="number" id="age" name="age" class="form-control"  placeholder="Enter age">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-sm-2">Birthday:</label>
                                        <div class="col-sm-10">
                                            <input type="date" id="date" name="birthday" class="form-control"  placeholder="Enter birthday">
                                        </div>
                                    </div>
                                </form>
                            </slot>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer">
                                 <a class="btn btn-default" @click="addCustomer">Save</a>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
         <div class="message" v-show="messeageSuccess.success">
            <div class="message-content">
                <h4>{{messeageSuccess.title}}</h4>
                <span><i class="fa fa-check" aria-hidden="true"></i></span>
            </div>
        </div>
    </div>
    `,
        data(){
            return{
                customers: [],
                modalState: false,
                modalTitle: '',
                messeageSuccess: {
                    success: false,
                    title: '',
                },
            }
        },
        computed: {
            getDate: function(){
                var now = new Date();
                var day = ("0" + now.getDate()).slice(-2);
                var month = ("0" + (now.getMonth() + 1)).slice(-2);
                var today = now.getFullYear()+"-"+(month)+"-"+(day);
                return today;
            }
        },
        
        mounted(){
            axios.get('api/show').then(response => this.customers = response.data);
        },
        methods: {
            deleteCustomer: function(key){
                let idDelete = this.customers[key].id;
                axios.delete('api/delete/' + idDelete)
                .then(response => {
                    this.customers.splice(key, 1);
                     this.messeageSuccess.push({success:true,title:'Deleted Successfully'});
                })
                .catch(error => console.log(error));
            },
            
            addCustomer: function(){
                var name = document.querySelector('form input#name').value;
                var age = document.querySelector('form input#age').value;
                var birthday = document.querySelector('form input#date').value;
                console.log(this.$data);
                axios.post('api/add', {name:name,age:age,birthday:birthday} )
                        .then(response =>   {
                            this.modalState = false;
                            this.customers.push({name:name,age:age,birthday:birthday,id: response.data.id});
                            this.messeageSuccess.success=true;
                            this.messeageSuccess.title="Created Successfully";
                        })
                        .catch(error =>console.log(error));
              
            },
            
            showModal: function(doWhat){
               switch(doWhat){
                    case 'add': 
                       this.modalTitle = 'Add customer';
                       document.querySelector('form input#name').value = '';
                       document.querySelector('form input#age').value = '';
                       document.querySelector('form input#date').value = this.getDate;
                       break;
                    default: break;
               }
               this.modalState = true;
            }
        }
});