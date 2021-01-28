<template>
  <div class="col col-12" style="padding-top: 0">
    <v-card class="folder-card ma-1" min-height="282px">
      <v-card-title class="pa-5 pb-3">Files</v-card-title>
      <v-card-text class="pa-5 pt-0">
        <v-tabs v-model="tab">
          <v-tab v-for="fold in folderList" :key="fold.name">
            {{ fold.name }}
          </v-tab>
        </v-tabs>
      </v-card-text>
      <v-divider></v-divider>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="headline"> An awesome title </v-card-title>
            <v-card-text>
              <p>
                Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
                rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis,
                ligula mi congue nunc, vitae euismod ligula urna in dolor.
                Praesent congue erat at massa.
              </p>

              <p>
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
                egestas, neque sit amet convallis pulvinar, justo nulla eleifend
                augue, ac auctor orci leo non est. Etiam sit amet orci eget eros
                faucibus tincidunt. Donec sodales sagittis magna.
              </p>

              <p class="mb-0">
                Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque
                suscipit. Fusce pharetra convallis urna.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="headline"> An even better title </v-card-title>
            <v-card-text>
              <p>
                Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
                nisi, condimentum viverra felis nunc et lorem. Sed hendrerit.
                Maecenas malesuada. Vestibulum ullamcorper mauris at ligula.
                Proin faucibus arcu quis ante.
              </p>

              <p class="mb-0">
                Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed
                magna purus, fermentum eu, tincidunt eu, varius ut, felis.
                Aliquam lobortis. Suspendisse potenti.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: '0',
      tabModel: '0',
      folderList: [
        {
          name: 'Work',
        },
        {
          name: 'Private',
        },
        {
          name: 'Social',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>