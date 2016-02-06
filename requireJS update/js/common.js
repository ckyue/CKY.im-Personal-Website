requirejs.config({
  baseUrl: 'js',
  paths:{
    materialize: 'lib/materialize.min',
    jquery: 'lib/jquery-2.2.0.min'
  }
})

require(['common'], function(){
  require(['main']);
});
