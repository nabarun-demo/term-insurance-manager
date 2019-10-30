<template>
  <div>
    <h1>Term InsurancePlans in India</h1>
    <table class="table table-bordered">
      <thead class="table-primary">
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
        <tr v-for="pd in planDetails" :key="pd.InsurerId">
          <td>{{ pd.Insurers }}</td>
          <td>{{ pd.TermPlans }}</td>
          <td>{{ pd.MaximumMaturity }}</td>
          <td>{{ pd.MinSumAssured }}</td>
          <td>{{ pd.ClaimSettlement }}</td>
          <td>{{ pd.PremiumPerMonth }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TermDetails",
  data() {
    return { planDetails: [] };
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/11l98w")
      .then(response => {
        // handle success
        this.planDetails = response.data;
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
