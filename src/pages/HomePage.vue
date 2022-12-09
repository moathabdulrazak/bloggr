<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="b in blog" class="col-12 col-md-3  gap-1">
        <BlogCard :blog="b" />
      </div>
    </div>
  </div>

</template>

<script>
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js";
import { bloggersService } from "../services/BloggersService.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    async function getBlogs() {
      try {
        await bloggersService.getBlogs();
      } catch (error) {
        logger.log(error)
      }
    }
    onMounted(() => {
      getBlogs();
    })



    return {
      blog: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
