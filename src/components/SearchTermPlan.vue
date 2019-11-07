<template>
<div class="input-group md-form form-sm form-2 pl-0">
  <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Type insurer name to search" 
  aria-label="Search" v-model="plan" @input="searchPlan"> 
  <!-- <div class="input-group-append">
    <span class="input-group-text lime lighten-2" id="basic-text1"><i class="fas fa-search text-grey"
        aria-hidden="true"></i></span>
  </div> -->
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

<style scoped>
.input-group.md-form.form-sm.form-2 input {
border: 1px solid #bdbdbd;
border-top-left-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;
}

.input-group.md-form.form-sm.form-2 input.lime-border {
border: 1px solid #cddc39;
}
</style>
