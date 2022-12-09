<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div v-if="blog" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ blog.title }}</h1>
          <h4 class="modal-title fs-5" id="exampleModalLabel">{{ blog.body }}</h4>
          <h4 class="modal-title fs-5" id="exampleModalLabel">{{ blog.creator.name }}</h4>
          <img :src="blog.creator.picture" alt="">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {
    return {
      blog: computed(() => AppState.activeBlog)
    }
  }
};
</script>


<style lang="scss" scoped>

</style>