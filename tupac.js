var Tupac = Date.extend({
  offset: 842655780
});

Tupac.prototype.setTupac = function(i) {
  this.setTime((i + Tupac.offset) * 1000);   
}

Tupac.prototype.getTupac = function() {
  return Math.floor(this.getTime()/1000) - Tupac.offset;
}