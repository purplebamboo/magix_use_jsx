import * as Magix from "../lib/magix"
import Test from "./test.jsx"

module.exports = Magix.View.extend({
  tmpl: function (data) {
    var a1='"';
    if(data.key==1){
      return (
        <div data-id="2222">
          <Test view-x="2222" m={{a:1111}} class="xxx"/>
          <span class="mmmm" id="2222">1111</span>
          <span onClick={this.testcb.bind(this,{a:222})} test="2">2222</span>
        </div>
      )
      // return `
      //     <div data-id="2222">
      //       <span mx-click="abc()">1111</span>
      //       <span test="2">2222</span>
      //     </div>
      // `

      // return Magix.$vcr('',{},[
      //   Magix.$vcr('div',{
      //     "data-id": "2222"
      //   },'222ddddddddddd')
      // ])

      // return {
      //   "$nc": [
      //     {
      //       "$nck": "",
      //       "$nt": "div",
      //       "$na": [
      //         {
      //           "$nak": "data-id",
      //           "$nav": "2222"
      //         }
      //       ],
      //       "$nam": {
      //         "data-id": "2222"
      //       },
      //       "$nc": [
      //         {
      //           "$nt": "#text",
      //           "$nh": "222ddddddddddd"
      //         }
      //       ],
      //       // "$csp": 27,
      //       // "$tsp": 7,
      //       // "$nh": "222ddddddddddd"
      //     }
      //   ],
      //   "$na": []
      //   // "$nh": "<div data-id=\"2222\">222ddddddddddd</div>"
      // }
    }else{

      return (
        <div data-id="2222">eeeeee</div>
      )

      // return Magix.$vcr('',{},[
      //   Magix.$vcr('div',{
      //     "data-id": "11111"
      //   },'eeeee')
      // ])

      // return {
      //   "$nc": [
      //     {
      //       "$nck": "",
      //       "$nt": "div",
      //       "$na": [
      //         {
      //           "$nak": "data-id",
      //           "$nav": "2222"
      //         }
      //       ],
      //       "$nam": {
      //         "data-id": "2222"
      //       },
      //       "$nc": [
      //         {
      //           "$nt": "#text",
      //           "$nh": "eeeee"
      //         }
      //       ],
      //       // "$csp": 27,
      //       // "$tsp": 7,
      //       // "$nh": "eeeee"
      //     }
      //   ],
      //   "$na": []
      //   // "$nh": "<div data-id=\"2222\">eeeee</div>"
      // }
    }

  },
  ctor: function (opt) {

  },
  render: function () {

    this.updater.digest()
    setTimeout(()=>{
      this.updater.set({
        "key":1
      }).digest()
    },1000)
  },
  testcb: function(data,e){
    console.log(data)
  }
})