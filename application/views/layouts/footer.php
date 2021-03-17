<div class="clearfix"></div>

<!-- footer -->
<footer>
  <div class="container-fluid">
    <p class="copyright">&copy; 2020 <a href="https://www.themeineed.com/" target="_blank">Theme I Need</a>. All Rights Reserved.</p>
  </div>
</footer>
<!-- end footer -->

<!-- DEMO PANEL -->
<!-- for demo purpose only, you should remove it on your project directory -->
<!-- <script type="text/javascript">
  var toggleDemoPanel = function(e) {
    e.preventDefault();

    var panel = document.getElementById('demo-panel');
    if (panel.className) panel.className = '';
    else panel.className = 'active';
  }
</script>

<div id="demo-panel">
  <a href="#" onclick="toggleDemoPanel(event);"><i class="fa fa-cog fa-spin"></i></a>
  <iframe src="demo-panel.html"></iframe>
</div> -->
<!-- END DEMO PANEL -->
</div>
</div>
<!-- END WRAPPER -->

<!-- Vendor -->
<script src="<?= base_url() ?>assets/js/vendor.min.js"></script>

<!-- App -->
<script src="<?= base_url() ?>assets/js/app.min.js"></script>

<script>
      const card = () => import (base_url+'assets/js/templates/card.js');
  const Foo = { 
    template: '<h1>card</h1>'
  }
  const Bar = { 
    template://html
     `
    <div> users</div>`
  }
  const Car = { 
    template:'<h2> asdas</h2>'
  }





  // 2. Define some routes
  // Each route should map to a component. The "component" can
  // either be an actual component constructor created via
  // `Vue.extend()`, or just a component options object.
  // We'll talk about nested routes later.
  const routes = [{
      path: '/inicio',
      component: Foo
    },
    {
      path: '/users',
      component: Car
    },
    {
      path: '/especialidades',
      component: Bar
    },
  ]

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    //mode:'history',
    routes // short for `routes: routes`
  })

  // 4. Create and mount the root instance.
  // Make sure to inject the router with the router option to make the
  // whole app router-aware.
  const app = new Vue({
    router
  }).$mount('#app')
</script>
</body>

</html>