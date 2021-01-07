class ClassName {

    static propertyName: string = "static property value";
    
    public propertyName: string = "default value";

    protected protectedPropertyName: string = "default protected value";

    private privatePropertyName: string = "default private value";

    constructor(){
        this.propertyName = "default value";
    }

    methodName(){
        this.privatePropertyName = "new property name";
    }

    readStatic(){
        return ClassName.propertyName;
    }

    static readStatic(){
        this.propertyName;
    }

}

class AnotherClassName extends ClassName {

    anotherMethodName(){
        this.protectedPropertyName = "another value";
    }

}

const classInstance = new ClassName();
classInstance.propertyName = "1";

const anotherClassInstance = new AnotherClassName();
anotherClassInstance.propertyName = "2";

ClassName.propertyName = "3";

console.log( ClassName.propertyName );
console.log( classInstance.propertyName, classInstance.readStatic() );
console.log( anotherClassInstance.propertyName, classInstance.readStatic() );