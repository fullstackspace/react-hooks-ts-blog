<template>
  <div class="profile-page">
    <div class="row">
      <!-- 左 -->
      <div
        class="col-sm-6 col-md-5 col-12"
        style="padding: 16px; padding-top: 50px"
      >
        <div class="row">
          <userInfo />
        </div>
      </div>
      <!-- 右 -->
      <div class="pt-0 pt-sm-3 col-sm-6 col-md-7 col-12">
        <div class="row">
          <div
            class="col col-12"
            style="padding: 16px; padding-top: 50px"
          >
            <div class="row">
              <folderInfo></folderInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userInfo from '../components/profileComponent/userInfo'
import folderInfo from '../components/profileComponent/folderInfo'
export default {
  components: {
    userInfo,
    folderInfo,
  },
}
</script>

<style lang="scss" scoped>
</style>