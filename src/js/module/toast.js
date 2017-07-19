function Toast(msg, time){
  this.msg = msg;
  this.dismissTime = time || 1000;
  this.createToast();
  this.showToast();
}

Toast.prototype = {
  constructor: Toast,
  createToast: function(){
    var tpl = '<div class="toast">'+this.msg+'</div>';
    this.$toast = $(tpl);
    $('body').append(this.$toast)
  },
  showToast: function(){
    this.$toast.fadeIn(300, ()=>{
      setTimeout(()=> {
        this.$toast.fadeOut(300, ()=>{
          this.$toast.remove()
        })
      }, this.dismissTime)
    })
  }
}

function ToastFactory(msg, time){
  new Toast(msg, time)
}

module.exports.Toast = ToastFactory;