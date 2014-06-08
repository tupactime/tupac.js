var Tupac = function(i) {
	
  offset = 842655780;
  date = new Date();
 
  date.setTupac = function(i) {
    this.setTime((i + offset) * 1000);
	return this.getTupac();
  }

  date.getTupac = function() {
    return Math.floor(this.getTime()/1000) - offset;
  }

  if (i != null) date.setTupac(i);

  return date;

};