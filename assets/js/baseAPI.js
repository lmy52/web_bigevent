// 注意：每次调用$.get() 或 $.post() 或 $.ajax()的事后，
// 会先调用 ajaxPrefilter这个函数
// 在这个函数中，可以拿到我们给ajax提供的Ajax提供的配置对象
$.ajaxPrefilter(function(options){
        //   console.log(options.url);
        //   在发起真正的Ajax请求之前，统一拼接请求的根路径
          options.url='http://api-breakingnews-web.itheima.net'+options.url
        console.log(options.url);
        })