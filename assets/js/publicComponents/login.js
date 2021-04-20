export default {
    template: //html
        `
    <div class="event_items">
    <div class="row justify-content-md-center">
        <div class="col-md-4">
            <h1> Login</h1>
            <hr>
            <div class="newsletter_form">
                <div class="form-group">
                    <label for="exampleInputEmail1">Usuario</label>
                    <input type="email" class="form-control newsletter_email border"  style="width:100%">
                    <small id="emailHelp" class="form-text text-muted">Ingrese su usuario.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="password" class="form-control newsletter_email border " :class="{'border-danger':errorPassword}" style="width:100%" v-model="password">
                    <small  class="form-text  text-danger" v-if="errorPassword">Ingrese su Password</small>
                </div>
                <button  class="newsletter_submit_btn trans_300 " style="width:100%" @click="ingresar()">Ingresar</button>
            </div>
        </div>
    </div>
    </div>
	
	`,

    data() {
        return {
            errorPassword:false,
            password:'',
            usuario:'',
        }
    },

    methods: {
        ingresar(){
            
            if (this.validar()) {
                console.log('ingresandol...');
            }else{
                
            }
        },
        validar(){
            if (this.password && this.usuario) {
                return false
            }
            if (!this.password) {
                this.errorPassword=true
            }

            setTimeout(() => {
                this.errorPassword=false
            }, 3500);
            
      
        }
    },
}
