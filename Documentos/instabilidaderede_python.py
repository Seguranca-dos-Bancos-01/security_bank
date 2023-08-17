Python 3.11.4 (tags/v3.11.4:d2340ef, Jun  7 2023, 05:45:37) [MSC v.1934 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
psutil.net_io_counters
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    psutil.net_io_counters
NameError: name 'psutil' is not defined
IM
Traceback (most recent call last):
  File "<pyshell#1>", line 1, in <module>
    IM
NameError: name 'IM' is not defined

import psui
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    import psui
ModuleNotFoundError: No module named 'psui'
t
>>> 
>>> import psutil
>>> psutil.net_io_counters
<function net_io_counters at 0x0000017159AF7100>
>>> psutil.net_io_counters(pernic=False, nowrap=True)
snetio(bytes_sent=31381168, bytes_recv=152514048, packets_sent=127844, packets_recv=141744, errin=0, errout=0, dropin=0, dropout=0)
>>> psutil.net_io_counters[7]
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    psutil.net_io_counters[7]
TypeError: 'function' object is not subscriptable
>>> net = psutil.net_io_counters
>>> net[0]
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    net[0]
TypeError: 'function' object is not subscriptable
>>> net[7]
Traceback (most recent call last):
  File "<pyshell#11>", line 1, in <module>
    net[7]
TypeError: 'function' object is not subscriptable
>>> net = psutil.net_io_counters()
>>> net[7]
0
>>> entrada = net[5]
>>> entrada
0
>>> saida = net[6]
>>> isa = print(f'Errin:',{entrada}%)
SyntaxError: incomplete input
>>> isa = print(f'Errin:,{entrada}%')
Errin:,0%
>>> isa = print(f'Errin:{entrada}%')
Errin:0%
