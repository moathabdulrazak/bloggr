<template>
  <div class="col-12 card ">
    <button @click="setActiveBlog()" data-bs-toggle="modal" data-bs-target="#exampleModal"> see blog</button>
    <!-- <router-link
    <img class="rounded-circle logo-size shadow" :src="blog.creator.picture" :title="blog.creator.name">
    <h6>{{ blog.creator.name }}</h6>
  </router-link> -->
    <router-link v-if="route.name == 'Home'" :to="{ name: 'Profile', params: { profileId: blog.creatorId } }">
      <img :src="blog.creator.picture" :alt="blog.creator.name"
        class="img-fluid m-1 creator-img rounded-circle elevation-5"
        :title="`Go to ${blog.creator.name}'s Profile Page'`">
    </router-link>
    <img class="selectable" :src="blog.imgUrl" alt="">
    <h3>{{ blog.title }}</h3>
    <p>{{ bodyString }}</p>
    <h2>{{ blog.createdAt }}</h2>
  </div>
</template>






<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blogger } from "../models/Blogger.js";
import { bloggersService } from "../services/BloggersService.js";
import { useRoute } from "vue-router";
export default {
  props: {
    blog: {
      type: Blogger,
      required: true,
    }
  },

  setup(props) {
    const route = useRoute()

    return {
      route,
      bodyString: computed(() => {
        let string = props.blog.body.slice(0, -40)
        return string
      }),
      setActiveBlog() {
        bloggersService.setActiveBlog(props.blog)
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.logo-size {
  width: 100px;
  height: 100px;
}
</style>