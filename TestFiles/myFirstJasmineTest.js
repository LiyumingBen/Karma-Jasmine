describe("A suite of basic functions", function () {
    it("test", function () {
        expect("abc").toEqual(TT());
    });
});

describe("My first Jasmine test", function() {
  it("a spec with an expectation", function() {
    expect(1).toBe(1);
    expect(1===1).toBe(true);
    expect('a').not.toBe('b');
  });
  
  it("an other spec in current suite", function() {
      expect(true).toBe(true);
  });
});

describe("My first Jasmine test", function() {
  it("nothing", function() {
  });
});

//toBe：基本类型判断

 it("toBe and not.toBe", function() {
    expect(1).toBe(1);
    expect('a').not.toBe('b');
  });
  
//toEqual: toEqual有两种用法，对于基本的类型，toEqual相当于toBe

  it("toEqual and not.toEqual for basic types", function(){
    expect(1).toEqual(1);
    expect('a').not.toEqual('b');
  })
  
//toEqual还可以用来判断对象：

it("toEqual and not.toEqual for objects", function(){
    var o1 = {
        name: "Jack",
        age: 12
    };
    
    var o2 = {
        name: "Jack",
        age: 12
    };
    
    var o3 = {
        name: "Tom",
        age: 13
    };
      
    expect(o1).toEqual(o2);
    expect(o1).not.toEqual(o3);
  })
  
//toMatch: 使用正则表达式判断
  it("toMatch and not.toMatch", function(){
    var str = "Michael Jackson";
    
    expect(str).toMatch(/michael/i);
    expect(str).not.toMatch(/tom/i);
  })
  
//oBeDefine: 判断是否是undefined
it("toBeDefined and not.toBeDefined", function(){
    var student = {
        name: "Jack",
        age: 12
    };
    
    expect(student.name).toBeDefined();
    expect(student.gender).not.toBeDefined();
  })
  
//toBeUndefined: 判断是否是undefined，与toBeDefine相反
it("toBeUndefined and not.toBeUndefined", function(){
    var student = {
        name: "Jack",
        age: 12
    };
    
    expect(student.gender).toBeUndefined();
    expect(student.name).not.toBeUndefined();
  })
  
//toBeNull：判断是否是null
it("toBeNull and not.toBeNull", function(){
    var student = {
        name: "Jack",
        age: 12,
        deskmate: null
    };
    
    expect(student.deskmate).toBeNull();
    expect(student.name).not.toBeNull();
  });
//toBeTruthy：判断是否能转换成bool型，判断的是否是True
it("toBeTruthy and not.toBeTruthy", function(){
    var stu1;
    var stu2 = "Tom";
    
    expect(true).toBeTruthy();
    expect(stu2).toBeTruthy();
    expect(stu1).not.toBeTruthy();
    expect(undefined).not.toBeTruthy();
  });
  
//toBeTruthy：判断是否能转换成bool型，判断的是否是False
it("toBeFalsy and not.toBeFalsy", function(){
    var stu1;
    var stu2 = "Tom";
    
    expect(true).not.toBeFalsy();
    expect(stu1).toBeFalsy();
    expect(stu2).not.toBeFalsy();
    expect(undefined).toBeFalsy();
  });

//toContain： 判断集合是否包含（可以是普通类型，和可以是对象）
it("toContain and not.toContain", function(){
    var arrStr = ["Jack", "Tom", "Mary"];
    var arrObj = [{name:"Jack",age:21}, {name:"Tom",age:22}];

    expect(arrStr).toContain("Jack");
    expect(arrStr).not.toContain("jack");
    
    expect(arrObj).toContain({name:"Jack",age:21});
    expect(arrObj).not.toContain({name:"jack",age:21});
  });

//toBeLessThan: 判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）
  it("toBeLessThan and not.toBeLessThan", function(){
    expect(1).toBeLessThan(1.1);
    expect("b").not.toBeLessThan("a");
  });
 
//toBeGreaterThan: 判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）

  it("toBeGreaterThan and not.toBeGreaterThan", function(){
    expect(1).not.toBeGreaterThan(1.1);
    expect("b").toBeGreaterThan("a");
  });
  
//toBeCloseTo：判断数字是否相似（第二个参数为小数精度，默认为2位）

it("toBeCloseTo and not.toBeCloseTo", function(){
    var a = 1.1;
    var b = 1.5;
    var c = 1.455;
    var d = 1.459;
    
    expect(a).toBeCloseTo(b, 0);
    expect(a).not.toBeCloseTo(c, 1);
    expect(c).toBeCloseTo(d);
  });
  
//toThrow： 判断是否抛出异常
it("toThrow and not.toThrow", function(){
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });
  
//toThrowError: 判断是否抛出了指定的错误

it("toThrowError and not.toThrowError", function() {
    var foo = function() {
      throw new TypeError("foo bar baz");
    };

    expect(foo).toThrowError("foo bar baz");
    expect(foo).toThrowError(/bar/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, "foo bar baz");
  });
  
/*
Jasmine允许在执行测试集/测试用例的开始前/结束后做一些初始化/销毁的操作。

Setup方法：

beforeAll：每个suite（即describe）中所有spec（即it）运行之前运行
beforeEach：每个spec（即it）运行之前运行
Teardown方法：

afterAll：每个suite（即describe）中所有spec（即it）运行之后运行
afterEach：每个spec（即it）运行之后运行


*/

(function(){
    var globalCount;
    describe("Setup and Teardown suite 1", function() {
      var suiteGlobalCount;
      var eachTestCount;
      
      beforeAll(function() {
        globalCount = 0; // 试试注释这行代码，看看对运行结果的影响
        suiteGlobalCount = 0;
        eachTestCount = 0;
      });

      afterAll(function() {
        //globalCount = 0; // 试试取消这行代码的注释，看看对运行结果的影响
        suiteGlobalCount = 0;
      });

      beforeEach(function() {
        globalCount++;
        suiteGlobalCount++;
        eachTestCount++;
      });

      afterEach(function() {
        eachTestCount = 0;
      });
        
      it("Spec 1", function() {
        expect(globalCount).toBe(1);
        expect(suiteGlobalCount).toBe(1);
        expect(eachTestCount).toBe(1);
      });
      
      it("Spec 2", function() {
        expect(globalCount).toBe(2);
        expect(suiteGlobalCount).toBe(2);
        expect(eachTestCount).toBe(1);
      });
    });

    describe("Setup and Teardown suite 2", function() {
      beforeEach(function() {
        globalCount += 2;
      });
      
      it("Spec 1", function() {
        expect(globalCount).toBe(4);
      });
    });
})();

/*
示例中的第一个describe，在beforeAll中初始化了各个计数变量，在beforeEach中设置每次执行it后，各个计数变量自增1，在afterAll中，重置了全局性的计数变量（尝试取消afterAll中对globalCount的注释，看看运行结果的变化），在afterEach中，重置了局部计数变量。

第二个describe，在beforeEach中对全局变量globalCount自增2，上述代码中，第一个describe中afterAll中没有对globalCount进行重置，因此执行完第一个describe后，globalCount的值为2，因此第二个describe的globalCount的初始值即为2。

 

在beforeEach/it/afterEach中，还可以使用this关键字定义变量，需要注意的是，使用this关键字声明的变量，仅在beforeEach/it/afterEach这个过程中传递：
*/

(function(){
    describe("Test 'this'", function() {
      beforeEach(function() {
        this.testCount = this.testCount || 0;
        this.testCount++;
      });

      afterEach(function() {
        //this.testCount = 0; //无论是否有这行，结果是一样的，因为this指定的变量只能在每个spec的beforeEach/it/afterEach过程中传递
      });
        
      it("Spec 1", function() {
        expect(this.testCount).toBe(1);
      });
      
      it("Spec 2", function() {
        expect(this.testCount).toBe(1);
      });
    });
})();

/*
xdescribe/xit的使用
在实际项目中，需要由于发布的版本需要选择测试用例包，xdescribe和xit能很方便的将不包含在版本中的测试用例排除在外。不过xdescribe和xit略有不同：

xdescribe：该describe下的所有it将被忽略，Jasmine将直接忽略这些it，因此不会被运行
xit：运行到该it时，挂起它不执行
*/

(function(){
    xdescribe("Test xdescribe", function() {
      it("Spec 1", function() {
        expect(1).toBe(1);
      });
      
      it("Spec 2", function() {
        expect(2).toBe(2);
      });
    });
    
    describe("Test xit", function() {
      it("Spec 1", function() {
        expect(1).toBe(1);
      });
      
      xit("Spec 2", function() {
        expect(2).toBe(1);
      });
      
      xit("Spec 3", function() {
        expect(3).toBe(3);
      });
    });
})();





