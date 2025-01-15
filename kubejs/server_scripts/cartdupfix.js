ServerEvents.recipes((e) => {
 
    e.remove({ id: "farm_and_charm:supply_cart" }) /// remove supply cart
    e.remove({ id: "farm_and_charm:plow" }) /// remove plow

    e.remove({ id: "meadow:watering_can" }) /// remove watering can
  
  });