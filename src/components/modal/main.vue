<template>
	<div class="modal fade" :style="{'z-index' : index}" ref="modall" id="modal-template" tabindex="-1"  role="dialog">
		<div class="modal-dialog" :style="{'width' : width + '%'}" role="document">

		<div class="modal-content" style="padding:14px">
			<slot></slot>
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	</div>
</template>

<script>
	export default {

		props: {

			name: {
				type: String,
				required: false
			},

			index: {
				type: String,
				required: false,
				default: "1050"
			}
		},

		data () {
			return {
				show : false,
				width: 80,
			}
		},

		mounted (){

			bus.$on('modal-show', (obj) => {
				if(this.name == obj.name){
					this.width =  this._width <= 1024 ? 95 : obj.width
					this.show = true

					$(this.$refs.modall).modal({
						backdrop: 'static',
						show: true
					})
				}
			})

			$(this.$refs.modall).on('hidden.bs.modal', () => {
				// Load up a new modal...
				////console.log("modal-fechou", this.name)
				bus.$emit('modal-fechou', this.name)
				this.$emit('modal-fechou')

				document.body.style.paddingRight = 0;
			})

			bus.$on('modal-hide', (obj) => {
				if(this.name == obj.name){
					//this.width = obj.width
					this.show = false
					$(this.$refs.modall).modal('hide')
				}
			})
		},

		methods:{

			modalShow(width){

				this.width =  this._width <= 1024 ? 93 : width
				this.show = true

				$(this.$refs.modall).modal({
					backdrop: 'static',
					show: true
				})
			},

			changeWidh(width){
				this.width =  this._width <= 1024 ? 93 : width
			},

			modalHide(){
				this.show = false
				$(this.$refs.modall).modal('hide')
			}
		}
	}
</script>

<style>

.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	transition: opacity .3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 300px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

</style>
