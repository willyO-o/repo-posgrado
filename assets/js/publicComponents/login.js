export default {
    template: //html
        `
    <div class="event_items ">
    <div class="row justify-content-md-center rounded">
        <div class="col-md-4 bg-light p-5 ">
            <h1> Login</h1>
            <hr>
            <div class="newsletter_form ">
				<div class="alert alert-danger " role="alert" v-if="usuarioIncorrecto">
					<strong>Error!:</strong> Usuario o Contraseña incorrectos.
				</div>
                <div class="form-group">
                    <label for="exampleInputEmail1"> <i class="fas fa-user"></i> Usuario</label>
                    <input type="email" class="form-control newsletter_email border"  style="width:100%" :class="{'border-danger':errorUsuario}"  v-model="usuario">
					<small  class="form-text  text-danger" v-if="errorUsuario">Ingrese su Usuario</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1"><i class="fas fa-lock"></i> Password</label>
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
            errorPassword: false,
            errorUsuario: false,
            usuarioIncorrecto: false,
            password: '',
            usuario: '',
            url: base_url,
        }
    },

    methods: {
        ingresar() {

            if (this.validar()) {

                let fm = new FormData()
                fm.append('usuario', this.usuario)
                fm.append('password', this.password)
                axios.post(this.url + 'auth/login', fm)
                    .then(res => {

                        if (!res.data.error) {
                            window.location.replace(this.url + "admin");
                        } else {
                            this.usuarioIncorrecto = true
                            setTimeout(() => {
                                this.usuarioIncorrecto = false
                            }, 3000);
                        }
                    })
                    .catch(err => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Ocurrio un error, intente de nuevo',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })

            }
        },
        validar() {
            if (this.password && this.usuario) {
                return true
            }
            if (!this.password) {
                this.errorPassword = true
            }
            if (!this.usuario) {
                this.errorUsuario = true
            }
            setTimeout(() => {
                this.errorPassword = false
                this.errorUsuario = false
            }, 3500);


        }
    },
}