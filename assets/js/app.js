var cl = console.log;

// this (key in side method) >> it always pointer to closest parent object

// this is nothing but the object from which method (in which we are using this  keyword) is inherited

var person = {
    fname : "johne",
    lname: "doe",
    profile : "MEAN Stack",
    place : "puna",
    candrive : true,
    
    fullName : function(){
        // return person.fname + " " + person.lname;
        cl(this);
        return this.fname + " " + this.lname;
    },
    child : {
    fname : "tony ",
    lname : "stark",
    nickName : "IronMan",
    indu : "stark indu",
    age : 55,

    fullName : function(){
       // return person.child.fname + " " + person.child.lname;
       cl(this);
        return this.fname + " " + this.lname;
    },
    grandchild : {
        fname : "balaji",
        lname : "patil",
        nickName : "balue",
        age : "29",

        fullName : function(){
            cl(this)
          return  this.fname + " " +  this.lname;
        },
    },
},
    

}

var getValueFullName = person.fullName();
cl(getValueFullName);

var getvalueChildFullname = person.child.fullName();
cl(getvalueChildFullname);

var getvalueGrandChildFullname = person.child.grandchild.fullName();
 cl(getvalueGrandChildFullname);
