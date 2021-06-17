<template>
  <aside id="sider" class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
          <template v-for="(item, index) in menus">
            <router-link class="treeview" v-if="checkRoles(item.roles) && item.path" :key="index" :to="item.path" tag="li" :exact="item.path == '/'">
              <a>
                <i :class="['fa', 'fa-' + item.icon]"></i>
                <span>{{item.title}}</span>
              </a>
            </router-link>
            <li class="treeview" v-if="checkRoles(item.roles) && item.submenus" :key="index">
              <a>
                <i :class="['fa', 'fa-' + item.icon]"></i>
                <span>{{item.title}}</span>                
              </a>
              <ul class="treeview-menu" v-if="item.submenus">
                <router-link v-if="checkRoles(subitem.roles)" :key="subindex" :to="subitem.path" tag="li" :exact="subitem.path=='/'" v-for="(subitem,subindex) in item.submenus">
                  <a>
                    <i :class="['fa', 'fa-' + subitem.icon]"></i>
                    <span>{{subitem.title}}</span>
                  </a>
                </router-link>
              </ul>
            </li>
          </template>
      </ul>
    </section>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    menus : {
        default : () => []
    }
  },
  computed: {
    ...mapState(['userInfo']),
    path(){
      return location.pathname;
    }
  },
  methods: {
    checkRoles(roles) {
      return !roles || roles.some((val, idx, array) => {
        if(!this.userInfo) return false;
        var _roles = this.userInfo.roles || [];
        return _roles.indexOf(val) >= 0;
      })
    }
  }
}

</script>

<style lang="less" scoped>
  @sidebar-bg-color: #1e282c;
  @treeview-bg-color: #222d32;

  .main-sidebar{
  /* Fix for IE */
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

.treeview .treeview-menu {
  display: block;
} 
.sidebar-menu li.active a, .sidebar-menu li:hover a {
    border-left-color: @sidebar-bg-color !important;
}
.sidebar-menu > li:hover > a:not([href]), .sidebar-menu > li.active > :not([href]), .sidebar-menu > li.menu-open > :not([href]) {
    color: #b8c7ce;
    background: transparent;
}
.sidebar-collapse {
  .sidebar-menu > li:hover > a:not([href]), .sidebar-menu > li.active > :not([href]), .sidebar-menu > li.menu-open > :not([href]) {
    background: @treeview-bg-color;
  }
}
</style>




