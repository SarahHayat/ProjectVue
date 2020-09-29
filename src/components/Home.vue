<template>
  <div>
    <Compteur></Compteur>
    <br>
    <hr>
    <Liste></Liste>
    <br>
    <hr>
    <Fruit></Fruit>
    <br>
    <hr>
    <Films></Films>


  </div>
</template>

<script>
import Liste from "@/components/Liste";
import Compteur from "@/components/Compteur";
import Fruit from "@/components/Fruit";
import Films from "@/components/Films";

export default {
  name: "Home",
  components: {
    Liste,
    Compteur,
    Fruit,
    Films,
  }
}
</script>

<style scoped>

</style>