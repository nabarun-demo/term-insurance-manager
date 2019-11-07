<template>
  <div class="row">
    <h3 class="mt-3 mb-3">Term Insurance Plans in India</h3>
    <SearchPlan v-on:search-plan="searchplan" class="mb-3" />
    <table class="table table-bordered table-hover table-sm">
      <thead class="table-info">
        <tr>
          <th scope="col">Insurers</th>
          <th scope="col">Term Plans</th>
          <th scope="col">Maximum Maturity</th>
          <th scope="col">Min Sum Assured</th>
          <th scope="col">Claim Settlement</th>
          <th scope="col">Premium (for cover amount 1cr.)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pd in filteredPlan" :key="pd.InsurerId">
          <td>{{ pd.Insurers }}</td>
          <td>{{ pd.TermPlans }}</td>
          <td>{{ pd.MaximumMaturity | unit(" years") }}</td>
          <td>{{ pd.MinSumAssured | amount(["Rs."]) }}</td>
          <td>{{ pd.ClaimSettlement | unit("%") }}</td>
          <td>{{ pd.PremiumPerMonth | amount(["Rs.", "/month"]) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import SearchPlan from "./SearchTermPlan.vue";
export default {
  name: "TermDetails",
  components: {
    SearchPlan
  },
  data() {
    return { planDetails: [], filteredPlan: [] };
  },
  methods: {
    searchplan(plan) {
      console.log("In searchplan " + plan);
      this.filteredPlan = plan
        ? this.planDetails.filter(f => f.Insurers.includes(plan))
        : this.planDetails;
    }
  },
  filters: {
    unit(val, args) {
      return `${val}${args}`;
    },
    amount(val, args) {
      return args.length > 1
        ? `${args[0]}${val}${args[1]}`
        : `${args[0]}${val}`;
    }
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/11l98w")
      .then(response => {
        // handle success
        this.planDetails = response.data;
        this.filteredPlan = response.data;
        // eslint-disable-next-line
        // console.log(response.data);
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

<style></style>
