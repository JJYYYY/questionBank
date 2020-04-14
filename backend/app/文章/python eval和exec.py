"""
eval
"""
# x=7
# result=eval("3*x")
# print(result) #输出21
# result=eval("3*x",{"x":5}) #如果写了第二个参数，但没有定义表达式中的变量,即使全局定义了，也会报未定义
# print(result) #输出15
# print(x)      #输出7
# result=eval("3*x",{"x":5},{"x":10})#eval不会管第2 3个参数表达式是否合乎语法 只要表达式1中的变量在第2或第3个参数中定义即可
# print(result)  #输出15
# print(x)    #输出7

"""
exec
"""
result=exec('print("hello world")')
print(result) #返回值为none

exec("""for i in range(5):
            print("iter time:%d"%i)
""") #多行语句需要遵守python的格式规定

x=7

exec('print(x+3)') #输出10

x=7
exec("x=10")
print(x) #输出10，会改变外部的变量

result=exec("return x+10",{"x":20})#无法直接return
result=exec("x+10",{"x":20})
print(result)
print(x) #输出7 并不会改变外部的变量

result=exec("x+10",{},{"x":20})
print(result)
print(x) #输出7 并不会改变外部的变量