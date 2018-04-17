
import * as Magix from "../lib/magix"


module.exports = Magix.View.extend({
  tmpl: function (data) {
    return 'test'
  },
  ctor: function (opt) {
    console.log(opt)
  },
  render: function () {
    this.updater.digest()
  }
})