# yate-bts
YateBTS fork with mods for sending USSD messages from the CLI.

  - MT USSD enabled in BTS
  - USSD test module
  - Arbitrary USSD facilities (payloads) can be defined

## Setup

  - Place ussd_test.js in ../yate/scripts/
  - Enable the USSD module within ../etc/yate/javascript.conf
```
[late_scripts]
custom_sms=custom_sms.js
ussd_test=ussd_test.js
```
  - Start Yate, telnet to CLI and send a SS message to a subscriber
```
yate -vvv
telnet 0 5038
control ussd_test callto=234159329821234 tid=1 data=deadbeef
```

## Debugging
```
telnet 0 5038
sniffer on
debug ybts level 9
debug ybts objects on
Debug level: 9, objects: on, local: off, threshold: 10
debug mbts level 5
```

[Alex Farrant](https://github.com/Cloud-RF) September 2016

[Context Information Security Ltd](http://contextis.com)

