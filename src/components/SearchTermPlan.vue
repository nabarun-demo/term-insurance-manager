<template>
  <div>
    <div class="col-md-9"></div>
    <div class="pull-right">
      <input
        type="text"
        v-model="plan"
        placeholder="Search Plan"
        @change="searchPlan"
      />
      <button @click="searchPlan">
        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPlan",
  data() {
    return { plan: "" };
  },
  methods: {
    searchPlan() {
      this.$emit("search-plan", this.plan);
    }
  }
};
</script>

<style></style>
