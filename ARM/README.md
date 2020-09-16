# Build NGINX Unit on ARM (Raspberry PI 3 / 4)

This was tested on 

```
Linux raspberrypi 4.19.46-v7+ #867 SMP Fri Jun 7 18:08:46 BST 2019 armv7l GNU/Linux
No LSB modules are available.
Distributor ID:	Raspbian
Description:	Raspbian GNU/Linux 10 (buster)
Release:	10
Codename:	buster
```

## Install build dependencies

```
apt install gcc-8-bas
apt install libssl-dev
apt install build-essential 
```

## Download Source Code
```
 hg clone https://hg.nginx.org/unit
 cd unit
```

For more options see:
https://unit.nginx.org/installation/#obtaining-sources

## Configure

```
./configure --prefix=/usr/local
```

## Make / Install
```
make install
```

## Check installation

```
cd /usr/local
unitd
```

```
 ps -elf | grep unit
1 S root     22408     1  0  80   0 -   624 do_epo Sep16 ?        00:00:00 unit: main v1.20.0 [unitd]
5 S nobody   22410 22408  0  80   0 -   624 do_epo Sep16 ?        00:00:00 unit: controller
5 S nobody   22411 22408  0  80   0 -   624 do_epo Sep16 ?        00:00:00 unit: router
0 S root     22815  1294  0  80   0 -  1747 pipe_w 00:06 pts/0    00:00:00 grep --color=auto unit

unitd --version
unit version: 1.20.0
configured as ./configure --prefix=/usr/local
```

## Connect to the API
```
curl --unix-socket /usr/local/control.unit.sock localhost/config

{
	"listeners": {},
	"applications": {}
}
```

