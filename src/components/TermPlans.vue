<template>
  <div>
    <h1>Term Plans</h1>
    <div class="list-group col-md-2">
      <router-link
        class="list-group-item"
        v-for="insurer in lstInsurer"
        :key="insurer.index"
        to="/allplans"
        >{{ insurer }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TermPlans",
  data() {
    return { lstInsurer: ["HDFC Life", "MAX Bupa", "ICICI", "IDBI", "SBI"] };
  }
};
</script>
