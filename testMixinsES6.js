var enableDisable = {
  activar: function() {
    this.activo = true;
  },

  desActivar: function() {
    this.activo = false;
  }
};

var io = {
  toString: function() {
    return this.descripcion + " - Activo: " + this.activo;
  },

  superFuncion: function() {
    return "superFuncionDelMixin"
  }
};

class superClase {

  constructor() {
    this.superProperty = "a"
  }

  superFunction() {
    return "superFuncion"
  }

}

class unaClase extends superClase {

  constructor(descripcion) {
    super()
    mixin(this, enableDisable, io);
  	this.descripcion = descripcion;
  }

}

function mixin(objeto, ...mixins) {
  mixins.forEach( it => bindMixin(objeto, it))
}

function bindMixin(objeto, mixin) {
  for (x in mixin) {
    objeto[x] = mixin[x];
  }
}

function test() {
  var unObjeto = new unaClase("objeto");
  console.log(unObjeto.superFunction());
  console.log(unObjeto.toString());
  unObjeto.activar();
  console.log(unObjeto.toString());
  unObjeto.desActivar();
  console.log(unObjeto.toString());
}
