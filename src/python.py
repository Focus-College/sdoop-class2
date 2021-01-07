class ClassName:
    def __init__(self):
        self.propertyName = "default value"
        self._propertyName = "protected python value"
        self.__privateName = "private python value"

    def methodName(self):
        # do something

class AnotherClass(ClassName):
    def anotherMethodName(self):

classInstance = ClassName()
