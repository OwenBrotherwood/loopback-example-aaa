[![Stories in Ready](https://badge.waffle.io/OwenBrotherwood/loopback-example-aaa.png?label=ready&title=Ready)](https://waffle.io/OwenBrotherwood/loopback-example-aaa)
# loopback-example-aaa

- A combination of loopback-example-access-control and loopback-example-passport
- Focus on MS ADFS / LDAP (MS AD) integration for the non-internet use case

WARNING: The package.json contains a forked loopback-component-passport

Use Case:
- use of boot directory for global AAA as starting point
- model AAA or ACL when understood

Authentication:
- Authenticate users via LDAP
- Only one User as Local: user of last resort for diagnostics if at all needed
- token in header contra url/cookie

Authorization:
- Roles from LDAP groups
- Pierres hint: Investigate Dynamic Roles 

Accounting:
- Log changes to models and make available to a Role

Note:
- It is presumed that Internet users would be authenticated/authorized by an OAuth system ...

Unkowns:
- many :)
- how would middleware be used in a global AAA that is required for all models

Play:
- At the moment, I have placed moved some  view specific things to boot/views.js
- Is it possible to define if Cookies and tokens are used in boot/authentication.js: http://docs.strongloop.com/display/public/LB/Making+authenticated+requests

General Doc:
- http://docs.strongloop.com/display/public/LB/Authentication%2C+authorization%2C+and+permissions
- http://docs.strongloop.com/display/public/LB/Defining+and+using+roles#Definingandusingroles-Dynamicroles
- http://apidocs.strongloop.com/loopback/#loopback-token

