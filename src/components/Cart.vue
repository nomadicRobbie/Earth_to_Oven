<template>
  <section class="cart-container">
    <div class="cart-head">
      <h2>Basket</h2>
    </div>
    <div class="cart-total">
      
    </div>
  </section>
</template>
<script>
export default {
  name: "cartItem",
  
  data() {
    return {
      cartTotal: 0,
    };    
  },
  
};
</script>
<style lang="scss">
.cart-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: var(--primary-colour);
  .cart-head {
    color: var(--alt-text-colour);
    height: 100%;
  }
  .cart-total {
    color: var(--alt-text-colour);
  }
}
</style>
