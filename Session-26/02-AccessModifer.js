class Counter{
    // count=0;          // public data
   
    #count=0;            // private data
    _accountNumber;      // protected data 
    constructor(count, accountNumber){
        this.#count = count
        this._accountNumber = accountNumber
    }
    #increment(){         // private function   
        this.#count++;
    }
    getCount(){          // public function   
        this.#increment()       
        console.log( this.#count)
    }
    // getCount is a class member function which can access private data as well as private function because he is part of class
}
let c = new Counter(5);
c.getCount();
// c.#increment()
// c.#increment()
c.getCount();

// c.#count = 100
c.getCount();



class Salary extends Counter
{
    constructor(count, accountNumber){
        super(count,accountNumber)
    }
}
let s = new Salary(5,100010);
console.log( s._accountNumber);
c._accountNumber  = 1001
// s._accountNumber  = 2001
console.log( s._accountNumber);
