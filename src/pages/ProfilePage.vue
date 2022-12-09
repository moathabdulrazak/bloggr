<template>

  <!-- <div class="row cover-img" :style="`background-image: url(${profile.coverImg})`"> -->
  <div class="col-12 d-flex align-items-center justify-content-around">
    <!-- <img :src="profile.picture" alt="" class="img-fluid profile-picture rounded-circle elevation-5"> -->
    <div class="bg-transparent rounded elevation-5 p-5">
      <h1 class="elevation-1">
        {{ profile.name }}
      </h1>
      <h2>
        <!-- {{ profile.creator }} -->
      </h2>
    </div>
  </div>
  <!-- </div> -->

  <!-- <div class="col-12 d-flex align-items-center justify-content-around">
    <div class="row cover-img"></div>
     <h2>{{ profile.bio }}</h2> -->
  <!-- <h4>{{ profile.name }}</h4>
  <img :src="profile.picture" alt="">
  </div> -->

  {{ profile }}
  <!-- <div class="row cover-img" :style="`background-image: url(${profile.coverImg})`">
    <div class="col-12 d-flex align-items-center justify-content-around">
      <img :src="profile.picture" alt="" class="img-fluid profile-picture rounded-circle elevation-5">
      <div class="bg-transparent rounded elevation-5 p-5">
        <h1 class="elevation-1">
          {{ profile.name }}
        </h1>
        <h2>
          {{ profile.creator }}
        </h2>
      </div>
    </div>
  </div> -->
  <div class="row">
    <div v-for="blog in activeBlogs" class="col-md-4 col-12 p-4">
      <blogCard :blog="blog" />
    </div>
  </div>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { profilesService } from "../services/ProfilesService.js";
import { bloggersService } from "../services/BloggersService.js";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    async function getBlogById() {
      debugger
      await profilesService.getBlogById(route.params.profileId)
    }
    async function getBlogUserById() {
      await bloggersService.getBlogUserById(route.params.profileId)
    }


    onMounted(() => {
      getBlogById();
      getBlogUserById();
    })
    return {
      profile: computed(() => AppState.activeProfile),
      activeBlogs: computed(() => AppState.activeBlogs)
    }
  }
};
// components: { BlogCard }
</script>


<style lang="scss" scoped>
.cover-img {
  min-height: 50vh;
  background-size: cover;
  background-position: center;
}

.profile-picture {
  height: 30vh;
  width: 30vh;
}

.bg-transparent {
  background-color: rgba(222, 184, 135, 0.185);
  text-shadow: 1px 1px white;
}
</style>