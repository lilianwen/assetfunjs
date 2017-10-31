import assert from "assert";
//import SubjectQuery from "../../lib";
import {Apis, ChainConfig} from "fidchainjs-ws";
//import {GetSubjectsByName} from "../../lib/chain/src/SubjectQuery"
import {GetSubjectById, GetSubjectsByName, GetSubjectsOrderById, 
    GetSubjectsByStatus, GetSubjectsByCreator, GetSubjectsByCreateTime, 
    GetSubjectsByVoteEndTime, GetSubjectVotesByVoter, GetSubjectVotesBySubjectId, 
    GetSubjectEventsBySubjectId, GetSubjectEventsByOperator,
    FrontPageGetSubjectsOrderByVoteEndTime,MarketGetSubjectsOrderByVoteEndTime,
    MyGetSubjectsOrderByVoteEndTime } from "../../lib"

describe("SubjectQuery functions test", () => {

	//let cs = "ws://106.15.202.130:11011";
  let cs = "ws://192.168.1.221:11011";
	before(function() {
            return Apis.instance(cs, true).init_promise.then(function (result) {
                console.log("conneted to ws://106.15.202.130:11011")
            });
        });

	it("Get subjects by id", function(){
        return new Promise(function(resolve, reject){
            GetSubjectById("1.16.0").then(function(subject){
           		console.log(subject);
                if (subject) {
           		    resolve()
                }else{
           			reject(Error("there is no subject whose id is 1.16.1."))
           		}	
           })
        })
    })

	it("Get subjects by name", function(){
        return new Promise(function(resolve, reject){
            GetSubjectsByName(1,10,"bitcoin_up_20006").then(function(subjects){
           		console.log(subjects);
                if (subjects) {
           		    resolve()
                }else{
           			reject(Error("there is no subject named bitcoin_up_20006."))
           		}	
           })
        })
    })

    
    it("Get subjects order by id", function(){
        return new Promise(function(resolve, reject){
            GetSubjectsOrderById(1,10).then(function(subjects){
           		console.log(subjects);
                if (subjects) {
           		    resolve()
                }else{
           			reject(Error("there is no subject named bitcoin_up_20006."))
           		}	
           })
        })
    })
    
    it("Get subjects by status", function(){
        return new Promise(function(resolve, reject){
            GetSubjectsByStatus(1,10,"create_status").then(function(subjects){
           		console.log(subjects);
                if (subjects) {
           		    resolve()
                }else{
           			reject(Error("there is no subject named bitcoin_up_20006."))
           		}	
           })
        })
    })

    it("Get subjects by creator", function(){
        return new Promise(function(resolve, reject){
            GetSubjectsByCreator(1,10,"1.2.19").then(function(subjects){
           		console.log(subjects);
                if (subjects) {
           		    resolve()
                }else{
           			reject(Error("there is no subject named bitcoin_up_20006."))
           		}	
           })
        })
    })

    it("Get subjects by creat time", function(){
        return new Promise(function(resolve, reject){
            GetSubjectsByCreateTime(1,10,"2017-10-20T07:14:57","2017-10-21T07:14:57").then(function(subjects){
           		console.log(subjects);
                if (subjects) {
           		    resolve()
                }else{
           			reject(Error("there is no subject named bitcoin_up_20006."))
           		}	
           })
        })
    })

    it("Get subjects by vote end time", function(){
        return new Promise(function(resolve, reject){
            GetSubjectsByVoteEndTime(1,10,"2018-01-13T19:46:04","2019-01-13T19:46:04").then(function(subjects){
           		console.log(subjects);
                if (subjects) {
           		    resolve()
                }else{
           			reject(Error("there is no subject named bitcoin_up_20006."))
           		}	
           })
        })
    })
    
    it("Front page get subjects by vote end time", function(){
        return new Promise(function(resolve, reject){
            FrontPageGetSubjectsOrderByVoteEndTime({"start":1,"limit":100,"direction":1,"quote":"BTC","status":"create_status","account_name_or_id":"test2"}).then(function(subjects){
              console.log(subjects);
                if (subjects) {
                  resolve()
                }else{
                reject(Error("there is no subjects."))
              } 
           })
        })
    })

    it("Market get subjects by vote end time", function(){
        return new Promise(function(resolve, reject){
            MarketGetSubjectsOrderByVoteEndTime({"start":1,"limit":100,"direction":1,"quote":"BTC","status":"create_status","account_name_or_id":"test2"}).then(function(subjects){
              console.log(subjects);
                if (subjects) {
                  resolve()
                }else{
                reject(Error("there is no subjects."))
              } 
           })
        })
    })

    it("My get subjects by vote end time", function(){
        return new Promise(function(resolve, reject){
            MyGetSubjectsOrderByVoteEndTime({"start":1,"limit":100,"direction":1,"quote":"BTC","status":"create_status","account_name_or_id":"test2"}).then(function(subjects){
              console.log(subjects);
                if (subjects) {
                  resolve()
                }else{
                reject(Error("there is no subjects."))
              } 
           })
        })
    })

    
})