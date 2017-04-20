(function(){
    'use strict';
angular
.module('app').controller('mainController', mainController);


mainController.$inject = [];
function mainController(){
    var vm = this;
    vm.person = {};
    vm.classification = '';
    vm.ageGroup = '';
    vm.heighGroup = '';

    vm.classifyPerson = classifyPerson;

    function classifyPerson(){
        
        if(vm.person.age >= 0 && vm.person.age <= 17){
               vm.ageGroup ='Child';     
            }else if(vm.person.age >= 18 && vm.person.age <= 28){
                 vm.ageGroup ='Teenager';  
            } else if(vm.person.age >= 29 && vm.person.age <= 40){
                 vm.ageGroup ='Adult';  
            }else{
                 vm.ageGroup ='Senior';  
            }
        
            if(vm.person.height >= 0 && vm.person.height <= 1.5){
               vm.heighGroup ='Short';     
            }else if(vm.person.height >= 1.5 && vm.person.height <= 1.8){
                 vm.heighGroup ='Average';  
            }else{
                 vm.heighGroup ='Tall';  
            }
        
            vm.classification =  vm.ageGroup + ' & ' + vm.heighGroup;
    }    
}
})()