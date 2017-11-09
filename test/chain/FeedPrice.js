import assert from "assert";
//import SubjectQuery from "../../lib";
import {Apis, ChainConfig} from "fidchainjs-ws";
//import {GetSubjectsByName} from "../../lib/chain/src/SubjectQuery"
import { GetFeedPrice } from "../../lib"

describe("SubjectQuery functions test", () => {

	//let cs = "ws://106.15.202.130:11013";
  let cs = "ws://192.168.1.221:11011";
	before(function() {
            return Apis.instance(cs, true).init_promise.then(function (result) {
                console.log("conneted to ws://106.15.202.130:11011")
            });
        });

  it("Get Feed Price", function(){
        return new Promise(function(resolve, reject){
            GetFeedPrice("BTC", "USD", "www.okcoin.cn", "1510145580").then(function(price){
              console.log(price);
                if (price) {
                  resolve()
                }else{
                reject(Error("there is no price."))
              } 
           })
        })
    })
    


    
})