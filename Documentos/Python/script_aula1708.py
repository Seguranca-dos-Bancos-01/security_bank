Python 3.11.4 (tags/v3.11.4:d2340ef, Jun  7 2023, 05:45:37) [MSC v.1934 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
import psutil
psutil.cpu_percent(interval=1, percpu=True)
[7.8, 1.6, 0.0, 4.7, 0.0, 0.0, 0.0, 0.0]
psutil.cpu_count()
8
psutil.cpu_
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    psutil.cpu_
AttributeError: module 'psutil' has no attribute 'cpu_'


















psutil.cpu_count(logical=False)
4
psutil.cpu_freq()
scpufreq(current=2419.0, min=0.0, max=2419.0)
psutil.disk_partitions()
[sdiskpart(device='C:\\', mountpoint='C:\\', fstype='NTFS', opts='rw,fixed', maxfile=255, maxpath=260)]
psutil.disk_usage('/')
sdiskusage(total=254721126400, used=159284785152, free=95436341248, percent=62.5)
psutil.disk_usage('/')[3]
62.5
psutil.virtual_memory()
svmem(total=8362713088, available=3082129408, percent=63.1, used=5280583680, free=3082129408)
psutil.virtual_memory()
svmem(total=8362713088, available=2916081664, percent=65.1, used=5446631424, free=2916081664)
memtot = psutil.virtual_memory()[0]
memused = psutil.virtual_memory()[3]
print("{:.2f} {:.2f}".format(memtot, memused))
8362713088.00 5353455616.00
psutil.swap_memory()
sswap(total=7516192768, used=145985536, free=7370207232, percent=1.9, sin=0, sout=0)
psutil.disk_io_countes()
Traceback (most recent call last):
  File "<pyshell#23>", line 1, in <module>
    psutil.disk_io_countes()
AttributeError: module 'psutil' has no attribute 'disk_io_countes'. Did you mean: 'disk_io_counters'?
KeyboardInterrupt
psutil.disk_io_counters()
sdiskio(read_count=190013, write_count=71841, read_bytes=4981646848, write_bytes=2227535360, read_time=217, write_time=36)
psutil.sensors_battery()
sbattery(percent=58, secsleft=7683, power_plugged=False)
psutil.sensors_baterry()[1]/3600
Traceback (most recent call last):
  File "<pyshell#26>", line 1, in <module>
    psutil.sensors_baterry()[1]/3600
AttributeError: module 'psutil' has no attribute 'sensors_baterry'. Did you mean: 'sensors_battery'?
psutil.sensors_battery()[1]/3600
2.6036111111111113
0.60*60
36.0
import datetime
datetime.datetime.fromtimestamp(psutil.boot_time()).strftime("%Y-%m-%d %H:%M:%S")
'2023-08-17 12:37:30'
datetime.datetime.fromtimestamp(psutil.boot_time()).strftime("%Y-%m-%D %H:%M:%S")
'2023-08-08/17/23 12:37:30'
>>> datetime.datetime.fromtimestamp(psutil.boot_time()).strftime("%Y-%m-%d %H:%M:%S")
'2023-08-17 12:37:30'
>>> psutil.users()
[suser(name='tfn40', terminal=None, host=None, started=1692286664.2393177, pid=None)]
>>> psutil.pids()
[0, 4, 108, 148, 672, 908, 1048, 1072, 1124, 1132, 1156, 1228, 1352, 1380, 1388, 1496, 1508, 1540, 1592, 1672, 1724, 1748, 1756, 1776, 1788, 1908, 1944, 1952, 1992, 2000, 2012, 2104, 2112, 2120, 2132, 2164, 2192, 2200, 2360, 2440, 2452, 2696, 2704, 2756, 2768, 2816, 2900, 3028, 3168, 3200, 3220, 3232, 3236, 3296, 3304, 3316, 3484, 3512, 3580, 3584, 3600, 3704, 3720, 3784, 3808, 3960, 3984, 4060, 4080, 4164, 4188, 4240, 4248, 4264, 4272, 4280, 4288, 4296, 4328, 4348, 4356, 4468, 4516, 4556, 4564, 4600, 4604, 4616, 4680, 4688, 4700, 4732, 4804, 4864, 4932, 4944, 4956, 4996, 5032, 5040, 5104, 5144, 5184, 5220, 5232, 5240, 5272, 5288, 5380, 5480, 5488, 5540, 5552, 5576, 5620, 5648, 5780, 5808, 6320, 6384, 6420, 6696, 6908, 7048, 7068, 7540, 7588, 7720, 7932, 7976, 8268, 8356, 8368, 8404, 8408, 8416, 8476, 8504, 8560, 8648, 8740, 8832, 8876, 8952, 9112, 9212, 9288, 9320, 9340, 9384, 9472, 9688, 9756, 9836, 9864, 9900, 9920, 10020, 10112, 10132, 10160, 10212, 10448, 10556, 10736, 10784, 11044, 11064, 11068, 11116, 11184, 11292, 11300, 11412, 11492, 11560, 11664, 11680, 11756, 11804, 11812, 11984, 12196, 12368, 12644, 12740, 12896, 12960, 13152, 13300, 13304, 13380, 13388, 13576, 13728, 13748, 13796, 13804, 13824, 13936, 14304, 14320, 14536, 14616, 14800, 15144, 15228, 15264, 15548, 15832, 16092, 16156, 16268, 16660, 17392]
>>> psutil.cpu_used()[1]
Traceback (most recent call last):
  File "<pyshell#35>", line 1, in <module>
    psutil.cpu_used()[1]
AttributeError: module 'psutil' has no attribute 'cpu_used'. Did you mean: 'cpu_freq'?
>>> import psutil
>>> psutil.cpu_used()[1]
Traceback (most recent call last):
  File "<pyshell#37>", line 1, in <module>
    psutil.cpu_used()[1]
AttributeError: module 'psutil' has no attribute 'cpu_used'. Did you mean: 'cpu_freq'?
