(function (){
    class Person{
        // TS add modifier
        /*
        *   public
        *   private
        *   protected
        *
        * */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /*
        *   getter
        *   setter
        *       - Accessor/computed properties
        * */


        // getName(){
        //     return this._name;
        // }
        //
        // setName(value: string){
        //     this._name = value;
        // }
        //
        // getAge(){
        //     return this._age;
        // }
        //
        // setAge(value: number){
        //     if(value >= 0){
        //         this._age = value;
        //     }
        // }

        get name(){
            // console.log('get name() executed！！');
            return this._name;
        }

        set name(value){
            this._name = value;
        }

        get age(){
            return this._age;
        }

        set age(value){
            if(value >= 0){
                this._age = value
            }
        }
    }

    const per = new Person('carrot', 18);

    // per.setName('cabbage');
    // per.setAge(-33);

    per.name = 'cabbage';
    //cannot change
    per.age = -33;

    // console.log(per);


    class A{
        protected num: number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A{

        test(){
            console.log(this.num);
        }

    }

    const b = new B(123);
    // b.num = 33;


    /* class C{

         name: string;
         age: number

         // 可以直接将属性定义在构造函数中
         constructor(name: string, age: number) {
             this.name = name;
              this.age = age;
         }

     }*/

    class C{

        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {
        }

    }

    const c = new C('xxx', 111);

    console.log(c);

})();