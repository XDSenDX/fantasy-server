ServerEvents.recipes(event => { 
event.shaped('farm_and_charm:scarecrow', [ ///scarecrow recipe
    'ABC', 
    ' B ',
	' E '
  ], {
    A: 'farm_and_charm:strawberry', 
    B: 'minecraft:hay_block',  
    C: 'vinery:red_grape',  
	E: 'realisticforging:finishedlargewoodhandle'
  }
)

});
ServerEvents.recipes((e) => { 
  e.remove({ id: "farm_and_charm:scarecrow" }) /// remove duplicate scarecrow recipe
  


});
