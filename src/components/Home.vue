<template>
  <div>
    <HelloWorld></HelloWorld>
    <br>
    <hr>
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
import HelloWorld from "@/components/HelloWorld";
import Liste from "@/components/Liste";
import Compteur from "@/components/Compteur";
import Fruit from "@/components/Fruit";
import Films from "@/components/Films";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Liste,
    Compteur,
    Fruit,
    Films,
  }
}
</script>

<style scoped>

</style>