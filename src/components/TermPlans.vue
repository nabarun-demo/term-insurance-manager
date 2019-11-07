<template>
  <div class="row">
    <div class="list-group col-md-2 m-5">
      <router-link
        class="list-group-item"
        v-for="insurer in lstInsurer"
        :key="insurer.index"
        to="/allplans"
        >{{ insurer.Insurers }}</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TermPlans",
  data() {
    return { lstInsurer: [{Insurers:"HDFC Life"},{Insurers:"MAX Bupa"},{Insurers:"ICICI"},{Insurers:"IDBI"},{Insurers:"SBI"}] };
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/11l98w")
      .then(response => {
        // handle success
        // console.log(response.data);
        this.lstInsurer = response.data;
      })
      .catch(function(error) {
        // handle error
        // eslint-disable-next-line
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
};
</script>
